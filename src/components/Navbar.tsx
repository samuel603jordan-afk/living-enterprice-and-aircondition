import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Menu, X, ShieldCheck, Flame, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Urgent Notification Ribbon */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-800/30 text-xs py-2 px-4 text-cyan-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-300">OPEN 24 HOURS:</span>
            <span className="text-slate-300 hidden sm:inline">Emergency AC Breakdown & Electrical Repairs in Accra</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">• Average response: 20-35 mins</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs ml-auto sm:ml-0">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Alajo T junction Street 7, Accra
            </span>
            <span className="hidden lg:flex items-center gap-1 text-amber-300 font-medium">
              ★ 5.0 (13 Google Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header id="main-header" className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
                  <div className="relative flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                  LIVING <span className="text-cyan-400">ELECTRICAL</span>
                </span>
                <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                  & Air Condition Service • Accra
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#diagnostics" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Symptom Checker
              </a>
              <a href="#estimator" className="hover:text-cyan-400 transition-colors">Cost Estimator</a>
              <a href="#reviews" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                Reviews
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/30">
                  5.0 ★
                </span>
              </a>
              <a href="#coverage" className="hover:text-cyan-400 transition-colors">Service Areas</a>
            </nav>

            {/* Direct Call & Booking CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="header-direct-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 transition-all hover:border-cyan-500/50 group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-cyan-400 tracking-wider">24/7 Hotline</div>
                  <div className="text-sm font-bold text-white tracking-tight">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              <a
                id="header-whatsapp-btn"
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <button
                id="header-book-btn"
                onClick={() => onOpenBooking()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer"
              >
                Book Service
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                aria-label="Call emergency hotline"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="md:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2.5 text-base font-medium text-slate-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Our 9 Core Services
              </a>
              <a
                href="#diagnostics"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 flex items-center justify-between"
              >
                <span>AC & Electrical Symptom Checker</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Instant Diagnose
                </span>
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Transparent Price Estimator (GH₵)
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 flex items-center justify-between"
              >
                <span>Google Reviews</span>
                <span className="text-xs text-amber-400 font-bold">5.0 ★ (13)</span>
              </a>
              <a
                href="#coverage"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Accra Service Areas & Arrival Times
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now: {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Technician on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 font-semibold text-sm"
              >
                Book Inspection / Dispatch
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
