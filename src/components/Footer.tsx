import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Star, Zap, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="footer" className="bg-slate-950 border-t border-slate-850 pt-16 pb-24 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Trust */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-cyan-500/20">
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base tracking-tight leading-tight">
                  LIVING ELECTRICAL
                </h3>
                <p className="text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
                  & Air Condition Service
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Certified HVAC repair, cooling installations, and master electrical engineering serving residential and commercial properties across Accra and nearby areas. Available 24 hours every day.
            </p>

            {/* Google Rating Snippet */}
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-xs">5.0 Star Rating</span>
                <span className="text-slate-500 text-[11px]">(13 Reviews)</span>
              </div>
              <p className="text-[11px] text-slate-300 italic">
                {BUSINESS_INFO.headlineReview}
              </p>
            </div>
          </div>

          {/* Col 2: Services Directory (All 9 services) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Our Certified Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.id)}
                    className="hover:text-cyan-400 text-left transition-colors cursor-pointer"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Emergency Contact & Dispatch
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Workshop & Dispatch Base:</strong>
                  <span>{BUSINESS_INFO.address}, Accra, Ghana</span>
                  <p className="text-slate-500 text-[11px]">Serves Accra and nearby areas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Operating Schedule:</strong>
                  <span className="text-emerald-400 font-semibold">{BUSINESS_INFO.hours}</span>
                  <p className="text-slate-500 text-[11px]">Night, weekend & holiday emergency coverage</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Call Directly:</strong>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-cyan-400 font-bold hover:underline text-sm">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Living Electrical & Air Condition Service. All rights reserved. Alajo T Junction Street 7, Accra.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Certified Electrical & HVAC Master
            </span>
            <span>•</span>
            <span className="text-cyan-400 font-medium">Open 24 Hours</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
