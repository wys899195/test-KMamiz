export type TStatistics= {
  servicesStatistics: TServiceStatistics[]
};

export type TServiceStatistics= {
  uniqueServiceName: string;
  name: string;
  latencyMean: number;
  serverErrorRate: number;
  requestErrorsRate: number;
};

