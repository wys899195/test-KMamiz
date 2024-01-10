import { TaggedGraphDataModel } from "../../entities/schema/TaggedGraphData";
import { TTaggedGraphData} from "../../entities/TTaggedGraphData";
import MongoOperator from "../../services/MongoOperator";
import Logger from "../../utils/Logger";
import { Cacheable } from "./Cacheable";

export class CTaggedGraphData extends Cacheable<TTaggedGraphData[]> {
  static readonly uniqueName = "TaggedGraphDatas";
  constructor(initData?: TTaggedGraphData[]) {
    super("TaggedGraphDatas", initData);
    this.setInit(async () => {
      this.setData(
        await MongoOperator.getInstance().findAll(TaggedGraphDataModel)
      );
    });
    this.setSync(async () => {
      const tagged = this.getData();
      const toDelete = await MongoOperator.getInstance().findAll(
        TaggedGraphDataModel
      );

      try {
        await MongoOperator.getInstance().insertMany(
          tagged,
          TaggedGraphDataModel
        );
        await MongoOperator.getInstance().delete(
          toDelete.map((t) => t._id!),
          TaggedGraphDataModel
        );
      } catch (ex) {
        Logger.error(`Error saving ${this.name}, skipping.`);
        Logger.verbose("", ex);
      }
    });
  }

  getData(tag?: string): TTaggedGraphData[] {
    const data = super.getData();
    if (!data) return [];
    if (!tag) return data;
    return data.filter((d) => d.tag === tag);
  }

  add(tagged: TTaggedGraphData) {
    Logger.info("add add add")
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
