import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, ShieldCheck, MapPin } from 'lucide-react';
import { REVIEWS_DATA, GOOGLE_RATING_STATS } from '../data/reviewsData';
import { BUSINESS_INFO } from '../data/servicesData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            100% 5-STAR VERIFIED GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Accra’s Most Trusted Technicians
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from homeowners, property managers, and businesses across Accra who rely on our 24-hour service.
          </p>
        </div>

        {/* Google Rating Overview Box */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Rating Score Badge */}
            <div className="md:col-span-4 text-center md:border-r md:border-slate-800/80 md:pr-6">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                5.0
              </div>
              <div className="flex justify-center -space-x-0.5 my-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Based on <strong className="text-white">13 Google Reviews</strong>
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>100% Recommended</span>
              </div>
            </div>

            {/* Middle: 5-Star Distribution Breakdown (as provided in prompt) */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span className="font-semibold text-slate-300">Google Review Breakdown</span>
                <span className="text-cyan-400 font-bold">13 Reviews / 13 Five-Stars</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-3 text-xs">
                <span className="w-4 font-bold text-slate-300">5</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full w-full"></div>
                </div>
                <span className="w-8 text-right font-semibold text-white">13</span>
              </div>

              {/* 4 Stars */}
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-4 font-bold text-slate-300">4</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-amber-400/30 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-semibold text-slate-400">0</span>
              </div>

              {/* 3 Stars */}
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-4 font-bold text-slate-300">3</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-amber-400/30 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-semibold text-slate-400">0</span>
              </div>

              {/* 2 Stars */}
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-4 font-bold text-slate-300">2</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-amber-400/30 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-semibold text-slate-400">0</span>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-4 font-bold text-slate-300">1</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-amber-400/30 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-semibold text-slate-400">0</span>
              </div>
            </div>

          </div>

          {/* Featured Real Google Review Highlight Card */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30">
            <div className="flex items-start gap-3">
              <Quote className="w-8 h-8 text-cyan-400 shrink-0 opacity-80" />
              <div className="space-y-1.5">
                <p className="text-sm sm:text-base text-white font-medium italic">
                  {BUSINESS_INFO.headlineReview}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-cyan-300">Google Verified Reviewer</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    Accra, Ghana
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white">{rev.author}</h4>
                  <p className="text-[11px] text-slate-400">{rev.location}</p>
                </div>
                <div className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                  {rev.serviceUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Google Badge Footer */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Alajo+T+junction+Street+7+Accra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>View Living Electrical & Air Condition Service on Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
};
