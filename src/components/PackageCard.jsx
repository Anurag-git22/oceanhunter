import React, { useState } from 'react';
import { Clock, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND } from '../data';

export default function PackageCard({ pkg }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Exact WhatsApp prefill format: "Hi Ocean Hunter, I want to book the [Package Name]"
  const whatsappMessage = encodeURIComponent(
    `Hi Ocean Hunter, I want to book the ${pkg.title} (${pkg.duration}) at Devbag.`
  );

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col bg-white border h-full ${
        pkg.isPopular 
          ? 'border-brandRed shadow-2xl ring-2 ring-brandRed/20 md:-translate-y-2' 
          : 'border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Popular / Premium Top Banner */}
      {pkg.isPopular && (
        <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-r from-brandRed via-red-600 to-brandRed text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
          <span>{pkg.popularBadge || "Most Popular / Premium"}</span>
        </div>
      )}

      {/* Cover Image */}
      <div className={`relative h-60 sm:h-64 w-full overflow-hidden bg-navy-900 group ${pkg.isPopular ? 'pt-7' : ''}`}>
        <img
          src={imageError ? "/images/SangamPoint-clean.jpg" : pkg.cover}
          alt={pkg.alt || pkg.title}
          loading="lazy"
          className={`w-full h-full object-cover object-center crop-video-bars transition-all duration-700 ${
            imageLoaded ? 'image-blur-loaded' : 'image-blur-loading'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        
        {/* Gradient on image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 z-10 inline-flex items-center space-x-1.5 bg-navy-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-oceanTeal-light" />
          <span>{pkg.duration}</span>
        </div>

        {/* Category Tag - Clear of the top banner with generous margin */}
        <div 
          className={`absolute right-3 z-10 inline-flex items-center bg-white/95 backdrop-blur-md text-navy-900 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
            pkg.isPopular ? 'top-11' : 'top-3'
          }`}
        >
          {pkg.tag}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Short Description */}
          <div className="mb-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-navy tracking-tight leading-tight">
              {pkg.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 line-clamp-2">
              {pkg.description}
            </p>
          </div>

          {/* Includes Previous Indicator */}
          {pkg.includesPrevious && (
            <div className="mb-4 px-3 py-1.5 rounded-lg bg-red-50 border border-brandRed/20 flex items-center space-x-2 text-brandRed text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
              <span>{pkg.includesPrevious}</span>
            </div>
          )}

          {/* Spots Included Checklist */}
          <div className="space-y-2.5 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Spots & Sights Covered:
            </p>
            <ul className="space-y-2">
              {pkg.spots.map((spot, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-oceanTeal flex-shrink-0 mr-2.5 mt-0.5" />
                  <span className="font-medium">{spot}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons - NO PRICES RULE ENFORCED */}
        <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
          {/* Primary CTA: "Book This Package" button opening WhatsApp */}
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book This Package</span>
          </a>

          {/* Secondary CTA: Call for Price */}
          <a
            href="tel:9370208843"
            className="w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-navy-800 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-navy" />
            <span>Call for Price</span>
          </a>
        </div>
      </div>
    </div>
  );
}
