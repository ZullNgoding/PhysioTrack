import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export default function LandingPage() {
  return (
    <div className="font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-secondary dark:border-border-dark">
        <div className="flex items-center justify-between px-4 md:px-20 py-3">
            <div className="flex items-center gap-2">
                <Logo className="size-8" />
                <span className="font-bold text-lg">PhysioTrack</span>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="/login" className="font-medium hover:text-primary transition-colors">Login</Link>
                <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition">
                    Dashboard Demo
                </Link>
            </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 py-16 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <h1 className="text-5xl font-black leading-tight">Streamline Your Practice, Focus on Your Patients</h1>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">The all-in-one platform for modern physiotherapists. Manage patients, prescribe exercises, and track progress effortlessly.</p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold w-fit hover:bg-blue-600 transition">Get Started</button>
                </div>
                <div 
                    className="w-full lg:w-1/2 aspect-video bg-cover rounded-lg shadow-lg"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2hn3gdpvUgbNqZN0twUl4Okqrr8UHibhSzPuYwBhML4aPd8PZVpOkNXrf__1ZBsIEqYSCz9ZUFOltURM2W9C0J9rKF1JVS3PPmLKorwZ50fEnhNLcNVhgdJ7YXplQQ_RvgjzRsRtY00QZ4cvuAS35cyiYQlEqoOYGWu1Mfgmec_KpgpsktUT9WLEgoZVcva7vUVcHkb6TBNmiRLFRvSl25SV4r-JniHz5JNyq3gZnF6GOmI8Cm24Ct5vBrnFXt8rn0bx82YGv56M")' }}
                />
            </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-secondary dark:bg-black/20 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
                <h2 className="text-3xl font-bold">Simple Pricing</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    <PricingCard 
                        title="Solo" 
                        price="$29" 
                        features={['25 active patients', 'Exercise Library', 'Progress Tracking']} 
                    />
                    <PricingCard 
                        title="Growing Clinic" 
                        price="$79" 
                        highlight 
                        features={['5 Therapists', 'Unlimited Patients', 'Custom Branding']} 
                    />
                    <PricingCard 
                        title="Enterprise" 
                        price="Contact Us" 
                        features={['Unlimited', 'API Access', 'HIPAA Support']} 
                    />
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

const PricingCard = ({ title, price, features, highlight }: { title: string; price: string; features: string[]; highlight?: boolean }) => (
    <div className={`flex flex-col p-8 rounded-lg bg-card-light dark:bg-card-dark border ${highlight ? 'border-accent-orange border-2 relative' : 'border-border-light dark:border-border-dark'}`}>
        {highlight && <span className="absolute top-0 -translate-y-1/2 bg-accent-orange text-white px-3 py-1 text-xs font-bold rounded-full">POPULAR</span>}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-6 text-4xl font-black">{price}<span className="text-base font-normal text-text-muted-light">/mo</span></p>
        <ul className="mt-8 space-y-4 text-sm">
            {features.map((f: string) => (
                <li key={f} className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary">check_circle</span>{f}</li>
            ))}
        </ul>
        <button className={`mt-6 h-12 rounded-lg font-bold transition-colors ${highlight ? 'bg-accent-orange text-white hover:bg-orange-500' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>Choose Plan</button>
    </div>
);