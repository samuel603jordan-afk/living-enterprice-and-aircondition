import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS } from '../data/areasData';
import { BUSINESS_INFO } from '../data/servicesData';

interface ServiceAreaMapProps {
  onOpenBooking: (serviceId?: string, area?: string) => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onOpenBooking }) => {
  const [selectedArea, setSelectedArea] = useState<string>(SERVICE_AREAS[0].name);

  const activeArea = SERVICE_AREAS.find(a => a.name === selectedArea) || SERVICE_AREAS[0];

  return (
    <section id="coverage" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            DISPATCH HUB: ALAJO T JUNCTION STREET 7
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Serving Accra & Surrounding Communities
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Strategically centered at Alajo to reach anywhere in Central, Airport, and Greater Accra within minutes for emergency 24/7 HVAC and electrical service.
          </p>
        </div>

        {/* Coverage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Neighborhood Transit Times List */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
              Select Your Area to Check Transit & Arrival Time:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
              {SERVICE_AREAS.map((area) => {
                const isSelected = area.name === selectedArea;
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area.name)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-950/50'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-bold ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                        {area.name}
                      </h4>
                      {area.popular && (
                        <span className="text-[9px] font-extrabold bg-cyan-950 text-cyan-400 border border-cyan-800 px-1.5 py-0.5 rounded">
                          Rapid
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Clock className="w-3 h-3" />
                        {area.estArrivalMin}
                      </span>
                      <span>~{area.distanceKm} km</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Don’t see your specific estate or street?</span>
              <button
                onClick={() => onOpenBooking(undefined, 'Other Accra Location')}
                className="text-cyan-400 font-bold hover:underline cursor-pointer"
              >
                Inquire Dispatch ➔
              </button>
            </div>
          </div>

          {/* Right: Map & Dispatch Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Dispatch Status Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Live Dispatch Available Now
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeArea.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Common landmarks: {activeArea.landmarks}
                  </p>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Est. Arrival</div>
                  <div className="text-sm font-black text-emerald-400">{activeArea.estArrivalMin}</div>
                </div>
              </div>

              {/* Graphical Schematic of Accra Service Coverage & Hub */}
              <div className="relative h-56 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
                {/* Radial Grid lines simulating radar / coverage */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cyan-500/20 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-500/30 animate-pulse pointer-events-none"></div>

                {/* HQ Pin at Alajo T junction */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-xs text-white shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                    <span className="font-bold">HQ: Alajo T Junc. St 7</span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Alajo+T+junction+Street+7+Accra"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700"
                  >
                    Open Google Maps ↗
                  </a>
                </div>

                {/* Target Selected Area Indicator */}
                <div className="relative z-10 bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Route to: {activeArea.name}</div>
                      <div className="text-[10px] text-slate-400">Direct transit from Street 7 workshop</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan-300">24/7 Ready</span>
                </div>
              </div>

              {/* Call to action for this area */}
              <div className="space-y-3">
                <button
                  id="area-dispatch-btn"
                  onClick={() => onOpenBooking(undefined, activeArea.name)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <span>Request Emergency Tech to {activeArea.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Transparent travel & diagnostic rates
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    Call: {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
