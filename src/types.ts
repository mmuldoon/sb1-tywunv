export interface DailyMetrics {
  id: string;
  date: string;
  productReviews: number;
  creatorReviews: number;
  inboxConversations: number;
}

export type MetricsHistory = DailyMetrics[];