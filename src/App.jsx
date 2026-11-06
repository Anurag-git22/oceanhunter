import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import EnquiryForm from './components/EnquiryForm';
import DestinationsGallery from './components/DestinationsGallery';
import JourneyStrip from './components/JourneyStrip';
import TrustInfoSection from './components/TrustInfoSection';
import ResortSection from './components/ResortSection';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative selection:bg-brandRed selection:text-white">
      {/* 1. Sticky Navbar with Active Highlighting */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with Ken Burns Slow Zoom */}
        <Hero />

        {/* 3. Packages Section (No prices, "Book This Package" button) */}
        <PackagesSection />

        {/* 4. Booking Enquiry Form (Opens prefilled WhatsApp) */}
        <EnquiryForm />

        {/* 5. Destinations Gallery (Filter Tabs + Swipeable Lightbox) */}
        <DestinationsGallery />

        {/* 6. Journey Strip: Backwater to Ocean Timeline */}
        <JourneyStrip />

        {/* 7. Trust & Info: Know Before You Go + 5 FAQs + Testimonials Slider */}
        <TrustInfoSection />

        {/* 8. Resort & Room Booking Section (Devbag stay) */}
        <ResortSection />

        {/* 9. Why Choose Us (4 icon tiles - 1 line each) */}
        <WhyChooseUs />

        {/* 10. Contact Section (Direct calls, WhatsApp, Address & Map) */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp, Scroll-To-Top & Sticky Mobile Bottom Bar */}
      <FloatingActions />
    </div>
  );
}
