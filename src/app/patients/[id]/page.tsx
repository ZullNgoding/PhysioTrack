import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PainLevelChart } from '@/components/charts/PainLevelChart';
import { ROMChart } from '@/components/charts/ROMChart';
import { Patient } from '@/types';

// Mock Data
const patientMock: Patient = {
  id: "P738-01",
  name: "John Smith",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6HHchEnBV5e2ydKhI9IZODBxPrumoL-vwl5gapSfpNJWDEobdr4j6Z6Uxd-0xJ1v8XiKZRIvHkHdvGY4ZhkL-ltjHHQ7whLTA9zUs9pPyCSGVX9i4WuQB58mdHZqpEkXC17Y0_5pZ58sUjFG19EVZD94ZT750FRKkB06MmDtFe7kr-V6vMJcPfI2we0OzUwkkuXgODNjb8htU9LkdbL_lek8qD_WKhepBWcOHK78MUzKSYTDIDbmDmNPdznpbwHcvPf6sz3K7uMM",
  age: 45,
  diagnosis: "Chronic Lower Back Pain",
  status: "Active"
};

export default function PatientDetailsPage({ params }: { params: { id: string } }) {
  // In a real app: const patient = await fetchPatient(params.id);
  const patient = patientMock;

  return (
    <AppLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        
        {/* Header Card */}
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-background-light dark:border-background-dark"
                        style={{ backgroundImage: `url("${patient.avatar}")` }}
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
                            {patient.name} <span className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal">({patient.id})</span>
                        </h1>
                        <p className="text-text-muted-light dark:text-text-muted-dark mt-1">Age: {patient.age} | Diagnosis: {patient.diagnosis}</p>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                            </span>
                            <span className="text-accent-green font-medium">{patient.status}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button className="h-10 px-4 rounded-lg border border-border-light dark:border-border-dark font-bold hover:bg-background-light dark:hover:bg-gray-800 transition-colors dark:text-text-dark">
                        Schedule Appointment
                    </button>
                    <button className="h-10 px-4 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-sm">
                        Upload Document
                    </button>
                </div>
            </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border-light dark:border-border-dark overflow-x-auto">
            <nav className="flex gap-8 min-w-max">
                {['Overview', 'Medical History', 'Treatment Plan', 'Progress Notes', 'Documents'].map((tab, i) => (
                    <button key={tab} className={`pb-3 pt-4 border-b-[3px] font-bold text-sm transition-colors ${i === 3 ? 'border-primary text-primary' : 'border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'}`}>
                        {tab}
                    </button>
                ))}
            </nav>
        </div>

        <h2 className="text-xl font-bold pt-4 text-text-light dark:text-text-dark">Progress Tracking</h2>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pain Chart */}
            <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium text-text-light dark:text-text-dark">Pain Levels (VAS)</p>
                        <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-1">3/10</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-accent-red/10 px-2 py-1 rounded text-accent-red font-medium">
                        <span className="material-symbols-outlined text-base">arrow_downward</span> -20%
                    </div>
                </div>
                <PainLevelChart />
            </div>

            {/* ROM Chart */}
            <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium text-text-light dark:text-text-dark">Range of Motion (Lumbar)</p>
                        <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-1">45°</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-accent-green/10 px-2 py-1 rounded text-accent-green font-medium">
                        <span className="material-symbols-outlined text-base">arrow_upward</span> +15%
                    </div>
                </div>
                <ROMChart />
            </div>
        </div>
      </div>
    </AppLayout>
  );
}