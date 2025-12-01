import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { ProgressLineChart } from '@/components/charts/ProgressLineChart';
import { EffectivenessBarChart } from '@/components/charts/EffectivenessBarChart';

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">Clinic Performance</h1>
          <div className="relative">
            <select className="appearance-none bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg pl-4 pr-10 py-2 text-sm focus:ring-2 focus:ring-primary outline-none">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-muted-light pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Active Patients" value="124" trend="+5%" trendUp />
          <StatCard title="Patient Satisfaction" value="4.8/5" trend="+0.1" trendUp />
          <StatCard title="Avg. Treatment Duration" value="6 weeks" trend="-3%" trendUp={false} />
          <StatCard title="New Patients" value="15" trend="+8%" trendUp />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
            <div className="mb-4">
                <h3 className="font-medium text-text-muted-light dark:text-text-muted-dark">Patient Progress</h3>
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-text-light dark:text-text-dark">Pain Score Reduction</span>
                    <span className="text-accent-green text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">arrow_downward</span> 15%</span>
                </div>
            </div>
            <ProgressLineChart />
          </div>

          <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
            <div className="mb-4">
                <h3 className="font-medium text-text-muted-light dark:text-text-muted-dark">Effectiveness</h3>
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-text-light dark:text-text-dark">Success Rate</span>
                    <span className="text-accent-green text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">arrow_upward</span> 7%</span>
                </div>
            </div>
            <EffectivenessBarChart />
          </div>
        </div>

        {/* Detailed Insights & Table */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            
            {/* Donut Chart (Adherence) */}
            <div className="xl:col-span-2 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark flex flex-col items-center justify-center">
                <h3 className="font-bold text-lg mb-4 self-start">Home Exercise Adherence</h3>
                <div className="relative size-48">
                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                        <path className="text-border-light dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-accent-green" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-text-light dark:text-text-dark">85%</span>
                        <span className="text-sm text-text-muted-light">Compliant</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="xl:col-span-3 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden">
                <div className="p-6 border-b border-border-light dark:border-border-dark">
                    <h3 className="font-bold text-lg">Patients Needing Follow-Up</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background-light dark:bg-gray-800 text-text-muted-light">
                            <tr>
                                <th className="px-6 py-3 font-medium">Patient</th>
                                <th className="px-6 py-3 font-medium">Last Visit</th>
                                <th className="px-6 py-3 font-medium">Progress</th>
                                <th className="px-6 py-3 font-medium">Adherence</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {[
                                { name: 'John Doe', visit: '2 days ago', status: 'Stagnant', alert: true, adherence: '45%' },
                                { name: 'Jane Smith', visit: '5 days ago', status: 'Improving', alert: false, adherence: '20%' },
                                { name: 'Michael Johnson', visit: '1 week ago', status: 'Stagnant', alert: true, adherence: '55%' },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium">{row.name}</td>
                                    <td className="px-6 py-4 text-text-muted-light">{row.visit}</td>
                                    <td className={`px-6 py-4 font-medium ${row.alert ? 'text-accent-orange' : 'text-accent-green'}`}>{row.status}</td>
                                    <td className="px-6 py-4 text-text-muted-light">{row.adherence}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      </div>
    </AppLayout>
  );
}

const StatCard = ({ title, value, trend, trendUp }: any) => (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
        <p className="font-medium text-text-muted-light dark:text-text-muted-dark">{title}</p>
        <p className="text-3xl font-bold text-text-light dark:text-text-dark">{value}</p>
        <p className={`text-sm font-bold flex items-center gap-1 ${trendUp ? 'text-accent-green' : 'text-accent-orange'}`}>
            <span className="material-symbols-outlined text-base">{trendUp ? 'arrow_upward' : 'arrow_downward'}</span>
            {trend}
        </p>
    </div>
);