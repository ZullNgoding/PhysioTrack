'use client';

import React, { useState, useMemo } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

// Shared type for this page
interface CalendarEvent {
  id: string;
  patientName: string;
  time: string;
  type: string;
  color: 'blue' | 'green' | 'red';
  status: string;
  dayOffset: number; // 0 = Monday, 1 = Tuesday, etc. 
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- Date Logic Helpers ---

  const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay(); 
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const weekDays = useMemo(() => {
    const start = getStartOfWeek(currentDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
  }, [currentDate]);

  const headerTitle = weekDays[0].toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Navigation Handlers
  const prevWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 7);
    setCurrentDate(d);
  };

  const nextWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 7);
    setCurrentDate(d);
  };

  const goToToday = () => setCurrentDate(new Date());

  // Check if a specific date is "Today"
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // --- Mock Appointments (Dynamic) ---
  // In a real app, you would fetch these from API based on the start/end dates of the view
  const getAppointmentsForDay = (dayIndex: number) => {
    // Static demo data mapped to days of the week (0 = Mon, 6 = Sun)
    const demoEvents: CalendarEvent[] = [
      { id: '1', dayOffset: 0, patientName: 'Liam Johnson', time: '9:00 - 9:45 AM', type: 'Initial Consultation', color: 'blue', status: 'Scheduled' },
      { id: '2', dayOffset: 0, patientName: 'Ava Williams', time: '11:00 - 11:30 AM', type: 'Follow-up', color: 'green', status: 'Confirmed' },
      { id: '3', dayOffset: 2, patientName: 'Noah Brown', time: '10:00 - 10:45 AM', type: 'Initial Consultation', color: 'blue', status: 'Scheduled' },
      { id: '4', dayOffset: 4, patientName: 'Mason Davis', time: '9:30 - 10:15 AM', type: 'Initial Consultation', color: 'blue', status: 'Scheduled' },
      { id: '5', dayOffset: 4, patientName: 'Isabella R.', time: '11:00 - 11:30 AM', type: 'Follow-up', color: 'red', status: 'Cancelled' },
    ];

    return demoEvents.filter(e => e.dayOffset === dayIndex);
  };

  return (
    <AppLayout>
       <div className="mx-auto max-w-7xl h-[calc(100vh-8rem)] flex flex-col">
         {/* Page Header */}
         <div className="flex flex-wrap justify-between items-center mb-6 gap-4 shrink-0">
            <div>
              <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">Calendar</h1>
              <p className="text-text-muted-light dark:text-text-muted-dark">Schedule and manage patient appointments.</p>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-card-light dark:bg-card-dark p-1 rounded-lg border border-border-light dark:border-border-dark shadow-sm">
                    <button onClick={prevWeek} className="p-1.5 rounded hover:bg-background-light dark:hover:bg-gray-700 text-text-muted-light dark:text-text-muted-dark transition-colors">
                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                    </button>
                    <button onClick={goToToday} className="text-sm font-bold px-3 py-1.5 hover:bg-background-light dark:hover:bg-gray-700 rounded transition-colors">
                        Today
                    </button>
                    <button onClick={nextWeek} className="p-1.5 rounded hover:bg-background-light dark:hover:bg-gray-700 text-text-muted-light dark:text-text-muted-dark transition-colors">
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </button>
                </div>
                
                <span className="text-lg font-bold text-text-light dark:text-text-dark min-w-[140px] text-center">
                    {headerTitle}
                </span>

                <div className="hidden sm:flex bg-background-light dark:bg-background-dark rounded-lg p-1 border border-border-light dark:border-border-dark">
                    {['Day', 'Week', 'Month'].map(view => (
                        <button key={view} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'Week' ? 'bg-card-light dark:bg-card-dark shadow text-text-light dark:text-text-dark' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}>
                            {view}
                        </button>
                    ))}
                </div>
            </div>
         </div>

         {/* Calendar Grid */}
         <div className="flex-1 grid grid-cols-7 border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm min-h-0">
            {/* Headers */}
            {weekDays.map((date, i) => {
                const isCurrentDay = isToday(date);
                return (
                    <div key={i} className={`flex flex-col border-b border-r border-border-light dark:border-border-dark p-3 text-center last:border-r-0 ${isCurrentDay ? 'bg-primary/5' : ''}`}>
                        <span className={`text-xs font-bold uppercase mb-1 ${isCurrentDay ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${isCurrentDay ? 'bg-primary text-white' : 'text-text-light dark:text-text-dark'}`}>
                            {date.getDate()}
                        </div>
                    </div>
                );
            })}

            {/* Grid Body - Columns */}
            {weekDays.map((date, colIndex) => {
                const isCurrentDay = isToday(date);
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                const dayAppointments = getAppointmentsForDay(colIndex);

                return (
                    <div key={colIndex} className={`relative p-2 space-y-2 border-r border-border-light dark:border-border-dark last:border-r-0 overflow-y-auto ${isCurrentDay ? 'bg-primary/5' : (isWeekend ? 'bg-background-light/50 dark:bg-background-dark/50' : '')}`}>
                        
                        {dayAppointments.length > 0 ? (
                            dayAppointments.map((appt) => (
                                <AppointmentCard key={appt.id} {...appt} />
                            ))
                        ) : (
                            isWeekend && (
                                <div className="flex h-full items-center justify-center opacity-30">
                                    <span className="text-xs font-medium uppercase tracking-widest rotate-90 whitespace-nowrap">No Appts</span>
                                </div>
                            )
                        )}

                        {/* Current Time Indicator */}
                        {isCurrentDay && (
                            <div className="absolute left-0 right-0 border-t-2 border-red-400 z-10 pointer-events-none" style={{ top: '40%' }}>
                                <div className="absolute -top-1.5 -left-1 w-3 h-3 bg-red-400 rounded-full"></div>
                            </div>
                        )}
                    </div>
                );
            })}
         </div>
       </div>
    </AppLayout>
  );
}

const AppointmentCard = ({ patientName, time, type, color, status }: CalendarEvent) => {
    const colors = {
        blue: "bg-blue-100 dark:bg-blue-900/30 border-blue-400 text-blue-800 dark:text-blue-100",
        green: "bg-green-100 dark:bg-green-900/30 border-green-400 text-green-800 dark:text-green-100",
        red: "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-100 opacity-75",
    };
    
    return (
        <div className={`cursor-pointer rounded-lg p-2.5 border-l-[3px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${colors[color]}`}>
            <p className="text-xs font-bold truncate">{patientName}</p>
            <div className="flex items-center gap-1 mt-1 text-[10px] opacity-80">
                <span className="material-symbols-outlined text-[10px]">schedule</span>
                {time}
            </div>
            <p className="mt-1.5 text-[10px] uppercase tracking-wide font-bold opacity-90 flex justify-between">
                {type}
                {status === 'Cancelled' && <span className="text-red-600 dark:text-red-300">✕</span>}
            </p>
        </div>
    );
};