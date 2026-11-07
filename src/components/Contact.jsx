import React from 'react';
import { Phone, MapPin, Compass, Navigation, Clock, UserCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, MAP } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 text-brandRed font-semibold text-xs sm:text-sm uppercase tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full mb-3">
            <Navigation className="w-4 h-4" />
            <span>Connect & Reserve</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy leading-none">
            Plan Your <span className="text-brandRed">Safari Tour</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-light">
            Directly connect with our boat captains for today's tides, weather, and instant departures.
          </p>
        </div>

        {/* Contact Layout: Left Details, Right Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Phone Cards & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Captain Contacts */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-navy" />
                <span>Authorized Tour Coordinators</span>
              </h3>

              {BRAND.contacts.map((contact, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-sm hover:border-navy/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-xl font-bold uppercase text-navy">
                      {contact.name}
                    </h4>
                    <span className="text-[11px] font-medium text-oceanTeal-dark bg-teal-50 px-2.5 py-0.5 rounded-full">
                      Devbag Safari
                    </span>
                  </div>

                  {/* Tap-to-call phone numbers */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {contact.phones.map((phone, pIdx) => (
                      <a
                        key={pIdx}
                        href={`tel:${phone}`}
                        className="inline-flex items-center space-x-1.5 bg-slate-100 hover:bg-navy hover:text-white text-navy font-semibold text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors border border-slate-200/80"
                        title={`Tap to call ${phone}`}
                      >
                        <Phone className="w-3.5 h-3.5 text-brandRed" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Primary WhatsApp Booking Action */}
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                aria-label="Book Directly on WhatsApp"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>Book Directly on WhatsApp</span>
              </a>
            </div>

            {/* Address & Timings */}
            <div className="bg-navy rounded-2xl p-6 text-white space-y-4 shadow-lg">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brandRed flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Location</h4>
                  <p className="text-sm font-medium text-white mt-0.5">
                    {BRAND.address}
                  </p>
                  <a
                    href={MAP.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-oceanTeal-light hover:text-white font-semibold underline underline-offset-2 transition-colors mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Clock className="w-5 h-5 text-oceanTeal-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Safari Operating Hours</h4>
                  <p className="text-sm font-medium text-white mt-0.5">
                    6:30 AM to 6:30 PM (Daily, Subject to Tide)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 h-full">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[380px] sm:h-[480px] lg:h-full min-h-[400px] relative">
              <iframe
                title="Ocean Hunter location map"
                src={MAP.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md max-w-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brandRed animate-ping"></span>
                  <p className="text-xs font-bold uppercase text-navy">Boarding Point</p>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Devbag Sangam & Beach, Malvan
                </p>
              </div>

              {/* Open in Google Maps Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={MAP.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-navy font-semibold text-xs sm:text-sm py-2 px-4 rounded-xl shadow-lg border border-slate-200 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                  aria-label="Open in Google Maps"
                >
                  <Navigation className="w-4 h-4 text-brandRed" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
