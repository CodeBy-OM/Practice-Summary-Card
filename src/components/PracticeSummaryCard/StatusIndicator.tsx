import React from 'react';
import { getStatusColor, getStatusLabel } from '../../utils/status';

type StatusIndicatorProps = {
  conversionRate: number;
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ conversionRate }) => {
  return (
    <span className={`text-sm font-medium ${getStatusColor(conversionRate)}`}>
      {getStatusLabel(conversionRate)}
    </span>
  );
};

export default StatusIndicator;