'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'How do I choose the right aesthetic treatment for my concerns?',
    answer:
      'We begin every journey with an in-depth clinical consultation. Our Clinical Director assesses your unique facial anatomy, skin quality, and aesthetic goals to recommend a personalized plan that enhances your natural features subtly and proportionally.',
  },
  {
    question: 'What is the deposit and cancellation policy?',
    answer:
      'A deposit is required to secure all clinical appointments via our secure booking portal (FacesConsent). We operate a 48-hour cancellation and rescheduling policy to respect clinician time and other patients waiting for appointments.',
  },
  {
    question: 'What are polynucleotides and how do they differ from dermal fillers?',
    answer:
      'Unlike dermal fillers which provide structural volume, polynucleotides are regenerative biostimulators derived from natural DNA fragments. They stimulate cellular repair, boost collagen production, improve microcirculation, and restore thin, crepey skin—especially around the delicate under-eye tear troughs.',
  },
  {
    question: 'Is there downtime after anti-wrinkle or skin booster injections?',
    answer:
      'Most injectable treatments involve minimal downtime. Minor redness or small localized bumps typically resolve within a few hours to 24 hours. Full post-treatment aftercare guidelines and emergency contacts are provided at every appointment.',
  },
  {
    question: 'Where is the clinic located and how do I get there?',
    answer:
      'Diez Anti-Aging Aesthetics is conveniently located at 260 Pentonville Road, London N1 9JY, just a 4-minute walk from King’s Cross St. Pancras station, with excellent Underground and National Rail links.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-black/[0.05]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.25em] uppercase bg-black/[0.04] text-[#8c6b2d] border border-black/[0.06]">
            <Sparkles className="w-3.5 h-3.5 text-[#b89047]" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#1c1917] leading-tight">
            Frequently Asked <span className="font-serif italic text-[#8c6b2d] font-normal">Questions</span>
          </h2>
          <p className="text-sm text-[#57534e] font-light">
            Everything you need to know about your consultation, procedure, and aftercare.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#1c1917]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#8c6b2d] border-[#8c6b2d]/30 bg-[#FAF8F5]' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 pt-1 border-t border-black/[0.04] text-xs sm:text-sm text-[#57534e] font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
