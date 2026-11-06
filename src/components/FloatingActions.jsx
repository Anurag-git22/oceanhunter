import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Navigation, ArrowUp } from 'lucide-react';
import { BRAND } from '../data';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsAppMsg = encodeURIComponent(
    "Hello Ocean Hunter! I would like to enquire about boating safari packages and room booking at Devbag."
  );

  return (
    <>
      {/* Scroll-To-Top Button (Floating Bottom-Left on Desktop, Above Bottom-Bar on Mobile) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 left-5 z-40 p-3 rounded-full bg-navy/90 hover:bg-brandRed text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 animate-in fade-in slide-in-from-bottom-2 focus:outline-none"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Desktop WhatsApp Button (bottom-right) */}
      <aside 
        aria-label="Contact options"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center group select-none"
      >
        <span className="mr-3 px-3.5 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-white/10 pointer-events-none">
          Chat with Boat Captain
        </span>

        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=${defaultWhatsAppMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-emerald-400/30 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
        </a>
      </aside>

      {/* Sticky Mobile Bottom Bar (Requirement 5: Call / WhatsApp / Directions) */}
      <nav 
        aria-label="Mobile quick actions"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 py-2 px-3 sm:hidden flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      >
        {/* 1. Call Captain Button */}
        <a
          href="tel:9370208843"
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-navy text-white text-[11px] font-semibold tracking-tight shadow-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4 text-brandRed mb-0.5" />
          <span>Call</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=${defaultWhatsAppMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white text-[11px] font-semibold tracking-tight shadow-sm active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* 3. Directions Button */}
        <a
          href={BRAND.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy text-[11px] font-semibold tracking-tight shadow-sm active:scale-[0.98] transition-transform border border-slate-200"
        >
          <Navigation className="w-4 h-4 text-oceanTeal mb-0.5" />
          <span>Directions</span>
        </a>
      </nav>
    </>
  );
}
