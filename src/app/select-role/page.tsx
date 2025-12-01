import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export default function SelectRolePage() {
  return (
    <div className="flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark">
        <div className="mx-auto max-w-5xl py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="size-8" />
            <h2 className="text-xl font-bold">PhysioTrack</h2>
          </div>
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-gray-700 border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">person</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-light dark:text-text-dark pb-2 pt-6">
            Welcome, Alex!
          </h1>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
            How will you be using the platform today?
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Patient Card */}
            <div className="group flex flex-col items-center p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 text-primary p-5 rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-5xl">personal_injury</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">I am a Patient</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-center max-w-xs">
                Track your progress, view your exercise plan, and communicate with your therapist.
              </p>
              <Link 
                href="/patients/dashboard" 
                className="w-full mt-auto bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-card-dark transition-all text-center"
              >
                Go to Patient Dashboard
              </Link>
            </div>

            {/* Doctor Card */}
            <div className="group flex flex-col items-center p-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-lg hover:border-accent-green transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-accent-green/10 text-accent-green p-5 rounded-full mb-6 group-hover:bg-accent-green group-hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-5xl">stethoscope</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">I am a Doctor</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-center max-w-xs">
                Manage your patients, create treatment plans, and monitor their recovery.
              </p>
              <Link 
                href="/dashboard" 
                className="w-full mt-auto bg-accent-green text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-green/90 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 dark:focus:ring-offset-card-dark transition-all text-center"
              >
                Go to Doctor Dashboard
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}