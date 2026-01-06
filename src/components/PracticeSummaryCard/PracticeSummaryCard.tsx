import React from 'react';
import type { PracticeSummary } from '../../types/PracticeSummary';
import MetricCard from './MetricCard';
import StatusIndicator from './StatusIndicator';
import TrendChart from './TrendChart';
import Recommendations from './Recommendations';

type PracticeSummaryCardProps = {
  practice: PracticeSummary;
};

const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{practice.name}</h3>
        <p className="text-sm text-gray-600">{practice.city}, {practice.country}</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <MetricCard label="New Patients" value={practice.newPatientsThisMonth} />
          <MetricCard label="Requests" value={practice.appointmentRequests} />
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Conversion Rate</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-gray-900">{practice.conversionRate.toFixed(1)}%</p>
            <StatusIndicator conversionRate={practice.conversionRate} />
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">6-Month Trend</p>
          <TrendChart data={practice.monthlyTrend} />
        </div>

        <Recommendations conversionRate={practice.conversionRate} />
      </div>
    </div>
  );
};

export default PracticeSummaryCard;