import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar'; // Reusing existing sidebar
// import { DndContext, ... } from '@dnd-kit/core';

export default function ExerciseTool() {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-light">
      {/* 1. Reuse the Sidebar, but maybe a condensed version or same as AppLayout */}
      <Sidebar />

      {/* 2. Main Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b border-border-light bg-card-light h-20">
            <div>
                <h1 className="text-2xl font-bold">Week 1 - Knee Recovery</h1>
                <p className="text-sm text-text-muted">Assigned to Benjamin Carter</p>
            </div>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 h-10 border border-border-light rounded-lg font-semibold hover:bg-gray-100">
                    <span className="material-symbols-outlined text-base">print</span> Export PDF
                </button>
                <button className="flex items-center gap-2 px-4 h-10 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600">
                    <span className="material-symbols-outlined text-base">send</span> Send Plan
                </button>
            </div>
        </header>

        {/* Drag Drop Area */}
        <div className="flex-grow p-6 overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ExerciseCard 
                    title="Quad Sets" 
                    reps="3 sets of 10 reps" 
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuA5SXzt5dnuqACo10Jl_jTbt2qZ8w_RegFkFm8GTgvph12kyAJjFYYSxOlbx5fAMPP7QXAxujtunHXlNPdKJTlG7n3_hpiPioGlzTbu7YZBw00kmgqsRSx0yapeRHIB49vgr4f_5mWFTFHGXSfFH4LhtwcAo6UvULzr8_IZeEarlzMFMkd5Cz0Ocwk8yppNMZLChmpavzT2zrute3mASIQG-JI-5ZGxPwKNPdnnwrLGqiKoaUq1S5IQ4x_daWXvnNRG-JpJQ8wlF9c"
                    status="Completed"
                    progress={100}
                    color="text-accent-green"
                    barColor="bg-accent-green"
                />
                <ExerciseCard 
                    title="Heel Slides" 
                    reps="3 sets of 15 reps" 
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5wsQul_dOgTWTHRIOQd9D2J5RJb1OW0un-ho265zNBa0VgBWFw0w7DixjkKOv1dVtxDr0ZqcnyXEkNpFB7UQfkTbVkuOAlebTBe9QHJK2LYlQCVQHVy4UteWpXjvEc0SEJBOe3ETTawrZPsmH8x4OhYggty-37AjCfxmd5ZbetE5VSzPVusoUkd8revwtX8mqNcMBdttpH1ho6FLcq3Pux3aWJvTAEiCGK2nupgrUG2fR5B8QO6LezHMMAIBO9K99UrmNBFOET0"
                    status="In Progress"
                    progress={66}
                    color="text-accent-orange"
                    barColor="bg-accent-orange"
                />
                
                {/* Add New Placeholder */}
                <button className="border-2 border-dashed border-border-light rounded-xl flex flex-col items-center justify-center min-h-[220px] text-text-muted hover:border-primary hover:bg-primary/5 transition">
                    <span className="material-symbols-outlined text-4xl">add_circle</span>
                    <span className="mt-1 font-semibold">Add Exercise</span>
                </button>
            </div>
        </div>
      </main>

      {/* 3. Right Sidebar - Library */}
      <aside className="w-96 flex flex-col bg-card-light border-l border-border-light">
         <div className="p-4 border-b border-border-light">
             <div className="flex bg-background-light p-1 rounded-lg">
                 <button className="flex-1 py-1.5 text-sm font-semibold rounded bg-primary text-white">Library</button>
                 <button className="flex-1 py-1.5 text-sm font-semibold text-text-muted">Custom</button>
             </div>
             <div className="mt-4 relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                 <input type="text" placeholder="Search library..." className="w-full pl-9 h-10 rounded-lg border-border-light bg-background-light text-sm" />
             </div>
         </div>
         
         <div className="flex-1 overflow-y-auto p-4 space-y-3">
             <LibraryItem name="Glute Bridges" tags="Legs, Glutes" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBYMrtnRUBtiRCfGHh_e7DPRnDC4S-c5Ehf9k2nqKLWpON76LyBFoJ1ouBPV1CNJFZpQ5nsmtpKkFOkihtjzvn7m2nsrelEejZl_wtDBMaJlILwE25i33RFvPEnFdyT9poKCv0Ibjp7XoId5js6DaxF1Zs6qDJ6nGkVzsbsRXwgQBiXn3CqOF70H9OI4FkRQ2o0MkxPXN4jfLPOgB_-XmFx8k656FkbLRVU7kO_pLeYuYp0fezlGmHRTrcGn9-jNNoLb8tU6hSJAsU" />
             <LibraryItem name="Bodyweight Squats" tags="Legs, Core" img="https://lh3.googleusercontent.com/aida-public/AB6AXuAM2CxH9KL4nwaRb6ZeJCCC9cmFG_dbABUepMJUKai2_tsdwQuUqH7hxMagjX-IMGQFy1acVcVIqaH19I0YTUkfIrcd_SurnZfQuDfAbXuqSAbvPfyufn3I_kBXBRDuZtlDZyXh9eD-lHBDolTslHJC5Lmwuvfm40iC47PBEGrAOrNqcwgxsaelthTbFHzfIBW8EwGnpNQGj6Fb1senl4uqW6kWp0cdoWPa26s4hWwWdzsMpU5ydjuZSqIkuZk1kMdbPaaMEAMCm6s" />
             <LibraryItem name="Plank" tags="Core, Arms" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBGKtu6F72CWNv-Fn2nkFGoS1_h2zjj4hwpFoTFvL-JzuQvJ_gLTz_QQ_v4KF87SLb7rya4u6Ozzl0cUbuwrUsDz8WaOjvU6PTC7yDxMflGwKvX2GduBqS1yR73Vp9fAnhgZ7PRMpTibLfq4sIDSyygB6D4IazzNHmeRxfBf9Gy5JGB2jH68nXxiGdl1Y6K_G0u5MJcz6lG7RgTgG3aFLcAhO1I_pZLYlTuXcVrhdZwEjNIdydq3xHtxNq4G3FuwvqGCq6VbnfEsTs" />
         </div>
      </aside>
    </div>
  );
}

const ExerciseCard = ({ title, reps, img, status, progress, color, barColor }: any) => (
    <div className="bg-card-light rounded-xl border border-border-light p-4 flex flex-col gap-3 group hover:shadow-md transition">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-text-muted">{reps}</p>
            </div>
            <span className="material-symbols-outlined text-text-muted cursor-grab group-hover:text-primary">drag_indicator</span>
        </div>
        <div 
            className="rounded-lg h-32 w-full bg-cover bg-center"
            style={{ backgroundImage: `url("${img}")` }}
        />
        <div className="flex items-center gap-2 mt-auto">
            <span className={`text-xs font-medium ${color}`}>{status}</span>
            <div className="w-full rounded-full bg-gray-200 h-1.5">
                <div className={`h-full rounded-full ${barColor}`} style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    </div>
);

const LibraryItem = ({ name, tags, img }: any) => (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border border-transparent hover:border-border-light">
        <img src={img} alt={name} className="h-12 w-12 rounded bg-gray-200 object-cover" />
        <div className="flex-1">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-text-muted">{tags}</p>
        </div>
        <button className="p-1.5 rounded hover:bg-primary/10 hover:text-primary text-text-muted">
            <span className="material-symbols-outlined text-xl">add</span>
        </button>
    </div>
);