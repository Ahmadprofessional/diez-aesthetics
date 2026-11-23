'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Languages, Award, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';

export function AboutDanielSection() {
  return (
    <section id="daniel" className="py-24 sm:py-32 bg-[#eae5e0] text-[#1c1917] relative overflow-hidden border-t border-b border-[#dad3cc] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#ded8d2]/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#545358]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Daniel Portrait in Editorial Architectural Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer decorative card frame with luxury shadow */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-black/[0.08] bg-white group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/assets/images/danial-image.png"
                    alt="Daniel Diez - Clinical Director Diez Aesthetics London"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif italic text-2xl leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Daniel Diez
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-white/90 font-space font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] pt-1">
                    Clinical Director &amp; Founder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Header / Eyebrow */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-[#ded8d2] text-[#545358] border border-black/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
                <span>03 / CLINICAL LEADERSHIP</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-light text-[#1c1917] tracking-tight leading-[1.08]">
                NATURAL. BALANCED. <br />
                <span className="font-serif italic font-normal text-[#545358]">
                  BEAUTIFULLY YOU.
                </span>
              </h2>
            </div>

            {/* Verbatim Bio Copy from Client Reference */}
            <div className="space-y-4 text-[#545358] font-light text-sm sm:text-base leading-relaxed">
              <p>
                As Clinical Director of Diez Aesthetics, my goal is simple — to help my patients feel confident, refreshed, and naturally enhanced.
              </p>
              <p>
                I specialise in facial harmonisation, focusing on subtle, balanced results that elevate your features without ever looking overdone.
              </p>
              <p>
                With three years of injecting experience, I have developed a deep passion for regenerative treatments such as polynucleotides and medical microneedling. I strongly believe that true aesthetic medicine is about improving skin quality, stimulating natural regeneration, and creating long-term, healthy results — not just temporary changes.
              </p>
            </div>

            {/* Three Refined Luxury Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3 hover:border-[#3b3b3d] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center shrink-0 border border-black/[0.06] text-[#3b3b3d]">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1c1917] tracking-wide uppercase font-space">
                    Bilingual
                  </p>
                  <p className="text-[11px] text-[#747476] font-light">
                    English &amp; Spanish consultations
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3 hover:border-[#3b3b3d] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center shrink-0 border border-black/[0.06] text-[#3b3b3d]">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1c1917] tracking-wide uppercase font-space">
                    Doctor-Led
                  </p>
                  <p className="text-[11px] text-[#747476] font-light">
                    Safety &amp; complications trained
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3 hover:border-[#3b3b3d] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center shrink-0 border border-black/[0.06] text-[#3b3b3d]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1c1917] tracking-wide uppercase font-space">
                    Regenerative
                  </p>
                  <p className="text-[11px] text-[#747476] font-light">
                    DNA polynucleotide specialist
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3b3b3d] text-[#efebe8] text-xs font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#545358] hover:text-white transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Consultation with Daniel</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/about/"
                className="inline-flex items-center gap-1.5 text-xs font-space font-medium uppercase tracking-wider text-[#545358] hover:text-[#1c1917] py-2 border-b border-[#747476]/30 hover:border-[#1c1917] transition-all"
              >
                <span>Read Full Biography &amp; Credentials</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
