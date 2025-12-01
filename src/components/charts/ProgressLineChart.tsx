import React, { useMemo } from 'react';

export const ProgressLineChart = () => {
  // Dynamically generate the last 6 months ending with the current month
  const months = useMemo(() => {
    const monthNames = [];
    const today = new Date();
    
    for (let i = 5; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      monthNames.push(d.toLocaleString('default', { month: 'short' }));
    }
    return monthNames;
  }, []);

  return (
    <div className="flex min-h-[200px] flex-1 flex-col gap-8 py-4">
      {/* Senior Dev Note: In production, replace this SVG with a library like Recharts.
         Example: <LineChart data={data}><Line type="monotone" dataKey="score" stroke="#4A90E2" /></LineChart> 
      */}
      <div className="relative w-full h-[150px] bg-background-light dark:bg-gray-800/50 rounded overflow-hidden">
        <svg viewBox="0 0 472 150" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineChartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          {/* Note: The path d is static for visual demo. To make the line 'realtime', you would need dynamic data points mapped to SVG coordinates. */}
          <path d="M0,109 Q36,21 72,41 T145,33 T217,61 T290,121 T363,1 T435,129 L472,25 V150 H0 Z" fill="url(#lineChartGradient)" />
          <path d="M0,109 Q36,21 72,41 T145,33 T217,61 T290,121 T363,1 T435,129 L472,25" fill="none" stroke="#4A90E2" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Dynamic Labels based on current time */}
      <div className="flex justify-between px-4 text-xs font-bold text-text-muted-light dark:text-text-muted-dark">
        {months.map((m, index) => <span key={index}>{m}</span>)}
      </div>
    </div>
  );
};