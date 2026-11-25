'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  Award,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { PolynucleotideFAQ } from './PolynucleotideFAQ';

const PolynucleotideComparisonSlider = dynamic(
  () =>
    import('./PolynucleotideComparisonSlider').then(
      (mod) => mod.PolynucleotideComparisonSlider
    ),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
    ),
  }
);

export function PolynucleotidesLandingClient() {
  const bookingUrl =
    'https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio';
  const whatsappUrl = 'https://wa.link/l51u63';

  return (
    <div className="bg-[#141316] text-[#efebe8] min-h-screen selection:bg-[#545358] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: EDITORIAL HAUTE-COUTURE HERO (ABOVE THE FOLD)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#18171a] via-[#141316] to-[#121113]">
        {/* Ambient atmospheric cashmere & bronze lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[500px] bg-[#545358]/20 rounded-full blur-[180px]" />
          <div className="absolute top-10 right-1/4 w-[450px] h-[350px] bg-[#747476]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Flank: Haute Couture Editorial Typography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-4 text-left"
            >
              {/* Monospaced Section Anchor */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-space uppercase tracking-[0.22em] text-[#dcd8d4] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>REGENERATIVE MEDICINE • KING’S CROSS LONDON</span>
              </div>

              {/* Sculpted Headline */}
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
                  Natural Under-Eye &amp; Tear Trough<br />
                  <span className="italic font-normal text-[#dcd8d4]">
                    Polynucleotides Treatment
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-white/75 font-light max-w-xl leading-relaxed">
                Practitioner-led cellular salmon DNA biostimulation to soften hollows, brighten persistent dark circles, and restore delicate periorbital skin.
              </p>

              {/* Minimal Trust Indicator */}
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5 bg-white/05 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm text-[11px]">
                  <div className="flex text-[#eab308]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-white">5.0 Google Rating</span>
                  <span className="text-zinc-400">• King’s Cross N1</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Insured &amp; Complications Trained</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white text-[#18171a] text-xs font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#efebe8] transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group text-center"
                >
                  <span>Book Clinical Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/[0.04] text-white text-xs font-space uppercase tracking-[0.2em] font-medium border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </motion.div>

            {/* Right Flank: Editorial Portrait in Architectural Beveled Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                {/* Architectural Frame with Subtle Glow */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-white/05 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                  <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/4.2] w-full">
                    <Image
                      src="/assets/images/polynucleotides-hero.jpg"
                      alt="Polynucleotide Under-Eye Rejuvenation Editorial Portrait Diez Aesthetics London"
                      fill
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Bottom Metadata Badges */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-serif italic text-base sm:text-lg text-white">
                          Periorbital Rejuvenation
                        </span>
                        <span className="text-[9px] font-space uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          Zero Filler Puffiness
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-300 font-light leading-relaxed">
                        Natural collagen biostimulation for hollow under-eyes &amp; persistent dark circles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 2: CLINICAL PROOF (RETINA-SHARP BEFORE & AFTER)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1c1917] border-b border-[#e5dfd8] relative overflow-hidden transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>02 / CLINICAL EVIDENCE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight">
              Clinical Periorbital <span className="italic text-[#545358] font-normal">Transformation</span>
            </h2>
            <p className="font-space text-xs text-[#747476] uppercase tracking-[0.2em] pt-0.5">
              High-Resolution Clinical Macro Documentation • 3-Session Cycle
            </p>
            <p className="text-sm sm:text-base text-[#57534e] font-light max-w-xl mx-auto pt-1 leading-relaxed">
              Drag the interactive divider to observe the clearance of vascular dark circles and natural thickening of the delicate under-eye dermis.
            </p>
          </motion.div>

          {/* Compact, High-Density Comparison Stage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            <PolynucleotideComparisonSlider />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 3: THE EDITORIAL CONTRAST (WHY POLYNUCLEOTIDES BEAT FILLERS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#efebe8] text-[#1c1a19] border-b border-[#dad3cc] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-3 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-white border border-[#747476]/20 text-[#545358] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>03 / PERIORBITAL TREATMENT MODALITIES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1a19] tracking-tight">
              Clinical Comparison: <span className="italic text-[#545358] font-normal">Polynucleotides &amp; Tear Trough Fillers</span>
            </h2>
            <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
              At Diez Aesthetics, we offer both dedicated under-eye treatments. During your clinical consultation, Daniel Diez evaluates your facial anatomy to recommend the most suitable clinical approach for your goals.
            </p>
          </motion.div>

          {/* Dual Haute-Couture Editorial Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Panel A: Polynucleotides */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-[32px] bg-white border-2 border-[#1c1917]/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6"
            >
              <div className="space-y-1.5 border-b border-[#747476]/15 pb-5">
                <span className="text-[10px] font-space uppercase tracking-[0.25em] text-[#545358] font-semibold block">
                  CELLULAR REGENERATION · £90 / £200
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1a19]">
                  Periorbital Polynucleotides
                </h3>
                <p className="text-xs text-[#747476] font-light">
                  Biocompatible polynucleotide signaling derived from medical-grade PDRN
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#44403c] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Best For Skin Quality &amp; Dark Circles:</strong>
                    Directly thickens thin, translucent under-eye dermis and stimulates microcirculation.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Non-Hydrophilic Formulation:</strong>
                    Does not pull excess water into periorbital tissue, making it suitable for patients prone to morning fluid retention.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Fibroblast Collagen Synthesis:</strong>
                    Stimulates natural synthesis of type I collagen and elastin over a 2 to 3-session course.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Natural Mobility:</strong>
                    Integrates smoothly into the extracellular matrix while preserving natural eyelid dynamics.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Panel B: Tear Trough Dermal Fillers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-[32px] bg-white border border-[#747476]/30 shadow-sm space-y-6"
            >
              <div className="space-y-1.5 border-b border-[#747476]/15 pb-5">
                <span className="text-[10px] font-space uppercase tracking-[0.25em] text-[#545358] font-semibold block">
                  STRUCTURAL VOLUME REPLACEMENT · £140
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
                  Tear Trough Dermal Fillers
                </h3>
                <p className="text-xs text-[#78716c] font-light">
                  Targeted hyaluronic acid for deep anatomical hollows
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#44403c] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Best For Deep Structural Hollows:</strong>
                    Physically restores lost volume where significant orbital bone recession or fat loss creates severe shadows.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Immediate Volume Lift:</strong>
                    Delivers visible volumetric correction immediately in a single 30-minute appointment.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Micro-Cannula Placement:</strong>
                    Placed in the deep pre-periosteal plane with blunt micro-cannula technique to minimize bruising risk.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1c1917] font-medium block">Anatomical Suitability:</strong>
                    Recommended for patients with adequate skin thickness who require physical volume rather than surface dermal renewal.
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 4: TRANSPARENT PRICING & CLINICAL SUITE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1c1917] border-b border-[#e5dfd8] relative overflow-hidden transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-3 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>04 / TRANSPARENT CLINICAL PRICING</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight">
              Transparent <span className="italic text-[#545358] font-normal">Polynucleotides Treatment</span> Pricing
            </h2>
            <p className="font-space text-xs text-[#747476] uppercase tracking-[0.2em] pt-0.5">
              Honest London Fees • Private Clinical Suite King’s Cross
            </p>
            <p className="text-sm sm:text-base text-[#57534e] font-light max-w-xl mx-auto pt-1 leading-relaxed">
              Every procedure is administered personally by Clinical Director Daniel Diez in our private King’s Cross clinic. Consultations are complimentary when proceeding with treatment.
            </p>
          </motion.div>

          {/* Integrated Split Stage: Suite Photography + Haute Couture Price Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Visual: Private King's Cross Clinic Treatment Suite */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-black/[0.08] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] aspect-[3/4] group">
                <Image
                  src="/assets/images/clinic_treatment_suite.webp"
                  alt="Diez Aesthetics Private Clinical Suite King's Cross London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="font-serif italic text-xl text-white">Private Treatment Suite</p>
                  <p className="text-zinc-300 text-[11px] font-space tracking-wider">
                    260 Pentonville Road, King’s Cross N1 9JY
                  </p>
                  <p className="text-white/60 text-[11px] font-light pt-1">
                    Hospital-grade sterility · 4 mins from St. Pancras
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Price Cards Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Single Session Card */}
              <div className="p-7 rounded-[28px] bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-space text-[10px] uppercase tracking-widest text-[#545358] font-semibold">
                    SINGLE SESSION
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-[#1c1917]">Single Session</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl text-[#1c1917]">£90</span>
                    <span className="text-xs text-[#78716c]">/ treatment</span>
                  </div>
                </div>

                <p className="text-xs text-[#57534e] font-light">
                  Tailored periorbital assessment, medical numbing, and precision micro-dosing.
                </p>

                <div className="pt-2">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3 rounded-full text-center text-xs font-space uppercase tracking-wider font-semibold border border-black/20 text-[#1c1917] hover:bg-black/[0.04] transition-all"
                  >
                    Reserve Single Session
                  </a>
                </div>
              </div>

              {/* Complete 3-Session Cycle Card (THE HERO VALUE) */}
              <div className="p-8 rounded-[28px] bg-[#18171a] text-white border-2 border-white/20 shadow-2xl relative space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-space text-[10px] uppercase tracking-widest text-[#dcd8d4] font-semibold">
                    THE CLINICAL GOLD STANDARD
                  </span>
                </div>

                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-white">Full Clinical Cycle</h3>
                    <span className="text-xs text-white/60 font-light">3 Spaced Sessions (3–4 Wks)</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-white">£200</span>
                    <span className="text-xs text-white/60">/ complete course of 3</span>
                  </div>
                </div>

                <p className="text-xs text-white/80 font-light leading-relaxed">
                  The recommended full course required for cumulative cellular tissue remodeling, progressive darkness reduction, and maximum skin density lasting 6 to 9 months.
                </p>

                <div className="pt-2">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-4 rounded-full text-center text-xs font-space uppercase tracking-[0.2em] font-semibold bg-white text-[#18171a] hover:bg-[#efebe8] transition-all shadow-xl"
                  >
                    Reserve Complete Course of 3
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 5: CLINICAL DIRECTOR TRUST (DANIEL DIEZ)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#eae5e0] text-[#1c1917] border-b border-[#dad3cc] relative overflow-hidden transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            
            {/* Daniel Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-black/[0.08] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] aspect-[3/4]">
                <Image
                  src="/assets/images/danial-image.png"
                  alt="Daniel Diez - Clinical Director at Diez Aesthetics London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="font-serif italic text-2xl text-white">Daniel Diez</p>
                  <p className="text-[11px] font-space uppercase tracking-wider text-white/90">
                    Clinical Director &amp; Aesthetic Practitioner
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Daniel Bio & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#ded8d2] text-[#545358] border border-black/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
                <span>05 / CLINICAL PRACTITIONER</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-[1.08]">
                Conservative Care. <br />
                <span className="font-serif italic font-normal text-[#545358]">
                  Natural Harmonisation.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#545358] font-light leading-relaxed">
                &ldquo;True aesthetic medicine is not about distorting the face with excess volume—it is about restoring cellular health, biological skin thickness, and authentic balance. Every polynucleotide treatment I administer is custom-tailored to the patient&apos;s unique facial anatomy.&rdquo;
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#44403c]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Fully insured &amp; complications-trained medical aesthetic practitioner</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Three years of clinical injecting experience with regenerative biostimulators</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>191 verified 5.0 Google Reviews in King’s Cross, London</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1c1917] text-white text-xs font-space uppercase tracking-wider font-semibold hover:bg-black transition-all"
                >
                  <span>Book Consultation With Daniel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 6: FAQ ACCORDION (PATIENT ANXIETY ELIMINATION)
          ───────────────────────────────────────────────────────────── */}
      <PolynucleotideFAQ />

      {/* ─────────────────────────────────────────────────────────────
          STAGE 7: FINAL CONCIERGE BOOKING BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#121113] text-white text-center relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] text-[#dcd8d4]">
            <Calendar className="w-3.5 h-3.5" />
            <span>APPOINTMENTS BY ADVANCE RESERVATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Awaken Your Eyes with <br />
            <span className="italic text-[#dcd8d4]">Cellular Precision.</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto leading-relaxed">
            Begin with a thorough periorbital examination at our King’s Cross clinic. Transparent fees, genuine patient results, and complete clinical discretion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#121113] text-xs font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#efebe8] transition-all shadow-2xl"
            >
              Book Clinical Consultation Online
            </a>

            <a
              href="tel:+447348947988"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 text-white text-xs font-space uppercase tracking-[0.2em] font-medium border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +44 7348 947988</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
