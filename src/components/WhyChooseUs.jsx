import React from 'react';
import { WHY_CHOOSE_US } from '../data';
import { Users, ShieldCheck, MapPin, Sparkles, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-brandRed" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-oceanTeal" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-brandRed" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      default: return <Award className="w-6 h-6 text-brandRed" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-navy font-semibold text-xs sm:text-sm uppercase tracking-widest bg-navy/5 border border-navy/10 px-3.5 py-1 rounded-full mb-3">
            <Award className="w-4 h-4 text-brandRed" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-navy">
            Trusted Devbag <span className="text-brandRed">Boating</span>
          </h2>
        </div>

        {/* 4 Icon Tiles - Side-scrollable on mobile, Grid on tablet/desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 -mx-4 sm:px-0 sm:mx-0 no-scrollbar">
          {WHY_CHOOSE_US.map((item) => (
            <div 
              key={item.id}
              className="w-[82vw] max-w-[280px] sm:w-auto flex-shrink-0 snap-center bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                {getIcon(item.icon)}
              </div>

              {/* Title: 1 line */}
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-navy mb-1.5">
                {item.title}
              </h3>

              {/* Description: exactly 1 line */}
              <p className="text-xs text-slate-600 line-clamp-1 font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
