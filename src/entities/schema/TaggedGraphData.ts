import { Schema, model } from "mongoose";
import { TTaggedGraphData } from "../TTaggedGraphData";

export const TaggedGraphDataSchema = new Schema<TTaggedGraphData>({
  tag: { type: String, required: true },
  time: { type: Number, required: true },
  graphData: {
    nodes: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        group: { type: String, required: true },
        dependencies: [{ type: String, required: true }],
        linkInBetween: [
          {
            source: { type: String, required: true },
            target: { type: String, required: true },
          }
        ],
      }
    ],
    links: [
      {
        source: { type: String, required: true },
        target: { type: String, required: true },
      }
    ],
  },
});

export const TaggedGraphDataModel = model<TTaggedGraphData>(
  "TaggedGraphData",
  TaggedGraphDataSchema
);
