'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { TreatmentsContent } from '@/types/content';

interface TreatmentAccordionProps {
  services: TreatmentsContent['services'];
}

export function TreatmentAccordion({ services }: TreatmentAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {services.map((service, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={service.slug}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#747476]/30 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                : 'bg-white/90 border-[#747476]/15 hover:border-[#747476]/40 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="font-space text-xs uppercase tracking-widest text-[#747476] font-semibold">
                  0{idx + 1}
                </span>
                <div className="flex items-center gap-3">
                  {service.icon && (
                    <div className="relative w-7 h-7 shrink-0 opacity-80">
                      <Image
                        src={service.icon}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="28px"
                      />
                    </div>
                  )}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1a19]">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div
                className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'border-[#3b3b3d] text-white bg-[#3b3b3d] rotate-180'
                    : 'border-[#747476]/20 text-[#747476] bg-white'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 sm:px-7 pb-7 pt-2 border-t border-[#747476]/10 space-y-6"
                >
                  <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-space tracking-wider font-semibold text-[#747476]">
                      Common Treatment Areas &amp; Targets
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-light bg-[#efebe8] border border-[#747476]/15 text-[#1c1a19]"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#545358]" />
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {service.slug === 'polynucleotides' && (
                      <a
                        href="/treatments/polynucleotides/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1a19] hover:bg-black text-white text-xs font-space uppercase tracking-wider font-semibold transition-all shadow-md"
                      >
                        <span>View Polynucleotides Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#dcd8d4]" />
                      </a>
                    )}

                    <a
                      href={service.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3b3b3d] hover:bg-[#545358] text-white text-xs font-space uppercase tracking-wider font-semibold transition-all shadow-sm"
                    >
                      <Calendar className="w-4 h-4 text-[#545358]" />
                      <span>{service.cta.label}</span>
                    </a>

                    <a
                      href="/prices/"
                      className="inline-flex items-center gap-1.5 text-xs font-space uppercase tracking-wider font-semibold text-[#545358] hover:text-[#1c1a19] transition-colors"
                    >
                      <span>View Pricing &amp; Packages</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#545358]" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}