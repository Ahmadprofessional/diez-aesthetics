'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Star, Award, ShieldCheck } from 'lucide-react';

interface PhilosophySectionProps {
  bioQuote: string;
}

export function PhilosophySection({ bioQuote }: PhilosophySectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#100e13] text-white border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#c48b7e]/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#E5A93C]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Minimalist Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-white/[0.06] text-[#c48b7e] border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Craft Over <span className="italic text-[#c48b7e] font-normal">Volume</span>
          </h2>
          <p className="font-space text-xs text-zinc-400 uppercase tracking-[0.2em] pt-1">
            Bespoke Regenerative Aesthetics • Doctor-led Care
          </p>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto leading-relaxed pt-2">
            &ldquo;{bioQuote}&rdquo;
          </p>
        </div>

        {/* Centerpiece Image & Key Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Main Visual Box */}
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#161418] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 group">
              <Image
                src="/assets/images/why choose diez image.webp"
                alt="Diez Aesthetics Private Clinical Sanctuary London"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white">
                <p className="font-serif italic text-lg text-white">Private Clinical Sanctuary</p>
                <p className="text-zinc-400 text-[11px] font-space tracking-wider">260 Pentonville Road, King&apos;s Cross</p>
              </div>
            </div>
          </div>

          {/* Minimalist Stats Counter on Right */}
          <div className="md:col-span-5 space-y-7 pl-0 md:pl-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>5.0</span>
                <span className="text-[#E5A93C] text-3xl">★</span>
              </div>
              <p className="text-xs uppercase font-space tracking-wider text-zinc-300 font-medium">
                Google Verified Reviews
              </p>
              <p className="text-[11px] text-zinc-400 font-light">
                Consistent 5-star patient satisfaction
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>3+</span>
                <span className="text-zinc-400 text-2xl font-light">Years</span>
              </div>
              <p className="text-xs uppercase font-space tracking-wider text-zinc-300 font-medium">
                Injecting Experience
              </p>
              <p className="text-[11px] text-zinc-400 font-light">
                Specialising in regenerative aesthetics
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>4</span>
                <span className="text-zinc-400 text-2xl font-light">Min</span>
              </div>
              <p className="text-xs uppercase font-space tracking-wider text-zinc-300 font-medium">
                From King&apos;s Cross St. Pancras
              </p>
              <p className="text-[11px] text-zinc-400 font-light">
                Central London transit hub proximity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
