'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';

// Separated component to use useSearchParams
function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link.');
      return;
    }

    // Call backend to verify
    api.post('/auth/verify-email', { token })
      .then(() => {
        setStatus('success');
        setMessage('Email verified successfully! You can now log in.');
      })
      .catch((err: any) => {
        setStatus('error');
        setMessage(err.message || 'Verification failed. Link may be expired.');
      });
  }, [token]);

  return (
    <div className="text-center max-w-md mx-auto">
       {status === 'loading' && (
         <div className="flex flex-col items-center">
            <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Verifying your email...</h2>
         </div>
       )}
       
       {status === 'success' && (
         <div className="flex flex-col items-center">
            <div className="size-16 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined !text-4xl">check_circle</span>
            </div>
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">Verified!</h2>
            <p className="text-text-muted-light mb-6">{message}</p>
            <Link href="/login" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition">
                Go to Login
            </Link>
         </div>
       )}

       {status === 'error' && (
         <div className="flex flex-col items-center">
            <div className="size-16 bg-accent-red/10 text-accent-red rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined !text-4xl">error</span>
            </div>
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">Verification Failed</h2>
            <p className="text-text-muted-light mb-6">{message}</p>
            <Link href="/login" className="text-primary font-bold hover:underline">
                Back to Login
            </Link>
         </div>
       )}
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-4 font-display">
      <div className="w-full max-w-lg bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 border border-border-light dark:border-border-dark">
         <div className="flex justify-center mb-8">
             <div className="flex items-center gap-2">
                 <Logo className="size-8" />
                 <span className="text-xl font-bold text-text-light dark:text-text-dark">PhysioTrack</span>
             </div>
         </div>
         <Suspense fallback={<div>Loading...</div>}>
            <VerifyContent />
         </Suspense>
      </div>
    </div>
  );
}