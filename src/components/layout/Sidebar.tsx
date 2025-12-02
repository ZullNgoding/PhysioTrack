import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { icon: 'group', label: 'Patients', href: '/patients' },
  { icon: 'calendar_month', label: 'Calendar', href: '/calendar' },
  { icon: 'analytics', label: 'Reports', href: '/reports' }, 
  { icon: 'exercise', label: 'Exercises', href: '/exercises' }, 
  { icon: 'chat', label: 'Messages', href: '/messages' },
  
];

export const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 h-screen sticky top-0 shrink-0">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Logo className="size-8" />
        <h2 className="text-xl font-bold leading-tight text-text-light dark:text-text-dark">PhysioTrack</h2>
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-gray-700 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="text-sm font-medium leading-normal">{item.label}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          {/* Settings Link */}
          <Link 
            href="/settings" 
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </Link>
          
          {/* Logout Link */}
          <Link 
            href="/login" 
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};