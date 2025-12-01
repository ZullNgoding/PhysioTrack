import React from 'react';

const data = [
  { label: 'Low Back Pain', value: 70 },
  { label: 'Knee Injury', value: 85 },
  { label: 'Shoulder Impingement', value: 90 },
  { label: 'Ankle Sprain', value: 65 },
];

export const EffectivenessBarChart = () => {
  return (
    <div className="grid min-h-[200px] grid-flow-col gap-4 items-end justify-items-center px-3 pt-4">
      {data.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-2 h-full justify-end w-full">
          <div 
            className="w-full bg-primary/30 rounded-t-md hover:bg-primary/50 transition-colors" 
            style={{ height: `${item.value}%` }} 
          />
          <p className="text-[10px] sm:text-xs font-bold text-center text-text-muted-light dark:text-text-muted-dark leading-tight">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};