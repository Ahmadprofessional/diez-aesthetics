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
                ? 'bg-white border-[#8c6b2d]/30 shadow-[0_15px_35px_rgba(0,0,0,0.06)]'
                : 'bg-white/80 border-black/[0.06] hover:border-black/15 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8c6b2d] font-semibold">
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
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1917]">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div
                className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'border-[#8c6b2d] text-[#8c6b2d] rotate-180 bg-[#FAF8F5]'
                    : 'border-black/10 text-zinc-400 bg-white'
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
                  className="px-6 sm:px-7 pb-7 pt-2 border-t border-black/[0.05] space-y-6"
                >
                  <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8c6b2d]">
                      Common Treatment Areas &amp; Targets
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-light bg-[#FAF8F5] border border-black/[0.06] text-[#44403c]"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#8c6b2d]" />
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={service.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1c1917] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#8c6b2d] transition-all shadow-sm"
                    >
                      <Calendar className="w-4 h-4 text-[#ded5c6]" />
                      <span>{service.cta.label}</span>
                    </a>

                    <a
                      href="/prices/"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#78716c] hover:text-[#1c1917] transition-colors"
                    >
                      <span>View Pricing &amp; Packages</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8c6b2d]" />
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
