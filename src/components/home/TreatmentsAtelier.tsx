'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { TreatmentsContent } from '@/types/content';

interface TreatmentsAtelierProps {
  content?: TreatmentsContent;
  bookingUrl: string;
}

interface TreatmentCategory {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  summary: string;
  sessions: string;
  areas: string;
  duration: string;
  downtime: string;
}

const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'anti-wrinkle',
    name: 'Anti-wrinkle',
    eyebrow: 'WHY HAVE ANTI-WRINKLE?',
    title: 'Anti-wrinkle Injections',
    summary:
      'Precision micro-dosing of botulinum toxin to relax dynamic expression lines, smooth crow’s feet, and soften forehead furrows while preserving 100% natural facial movement and emotion.',
    sessions: 'Single 20-minute procedure. Full results settle at 10–14 days. Complimentary 2-week review.',
    areas: 'Forehead lines, Frown lines (11s), Crow’s feet, Bunny lines, Lip flip, Masseters / Jaw slimming.',
    duration: '3–4 Months',
    downtime: 'Zero Downtime (Lunchtime Procedure)',
  },
  {
    id: 'signature-lips',
    name: 'Signature Lips',
    eyebrow: 'WHY HAVE SIGNATURE LIPS?',
    title: 'Signature Lip Enhancement',
    summary:
      'Conservative hyaluronic acid micro-droplet technique to define the vermilion border, restore natural hydration, and balance anatomical symmetry with zero migration or unnatural duck-lip projection.',
    sessions: 'Single appointment with micro-cannula technique. Tailored volume (0.5ml to 1.0ml).',
    areas: 'Vermilion border, Cupid’s bow, Philtral columns, Central tubercles, Oral commissures.',
    duration: '9–12 Months',
    downtime: 'Minimal (24–48h subtle swelling)',
  },
  {
    id: 'polynucleotides',
    name: 'Polynucleotides',
    eyebrow: 'WHY HAVE POLYNUCLEOTIDES?',
    title: 'Polynucleotides (Nucleofill & Ameela)',
    summary:
      'Regenerative biostimulators derived from purified salmon DNA fractions. Stimulates autologous fibroblast collagen synthesis, microcirculation, and cellular repair to treat dark under-eye circles and skin laxity naturally without dermal filler.',
    sessions: 'Course of 2–3 sessions recommended, spaced 3–4 weeks apart for cumulative cellular regeneration.',
    areas: 'Under-eye tear troughs, Periorbital hollows, Cheeks, Neck lines, Décolletage.',
    duration: 'Long-Term Cellular Regeneration',
    downtime: 'Minimal (Small papules subside within 24h)',
  },
  {
    id: 'profhilo',
    name: 'Profhilo',
    eyebrow: 'WHY HAVE PROFHILO?',
    title: 'Profhilo Bio-Remodelling',
    summary:
      'Ultra-pure high and low molecular weight hyaluronic acid that flows beneath the dermis to bio-remodel collagen and elastin. Delivers deep cellular hydration, radiance, and elasticity rather than artificial volume.',
    sessions: 'Initial course of 2 sessions, 4 weeks apart. Maintenance session every 6 months.',
    areas: 'Full face (5 Bio-Aesthetic Points), Neck, Decolletage, Hands.',
    duration: '6–9 Months',
    downtime: 'Zero to minimal (Small bumps settle within 12–24h)',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    eyebrow: 'WHY HAVE MICRONEEDLING?',
    title: 'Medical Microneedling & Exosomes',
    summary:
      'Medical-grade depth microneedling combined with topical regenerative exosome infusion to accelerate cellular turnover, refine pore size, smooth acne scars, and stimulate neo-collagenesis for glass skin luminosity.',
    sessions: 'Course of 3–4 sessions spaced 4 weeks apart. Delivers cumulative skin texture refinement.',
    areas: 'Full face, Neck, Texture irregularities, Sun damage, Enlarged pores.',
    duration: 'Cumulative Permanent Remodelling',
    downtime: '24–36h mild rosiness (sunburn sensation)',
  },
  {
    id: 'fat-dissolving',
    name: 'Fat Dissolving',
    eyebrow: 'WHY HAVE FAT DISSOLVING?',
    title: 'Fat Dissolving',
    summary:
      'Targeted deoxycholic acid compound that disrupts and permanently liquefies localized subcutaneous adipocyte cell membranes, flushed out naturally by the lymphatic system.',
    sessions: 'Usually two sessions, 3–4 weeks apart. Permanent removal of targeted fat cells.',
    areas: 'Underarms, forearms, back, abdominal region, hips, thighs, submental (double chin).',
    duration: 'Permanent Fat Cell Destruction',
    downtime: '3–5 days mild swelling and tenderness',
  },
];

