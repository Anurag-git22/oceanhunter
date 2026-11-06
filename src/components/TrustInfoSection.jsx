import React, { useState } from 'react';
import { KNOW_BEFORE_YOU_GO, FAQS } from '../data';
import { 
  ChevronDown, 
  HelpCircle, 
  ShieldAlert, 
  Info
} from 'lucide-react';

export default function TrustInfoSection() {
  // Know Before You Go accordion state (first item open by default)
  const [openKnowItem, setOpenKnowItem] = useState('id-proof');

  // FAQ accordion state (first item open by default)
  const [openFaq, setOpenFaq] = useState('faq-1');

  const toggleKnow = (id) => {
    setOpenKnowItem(prev => (prev === id ? null : id));
  };

  const toggleFaq = (id) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <section id="info" className="py-20 sm:py-28 bg-slate-100/80 border-t border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 text-navy font-semibold text-xs sm:text-sm uppercase tracking-widest bg-navy/5 border border-navy/15 px-3.5 py-1 rounded-full mb-3">
            <Info className="w-4 h-4 text-brandRed" />
            <span>Essential Safari Guidelines</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy leading-none">
            Trust & <span className="text-brandRed">Safari Info</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light">
            Everything you need to know before stepping aboard Ocean Hunter in Devbag.
          </p>
        </div>

        {/* 2-Column Accordion: Know Before You Go (Left) & FAQs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: "Know Before You Go" Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-brandRed">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-navy">
                  Know Before You Go
                </h3>
                <p className="text-xs text-slate-500">Crucial tips for a safe & smooth coastal journey</p>
              </div>
            </div>

            <div className="space-y-3">
              {KNOW_BEFORE_YOU_GO.map((item) => {
                const isOpen = openKnowItem === item.id;
                return (
                  <div 
                    key={item.id}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen ? 'border-brandRed/30 bg-red-50/30' : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleKnow(item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-3 focus:outline-none"
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isOpen ? 'bg-brandRed' : 'bg-slate-300'}`} />
                        <span className="font-heading text-base sm:text-lg font-bold uppercase text-navy tracking-wide">
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-brandRed' : ''
                      }`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150">
                        <p className="font-medium text-slate-800 mb-1">{item.summary}</p>
                        <p className="font-light">{item.details}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: 5-Question FAQ Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-oceanTeal">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-navy">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-500">Fast answers to popular guest questions</p>
              </div>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen ? 'border-navy/30 bg-navy-50/30' : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-3 focus:outline-none"
                    >
                      <span className="font-medium text-xs sm:text-sm text-navy tracking-tight">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-navy' : ''
                      }`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150 font-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
