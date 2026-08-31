import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { CinematicStory } from './components/CinematicStory';
import { BentoGrid } from './components/BentoGrid';
import { SplitFeaturedMenu } from './components/SplitFeaturedMenu';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { ReviewMarquee } from './components/ReviewMarquee';
import { ProofQuote } from './components/ProofQuote';
import { LeadCapture } from './components/LeadCapture';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';

export const AppContent: React.FC = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <div className="min-h-screen bg-[#090A0C] text-zinc-100 font-sans selection:bg-gold-400 selection:text-black overflow-x-hidden">
      {/* 1. Floating Apple-Style Pill Navigation Bar */}
      <Navbar onOpenReservationModal={openReservationModal} />

      <main>
        {/* 2. Cinematic Split Typography Hero Section */}
        <Hero onOpenReservationModal={openReservationModal} />

        {/* 3. Social Proof / Metrics Ribbon */}
        <MetricsRibbon />

        {/* 4. Full-Bleed Cinematic Atmosphere Story Section */}
        <CinematicStory onOpenReservationModal={openReservationModal} />

        {/* 5. Asymmetric Bento Grid Feature Section */}
        <BentoGrid onOpenReservationModal={openReservationModal} />

        {/* 6. Split Featured Menu & Signature Mixology Section */}
        <SplitFeaturedMenu onOpenReservationModal={openReservationModal} />

        {/* 7. Interactive Showcase / The Night Sequence */}
        <InteractiveShowcase onOpenReservationModal={openReservationModal} />

        {/* 8. Infinite Smooth Review Marquee */}
        <ReviewMarquee />

        {/* 9. Editorial Testimonial Proof Quote */}
        <ProofQuote />

        {/* 10. Lead Capture / Contact Section (Web3Forms + WhatsApp) */}
        <LeadCapture />

        {/* Location, Directions, Map & Dress Code */}
        <LocationHours />
      </main>

      {/* 11. Minimalist Luxury Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Booking Button */}
      <FloatingWhatsAppWidget />

      {/* Popup Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={closeReservationModal}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
