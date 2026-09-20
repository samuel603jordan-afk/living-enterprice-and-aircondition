import React from 'react';
import { Phone, MessageSquare, Zap, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
}

export const EmergencyStickyBar: React.FC<EmergencyStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 sm:py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-3">
        
        {/* Left: 24/7 Pulse status (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center gap-2.5 text-xs text-slate-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div>
            <span className="font-bold text-white block">Technicians On Duty (Accra)</span>
            <span className="text-[11px] text-slate-400">Alajo • Dzorwulu • East Legon • Airport • All Accra</span>
          </div>
        </div>

        {/* Right / Center: One-tap Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          {/* Direct Mobile Call */}
          <a
            id="sticky-call-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all"
          >
            <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            id="sticky-whatsapp-btn"
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Book Online Button */}
          <button
            id="sticky-book-btn"
            onClick={onOpenBooking}
            className="hidden md:flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-colors cursor-pointer"
          >
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Book Online</span>
          </button>
        </div>

      </div>
    </aside>
  );
};
