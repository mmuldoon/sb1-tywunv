import { useState, useEffect } from 'react';
import { DailyMetrics, MetricsState } from '../types/metrics';

const STORAGE_KEY = 'metrics-history';

export const useMetricsHistory = () => {
  const [history, setHistory] = useState<DailyMetrics[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const saveCurrentMetrics = (metrics: MetricsState) => {
    const today = new Date().toISOString().split('T')[0];
    const newMetrics: DailyMetrics = {
      date: today,
      ...metrics
    };

    setHistory(prevHistory => {
      const filtered = prevHistory.filter(item => item.date !== today);
      const updated = [...filtered, newMetrics];
      return updated.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  return { history, saveCurrentMetrics };
};