'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Sliders,
  Maximize2,
  Calendar,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface ClinicalCase {
  id: number;
  slug: string;
  category: string;
  categoryKey: string;
  title: string;
  subtitle: string;
  before: string;
  after: string;
  objectPosition?: string;
  downtime: string;
  longevity: string;
  targetArea: string;
  productUsed: string;
  technique: string;
  clinicianNotes: string;
  patientGoal: string;
}

const clinicalCases: ClinicalCase[] = [
  {
    id: 1,
    slug: 'lip-enhancement',
    category: 'Dermal Fillers • Lips',
    categoryKey: 'fillers',
    title: 'Lip Enhancement & Natural Vermilion Definition',
    subtitle: 'Restored Symmetry & Hydration',
    before: '/assets/images/before-lip.jpg',
    after: '/assets/images/after-lip.jpg',
    objectPosition: 'center center',
    downtime: 'Minimal (24–48h)',
    longevity: '9–12 Months',
    targetArea: "Cupid's Bow, Philtral Columns & Vermilion Border",
    productUsed: 'Teosyal RHA Lips (0.7ml Micro-droplet)',
    technique: 'Aesthetic Micro-Cannula Technique',
    clinicianNotes:
      'Conservative 0.7ml hyaluronic acid micro-droplet injection focusing on the vermilion border and central tubercles. Preserved natural lip proportions and dynamic movement without projection or migration.',
    patientGoal:
      'Natural hydration and subtle volume restoration without looking overfilled or unnatural.',
  },
  {
    id: 2,
    slug: 'tear-trough-polynucleotides',
    category: 'Regenerative • Polynucleotides',
    categoryKey: 'polynucleotides',
    title: 'Under-Eye & Tear Trough Polynucleotides',
    subtitle: 'Cellular DNA Micro-Repair',
    before: '/assets/images/before-eye.jpg',
    after: '/assets/images/after-eye.jpg',
    objectPosition: 'center center',
    downtime: 'Zero (Lunchtime Procedure)',
    longevity: 'Long-Term Cellular Regeneration',
    targetArea: 'Infraorbital Rim & Periorbital Dermis',
    productUsed: 'Nucleofill Eyes DNA Fractions',
    technique: 'Salmon DNA Nucleofill Micro-Papules',
    clinicianNotes:
      'Targeted bio-remodelling of the periorbital hollow. Stimulated autologous fibroblast collagen synthesis and microcirculation to resolve dark hollows and crepey skin naturally without dermal filler.',
    patientGoal:
      'Reduce tired, dark under-eye circles and smooth fine crepey skin naturally without traditional dermal fillers.',
  },
  {
    id: 3,
    slug: 'facial-harmonisation',
    category: 'Bespoke Harmonisation',
    categoryKey: 'harmonisation',
    title: 'Full Facial Harmonisation & Volume Balancing',
    subtitle: 'Midface Structural Contouring',
    before: '/assets/images/case3_before.jpg',
    after: '/assets/images/case3_after.jpg',
    objectPosition: 'center 30%',
    downtime: 'Minimal (24h)',
    longevity: '12–18 Months',
    targetArea: 'Zygomatic Arch, Malar Apex & Piriform Aperture',
    productUsed: 'Deep Structural Hyaluronic Acid',
    technique: 'Multi-Vector Supraperiosteal Placement',
    clinicianNotes:
      'Comprehensive 3D facial balancing. Strategic micro-boluses along the lateral zygomatic arch and piriform aperture created natural upward tension and softened deep nasolabial folds while keeping 100% natural facial expression.',
    patientGoal:
      'Refresh tired facial expression, soften smile lines, and enhance bone structure while maintaining 100% natural movement.',
  },
  {
    id: 4,
    slug: 'medical-microneedling',
    category: 'Collagen & Texture',
    categoryKey: 'microneedling',
    title: 'Medical Microneedling & Exosome Therapy',
    subtitle: 'Pore Refinement & Surface Glow',
    before: '/assets/images/case_g5_before.jpg',
    after: '/assets/images/case_g5_after.jpg',
    objectPosition: 'center 35%',
    downtime: '24–36h Mild Rosiness',
    longevity: 'Cumulative Permanent Remodelling',
    targetArea: 'Epidermal & Papillary Dermal Matrix',
    productUsed: 'Regenerative Exosome Complex',
    technique: 'Medical-Grade Depth Microneedling (1.5mm)',
    clinicianNotes:
      'Precision microneedling combined with topical regenerative exosome infusion to accelerate cellular turnover, refine texture, and stimulate neo-collagenesis for glass skin luminosity.',
    patientGoal:
      'Eliminate enlarged pores, rough texture, and superficial pigmentation for radiant glass skin.',
  },
  {
    id: 5,
    slug: 'profile-balancing',
    category: 'Facial Balancing',
    categoryKey: 'harmonisation',
    title: 'Profile Contouring & Chin Definition',
    subtitle: 'Lower Face Harmony',
    before: '/assets/images/case_g7_before.jpg',
    after: '/assets/images/case_g7_after.jpg',
    objectPosition: 'center 45%',
    downtime: 'Minimal (Zero Downtime)',
    longevity: '12–15 Months',
    targetArea: 'Mentalis Apex & Mandibular Angle',
    productUsed: 'High G-Prime Structural Filler',
    technique: 'Submental & Chin Apex Definition',
    clinicianNotes:
      'Targeted structural chin apex projection to elongate the jawline and harmonize the lower third of the face with the nose and lips.',
    patientGoal:
      'Define weak chin and strengthen jawline profile without surgical implants or recovery periods.',
  },
];

