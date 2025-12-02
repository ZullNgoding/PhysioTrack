import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';

export default function LandingPage() {
  return (
    <div className="font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="text-primary-green">
                    <Logo className="size-8" />
                </div>
                <span className="font-bold text-xl tracking-tight text-text-light dark:text-text-dark">PhysioTrack</span>
            </div>
            
            <nav className="hidden md:flex gap-8 font-medium text-sm text-text-muted-light dark:text-text-muted-dark">
                <Link href="#features" className="hover:text-primary-green transition-colors">Features</Link>
                <Link href="#pricing" className="hover:text-primary-green transition-colors">Pricing</Link>
                <Link href="#about" className="hover:text-primary-green transition-colors">About Us</Link>
            </nav>

            <div className="flex gap-4 items-center">
                <Link href="/login" className="font-bold text-sm text-text-light dark:text-text-dark hover:text-primary-green transition-colors">Login</Link>
                <Link href="/select-role" className="bg-primary-green text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition shadow-sm">
                    Sign Up for Free
                </Link>
            </div>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="px-4 py-16 lg:py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-light dark:text-text-dark">
                        Streamline Your Practice, Focus on Your Patients
                    </h1>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        The all-in-one platform for modern physiotherapists. Manage patients, prescribe exercises, and track progress effortlessly.
                    </p>
                    <div className="pt-2">
                        <Link href="/select-role" className="bg-primary-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-md inline-block">
                            Get Started for Free
                        </Link>
                    </div>
                </div>
                
                <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden bg-gray-200">
                    <Image 
                        src="/landingpage.png" 
                        alt="Physiotherapist working with patient"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="bg-secondary dark:bg-card-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">Everything You Need to Elevate Patient Care</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">Our platform is designed to simplify your workflow, so you can dedicate more time to what truly matters—your patients' recovery.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon="groups" 
                        title="Effortless Patient Management" 
                        desc="Keep all patient records, notes, and schedules organized and accessible in one secure place." 
                    />
                    <FeatureCard 
                        icon="assignment" 
                        title="Custom Exercise Prescription" 
                        desc="Create and assign personalized exercise programs with video guides from our extensive library." 
                    />
                    <FeatureCard 
                        icon="show_chart" 
                        title="Real-Time Progress Tracking" 
                        desc="Monitor patient adherence and recovery progress with intuitive charts and reports." 
                    />
                </div>
            </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <h4 className="text-center text-sm font-bold tracking-wider text-text-muted-light uppercase mb-12">Trusted by Leading Physiotherapists</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard 
                        name="Dr. Emily Carter"
                        role="Physiotherapist"
                        img="1"
                        quote="This platform has revolutionized how I manage my caseload. I'm saving hours every week!"
                    />
                    <TestimonialCard 
                        name="David Chen, PT"
                        role="Sports Therapist"
                        img="2"
                        quote="The progress tracking features are a game-changer for patient engagement and motivation."
                    />
                    <TestimonialCard 
                        name="Sarah Jenkins"
                        role="Clinic Owner"
                        img="3"
                        quote="Finally, a tool that's as professional and dedicated as we are. Highly recommended for any clinic."
                    />
                </div>
            </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="bg-secondary dark:bg-card-dark py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-text-muted-light">Choose the plan that's right for you. No hidden fees, ever.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    <PricingCard 
                        title="Solo Practitioner" 
                        desc="For individual therapists getting started."
                        price="$29" 
                        features={['25 active patients', 'Full exercise library access', 'Progress tracking', 'Email support']} 
                    />
                    <PricingCard 
                        title="Growing Clinic" 
                        desc="For clinics looking to scale their practice."
                        price="$79" 
                        highlight 
                        features={['Up to 5 therapists', 'Unlimited patients', 'Custom branding', 'Advanced reporting', 'Priority support']} 
                    />
                    <PricingCard 
                        title="Enterprise" 
                        desc="For large organizations and hospitals."
                        price="Contact Us" 
                        features={['Unlimited therapists', 'Dedicated account manager', 'HIPAA compliance support', 'API access & integrations']} 
                    />
                </div>
            </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-24 px-4 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark">
                    Ready to transform your physiotherapy practice?
                </h2>
                <p className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl">
                    Join hundreds of therapists who are saving time, improving patient outcomes, and growing their business with PhysioTrack.
                </p>
                <Link href="/select-role" className="bg-primary-green text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg mt-4">
                    Get Started Today
                </Link>
            </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-card-light dark:bg-card-dark py-12 border-t border-border-light dark:border-border-dark">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4 text-primary-green">
                        <Logo className="size-6" />
                        <span className="font-bold text-lg text-text-light dark:text-text-dark">PhysioTrack</span>
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark max-w-xs">The modern way to manage your physiotherapy practice. Built for professionals, by professionals.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-text-light dark:text-text-dark">Links</h4>
                    <Link href="#" className="text-text-muted-light hover:text-primary-green">About Us</Link>
                    <Link href="#" className="text-text-muted-light hover:text-primary-green">Pricing</Link>
                    <Link href="#" className="text-text-muted-light hover:text-primary-green">Privacy Policy</Link>
                    <Link href="#" className="text-text-muted-light hover:text-primary-green">Terms of Service</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-text-light dark:text-text-dark">Contact</h4>
                    <p className="text-text-muted-light">contact@physiotrack.com</p>
                    <div className="flex gap-4">
                        <a href="#" className="text-text-muted-light hover:text-primary-green">Twitter</a>
                        <a href="#" className="text-text-muted-light hover:text-primary-green">LinkedIn</a>
                        <a href="#" className="text-text-muted-light hover:text-primary-green">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center text-xs text-text-muted-light">
                <p>© 2024 PhysioTrack Inc. All rights reserved.</p>
            </div>
        </footer>

      </main>
    </div>
  );
}


