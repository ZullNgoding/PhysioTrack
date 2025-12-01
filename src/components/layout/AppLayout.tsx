import React from 'react';
import { Sidebar } from './Sidebar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-light">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Top Header Placeholder - extract from HTML if needed */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border-light dark:border-border-dark bg-card-light/80 px-8 backdrop-blur-sm">
           {/* Search and Profile logic here */}
           <div className="font-semibold">Dr. Emily Carter</div>
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};