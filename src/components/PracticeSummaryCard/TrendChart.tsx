import React from 'react';

type TrendChartProps = {
  data: number[];
};

const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-baseline gap-2">
      {data.map((val, idx) => {
        const height = ((val - min) / range) * 100;
        return (
          <div 
            key={idx}
            className="flex flex-col items-center justify-end h-16 flex-1"
          >
            <div 
              className="bg-blue-500 rounded-t w-full transition-all hover:bg-blue-600"
              style={{ height: `${Math.max(height, 15)}%` }}
              title={`Month ${idx + 1}: ${val} patients`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TrendChart;