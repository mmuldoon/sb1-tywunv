export interface DailyMetrics {
  date: string;
  productReviews: number;
  creatorReviews: number;
  inboxCount: number;
}

export interface MetricsState {
  productReviews: number;
  creatorReviews: number;
  inboxCount: number;
}