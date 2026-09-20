import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Check, Phone, ArrowRight, ShieldCheck, Clock, Sparkles, Zap, Wrench, Thermometer } from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ac' | 'hvac' | 'electrical'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              ACCRA’S COMPLETE COOLING & POWER CATALOG
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certified Services, Engineered For Longevity
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              From residential bedrooms in Alajo to high-capacity commercial cooling across Accra. Every job is executed by calm, master-level technicians with zero shortcuts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              All Services (9)
            </button>
            <button
              onClick={() => setActiveCategory('ac')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'ac'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Air Conditioning
            </button>
            <button
              onClick={() => setActiveCategory('hvac')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'hvac'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              HVAC & Heating
            </button>
            <button
              onClick={() => setActiveCategory('electrical')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'electrical'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Electrical & Wiring
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-3xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group relative"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-cyan-500/10 text-cyan-400 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Requested
                </div>
              )}

              <div className="space-y-4">
                {/* Category & Urgency Badges */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {service.category === 'ac' ? 'AC Service' : service.category === 'electrical' ? 'Master Electrical' : 'HVAC & Climate'}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.urgency}
                  </span>
                </div>

                {/* Service Title & Pricing */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Bullet Features */}
                <ul className="space-y-2 py-3 border-y border-slate-800/80 text-xs text-slate-300">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Tag & CTA Buttons */}
              <div className="pt-5 space-y-3 mt-auto">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Starting from</span>
                  <span className="text-lg font-black text-white">
                    GH₵ {service.startingPriceGH}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-cyan-500/20 cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Every Service Backed By Our Quality Guarantee</h4>
              <p className="text-xs text-slate-300">
                If the same issue reoccurs within 30 days of repair, we return and fix it free of charge. No debates.
              </p>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call 24/7: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {activeModalService.category.toUpperCase()} SERVICE SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold text-white">{activeModalService.title}</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalService.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Standard Scope of Work Included:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeModalService.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Recommended For:</strong>
              {activeModalService.idealFor}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  const id = activeModalService.id;
                  setActiveModalService(null);
                  onOpenBooking(id);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-md shadow-cyan-500/20"
              >
                Book This Service Now
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
