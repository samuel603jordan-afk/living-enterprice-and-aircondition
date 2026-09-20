import React, { useState } from 'react';
import { Calculator, Check, ShieldCheck, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';

interface CostEstimatorProps {
  onBookWithEstimate: (details: { serviceTitle: string; unitCount: number; propertyType: string; estimateGH: number }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookWithEstimate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ac-maintenance');
  const [unitCount, setUnitCount] = useState<number>(1);
  const [propertyType, setPropertyType] = useState<'residential' | 'office' | 'commercial'>('residential');
  const [isEmergency247, setIsEmergency247] = useState<boolean>(false);

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Calculation logic
  const baseRate = currentService.startingPriceGH;
  let multiplier = 1;
  if (propertyType === 'office') multiplier = 1.15;
  if (propertyType === 'commercial') multiplier = 1.25;

  // Volume discount for multiple units
  let volumeDiscount = 1;
  if (unitCount === 2) volumeDiscount = 0.95;
  else if (unitCount === 3) volumeDiscount = 0.90;
  else if (unitCount >= 4) volumeDiscount = 0.85;

  let calculatedBase = baseRate * unitCount * multiplier * volumeDiscount;
  if (isEmergency247) {
    calculatedBase += 80; // Emergency off-hours surcharge
  }

  const estimatedMin = Math.round(calculatedBase);
  const estimatedMax = Math.round(calculatedBase * 1.25);

  const handleSendToWhatsApp = () => {
    const text = `Hello Living Electrical & AC Service! I used your online Cost Estimator:\n• Service: ${currentService.title}\n• Units / Areas: ${unitCount}\n• Property: ${propertyType}\n• Urgency: ${isEmergency247 ? '24/7 Immediate Emergency' : 'Standard Booking'}\n• Estimated Range: GH₵ ${estimatedMin} - GH₵ ${estimatedMax}\nCan I confirm this appointment with your team?`;
    window.open(`https://wa.me/233247818784?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-16 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            100% TRANSPARENT GH₵ ESTIMATES
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Service Cost In 30 Seconds
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No unexpected charges or hidden fees. Get an upfront estimate in Ghana Cedis (GH₵) backed by our workmanship guarantee.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Form Inputs (Left) */}
            <div className="md:col-span-7 space-y-6">
              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  1. Choose Service:
                </label>
                <select
                  id="estimator-service-select"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-cyan-500"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-slate-950 text-white">
                      {srv.title} (from GH₵ {srv.startingPriceGH})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Number of Units / ACs */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-slate-400">
                    2. Number of Units / Rooms:
                  </span>
                  <span className="text-cyan-400 font-bold">{unitCount} {unitCount === 1 ? 'Unit' : 'Units'} {unitCount >= 3 ? '(10-15% Multi-Unit Discount applied!)' : ''}</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setUnitCount(num)}
                      className={`py-2.5 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                        unitCount === num
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {num}{num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Property Type */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Property Environment:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['residential', 'office', 'commercial'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-2.5 px-2 rounded-xl border text-xs font-bold capitalize transition-all cursor-pointer ${
                        propertyType === type
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Emergency Dispatch Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEmergency247}
                    onChange={(e) => setIsEmergency247(e.target.checked)}
                    className="w-4 h-4 text-cyan-500 rounded border-slate-700 focus:ring-cyan-500 bg-slate-900"
                  />
                  <div className="text-xs">
                    <span className="text-white font-semibold block">Require Immediate 24/7 Night / Emergency Dispatch</span>
                    <span className="text-slate-400">Dispatches available technician within 20-35 mins anywhere in Accra</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Estimated Quote Card (Right) */}
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border border-cyan-500/40 p-6 shadow-xl relative text-center">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60 mb-3">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  Estimated Range (GH₵)
                </div>

                <div className="space-y-1 my-3">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    GH₵ {estimatedMin} <span className="text-xl font-normal text-slate-400">–</span> {estimatedMax}
                  </div>
                  <p className="text-xs text-slate-400">
                    Transparent, fair Ghanaian pricing for {unitCount} {unitCount === 1 ? 'unit' : 'units'}
                  </p>
                </div>

                <div className="space-y-2 py-4 border-y border-slate-800/80 text-left text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Includes diagnostic inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Certified tools & safety grounding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>30-Day workmanship warranty</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-5">
                  <button
                    id="estimator-book-now-btn"
                    onClick={() => onBookWithEstimate({
                      serviceTitle: currentService.title,
                      unitCount,
                      propertyType,
                      estimateGH: estimatedMin
                    })}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <span>Lock In Rate & Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    id="estimator-whatsapp-share-btn"
                    onClick={handleSendToWhatsApp}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat This Quote On WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
