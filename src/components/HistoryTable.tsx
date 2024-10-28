import React from 'react';
import { Download } from 'lucide-react';
import type { MetricsHistory } from '../types';
import { exportToCSV } from '../utils/helpers';

interface HistoryTableProps {
  history: MetricsHistory;
}

const headers = [
  { id: 'date', label: 'Date' },
  { id: 'productReviews', label: 'Product Reviews' },
  { id: 'creatorReviews', label: 'Creator Reviews' },
  { id: 'inboxConversations', label: 'Inbox Conversations' }
] as const;

export function HistoryTable({ history }: HistoryTableProps) {
  const handleExport = () => {
    exportToCSV(history);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">History</h3>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <Download size={18} />
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {history.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.productReviews}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.creatorReviews}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.inboxConversations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}