const categoryTabs = [
  { key: 'all', label: 'All Cases (5)' },
  { key: 'fillers', label: 'Lip Enhancement' },
  { key: 'polynucleotides', label: 'Polynucleotides' },
  { key: 'harmonisation', label: 'Facial Harmonisation' },
  { key: 'microneedling', label: 'Microneedling' },
];

export function BeforeAfterCarousel() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  const containerRef = useRef<HTMLDivElement>(null);
  const activeCase = clinicalCases[selectedCaseIdx];

  const handleUpdatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    handleUpdatePos(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleUpdatePos(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    setIsDragging(false);
  };

  return (
    <section id="results" className="py-24 sm:py-32 bg-[#0c0b0e] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[600px] bg-[#545358]/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] bg-[#c48b7e]/10 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Minimalist Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-medium text-[#c48b7e] bg-white/[0.06] border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
              <span>CLINICAL PORTFOLIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
              Before &amp; After <span className="italic text-[#c48b7e] font-normal">Transformations</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Real clinical results documented at post-treatment review. Unretouched, standardized lighting, and doctor-led care.
            </p>
          </div>

          {/* Mode Switch & Clinical Guarantee */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#747476]" />
              <span className="font-space font-medium text-[11px]">100% Unretouched Clinical Records</span>
            </div>

            <div className="inline-flex p-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-space">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'slider'
                    ? 'bg-[#c48b7e] text-white font-semibold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Split Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'side-by-side'
                    ? 'bg-[#c48b7e] text-white font-semibold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isTabActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  const firstMatch =
                    tab.key === 'all'
                      ? 0
                      : clinicalCases.findIndex((c) => c.categoryKey === tab.key);
                  if (firstMatch !== -1) setSelectedCaseIdx(firstMatch);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-space uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                  isTabActive
                    ? 'bg-[#161418] text-[#c48b7e] border-[#c48b7e] shadow-[0_0_20px_rgba(196,139,126,0.3)] font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MAIN SHOWCASE STUDIO: Split 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column (7 cols): Clean Drag Comparison Stage */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{ touchAction: 'none' }}
              className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[5/4] rounded-[28px] overflow-hidden select-none bg-[#161418] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] cursor-ew-resize group"
            >
              {viewMode === 'slider' ? (
                <>
                  {/* AFTER Image (Base Layer) */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={activeCase.after}
                      alt={`${activeCase.title} - After`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover pointer-events-none"
                    />
                    <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-[#161418]/85 backdrop-blur-md text-[11px] font-space uppercase tracking-widest text-[#c48b7e] border border-[#c48b7e]/30 font-semibold shadow-lg">
                      ✦ After Treatment
                    </div>
                  </div>

                  {/* BEFORE Image (Clipped Overlay Layer) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                      WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                    }}
                  >
                    <Image
                      src={activeCase.before}
                      alt={`${activeCase.title} - Before`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover pointer-events-none max-w-none"
                    />
                    <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-space uppercase tracking-widest text-zinc-300 border border-white/20 font-semibold shadow-lg">
                      Before Treatment
                    </div>
                  </div>

                  {/* Hairline Glowing Divider Bar with Frosted Pill */}
                  <div
                    role="slider"
                    aria-valuenow={Math.round(sliderPos)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Before After Comparison Slider"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 5));
                      if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 5));
                    }}
                    className="absolute top-0 bottom-0 z-30 w-0.5 bg-gradient-to-b from-[#c48b7e] via-white to-[#c48b7e] shadow-[0_0_12px_rgba(196,139,126,0.8)] cursor-ew-resize pointer-events-none focus:outline-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    {/* Sleek Tactile Grab Pill */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#161418] border border-[#c48b7e] text-[#c48b7e] shadow-[0_0_20px_rgba(196,139,126,0.7)] flex items-center justify-center transition-transform group-hover:scale-110 pointer-events-auto">
                      <div className="flex items-center gap-0.5 text-xs font-bold font-mono">
                        <span>‹</span>
                        <div className="w-0.5 h-3 bg-[#c48b7e]" />
                        <span>›</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Side-by-Side Dual View */
                <div className="grid grid-cols-2 h-full w-full divide-x divide-white/10">
                  <div className="relative h-full w-full">
                    <Image
                      src={activeCase.before}
                      alt={`${activeCase.title} - Before`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-space uppercase tracking-widest text-zinc-300 border border-white/20 font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src={activeCase.after}
                      alt={`${activeCase.title} - After`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#161418]/85 backdrop-blur-md text-[10px] font-space uppercase tracking-widest text-[#c48b7e] border border-[#c48b7e]/30 font-semibold">
                      ✦ After
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Snaps */}
            {viewMode === 'slider' && (
              <div className="flex items-center justify-between pt-4 text-xs font-space text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-zinc-500 hidden sm:inline">Snap:</span>
                  <button
                    type="button"
                    onClick={() => setSliderPos(0)}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 text-zinc-300 text-[11px] border border-white/10 transition-colors"
                  >
                    Before 100%
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPos(50)}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 text-[#c48b7e] text-[11px] border border-white/10 transition-colors font-medium"
                  >
                    50 / 50 Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPos(100)}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 text-zinc-300 text-[11px] border border-white/10 transition-colors"
                  >
                    After 100%
                  </button>
                </div>

                <div className="text-[11px] text-zinc-400">
                  <span className="text-white font-medium">{Math.round(sliderPos)}%</span> Before •{' '}
                  <span className="text-[#c48b7e] font-medium">{100 - Math.round(sliderPos)}%</span> After
                </div>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): High-Fashion Editorial Dossier */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="h-full p-6 sm:p-8 rounded-[28px] bg-[#161418] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Case Kicker & Verified Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#c48b7e] font-semibold">
                      CASE 0{activeCase.id} / {activeCase.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#efebe8] font-space font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e] animate-pulse" />
                      <span>Verified Patient</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                      {activeCase.title}
                    </h3>
                    <p className="font-space text-xs text-[#a8a5a3] uppercase tracking-wider pt-1">
                      {activeCase.subtitle}
                    </p>
                  </div>

                  {/* Clinician's Treatment Narrative */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {activeCase.clinicianNotes}
                  </p>

                  {/* Refined Clinical Specifications (Hairline Editorial Table) */}
                  <div className="divide-y divide-white/10 border-y border-white/10 text-xs font-space pt-1">
                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                        Target Anatomical Focus
                      </span>
                      <span className="text-white text-right text-[11px] max-w-[240px] truncate">
                        {activeCase.targetArea}
                      </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                        Product Deployed
                      </span>
                      <span className="text-[#c48b7e] font-medium text-right text-[11px]">
                        {activeCase.productUsed}
                      </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                        Recovery Profile
                      </span>
                      <span className="text-white text-right text-[11px]">
                        {activeCase.downtime}
                      </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                        Clinical Longevity
                      </span>
                      <span className="text-white text-right text-[11px]">
                        {activeCase.longevity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6">
                  <a
                    href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c48b7e] text-white font-space text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(196,139,126,0.4)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Private Consultation</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM CASE SELECTOR TRAY */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-space text-zinc-400">
            <span className="uppercase tracking-widest text-[#c48b7e] font-semibold">
              Select Patient Case ({clinicalCases.length} Clinical Records)
            </span>
            <span className="text-zinc-500">Click thumbnail to inspect transformation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clinicalCases.map((item, idx) => {
              const isSelected = selectedCaseIdx === idx;
              return (
                <div
                  key={item.id}
                  data-case-idx={idx}
                  onClick={() => {
                    setSelectedCaseIdx(idx);
                    setSliderPos(50);
                  }}
                  className={`p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#161418] border-[#c48b7e] shadow-[0_0_25px_rgba(196,139,126,0.35)] -translate-y-1'
                      : 'bg-[#161418]/60 border-white/10 hover:border-white/30 hover:bg-[#161418]'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-2.5">
                    <Image
                      src={item.after}
                      alt={item.title}
                      fill
                      unoptimized
                      style={{ objectPosition: item.objectPosition || 'center center' }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[9px] font-space font-semibold text-white">
                      0{item.id}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase font-space tracking-wider text-[#c48b7e] font-medium truncate">
                      {item.categoryKey}
                    </p>
                    <p className="font-serif italic text-xs text-white line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Link to Full Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/15 text-xs uppercase font-space tracking-[0.2em] font-medium transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Explore Complete Clinical Gallery (14 Cases)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
