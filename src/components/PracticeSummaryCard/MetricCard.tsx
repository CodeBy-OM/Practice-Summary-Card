import React from 'react';

type MetricCardProps = {
  label: string;
  value: string | number;
};

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</p>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

export default MetricCard;