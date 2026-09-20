import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Star, MapPin, Clock, ArrowRight, Zap, CheckCircle2, ThermometerSnowflake, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';
import { SERVICE_AREAS } from '../data/areasData';

interface HeroProps {
  onOpenBooking: (serviceId?: string, area?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState('ac-repair');
  const [selectedArea, setSelectedArea] = useState('Alajo & Caprice');
  const [quickPhone, setQuickPhone] = useState('');
  const [submittedQuick, setSubmittedQuick] = useState(false);

  const handleQuickDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) {
      onOpenBooking(selectedService, selectedArea);
      return;
    }
    const serviceName = SERVICES_DATA.find(s => s.id === selectedService)?.title || 'AC & Electrical Service';
    const msg = `Hello Living Electrical & AC Service! I need urgent assistance.\nService: ${serviceName}\nLocation: ${selectedArea}, Accra\nMy Contact Phone: ${quickPhone}\nPlease call me back immediately!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/233247818784?text=${encoded}`, '_blank');
    setSubmittedQuick(true);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle glowing ambient mesh background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-600/15 via-blue-700/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column: Conversion Pitch & Trust */}
          <div className="lg:col-span-7 space-y-6">
            {/* 24/7 Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>OPEN 24 HOURS • ACCRA & SURROUNDING AREAS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Stay Cool & Powered With Accra’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">5.0★ Rated</span> AC & Electrical Master
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Fast, dependable 24-hour service based at <strong className="text-white font-semibold">Alajo T Junction Street 7</strong>. Whether your AC is blowing hot in sweltering heat, leaking water, or your electrical breaker trips—we arrive equipped with certified tools to restore peace and comfort.
              </p>
            </div>

            {/* Google Rating Showcase Snippet */}
            <div id="hero-review-badge" className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-blue-950/40 border border-slate-800/90 shadow-xl max-w-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white">5.0 Google Rating</span>
                    <span className="text-xs text-slate-400 ml-1.5">(13 Verified 5-Star Reviews)</span>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% 5-Star Track Record
                </div>
              </div>

              {/* Exact quote provided by user */}
              <div className="pt-3 flex items-start gap-2.5">
                <span className="text-2xl leading-none text-cyan-400 font-serif">“</span>
                <p className="text-xs sm:text-sm text-slate-200 italic font-medium">
                  {BUSINESS_INFO.headlineReview}
                </p>
              </div>
            </div>

            {/* Dual Primary Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                id="hero-call-now-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-lg bg-slate-950/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
                </div>
                <span>CALL NOW: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                id="hero-whatsapp-btn"
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-emerald-500/60 transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7 Night & Weekend Dispatch</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Workmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Based at Alajo T Junc. St 7</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: High-Converting Instant Dispatch Card */}
          <div className="lg:col-span-5">
            <div id="hero-dispatch-box" className="relative rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-7 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                Fastest Tech Dispatch
              </div>

              <div className="space-y-1.5 pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                  Request Fast Dispatch
                </h3>
                <p className="text-xs text-slate-400">
                  Select your service and neighborhood in Accra for immediate technician response.
                </p>
              </div>

              {submittedQuick ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Connecting To Technician!</h4>
                  <p className="text-xs text-slate-300">
                    WhatsApp has opened with your dispatch details. You can also call us directly anytime at <strong className="text-cyan-400">{BUSINESS_INFO.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmittedQuick(false)}
                    className="text-xs text-cyan-400 hover:underline pt-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickDispatch} className="space-y-4 pt-4">
                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      What service do you require?
                    </label>
                    <select
                      id="hero-service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id} className="bg-slate-950 text-white">
                          {srv.title} ({srv.urgency})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Neighborhood / Area Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Your Location in Accra:
                    </label>
                    <select
                      id="hero-area-select"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      {SERVICE_AREAS.map((area) => (
                        <option key={area.name} value={area.name} className="bg-slate-950 text-white">
                          {area.name} (est. {area.estArrivalMin})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone Number Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Your Mobile Number (Ghana):
                    </label>
                    <div className="relative">
                      <input
                        id="hero-phone-input"
                        type="tel"
                        placeholder="e.g. 024 123 4567"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Submit Dispatch CTA */}
                  <button
                    id="hero-submit-dispatch-btn"
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
                  >
                    <span>Request Emergency Dispatch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Free phone diagnosis
                    </span>
                    <span className="text-cyan-400 font-medium">No obligation</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
