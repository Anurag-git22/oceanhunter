import React, { useState, useRef, useEffect } from 'react';
import PackageCard from './PackageCard';
import { PACKAGES, BRAND } from '../data';
import { Compass, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PackagesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  // Track active slide on mobile horizontal scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth > 0) {
      const index = Math.round(scrollLeft / (offsetWidth * 0.85));
      setActiveSlide(Math.min(Math.max(index, 0), PACKAGES.length - 1));
    }
  };

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.86;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 text-brandRed font-semibold text-xs sm:text-sm uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100 mb-3">
            <Compass className="w-4 h-4" />
            <span>Boat Safari Packages</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy leading-none">
            Choose Your <span className="text-brandRed">Ocean Safari</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-light">
            Custom-crafted routes covering Devbag sangam, pristine shores, dolphin waters & offshore lighthouses.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="mt-4 sm:hidden flex items-center justify-center space-x-2 text-xs text-brandRed font-medium bg-red-50 py-1.5 px-3 rounded-full inline-flex border border-red-100/80">
            <span>Swipe cards to explore packages ↔</span>
          </div>
        </div>

        {/* 
          Package Cards:
          - Mobile: Horizontal slide-by-slide snap carousel (smooth, no horizontal scroll of page)
          - Tablet / Desktop: 3-column clean grid
        */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-4 -mx-4 md:px-0 md:mx-0 no-scrollbar"
        >
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.id}
              className="w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto flex-shrink-0 snap-center h-full"
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>

        {/* Mobile Slide Dot Indicators (visible only on mobile) */}
        <div className="flex md:hidden items-center justify-center space-x-2 mt-4 pb-2">
          {PACKAGES.map((pkg, idx) => (
            <button
              key={pkg.id}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to ${pkg.title}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeSlide === idx 
                  ? 'w-7 bg-brandRed' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Notice on Customizing & Private Boats */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center flex-shrink-0 text-navy">
              <ShieldCheck className="w-5 h-5 text-brandRed" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-navy">Private Family & Group Safaris Available</h4>
              <p className="text-xs text-slate-500">Need a customized itinerary or private boat? Talk to our captains directly.</p>
            </div>
          </div>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-navy text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-700 transition-colors flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-oceanTeal-light" />
            <span>Custom Enquiry</span>
          </a>
        </div>

      </div>
    </section>
  );
}
