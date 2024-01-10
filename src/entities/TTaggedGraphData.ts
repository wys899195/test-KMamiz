import { Types } from "mongoose";
import { TGraphData } from "./TGraphData";

export type TTaggedGraphData = {
  _id?: Types.ObjectId;
  tag: string;
  time?: number;
  graphData:TGraphData;
};