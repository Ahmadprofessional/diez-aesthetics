'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Eye, ShieldCheck, Star } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface HeroProps {
  content?: HomeContent['hero'];
}

export function Hero({ content }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Tilt on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-[#141316] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 text-white"
    >
      {/* Ambient atmospheric stone gray & subtle terracotta glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[700px] bg-[#545358]/18 rounded-full blur-[190px]" />
        <div className="absolute top-16 right-1/4 w-[500px] h-[350px] bg-[#c48b7e]/08 rounded-full blur-[160px]" />
      </div>

      {/* TOP STATUS BAR (Under header, subtle stone gray divider) */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 font-space text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#a8a5a3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
          <span>King&apos;s Cross London</span>
          <span className="text-white/20">•</span>
          <span className="text-[#efebe8]">Doctor-Led Clinical Atelier</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 font-space text-[11px] uppercase tracking-[0.2em] text-[#747476]">
          <span className="hover:text-white transition-colors">Bespoke Facial Harmonisation</span>
          <span className="text-white/20">•</span>
          <span className="hover:text-white transition-colors">Polynucleotides</span>
        </div>
      </div>

      {/* GIGANTIC ARCHITECTURAL CONDENSED TYPOGRAPHY BEHIND THE SUBJECT */}
      <div className="absolute top-[36%] sm:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[15vw] sm:text-[16vw] font-black uppercase tracking-tight leading-none whitespace-nowrap block"
          style={{
            letterSpacing: '-0.03em',
            background: 'linear-gradient(180deg, #545358 0%, #3b3b3d 50%, #1c1a19 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.8))',
          }}
        >
          DIEZ AESTHETICS
        </motion.div>
      </div>

      {/* 3-ZONE EDITORIAL MAIN STAGE (ZERO TEXT OVER HER SKIN) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT FLANK: HIGH-CONTRAST EDITORIAL TYPOGRAPHY */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left z-20 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-space uppercase tracking-[0.25em] text-[#efebe8] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>London Clinical Atelier</span>
          </div>

          <div className="space-y-1">
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl text-white font-normal leading-[1.02] tracking-tight">
              Natural
            </h1>
            <div className="font-serif italic text-4xl sm:text-5xl xl:text-6xl font-light text-[#c48b7e] tracking-tight leading-[1.02]">
              Refinement
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#a8a5a3] font-light leading-relaxed pt-1">
            Doctor-led facial harmonisation and regenerative skin longevity, designed to elevate your natural features with subtle, undetectable precision.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] text-[11px] font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#c48b7e] hover:border-[#c48b7e] hover:text-white transition-all shadow-lg"
            >
              Book Consultation
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/15 text-[#a8a5a3] text-[11px] font-space uppercase tracking-[0.2em] hover:border-white hover:text-white transition-all"
            >
              Treatments
            </a>
          </div>
        </div>

        {/* CENTERPIECE: RADIANT BEAUTY MUSE (SKIN IS 100% UNTOUCHED, ZERO LETTERS ON FACE OR CHEST) */}
        <div className="lg:col-span-4 flex items-center justify-center relative">
          <motion.div
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
            }}
            className="relative w-72 sm:w-88 md:w-[420px] lg:w-[460px] aspect-[3/4] mx-auto filter drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] z-10"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/images/hero_terracotta_muse.webp"
                alt="Diez Aesthetics London - Warm Natural Beauty Campaign"
                fill
                unoptimized
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 420px, 460px"
                className="object-contain object-bottom pointer-events-none"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT FLANK: CLINICAL DISTINCTION DOSSIER */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-center space-y-4 text-right z-20 max-w-xs ml-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-[10px] uppercase font-space tracking-widest text-[#efebe8] ml-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-[#747476]" />
            <span>Doctor-Led Excellence</span>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-serif text-white">
              5.0 <span className="text-[#c48b7e]">★</span>
            </div>
            <p className="text-[10px] font-space uppercase tracking-[0.2em] text-[#747476]">
              128 Verified Patient Reviews
            </p>
            <p className="text-xs text-[#a8a5a3] font-light leading-relaxed pt-1">
              Flawless five-star clinical reputation in King&apos;s Cross &amp; Central London.
            </p>
          </div>

          {/* Monthly Focus Glass Card in Client's Slate Gray Tone */}
          <div className="rounded-2xl bg-[#1e1d21]/80 backdrop-blur-xl border border-white/10 p-5 text-left space-y-2 hover:border-[#545358] transition-colors shadow-2xl">
            <span className="text-[10px] uppercase font-space tracking-widest text-[#c48b7e] font-semibold block">
              THIS MONTH&apos;S EXCLUSIVE
            </span>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Consult with Daniel Diez for facial harmonisation and polynucleotides.
            </p>
            <a
              href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#efebe8] hover:text-[#c48b7e] font-semibold pt-1 transition-colors"
            >
              <span>Reserve Consultation</span>
              <Eye className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: EDITORIAL LOCATION & SUB-INFO */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-end justify-between pt-4 border-t border-white/[0.06] max-w-7xl mx-auto w-full">
        <div className="md:col-span-6 space-y-1 text-center md:text-left">
          <span className="text-[10px] uppercase font-space tracking-[0.25em] text-[#747476] font-semibold block">
            LIMITED CLINICAL AVAILABILITY
          </span>
          <p className="text-xs text-[#a8a5a3] font-light leading-relaxed max-w-sm mx-auto md:mx-0">
            Personalised one-to-one consultations with Clinical Director Daniel Diez.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 pt-1 text-[11px] text-[#747476] font-space">
            <span className="text-[#efebe8]">✦ Doctor-led Clinic</span>
            <span>•</span>
            <span>King&apos;s Cross N1 9JY</span>
          </div>
        </div>

        {/* Mobile / Tablet Quick View */}
        <div className="md:col-span-6 lg:hidden flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] text-xs font-space uppercase tracking-widest font-semibold text-center hover:bg-[#c48b7e] transition-colors"
          >
            Book Consultation
          </a>
          <a
            href="#treatments"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 text-[#a8a5a3] text-xs font-space uppercase tracking-widest text-center hover:text-white transition-colors"
          >
            View Treatments
          </a>
        </div>
      </div>
    </section>
  );
}