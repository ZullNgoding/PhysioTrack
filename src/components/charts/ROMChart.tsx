import React from 'react';

export const ROMChart = () => {
  return (
    <div className="flex min-h-[180px] flex-1 flex-col py-4">
      <div className="grid h-full grid-flow-col gap-4 grid-rows-[1fr_auto] items-end justify-items-center px-3">
        {/* Simplified Bar Chart logic */}
        {[60, 70, 85].map((height, idx) => (
            <div key={idx} className={`w-full rounded-t-lg ${idx === 2 ? 'bg-accent-green' : 'bg-accent-green/30'}`} style={{ height: `${height}%` }}></div>
        ))}
        
        {['Jun', 'Jul', 'Aug'].map((label) => (
            <p key={label} className="text-text-muted-light dark:text-text-muted-dark text-xs font-bold">{label}</p>
        ))}
      </div>
    </div>
  );
};