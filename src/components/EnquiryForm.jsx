import React, { useState } from 'react';
import { Calendar, Users, Phone, User, Compass, Navigation, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, PACKAGES } from '../data';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    people: '2',
    packageId: 'basic',
    specialNotes: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedPkg = PACKAGES.find(p => p.id === formData.packageId);
    const packageName = selectedPkg ? selectedPkg.title : formData.packageId;

    // Build prefilled WhatsApp message
    const messageLines = [
      `Hi Ocean Hunter, I would like to enquire about a boat safari!`,
      ``,
      `*Booking Enquiry Details:*`,
      `• *Name:* ${formData.name || 'Not provided'}`,
      `• *Phone:* ${formData.phone || 'Not provided'}`,
      `• *Preferred Date:* ${formData.date || 'Flexible / Today'}`,
      `• *Number of People:* ${formData.people}`,
      `• *Selected Package:* ${packageName}`,
      formData.specialNotes ? `• *Notes:* ${formData.specialNotes}` : null,
      ``,
      `Please let me know availability and boarding time at Devbag.`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-20 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-brandRed font-semibold text-xs sm:text-sm uppercase tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full mb-3">
            <Calendar className="w-4 h-4" />
            <span>Instant Reservation</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-navy leading-none">
            Quick Safari <span className="text-brandRed">Enquiry</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light">
            Fill your trip details below. It instantly prepares your booking request directly on WhatsApp for immediate captain confirmation.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Subtle Accent Glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-oceanTeal/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brandRed/10 rounded-full blur-2xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Patil"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm"
                  >
                    <option value="1">1 Person (Solo)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3-5">3 - 5 Persons (Small Family)</option>
                    <option value="6-10">6 - 10 Persons (Group)</option>
                    <option value="10+">10+ Persons (Large Tour / Charter)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Package Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                Select Boating Package or Stay
              </label>
              <div className="relative">
                <Compass className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm font-medium"
                >
                  <option value="basic">Basic Package (45 Minutes • Tsunami Island & Mini Kerala)</option>
                  <option value="semi-premium">Semi Premium (1 hr 30 min • Bhogve & Dolphin Point)</option>
                  <option value="lighthouse-safari">Lighthouse Safari (Most Popular / Premium • 2 hr 30 min)</option>
                  <option value="resort-stay">Resort & Room Stay (Devbag beach stay + boat tour)</option>
                  <option value="custom">Custom / Private Family Boat Charter</option>
                </select>
              </div>
            </div>

            {/* Optional Special Requests */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                Special Requests or Notes (Optional)
              </label>
              <input
                type="text"
                name="specialNotes"
                placeholder="e.g. Interested in morning dolphin sighting or private boat"
                value={formData.specialNotes}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandRed/30 focus:border-brandRed transition-all shadow-sm"
              />
            </div>

            {/* Actions Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                aria-label="Submit enquiry on WhatsApp"
                title="Submit enquiry on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>Submit on WhatsApp</span>
              </button>

              {/* Get Directions Button */}
              <a
                href={BRAND.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-200 hover:bg-slate-300 text-navy-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors border border-slate-300"
              >
                <Navigation className="w-4 h-4 text-brandRed" />
                <span>Get Directions to Devbag</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center sm:text-left flex items-center space-x-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-oceanTeal flex-shrink-0" />
              <span>Instant direct response from Ocean Hunter boat captains. No upfront payment required.</span>
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}
