import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';
import { SERVICE_AREAS } from '../data/areasData';
import { X, Phone, MessageSquare, ShieldCheck, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialArea?: string;
  estimateData?: { serviceTitle: string; unitCount: number; propertyType: string; estimateGH: number } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialArea,
  estimateData
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(initialArea || SERVICE_AREAS[0].name);
  const [serviceId, setServiceId] = useState(initialServiceId || SERVICES_DATA[0].id);
  const [urgency, setUrgency] = useState<'Immediate (24/7 Emergency)' | 'Today / Within 4 Hours' | 'Specific Date & Time'>('Immediate (24/7 Emergency)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

  const handleSubmitOnline = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'LIV-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(randomCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Living Electrical & Air Condition Service! I would like to book a service:\n• Name: ${fullName || 'Valued Customer'}\n• Phone: ${phone || 'Available on request'}\n• Location: ${area}, Accra\n• Service: ${currentService.title}\n• Urgency: ${urgency}\n• Notes: ${notes || 'Standard inspection'}\nPlease confirm technician availability.`;
    window.open(`https://wa.me/233247818784?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-slate-800 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Booking Request Dispatched
              </span>
              <h3 className="text-2xl font-bold text-white">We Have Received Your Request!</h3>
              <p className="text-xs text-slate-400">
                Booking Reference: <strong className="text-cyan-400 font-mono text-sm">{confirmationCode}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Client:</span>
                <span className="font-semibold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-semibold text-cyan-400">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-white">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Area:</span>
                <span className="font-semibold text-white">{area}, Accra</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Priority:</span>
                <span className="font-semibold text-amber-400">{urgency}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Our master technician from <strong className="text-white">Alajo T junction Street 7</strong> will ring your phone within <strong className="text-emerald-400">5 to 15 minutes</strong> to confirm technician dispatch time.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline Directly ({BUSINESS_INFO.phone})</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 text-xs font-medium border border-slate-800"
              >
                Done / Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                <Clock className="w-3 h-3 text-emerald-400" />
                OPEN 24 HOURS • ACCRA DISPATCH
              </div>
              <h3 className="text-2xl font-bold text-white">Book Certified Service</h3>
              <p className="text-xs text-slate-400">
                Fill in your details below for swift dispatch or instant WhatsApp scheduling.
              </p>
            </div>

            {/* Estimate banner if passed from calculator */}
            {estimateData && (
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 flex items-center justify-between">
                <span>Calculated Estimate for {estimateData.unitCount} unit(s):</span>
                <strong className="text-cyan-300 font-bold text-sm">~GH₵ {estimateData.estimateGH}</strong>
              </div>
            )}

            <form onSubmit={handleSubmitOnline} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Your Full Name: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-300">
                    Phone Number (Ghana): *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 024 781 8784"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Select Service Needed:
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-slate-950 text-white">
                      {srv.title} ({srv.category.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Accra Area / Neighborhood */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Neighborhood in Accra:
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  {SERVICE_AREAS.map((a) => (
                    <option key={a.name} value={a.name} className="bg-slate-950 text-white">
                      {a.name} (est. {a.estArrivalMin})
                    </option>
                  ))}
                  <option value="Other Area in Greater Accra" className="bg-slate-950 text-white">
                    Other Area in Greater Accra
                  </option>
                </select>
              </div>

              {/* Urgency Level */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  When do you need this done?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Immediate (24/7 Emergency)',
                    'Today / Within 4 Hours',
                    'Specific Date & Time'
                  ].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setUrgency(level as any)}
                      className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                        urgency === level
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional notes / symptoms */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Problem Description / Landmarks (Optional):
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. AC leaking water on bedroom wall, need gas checked, near Shell filling station..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  Confirm & Request Dispatch
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-800/80 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Request Via WhatsApp Instead</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  No upfront advance required
                </span>
                <span>•</span>
                <span>Pay upon satisfaction</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
