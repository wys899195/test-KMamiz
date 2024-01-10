import { CCombinedRealtimeData } from "./CCombinedRealtimeData";
import { CEndpointDataType } from "./CEndpointDataType";
import { CEndpointDependencies } from "./CEndpointDependencies";
import { CLabeledEndpointDependencies } from "./CLabeledEndpointDependencies";
import { CLabelMapping } from "./CLabelMapping";
import { CLookBackRealtimeData } from "./CLookBackRealtimeData";
import { CReplicas } from "./CReplicas";
import { CTaggedInterfaces } from "./CTaggedInterfaces";
import { CTaggedSwaggers } from "./CTaggedSwaggers";
import { CTaggedGraphData } from "./CTaggedGraphData";
import { CUserDefinedLabel } from "./CUserDefinedLabel";

const classes = {
  [CCombinedRealtimeData.uniqueName]: CCombinedRealtimeData,
  [CEndpointDependencies.uniqueName]: CEndpointDependencies,
  [CLabeledEndpointDependencies.uniqueName]: CLabeledEndpointDependencies,
  [CEndpointDataType.uniqueName]: CEndpointDataType,
  [CReplicas.uniqueName]: CReplicas,
  [CLabelMapping.uniqueName]: CLabelMapping,
  [CUserDefinedLabel.uniqueName]: CUserDefinedLabel,
  [CTaggedInterfaces.uniqueName]: CTaggedInterfaces,
  [CTaggedSwaggers.uniqueName]: CTaggedSwaggers,
  [CTaggedGraphData.uniqueName]: CTaggedGraphData,
  [CLookBackRealtimeData.uniqueName]: CLookBackRealtimeData,
};

const names = [
  CCombinedRealtimeData.uniqueName,
  CEndpointDependencies.uniqueName,
  CLabeledEndpointDependencies.uniqueName,
  CEndpointDataType.uniqueName,
  CReplicas.uniqueName,
  CLabelMapping.uniqueName,
  CUserDefinedLabel.uniqueName,
  CTaggedInterfaces.uniqueName,
  CTaggedSwaggers.uniqueName,
  CTaggedGraphData.uniqueName,
  CLookBackRealtimeData.uniqueName,
] as const;

export type CacheableNames = typeof names[number];
export { classes, names as nameList };
