'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Languages, Award, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';

export function AboutDanielSection() {
  return (
    <section id="daniel" className="py-24 sm:py-32 bg-[#0c0b0e] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#545358]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c48b7e]/12 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Danial Portrait in Editorial Architectural Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer decorative card frame with dark luxury shadow */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/10 bg-[#161418] group">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <p className="font-serif italic text-xl leading-tight">Daniel Diez</p>
                    <p className="text-[11px] uppercase tracking-wider text-[#c48b7e] font-space font-medium">
                      Clinical Director &amp; Founder
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#c48b7e]" />
                  </div>
                </div>
              </div>

              {/* Floating luxury credential tag */}
              <div className="hidden sm:flex absolute -bottom-5 -right-4 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#1e1d21]/90 backdrop-blur-xl shadow-2xl border border-white/15 text-xs text-white">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c48b7e] animate-pulse" />
                <span className="font-space font-medium tracking-wide">Consultations Open</span>
                <span className="text-[#a8a5a3] font-space text-[11px]">King&apos;s Cross</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header / Eyebrow */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-white/[0.06] text-[#c48b7e] border border-white/10">
                <span>ABOUT DANIEL • CLINICAL DIRECTOR</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
                NATURAL. BALANCED. <br />
                <span className="font-serif italic font-normal text-[#c48b7e]">
                  BEAUTIFULLY YOU.
                </span>
              </h2>
            </div>

            {/* Verbatim Bio Copy from Client Reference */}
            <div className="space-y-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
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

            {/* Three Refined Luxury Dark Glass Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#161418] border border-white/10 shadow-lg flex items-center gap-3 hover:border-[#545358] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/10 text-[#c48b7e]">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white tracking-wide uppercase font-space">
                    Bilingual
                  </p>
                  <p className="text-[11px] text-[#a8a5a3] font-light">
                    English &amp; Spanish Spoken
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#161418] border border-white/10 shadow-lg flex items-center gap-3 hover:border-[#545358] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/10 text-[#747476]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white tracking-wide uppercase font-space">
                    3+ Years
                  </p>
                  <p className="text-[11px] text-[#a8a5a3] font-light">
                    Injecting Experience
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#161418] border border-white/10 shadow-lg flex items-center gap-3 hover:border-[#545358] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/10 text-[#efebe8]">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white tracking-wide uppercase font-space">
                    Regenerative
                  </p>
                  <p className="text-[11px] text-zinc-400 font-light">
                    Cellular Repair Approach
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/about/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#0f0e11] hover:bg-[#c48b7e] hover:text-black font-space font-semibold text-xs uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white hover:border-[#c48b7e] hover:bg-[#c48b7e]/10 font-space font-medium text-xs uppercase tracking-[0.2em] transition-all"
              >
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
