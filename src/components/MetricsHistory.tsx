import React from 'react';
import { DailyMetrics } from '../types/metrics';

interface MetricsHistoryProps {
  history: DailyMetrics[];
}

export const MetricsHistory: React.FC<MetricsHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="text-gray-500 text-center py-4">
        No historical data available yet
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Reviews
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Creator Reviews
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inbox Messages
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {history.map((day, index) => (
            <tr key={day.date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {new Date(day.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {day.productReviews}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {day.creatorReviews}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {day.inboxCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};