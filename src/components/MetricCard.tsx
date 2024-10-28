import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface CounterProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  onIncrement: () => void;
  onDecrement: () => void;
  step?: number;
}

export const MetricCard: React.FC<CounterProps> = ({
  title,
  count,
  icon,
  onIncrement,
  onDecrement,
  step = 1,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="text-blue-600">{icon}</div>
    </div>
    
    <div className="text-3xl font-bold text-gray-900">{count}</div>
    
    <div className="flex space-x-2">
      <button
        onClick={onDecrement}
        className="flex-1 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 rounded-lg py-2 transition-colors duration-200"
      >
        <Minus size={18} />
        <span className="ml-1">{step}</span>
      </button>
      <button
        onClick={onIncrement}
        className="flex-1 flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-600 rounded-lg py-2 transition-colors duration-200"
      >
        <Plus size={18} />
        <span className="ml-1">{step}</span>
      </button>
    </div>
  </div>
);