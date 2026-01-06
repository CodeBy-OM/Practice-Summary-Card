import React from 'react';

type RecommendationsProps = {
  conversionRate: number;
};

const Recommendations: React.FC<RecommendationsProps> = ({ conversionRate }) => {
  return (
    <div className="pt-4 border-t border-gray-100">
      <p className="text-xs font-medium text-gray-700 mb-2">Recommendations</p>
      <ul className="space-y-1 text-xs text-gray-600">
        {conversionRate < 20 && (
          <li>• Consider increasing ad budget on top-performing channels.</li>
        )}
        <li>• Optimize mobile landing page layout.</li>
      </ul>
    </div>
  );
};

export default Recommendations;