export interface IDashboardDataResponse {
  totalAssigned: number;
  totalDone: number;
  totalRemaining: number;
}

export interface IDashboardDataRequest {
  date: string;
}
