import { TaggedDiffDataModel } from "../../entities/schema/TaggedDiffData";
import { TTaggedDiffData} from "../../entities/TTaggedDiffData";
import MongoOperator from "../../services/MongoOperator";
import Logger from "../../utils/Logger";
import { Cacheable } from "./Cacheable";

export class CTaggedDiffData extends Cacheable<TTaggedDiffData[]> {
  static readonly uniqueName = "TaggedDiffDatas";
  constructor(initData?: TTaggedDiffData[]) {
    super("TaggedDiffDatas", initData);
    this.setInit(async () => {
      this.setData(
        await MongoOperator.getInstance().findAll(TaggedDiffDataModel)
      );
    });
    this.setSync(async () => {
      const tagged = this.getData();
      const toDelete = await MongoOperator.getInstance().findAll(
        TaggedDiffDataModel
      );

      try {
        await MongoOperator.getInstance().insertMany(
          tagged,
          TaggedDiffDataModel
        );
        await MongoOperator.getInstance().delete(
          toDelete.map((t) => t._id!),
          TaggedDiffDataModel
        );
      } catch (ex) {
        Logger.error(`Error saving ${this.name}, skipping.`);
        Logger.verbose("", ex);
      }
    });
  }

  getData(tag?: string): TTaggedDiffData[] {
    const data = super.getData();
    if (!data) return [];
    if (!tag) return data;
    return data.filter((d) => d.tag === tag);
  }

  add(tagged: TTaggedDiffData) {
    const existing = this.getData(tagged.tag);
    if (existing.length > 0) return;
    tagged.time = Date.now();
    const data = this.getData();
    this.setData(data.concat(tagged));
  }

  delete(tag: string) {
    const data = this.getData();
    this.setData(
      data.filter((d) => d.tag !== tag)
    );
  }
}
