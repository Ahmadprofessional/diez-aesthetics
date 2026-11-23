'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01/04',
    title: 'Private Consultation',
    desc: 'Anatomy, skin health, and your personal aesthetic goals thoroughly reviewed by Daniel Diez. No rush, no pressure.',
    image: '/assets/images/why choose diez image.webp',
    tag: 'Pre-Treatment Assessment',
  },
  {
    step: '02/04',
    title: 'Bespoke Aesthetic Plan',
    desc: 'A tailored plan designed to harmonize your natural features rather than overpower them with artificial volume.',
    image: '/assets/images/anti-wrinkle.png',
    tag: 'Individualized Blueprint',
  },
  {
    step: '03/04',
    title: 'Precision Procedure',
    desc: 'Performed in a pristine, medical-grade King’s Cross setting using premium CE-marked products and conservative technique.',
    image: '/assets/images/skin-booster.png',
    tag: 'Clinical Treatment',
  },
  {
    step: '04/04',
    title: 'Dedicated Aftercare',
    desc: 'Comprehensive post-procedure guidance and direct clinician check-ins to ensure optimal cellular healing and longevity.',
    image: '/assets/images/dermal-fillers.png',
    tag: 'Ongoing Support',
  },
];

interface ClinicalJourneyProps {
  bookingUrl: string;
}

export function ClinicalJourney({ bookingUrl }: ClinicalJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="py-24 sm:py-32 bg-[#f7f5f3] text-[#1c1917] border-t border-b border-[#e5dfd8] relative overflow-hidden transition-colors duration-500">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#e8e4e0]/70 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space font-medium tracking-[0.25em] uppercase bg-[#ded8d2] text-[#545358] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>04 / THE CLINICAL PROCESS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-[1.12]">
            Informed Decisions Supported <br className="hidden sm:inline" />
            <span className="italic text-[#545358] font-normal">by Expert Guidance</span>
          </h2>
          <p className="font-space text-xs text-[#747476] font-light max-w-lg mx-auto uppercase tracking-wider">
            From initial consultation through to aftercare, every stage is guided by clinical rigor and artistic balance.
          </p>
        </motion.div>

        {/* 3-Column Editorial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column: Stage Label & Counter */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-2 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#545358] font-space font-semibold">
              STAGE {current.step}
            </span>
            <AnimatePresence mode="wait">
              <motion.h3
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]"
              >
                {current.title}
              </motion.h3>
            </AnimatePresence>
            <p className="text-[11px] uppercase tracking-wider text-[#747476] font-space">
              {current.tag}
            </p>
          </div>

          {/* Center Column: Framed Stage Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.08] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Narrative Card & Navigators */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left order-3">
            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-3">
              <p className="text-xs sm:text-sm text-[#545358] font-light leading-relaxed">
                {current.desc}
              </p>
              <div className="pt-2">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#3b3b3d] hover:text-[#545358] font-space uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="w-10 h-10 rounded-full border border-black/[0.1] bg-white text-[#3b3b3d] hover:bg-[#3b3b3d] hover:text-[#efebe8] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous clinical step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-space text-xs text-[#747476] font-medium tracking-widest">
                {current.step}
              </span>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-black/[0.1] bg-white text-[#3b3b3d] hover:bg-[#3b3b3d] hover:text-[#efebe8] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next clinical step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
