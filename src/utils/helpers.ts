export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const exportToCSV = (history: any[]) => {
  const headers = ['Date', 'Product Reviews', 'Creator Reviews', 'Inbox Conversations'];
  const rows = history.map(entry => [
    new Date(entry.date).toLocaleDateString(),
    entry.productReviews,
    entry.creatorReviews,
    entry.inboxConversations
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `superhive-metrics-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};