import React from 'react';
import { Download } from 'lucide-react';
import { exportToCsv } from '../utils/helpers';
import type { MetricsHistory } from '../types';

interface ExportButtonProps {
  data: MetricsHistory;
  filename?: string;
}

export function ExportButton({ data, filename = 'metrics-history.csv' }: ExportButtonProps) {
  const handleExport = () => {
    exportToCsv(data, filename);
  };

  return (
    <button
      onClick={handleExport}
      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
    >
      <Download size={18} className="mr-2" />
      Export CSV
    </button>
  );
}