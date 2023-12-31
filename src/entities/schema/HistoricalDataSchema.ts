import { Schema, model } from "mongoose";
import { THistoricalData } from "../THistoricalData";

export const HistoricalDataSchema = new Schema<THistoricalData>({
  date: { type: Date, required: true },
  services: [
    {
      uniqueServiceName: { type: String, required: true },
      date: { type: Date, required: true },
      service: { type: String, required: true },
      namespace: { type: String, required: true },
      version: { type: String, required: true },
      requests: { type: Number, required: true },
      serverErrors: { type: Number, required: true },
      requestErrors: { type: Number, required: true },
      risk: { type: Number },
      latencyMean: { type: Number, required: true },
      latencyCV: { type: Number, required: true },
      endpoints: [
        {
          uniqueServiceName: { type: String, required: true },
          uniqueEndpointName: { type: String, required: true },
          method: { type: String, required: true },
          requests: { type: Number, required: true },
          serverErrors: { type: Number, required: true },
          requestErrors: { type: Number, required: true },
          latencyMean: { type: Number, required: true },
          latencyCV: { type: Number, required: true },
        },
      ],
    },
  ],
});

export const HistoricalDataModel = model<THistoricalData>(
  "HistoricalData",
  HistoricalDataSchema
);
