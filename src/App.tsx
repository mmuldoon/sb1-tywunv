import React, { useEffect, useState } from 'react';
import { MetricsCard } from './components/MetricsCard';
import { HistoryTable } from './components/HistoryTable';
import { generateUniqueId } from './utils/helpers';
import type { DailyMetrics, MetricsHistory } from './types';

function App() {
  const [productReviews, setProductReviews] = useState(0);
  const [creatorReviews, setCreatorReviews] = useState(0);
  const [inboxConversations, setInboxConversations] = useState(0);
  const [history, setHistory] = useState<MetricsHistory>(() => {
    const saved = localStorage.getItem('metricsHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = history.find(entry => entry.date === today);

    if (!todayEntry) {
      const newEntry: DailyMetrics = {
        id: generateUniqueId(),
        date: today,
        productReviews,
        creatorReviews,
        inboxConversations
      };
      setHistory(prev => [...prev, newEntry]);
    } else {
      setHistory(prev =>
        prev.map(entry =>
          entry.date === today
            ? {
                ...entry,
                productReviews,
                creatorReviews,
                inboxConversations
              }
            : entry
        )
      );
    }
  }, [productReviews, creatorReviews, inboxConversations]);

  useEffect(() => {
    localStorage.setItem('metricsHistory', JSON.stringify(history));
  }, [history]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Superhive Review Tracker</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricsCard
            title="Product Reviews"
            value={productReviews}
            increment={10}
            onIncrement={() => setProductReviews(prev => prev + 10)}
            onDecrement={() => setProductReviews(prev => Math.max(0, prev - 10))}
          />
          
          <MetricsCard
            title="Creator Reviews"
            value={creatorReviews}
            increment={10}
            onIncrement={() => setCreatorReviews(prev => prev + 10)}
            onDecrement={() => setCreatorReviews(prev => Math.max(0, prev - 10))}
          />
          
          <MetricsCard
            title="Inbox Conversations"
            value={inboxConversations}
            increment={1}
            onIncrement={() => setInboxConversations(prev => prev + 1)}
            onDecrement={() => setInboxConversations(prev => Math.max(0, prev - 1))}
          />
        </div>

        <HistoryTable history={history} />
      </div>
    </div>
  );
}

export default App;