import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: number;
  increment: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function MetricsCard({ title, value, increment, onIncrement, onDecrement }: MetricsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex items-center justify-between">
        <button
          onClick={onDecrement}
          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
        >
          <Minus size={20} />
        </button>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <button
          onClick={onIncrement}
          className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}