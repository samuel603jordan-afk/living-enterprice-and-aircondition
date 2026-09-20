/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickDiagnostic } from './components/QuickDiagnostic';
import { CostEstimator } from './components/CostEstimator';
import { ServicesGrid } from './components/ServicesGrid';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { BookingModal } from './components/BookingModal';
import { EmergencyStickyBar } from './components/EmergencyStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingArea, setBookingArea] = useState<string | undefined>(undefined);
  const [estimateData, setEstimateData] = useState<{
    serviceTitle: string;
    unitCount: number;
    propertyType: string;
    estimateGH: number;
  } | null>(null);

  const handleOpenBooking = (serviceId?: string, area?: string) => {
    setBookingServiceId(serviceId);
    setBookingArea(area);
    setEstimateData(null);
    setIsBookingOpen(true);
  };

  const handleBookWithEstimate = (details: {
    serviceTitle: string;
    unitCount: number;
    propertyType: string;
    estimateGH: number;
  }) => {
    setEstimateData(details);
    setIsBookingOpen(true);
  };

  const handleSelectIssueForBooking = (serviceId: string, issueName: string) => {
    setBookingServiceId(serviceId);
    setBookingArea(undefined);
    setEstimateData(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Bar & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* High-Converting 24/7 Hero with Google Review Callout */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Interactive AC & Electrical Symptom Troubleshooter */}
        <QuickDiagnostic onSelectIssueForBooking={handleSelectIssueForBooking} />

        {/* Transparent Cost Estimator in GH₵ */}
        <CostEstimator onBookWithEstimate={handleBookWithEstimate} />

        {/* Comprehensive 9-Services Grid */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* Interactive Before & After Visual Proof */}
        <BeforeAfterGallery />

        {/* 5.0 Google Reviews Showcase with real quotes */}
        <ReviewsSection />

        {/* Accra Service Area & Alajo Hub Dispatch Times */}
        <ServiceAreaMap onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer with Alajo T junction location, phone, and services */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Bottom Action Bar (Mobile & Desktop) */}
      <EmergencyStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking & Instant Dispatch Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
        initialArea={bookingArea}
        estimateData={estimateData}
      />
    </div>
  );
}
