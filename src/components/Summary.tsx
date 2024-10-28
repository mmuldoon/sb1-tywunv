import React from 'react';
import { MetricsState } from '../types/metrics';

interface SummaryProps {
  metrics: MetricsState;
}

export const Summary: React.FC<SummaryProps> = ({ metrics }) => {
  const { productReviews, creatorReviews, inboxCount } = metrics;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
      <div className="space-y-2 text-gray-600">
        <p>Total Reviews: {productReviews + creatorReviews}</p>
        <p>Average Reviews per Type: {((productReviews + creatorReviews) / 2).toFixed(1)}</p>
        <p>Messages per Review: {(productReviews + creatorReviews) > 0 
          ? (inboxCount / (productReviews + creatorReviews)).toFixed(2) 
          : '0.00'}</p>
      </div>
    </div>
  );
};