export type TStatistics= {
  servicesStatistics: TServiceStatistics[]
};

export type TServiceStatistics= {
  uniqueServiceName: string;
  latencyMean: number;
  serverErrorRate: number;
  requestErrorsRate: number;
};

