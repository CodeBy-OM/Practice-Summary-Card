export const getStatusColor = (conversionRate: number): string => {
  if (conversionRate >= 20) return 'text-green-600';
  if (conversionRate < 10) return 'text-red-600';
  return 'text-gray-600';
};

export const getStatusLabel = (conversionRate: number): string => {
  if (conversionRate >= 20) return 'High Performer';
  if (conversionRate < 10) return 'At Risk';
  return 'Stable';
};