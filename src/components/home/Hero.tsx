'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Eye, ShieldCheck, ArrowRight } from 'lucide-react';
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
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

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
      className="relative w-full min-h-screen bg-[#18171a] overflow-hidden flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 text-white"
    >
      {/* Rich ambient atmospheric stone gray & subtle terracotta lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[750px] bg-[#545358]/25 rounded-full blur-[200px]" />
        <div className="absolute top-20 right-1/4 w-[550px] h-[400px] bg-[#747476]/15 rounded-full blur-[170px]" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#c48b7e]/08 rounded-full blur-[150px]" />
      </div>

      {/* 3-ZONE EDITORIAL MAIN STAGE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* LEFT FLANK: EDITORIAL TYPOGRAPHY WITH SMOOTH REVEAL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-5 text-left z-20 max-w-md mx-auto lg:mx-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[9px] sm:text-[10px] font-space uppercase tracking-[0.25em] text-[#efebe8] w-fit shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>King&apos;s Cross Clinical Atelier</span>
          </div>

          <div className="space-y-0.5 sm:space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl xl:text-7xl text-white font-normal leading-[1.02] tracking-tight"
            >
              Natural
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-3xl sm:text-5xl xl:text-6xl font-light text-[#c48b7e] tracking-tight leading-[1.02]"
            >
              Refinement
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm text-[#a8a5a3] font-light leading-relaxed pt-0.5"
          >
            Doctor-led facial harmonisation and regenerative skin longevity, designed to elevate your authentic features with subtle, undetectable precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <a
              href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] text-[10px] sm:text-[11px] font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#c48b7e] hover:border-[#c48b7e] hover:text-white transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Book Consultation
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border border-white/15 text-[#a8a5a3] text-[10px] sm:text-[11px] font-space uppercase tracking-[0.2em] hover:border-white hover:text-white transition-all"
            >
              Treatments
            </a>
          </motion.div>
        </motion.div>

        {/* CENTERPIECE: ELEGANTLY CLOTHED COUTURE BEAUTY MUSE WITH ARCHITECTURAL TYPOGRAPHY LOCKED BEHIND HER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex items-center justify-center relative my-2 sm:my-4 lg:my-0"
        >
          {/* GIGANTIC CONDENSED TYPOGRAPHY BEHIND THE MUSE - LOCKED MATHEMATICALLY TO HER SHOULDERS */}
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen pointer-events-none select-none z-0 text-center overflow-hidden px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] sm:text-[16vw] font-black uppercase tracking-tight leading-none whitespace-nowrap block"
              style={{
                letterSpacing: '-0.03em',
                background: 'linear-gradient(180deg, #6c6970 0%, #46444a 50%, #201f22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.85))',
              }}
            >
              DIEZ AESTHETICS
            </motion.div>
          </div>

          <motion.div
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
            }}
            className="relative w-64 sm:w-80 md:w-[400px] lg:w-[460px] aspect-[3/4] mx-auto filter drop-shadow-[0_35px_80px_rgba(0,0,0,0.95)] z-10"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/images/hero_muse_rembg.webp"
                alt="Diez Aesthetics London - Natural Refinement Beauty Campaign"
                fill
                unoptimized
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 460px"
                className="object-contain object-bottom pointer-events-none"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT FLANK: CLINICAL DISTINCTION DOSSIER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 hidden lg:flex flex-col justify-center space-y-4 text-right z-20 max-w-xs ml-auto"
        >
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

          {/* Monthly Focus Glass Card */}
          <div className="rounded-2xl bg-[#222025]/85 backdrop-blur-xl border border-white/10 p-5 text-left space-y-2 hover:border-[#545358] transition-colors shadow-2xl">
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
        </motion.div>
      </div>

      {/* CRISP ARCHITECTURAL GROUNDING RIBBON (ZERO DANGLING TEXT / NO BLUR OVERLAY) */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#141316]/95 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="space-y-0.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
              <span className="text-[10px] uppercase font-space tracking-[0.25em] text-[#efebe8] font-semibold">
                LIMITED CLINICAL AVAILABILITY
              </span>
            </div>
            <p className="text-xs text-[#a8a5a3] font-light leading-relaxed">
              Personalised one-to-one consultations with Clinical Director Daniel Diez.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs text-[#a8a5a3] font-space">
            <span className="text-[#efebe8] font-medium">Doctor-led Clinic</span>
            <span className="text-white/20">•</span>
            <span>260 Pentonville Road, King&apos;s Cross N1 9JY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
