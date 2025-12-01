'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { api } from '@/lib/api';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    try {
      if (isLogin) {
        // --- LOGIN FLOW ---
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          // NextAuth returns generic "CredentialsSignin" error often, but let's try to be specific if possible
          // In a real production app, you might want to parse the error code
          setError('Invalid credentials or email not verified.');
        } else {
          router.push('/dashboard');
        }
      } else {
        // --- REGISTER FLOW ---
        await api.post('/auth/register', {
            name,
            email,
            password,
            role: 'Patient' // Default role, or add a selector UI
        });
        setSuccess('Registration successful! Please check your email to verify your account.');
        setIsLogin(true); // Switch back to login
      }
    } catch (e: any) {
      console.error(e);
      // Try to extract message from backend error if available
      setError(e.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-border-light dark:border-border-dark">
        
        {/* Left: Hero (Hidden on mobile) */}
        <div className="hidden md:flex flex-col p-12 bg-gray-50 dark:bg-gray-800/50 justify-between">
           <div className="flex items-center gap-2">
              <Logo className="size-8" />
              <span className="text-xl font-bold text-text-light dark:text-text-dark">PhysioTrack</span>
           </div>
           <div>
              <h1 className="text-3xl font-black leading-tight mb-4 text-text-light dark:text-text-dark">
                {isLogin ? 'Welcome Back!' : 'Join PhysioTrack'}
              </h1>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                {isLogin 
                  ? 'Streamline your recovery journey with our advanced physiotherapy management tools.' 
                  : 'Create an account to start tracking your progress and connecting with therapists.'}
              </p>
           </div>
           <div className="text-sm text-text-muted-light">© 2024 PhysioTrack Inc.</div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col p-8 md:p-12 justify-center">
            <div className="flex w-full border-b border-border-light dark:border-border-dark mb-6">
                <button 
                    onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
                    className={`flex-1 pb-3 font-bold text-sm transition-colors ${isLogin ? 'border-b-2 border-primary text-primary' : 'text-text-muted-light hover:text-text-light'}`}
                >
                    Login
                </button>
                <button 
                    onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
                    className={`flex-1 pb-3 font-bold text-sm transition-colors ${!isLogin ? 'border-b-2 border-primary text-primary' : 'text-text-muted-light hover:text-text-light'}`}
                >
                    Register
                </button>
            </div>

            {error && <div className="bg-accent-red/10 text-accent-red p-3 rounded-lg mb-4 text-sm font-medium border border-accent-red/20">{error}</div>}
            {success && <div className="bg-accent-green/10 text-accent-green p-3 rounded-lg mb-4 text-sm font-medium border border-accent-green/20">{success}</div>}

            <button 
              type="button"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="flex items-center justify-center gap-3 w-full h-12 rounded-lg border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-gray-700 transition font-semibold mb-4 text-text-light dark:text-text-dark"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
            </button>
            
            <div className="relative text-center text-sm text-text-muted-light mb-4">
                <span className="bg-card-light dark:bg-card-dark px-2 relative z-10">OR</span>
                <div className="absolute top-1/2 w-full h-px bg-border-light dark:bg-border-dark"></div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-text-light dark:text-text-dark">Full Name</label>
                        <input name="name" type="text" required className="w-full px-4 h-12 rounded-lg border border-border-light bg-background-light dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none text-text-light dark:text-text-dark" placeholder="John Doe" />
                    </div>
                )}

                <div className="space-y-1">
                    <label className="text-sm font-medium text-text-light dark:text-text-dark">Email Address</label>
                    <input name="email" type="email" required className="w-full px-4 h-12 rounded-lg border border-border-light bg-background-light dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none text-text-light dark:text-text-dark" placeholder="you@example.com" />
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-text-light dark:text-text-dark">Password</label>
                    <input name="password" type="password" required className="w-full px-4 h-12 rounded-lg border border-border-light bg-background-light dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none text-text-light dark:text-text-dark" placeholder="••••••••" />
                </div>

                {isLogin && (
                    <div className="flex justify-end">
                        <a href="/forgot-password" class="text-sm font-semibold text-primary hover:underline">Forgot Password?</a>
                    </div>
                )}

                <button disabled={loading} type="submit" className="w-full h-12 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 mt-2 transition-colors disabled:opacity-70">
                    {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Create Account')}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}