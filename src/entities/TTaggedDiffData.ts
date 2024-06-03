import { Types } from "mongoose";
import { TGraphData } from "./TGraphData";
import { TServiceCoupling } from "./TServiceCoupling";
import { TTotalServiceInterfaceCohesion } from "./TTotalServiceInterfaceCohesion";
import { TServiceInstability } from "./TServiceInstability";
export type TTaggedDiffData = {
  _id?: Types.ObjectId;
  tag: string;
  time?: number;
  graphData:TGraphData;
  cohesionData:TTotalServiceInterfaceCohesion[];
  couplingData:TServiceCoupling[];
  instabilityData:TServiceInstability[];
};

// import { Types } from "mongoose";
// import { TGraphData } from "./TGraphData";
// import { TServiceCoupling } from "./TServiceCoupling";
// import { TTotalServiceInterfaceCohesion } from "./TTotalServiceInterfaceCohesion";
// import { TServiceInstability } from "./TServiceInstability";

// export type TTaggedDiffData = {
//   _id?: Types.ObjectId;
//   tag: string;
//   time?: number;
//   graphData:TGraphData;
//   couplingData:TServiceCoupling[];
//   cohesionData:TTotalServiceInterfaceCohesion[];
//   instabilityData:TServiceInstability[];
// };

