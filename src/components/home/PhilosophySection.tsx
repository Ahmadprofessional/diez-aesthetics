'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck } from 'lucide-react';

interface PhilosophySectionProps {
  bioQuote: string;
}

export function PhilosophySection({ bioQuote }: PhilosophySectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#f7f5f3] text-[#1c1917] border-t border-b border-[#e5dfd8] relative overflow-hidden transition-colors duration-500">
      {/* Background ambient cashmere warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8e4e0]/60 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#545358]/08 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>02 / CLINICAL SANCTUARY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight">
            Craft Over <span className="italic text-[#545358] font-normal">Volume</span>
          </h2>
          <p className="font-space text-xs text-[#747476] uppercase tracking-[0.2em] pt-1">
            Bespoke Regenerative Aesthetics • Doctor-led Care
          </p>
          <p className="text-sm sm:text-base text-[#545358] font-light max-w-xl mx-auto leading-relaxed pt-2">
            &ldquo;{bioQuote}&rdquo;
          </p>
        </motion.div>

        {/* Centerpiece Image & Key Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Main Visual Box - Slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.08] group">
              <Image
                src="/assets/images/clinic_treatment_suite.webp"
                alt="Diez Aesthetics Private Clinical Sanctuary London"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white">
                <p className="font-serif italic text-lg text-white">Private Clinical Sanctuary</p>
                <p className="text-zinc-300 text-[11px] font-space tracking-wider">260 Pentonville Road, King&apos;s Cross</p>
              </div>
            </div>
          </motion.div>

          {/* Minimalist Stats Counter on Right - Slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-7 md:space-y-0 pl-0 md:pl-6 text-center md:text-left pt-4 md:pt-0"
          >
            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-1">
                <span>5.0</span>
                <span className="text-[#eab308] text-xl sm:text-3xl">★</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase font-space tracking-wider text-[#3b3b3d] font-semibold leading-tight">
                Google Verified
              </p>
              <p className="hidden md:block text-[11px] text-[#747476] font-light">
                Consistent 5-star patient satisfaction
              </p>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-1">
                <span>3+</span>
                <span className="text-[#747476] text-lg sm:text-2xl font-light">Yrs</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase font-space tracking-wider text-[#3b3b3d] font-semibold leading-tight">
                Precision
              </p>
              <p className="hidden md:block text-[11px] text-[#747476] font-light">
                Doctor-led medical experience
              </p>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-1">
                <span>100%</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase font-space tracking-wider text-[#3b3b3d] font-semibold leading-tight">
                Unretouched
              </p>
              <p className="hidden md:block text-[11px] text-[#747476] font-light">
                Honest, unfiltered photographic evidence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
