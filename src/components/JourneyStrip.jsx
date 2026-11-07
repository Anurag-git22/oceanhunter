import React from 'react';
import { JOURNEY_STEPS } from '../data';
import { Compass, Waves, Fish, Anchor, ArrowRight } from 'lucide-react';

export default function JourneyStrip() {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Fish': return <Fish className="w-5 h-5" />;
      case 'Anchor': return <Anchor className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-navy-900 border-y border-white/10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brandRed bg-red-950/60 border border-brandRed/30 px-3.5 py-1 rounded-full inline-block mb-3">
            Navigation Route
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Backwater to Ocean</span> Voyage
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            How the safari transitions seamlessly from calm inland rivermouth to the vast open Arabian sea.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-teal-500 via-sky-500 to-brandRed -translate-y-6 z-0" />

          {/* Steps Carousel on mobile, Grid on desktop */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 -mx-4 md:px-0 md:mx-0 no-scrollbar">
            {JOURNEY_STEPS.map((item, index) => (
              <div 
                key={item.step}
                className="w-[82vw] max-w-[300px] md:w-auto flex-shrink-0 snap-center bg-navy-950/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-slate-300">
                      Phase {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center text-oceanTeal-light group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-oceanTeal-light mb-2">
                    {item.subtitle}
                  </p>

                  {/* Short Punchy Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Progress arrow indicator on bottom */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>{index === 3 ? "Final Offshore Frontier" : "Next waypoint"}</span>
                  {index < 3 && <ArrowRight className="w-3.5 h-3.5 text-brandRed" />}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
