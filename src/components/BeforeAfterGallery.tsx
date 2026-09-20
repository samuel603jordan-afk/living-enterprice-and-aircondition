import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ComparisonCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeStats: string;
  afterStats: string;
  beforeImage: string;
  afterImage: string;
}

const COMPARISON_CASES: ComparisonCase[] = [
  {
    id: 'coil-cleaning',
    title: 'AC Deep Coil & Chemical Wash',
    category: 'Air Condition Hygiene',
    description: 'Years of humid Accra dust and mold build up inside the cooling fins, cutting airflow by 60% and causing foul odors. Our biodegradable chemical wash restores factory-fresh airflow.',
    beforeLabel: 'Clogged with Mold & Sludge',
    afterLabel: 'Sanitized & Restored Airflow',
    beforeStats: '42% Airflow • Musty Smells',
    afterStats: '98% Airflow • Ice Cold Output',
    beforeImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'electrical-wiring',
    title: 'Distribution Board (DB) Safety Upgrade',
    category: 'Master Electrical',
    description: 'Tangled, ungrounded wiring poses severe fire and surge hazards. We reorganize circuits, install surge protectors, and balance electrical phases for total peace of mind.',
    beforeLabel: 'Unorganized & Fire Risk',
    afterLabel: 'Phase-Balanced & Surge Protected',
    beforeStats: 'Tripping Breakers • Hot Wires',
    afterStats: 'Neat Conduit • Zero Tripping',
    beforeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ac-mounting',
    title: 'Precision Split Unit Installation',
    category: 'Clean Architecture',
    description: 'No sagging copper pipes or dripping walls. Level mounting on anti-vibration brackets with sealed wall penetrations to maintain your home’s refined aesthetics.',
    beforeLabel: 'Shoddy Exposed Piping',
    afterLabel: 'Flawless Aesthetic Finish',
    beforeStats: 'Vibration Hum • Wall Stains',
    afterStats: 'Whisper Quiet • Clean Lines',
    beforeImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop'
  }
];

export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(COMPARISON_CASES[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const currentCase = COMPARISON_CASES.find(c => c.id === activeTab) || COMPARISON_CASES[0];

  return (
    <section id="proof" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            PROOF OF CRAFTSMANSHIP
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            See The Difference Real Expertise Makes
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We don’t just patch symptoms. We transform your cooling and electrical infrastructure with precision, safety, and meticulous cleanliness.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-2">
            {COMPARISON_CASES.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Split / Slider Container */}
            <div className="md:col-span-7">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden select-none border border-slate-700/80 shadow-inner group">
                
                {/* AFTER Image (Background) */}
                <img
                  src={currentCase.afterImage}
                  alt={currentCase.afterLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE Image (Clipped by slider position) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl transition-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt={currentCase.beforeLabel}
                    referrerPolicy="no-referrer"
                    className="absolute inset-y-0 left-0 h-full max-w-none object-cover brightness-75 contrast-125"
                    style={{ width: '100%', height: '100%', minWidth: '400px' }}
                  />
                  <div className="absolute top-3 left-3 bg-rose-950/90 text-rose-300 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-rose-800/80 backdrop-blur-sm">
                    BEFORE: {currentCase.beforeLabel}
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-800/80 backdrop-blur-sm">
                  AFTER: {currentCase.afterLabel}
                </div>

                {/* Slider Thumb Handle */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-950 shadow-xl flex items-center justify-center cursor-ew-resize pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </div>

                {/* Transparent Input Range Overlay for Dragging */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Drag before and after slider"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                <span>◀ Drag slider left/right to compare</span>
                <span className="text-cyan-400 font-semibold">{sliderPosition}% Reveal</span>
              </div>
            </div>

            {/* Description & Impact Metrics */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {currentCase.category}
              </span>
              <h3 className="text-xl font-bold text-white">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-rose-400 font-medium">Before Condition:</span>
                  <span className="text-slate-300 font-semibold">{currentCase.beforeStats}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium">After Intervention:</span>
                  <span className="text-white font-semibold">{currentCase.afterStats}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Job completed with zero property mess or damage</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
