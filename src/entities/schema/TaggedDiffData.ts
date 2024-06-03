import { Schema, SchemaDefinitionProperty, model } from "mongoose";
import { TTaggedDiffData } from "../TTaggedDiffData";
import { TGraphData } from "../TGraphData";
import { TServiceCoupling } from "../TServiceCoupling";
import { TEndpointCohesion } from "../TServiceCohesion";
import { TServiceEndpointsConsumer } from "../TServiceEndpointCohesion";
import { TTotalServiceInterfaceCohesion } from "../TTotalServiceInterfaceCohesion";
import { TServiceInstability } from "../TServiceInstability";


const GraphDataSchema: SchemaDefinitionProperty<TGraphData> = {
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
}

const EndpointCohesionSchema: SchemaDefinitionProperty<TEndpointCohesion> = {
  aName: { type: String, required: true },
  bName: { type: String, required: true },
  score: { type: Number, required: true },
}

const ServiceEndpointsConsumerSchema: SchemaDefinitionProperty<TServiceEndpointsConsumer> = {
  uniqueServiceName: { type: String, required: true },
  consumes: { type: Number, required: true },
}

const TotalServiceInterfaceCohesionSchema: SchemaDefinitionProperty<TTotalServiceInterfaceCohesion> = {
  uniqueServiceName: { type: String, required: true },
  name: { type: String, required: true },
  dataCohesion: { type: Number, required: true }, // SIDC
  usageCohesion: { type: Number, required: true }, // SIUC
  totalInterfaceCohesion: { type: Number, required: true },// TSIC
  endpointCohesion: [EndpointCohesionSchema],
  totalEndpoints: { type: Number, required: true },
  consumers: [ServiceEndpointsConsumerSchema]
}

export const ServiceCouplingSchema: SchemaDefinitionProperty<TServiceCoupling> = {
  uniqueServiceName: { type: String, required: true },
  name: { type: String, required: true },
  ais: { type: Number, required: true },
  ads: { type: Number, required: true },
  acs: { type: Number, required: true },
}

export const ServiceInstabilitySchema: SchemaDefinitionProperty<TServiceInstability> = {
  uniqueServiceName: { type: String, required: true },
  name: { type: String, required: true },
  dependingBy: { type: Number, required: true },
  dependingOn: { type: Number, required: true },
  instability: { type: Number, required: true },
}


export const TaggedDiffDataSchema = new Schema<TTaggedDiffData>({
  tag: { type: String, required: true },
  time: { type: Number, required: true },
  graphData: GraphDataSchema,
  cohesionData: [TotalServiceInterfaceCohesionSchema],
  couplingData: [ServiceCouplingSchema],
  instabilityData: [ServiceInstabilitySchema]
});

export const TaggedDiffDataModel = model<TTaggedDiffData>(
  "TaggedDiffData",
  TaggedDiffDataSchema
);