const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-background-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
        <div className="text-primary-green">
            <span className="material-symbols-outlined !text-4xl">{icon}</span>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">{title}</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TestimonialCard = ({ name, role, quote, img }: { name: string, role: string, quote: string, img: string }) => (
    <div className="flex flex-col items-center text-center gap-4 p-6">
        <div className="size-20 rounded-full bg-cover bg-center shadow-inner" style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/${img}")` }}></div>
        <div>
            <p className="font-bold text-lg text-text-light dark:text-text-dark">{name}</p>
            <p className="text-sm text-text-muted-light uppercase tracking-wide">{role}</p>
        </div>
        <p className="text-text-muted-light dark:text-text-muted-dark italic">"{quote}"</p>
    </div>
);

const PricingCard = ({ title, desc, price, features, highlight }: { title: string; desc: string; price: string; features: string[]; highlight?: boolean }) => (
    <div className={`flex flex-col p-8 rounded-xl bg-card-light dark:bg-card-dark border ${highlight ? 'border-accent-orange border-2 relative shadow-xl' : 'border-border-light dark:border-border-dark shadow-sm'}`}>
        {highlight && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white px-4 py-1 text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span>}
        
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{title}</h3>
        <p className="text-text-muted-light text-sm mt-2 mb-6">{desc}</p>
        
        <p className="text-4xl font-black text-text-light dark:text-text-dark mb-8">{price}<span className="text-base font-medium text-text-muted-light">/mo</span></p>
        
        <button className={`w-full h-12 rounded-lg font-bold transition-all mb-8 ${highlight ? 'bg-accent-orange text-white hover:bg-orange-600 shadow-md' : 'bg-primary-green/10 text-primary-green hover:bg-primary-green/20'}`}>
            Choose Plan
        </button>

        <ul className="space-y-4 text-sm">
            {features.map((f: string) => (
                <li key={f} className="flex gap-3 items-start text-text-light dark:text-text-dark">
                    <span className={`material-symbols-outlined text-xl shrink-0 ${highlight ? 'text-accent-orange' : 'text-primary-green'}`}>check_circle</span>
                    <span>{f}</span>
                </li>
            ))}
        </ul>
    </div>
);