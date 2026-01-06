import React from 'react';
import { PracticeSummaryCard } from './components/PracticeSummaryCard';
import { mockPractices } from './data/mockPractices';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Practice Summary Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Key metrics for dental practices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPractices.map((practice) => (
            <PracticeSummaryCard
              key={practice.id}
              practice={practice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
