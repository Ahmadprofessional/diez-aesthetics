'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What are polynucleotides and how do they work for the under-eye area?',
    answer:
      'Polynucleotides are natural, highly purified biopolymer fractions derived from salmon DNA (PDRN). Unlike dermal fillers which simply add volume beneath the skin, polynucleotides communicate directly with your cells (fibroblasts) to stimulate natural collagen, boost elastin, and enhance microcirculation. This thickens the delicate under-eye dermis, visibly reducing dark circles, hollowness, and crepey texture without any artificial puffiness.',
  },
  {
    question: 'How do polynucleotides differ from traditional tear trough dermal fillers?',
    answer:
      'Tear trough fillers use synthetic hyaluronic acid gel to physically prop up sunken hollows. However, fillers carry a well-known risk of the "Tyndall effect" (a blueish hue) and persistent fluid puffiness around the eyes. Polynucleotides are completely fluid-free cellular biostimulators—they regenerate and thicken your own skin tissue naturally, making them the safest and most natural solution for tired under-eyes.',
  },
  {
    question: 'How many sessions will I need for noticeable results?',
    answer:
      'Clinical studies and our in-clinic experience recommend an initial course of 3 sessions spaced 3 to 4 weeks apart. Because polynucleotides trigger true cellular regeneration, initial hydration and radiance appear within 10 to 14 days, with full structural collagen remodeling peaking at 8 to 12 weeks. Results last 6 to 9 months, maintained with a single top-up.',
  },
  {
    question: 'Does polynucleotide injection hurt?',
    answer:
      'Patient comfort is our top priority. We apply a strong, medical-grade topical numbing cream to the treatment area for 20 minutes prior to injection. The procedure is performed using ultra-fine micro-needles or a soft cannula. Most patients rate the discomfort as minimal (around 2 out of 10).',
  },
  {
    question: 'What is the downtime and recovery process?',
    answer:
      'Downtime is minimal. Immediately following your appointment, you may notice small raised bumps (papules) where the product was deposited under the skin. These are completely normal and typically absorb within 24 to 48 hours. Mild redness or minor bruising can occur but is easily concealed the next day.',
  },
  {
    question: 'Are polynucleotides safe? Who is suitable?',
    answer:
      'Polynucleotides are CE-marked, biocompatible, and thoroughly purified, presenting an exceptionally high safety profile with virtually zero risk of allergic reaction. However, because the active ingredient is derived from marine DNA, this treatment is not suitable for individuals with a severe fish or salmon allergy, or for women who are pregnant or breastfeeding.',
  },
  {
    question: 'Where is Diez Aesthetics located and how do I book?',
    answer:
      'Our boutique clinic is located at 260 Pentonville Road, King’s Cross, London N1 9JY—just a 4-minute walk from King’s Cross St. Pancras Station. You can book directly online via our secure clinical portal (FacesConsent) or message our clinical team via WhatsApp.',
  },
];

export function PolynucleotideFAQ() {
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
    <section className="py-24 bg-[#efebe8] border-t border-[#747476]/15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#747476]/20 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-semibold text-[#545358] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>PATIENT QUESTIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1a19] tracking-tight">
            Frequently Asked <span className="italic text-[#545358]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-xl mx-auto">
            Everything you need to know about polynucleotide treatments, under-eye regeneration, and recovery in London.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#747476]/20 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1c1a19] font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#747476]/20 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1c1a19] text-white' : 'bg-white text-[#1c1a19]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-[#57534e] text-sm sm:text-base leading-relaxed border-t border-[#747476]/10 pt-4 font-light">
                        {faq.answer}
                      </div>
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
