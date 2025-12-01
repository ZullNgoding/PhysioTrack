'use client';

import React, { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Appointment, Patient } from '@/types';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [stats, setStats] = useState([
    { label: 'Total Active Patients', value: 0, icon: 'groups', alert: false },
    { label: 'Appointments This Week', value: 0, icon: 'calendar_month', alert: false },
    { label: 'Overdue Follow-ups', value: 0, icon: 'warning', alert: true },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appData, patData] = await Promise.all([
          api.get('/appointments'),
          api.get('/patients')
        ]);

        setAppointments(appData);
        setPatients(patData);

        // Calculate Stats
        const activePatients = patData.filter((p: Patient) => p.status === 'Active').length;
        const upcomingAppointments = appData.filter((a: Appointment) => new Date(a.date) > new Date()).length;

        setStats([
          { label: 'Total Active Patients', value: activePatients, icon: 'groups', alert: false },
          { label: 'Appointments This Week', value: upcomingAppointments, icon: 'calendar_month', alert: false },
          { label: 'Overdue Follow-ups', value: 3, icon: 'warning', alert: true }, // Mocked for demo
        ]);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <AppLayout><div className="p-8">Loading dashboard...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="flex flex-col xl:flex-row gap-8 h-full">
        
        {/* --- LEFT / MAIN COLUMN --- */}
        <div className="flex flex-1 flex-col gap-8 min-w-0">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">Good Morning, Dr. Carter</h1>
              <p className="text-text-muted-light dark:text-text-muted-dark">Here is your overview for today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm border border-border-light dark:border-border-dark">
                  <p className="text-base font-medium text-text-muted-light dark:text-text-muted-dark">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.alert ? 'text-accent-orange' : 'text-text-light dark:text-text-dark'}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* My Day at a Glance (Appointments) */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark">My Day at a Glance</h2>
              {appointments.length === 0 ? (
                <div className="p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark text-center text-text-muted-light">
                    No appointments scheduled for today.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {appointments.map((apt) => (
                    <div key={apt._id} className="flex items-center gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm border border-border-light dark:border-border-dark">
                      <div className="size-12 rounded-full bg-secondary dark:bg-gray-700 flex items-center justify-center font-bold text-primary text-lg overflow-hidden flex-shrink-0">
                          {apt.patientId?.avatar ? (
                            <img src={apt.patientId.avatar} alt="avatar" className="w-full h-full object-cover"/>
                          ) : (
                            apt.patientId?.name?.charAt(0) || '?'
                          )}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-semibold text-text-light dark:text-text-dark truncate">{apt.patientId?.name || 'Unknown'}</p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark truncate">
                          {new Date(apt.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {apt.type}
                        </p>
                      </div>
                      <button className="ml-auto text-text-muted-light dark:text-text-muted-dark hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Patient Progress Overview Table */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Patient Progress Overview</h2>
                <div className="overflow-x-auto rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-border-light dark:border-border-dark">
                  <table className="min-w-full divide-y divide-border-light dark:divide-border-dark text-sm">
                    <thead className="bg-background-light dark:bg-gray-800">
                      <tr>
                        {['Patient Name', 'Last Visit', 'Status', ''].map((h, i) => (
                            <th key={i} className="px-6 py-3 text-left font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                                {h}
                            </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                      {patients.slice(0, 4).map((patient) => (
                        <tr key={patient._id}>
                          <td className="px-6 py-4 font-medium text-text-light dark:text-text-dark">{patient.name}</td>
                          <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark">
                             {patient.lastVisit ? new Date(patient.lastVisit).toLocaleDateString() : 'N/A'}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                patient.status === 'Active' ? 'bg-accent-green/20 text-green-800 dark:text-accent-green' : 
                                patient.status === 'Inactive' ? 'bg-accent-orange/20 text-orange-800 dark:text-accent-orange' : 
                                'bg-gray-100 text-gray-800'
                            }`}>
                              {patient.status === 'Active' ? 'On Track' : patient.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:underline font-medium">View Profile</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
        </div>

        {/* --- RIGHT SIDEBAR (Calendar & Tasks) --- */}
        <aside className="hidden xl:flex w-80 flex-shrink-0 flex-col gap-8">
            
            {/* Mini Calendar */}
            <div className="rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm border border-border-light dark:border-border-dark">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-text-light dark:text-text-dark">October 2023</h3>
                    <div className="flex gap-2">
                        <button className="text-text-muted-light hover:text-primary"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                        <button className="text-text-muted-light hover:text-primary"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-text-muted-light dark:text-text-muted-dark font-medium">{d}</div>)}
                    {/* Mock Calendar Days */}
                    {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                        <div key={day} className={`relative py-1 ${day === 6 ? 'bg-primary text-white rounded-full font-bold' : ''}`}>
                            {day}
                            {(day === 2 || day === 4 || day === 10) && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-orange rounded-full"></span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Task List */}
            <div className="rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm border border-border-light dark:border-border-dark">
                <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">Task List</h3>
                <div className="flex flex-col gap-4">
                    {[
                        { id: 't1', text: 'Review notes for John S.', done: false },
                        { id: 't2', text: 'Sign off on Miller report', done: false },
                        { id: 't3', text: 'Prepare exercises for E. Davis', done: true },
                        { id: 't4', text: 'Order new resistance bands', done: false },
                    ].map(task => (
                        <div key={task.id} className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked={task.done} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label className={`text-sm ${task.done ? 'line-through text-text-muted-light' : 'text-text-light dark:text-text-dark'}`}>
                                {task.text}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
      </div>
    </AppLayout>
  );
}