export function TreatmentsAtelier({ bookingUrl }: TreatmentsAtelierProps) {
  // Default selected: Fat Dissolving (matching client's screenshot) or Polynucleotides
  const [selectedId, setSelectedId] = useState('fat-dissolving');

  const selectedTreatment =
    treatmentCategories.find((t) => t.id === selectedId) || treatmentCategories[5];

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#efebe8] text-[#1c1a19] relative overflow-hidden transition-colors duration-500 border-b border-[#ded7d0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Matching Client Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-10 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-medium text-[#545358] bg-[#ded8d2] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>01 / MEDICAL TREATMENTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1c1a19] tracking-tight leading-tight">
            Choose a <span className="italic text-[#545358] font-normal">treatment</span>
          </h2>

          <div className="pt-1">
            <Link
              href="/prices/"
              className="inline-flex items-center gap-1.5 text-xs font-space font-semibold uppercase tracking-wider text-[#1c1a19] hover:text-[#545358] underline underline-offset-4 decoration-1 transition-colors"
            >
              <span>Full price list</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* 6 Circular Treatment Selector Grid (Exact match to Client Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-10"
        >
          {treatmentCategories.map((item) => {
            const isSelected = item.id === selectedId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`relative group aspect-square rounded-full flex items-center justify-center p-3 text-center transition-all duration-300 select-none overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-[#1c1a19] ring-offset-4 ring-offset-[#efebe8] scale-[1.04] shadow-xl'
                    : 'shadow-md hover:shadow-lg hover:scale-[1.02] opacity-90 hover:opacity-100'
                }`}
              >
                {/* Authentic Diez Brand Gray Marble Texture */}
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('/assets/images/diez-gray-marble-bg.webp')` }}
                />
                {/* Soft ambient tint for contrast */}
                <div 
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    isSelected ? 'bg-black/25' : 'bg-black/15 group-hover:bg-black/05'
                  }`}
                />

                <span className="relative z-10 font-serif italic text-white text-xs sm:text-sm md:text-sm lg:text-base leading-snug px-1 line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Detail Card Below (Exact match to Client Screenshot) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTreatment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/[0.04] p-6 sm:p-10 text-left space-y-6 max-w-2xl mx-auto"
          >
            {/* Eyebrow */}
            <p className="font-space text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#75716b] font-semibold">
              {selectedTreatment.eyebrow}
            </p>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1a19] font-normal leading-tight">
              {selectedTreatment.title}
            </h3>

            {/* Main Clinical Summary */}
            <p className="text-sm text-[#4a4744] font-light leading-relaxed">
              {selectedTreatment.summary}
            </p>

            {/* Treatment Frequency & Areas Note */}
            <div className="p-4 rounded-2xl bg-[#f7f5f2] border border-[#ebe7e2] space-y-2 text-xs text-[#57534e]">
              <div>
                <span className="font-space font-semibold uppercase tracking-wider text-[#75716b] text-[10px] block">
                  Recommended Sessions
                </span>
                <p className="pt-0.5 leading-relaxed">{selectedTreatment.sessions}</p>
              </div>

              <div>
                <span className="font-space font-semibold uppercase tracking-wider text-[#75716b] text-[10px] block">
                  Areas Treated
                </span>
                <p className="pt-0.5 leading-relaxed">{selectedTreatment.areas}</p>
              </div>
            </div>

            {/* Specifications Bar */}
            <div className="grid grid-cols-2 gap-4 pt-1 border-t border-[#ede9e4] text-xs font-space">
              <div>
                <span className="text-[#8a857e] uppercase tracking-wider text-[10px] block">
                  Expected Longevity
                </span>
                <span className="font-semibold text-[#1c1a19] pt-0.5 block">
                  {selectedTreatment.duration}
                </span>
              </div>

              <div>
                <span className="text-[#8a857e] uppercase tracking-wider text-[10px] block">
                  Recovery Downtime
                </span>
                <span className="font-semibold text-[#1c1a19] pt-0.5 block">
                  {selectedTreatment.downtime}
                </span>
              </div>
            </div>

            {/* Direct Booking Button Matching Screenshot */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3b3b3d] hover:bg-[#232325] text-white font-space text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#545358]" />
                <span>Book your treatment</span>
              </a>

              {selectedTreatment.id === 'polynucleotides' && (
                <Link
                  href="/treatments/polynucleotides/"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#efebe8] text-[#1c1a19] border border-[#747476]/25 font-space text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-sm"
                >
                  <span>View Treatment Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#545358]" />
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
