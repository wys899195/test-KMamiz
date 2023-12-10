import { TEndpointCohesion } from "./TServiceCohesion";
import { TServiceEndpointsConsumer } from "./TServiceEndpointCohesion";

export type TServiceTestAPI= {
  uniqueServiceName: string;
  name: string;
  dataCohesion: number; // SIDC
  usageCohesion: number; // SIUC
  totalInterfaceCohesion: number; // TSIC
  endpointCohesion: TEndpointCohesion[];
  totalEndpoints: number;
  consumers: TServiceEndpointsConsumer[];
  ais: number;
  ads: number;
  acs: number;
  
};
