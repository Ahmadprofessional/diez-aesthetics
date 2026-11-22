'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01/04',
    title: 'Private Consultation',
    desc: 'Anatomy, skin health, and your personal goals thoroughly reviewed. No rush, no pressure.',
    image: '/assets/images/why choose diez image.webp',
    tag: 'Pre-Treatment Assessment',
  },
  {
    step: '02/04',
    title: 'Bespoke Aesthetic Plan',
    desc: 'A tailored plan designed to harmonize your natural features rather than overpower them.',
    image: '/assets/images/anti-wrinkle.png',
    tag: 'Individualized Blueprint',
  },
  {
    step: '03/04',
    title: 'Precision Procedure',
    desc: 'Performed in a pristine, medical-grade setting using premium CE-marked products.',
    image: '/assets/images/skin-booster.png',
    tag: 'Clinical Treatment',
  },
  {
    step: '04/04',
    title: 'Dedicated Aftercare',
    desc: 'Comprehensive post-procedure guidance and direct clinician check-ins to ensure optimal healing.',
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
    <section className="py-24 sm:py-32 bg-[#0c0b0e] text-white border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#c48b7e]/10 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space font-medium tracking-[0.25em] uppercase bg-white/[0.06] text-[#c48b7e] border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
            <span>THE CLINICAL PROCESS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.12]">
            Informed Decisions Supported <br className="hidden sm:inline" />
            <span className="italic text-[#c48b7e] font-normal">by Expert Guidance</span>
          </h2>
          <p className="font-space text-xs text-zinc-400 font-light max-w-lg mx-auto uppercase tracking-wider">
            From initial consultation through to aftercare, every stage is guided by clinical rigor and artistic balance.
          </p>
        </div>

        {/* 3-Column Editorial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column: Stage Label & Counter */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-2 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c48b7e] font-space font-semibold">
              STAGE {current.step}
            </span>
            <AnimatePresence mode="wait">
              <motion.h3
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-2xl sm:text-3xl font-normal text-white"
              >
                {current.title}
              </motion.h3>
            </AnimatePresence>
            <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-space">
              {current.tag}
            </p>
          </div>

          {/* Center Column: Framed Stage Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#161418] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-space tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                {current.step}
              </div>
            </div>
          </div>

          {/* Right Column: Stage Description & Controls */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-6 order-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.desc}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed"
              >
                {current.desc}
              </motion.p>
            </AnimatePresence>

            {/* Stepper Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-1.5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStep === idx
                        ? 'w-7 bg-[#c48b7e]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-[#161418] hover:border-[#c48b7e] hover:bg-[#c48b7e]/10 text-white flex items-center justify-center transition-all active:scale-95"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-[#161418] hover:border-[#c48b7e] hover:bg-[#c48b7e]/10 text-white flex items-center justify-center transition-all active:scale-95"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E5A93C] hover:text-white uppercase font-space tracking-wider font-semibold transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
