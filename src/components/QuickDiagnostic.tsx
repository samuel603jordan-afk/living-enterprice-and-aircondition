import React, { useState } from 'react';
import { DIAGNOSTICS_DATA } from '../data/diagnosticsData';
import { SymptomDiagnostic } from '../types';
import { Wind, Droplet, Zap, Volume2, AlertTriangle, Thermometer, Clock, ShieldAlert, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface QuickDiagnosticProps {
  onSelectIssueForBooking: (serviceId: string, issueName: string) => void;
}

export const QuickDiagnostic: React.FC<QuickDiagnosticProps> = ({ onSelectIssueForBooking }) => {
  const [activeIssueId, setActiveIssueId] = useState<string>(DIAGNOSTICS_DATA[0].id);

  const activeIssue = DIAGNOSTICS_DATA.find((d) => d.id === activeIssueId) || DIAGNOSTICS_DATA[0];

  const getIcon = (type: SymptomDiagnostic['iconType']) => {
    switch (type) {
      case 'wind': return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'droplet': return <Droplet className="w-5 h-5 text-sky-400" />;
      case 'zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'volume-2': return <Volume2 className="w-5 h-5 text-purple-400" />;
      case 'alert-triangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'thermometer': return <Thermometer className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="diagnostics" className="py-16 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            INSTANT SYMPTOM TROUBLESHOOTER
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Is Your AC or Power Acting Up? Identify The Fault
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select the symptom you are observing. Our master technician diagnoses the probable cause, immediate safety steps, and estimated time to resolve.
          </p>
        </div>

        {/* Diagnostic Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Symptom Selector Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block px-1">
              Select Your Symptom:
            </span>
            {DIAGNOSTICS_DATA.map((diag) => {
              const isSelected = diag.id === activeIssueId;
              return (
                <button
                  key={diag.id}
                  id={`diagnostic-tab-${diag.id}`}
                  onClick={() => setActiveIssueId(diag.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-cyan-500/80 shadow-lg shadow-cyan-950/40 translate-x-1'
                      : 'bg-slate-950/70 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {getIcon(diag.iconType)}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {diag.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{diag.quickSummary}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-cyan-400' : 'bg-slate-700'}`}></div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Diagnostic Insight Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header & Urgency Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    {getIcon(activeIssue.iconType)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Troubleshooting Analysis</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{activeIssue.title}</h3>
                  </div>
                </div>

                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activeIssue.severityColor}`}>
                  {activeIssue.severity}
                </span>
              </div>

              {/* Likely Root Causes */}
              <div className="py-5 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Most Likely Causes in Accra Climate:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIssue.likelyCauses.map((cause, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/50">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Action & Fix Time */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-cyan-300">Technician Safety Advice:</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Est. Fix Time: <strong className="text-white">{activeIssue.typicalFixTime}</strong>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeIssue.recommendedAction}
                </p>
              </div>

              {/* Actions: Book / WhatsApp with Issue Details */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="diagnostic-book-fix-btn"
                  onClick={() => onSelectIssueForBooking(activeIssue.serviceMatchId, activeIssue.title)}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <span>Dispatch Technician For This Issue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="diagnostic-whatsapp-btn"
                  href={`https://wa.me/233247818784?text=${encodeURIComponent(`Hello! My system has this problem: "${activeIssue.title}". Can you give me an assessment and dispatch a tech to my location?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>WhatsApp Diagnosis</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
