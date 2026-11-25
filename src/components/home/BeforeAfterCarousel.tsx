'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

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
    technique: 'Conservative Micro-cannula & Tuberculum Definition',
    clinicianNotes:
      'Patient requested subtle fullness and border restoration without artificial shelfing or duck-lip projection. High dynamic mobility preserved.',
    patientGoal:
      'Restore natural lip hydration, correct lateral asymmetry, and define the cupid’s bow delicately.',
  },
  {
    id: 2,
    slug: 'polynucleotides-eyes',
    category: 'Regenerative Medicine',
    categoryKey: 'polynucleotides',
    title: 'Under-Eye & Tear Trough Polynucleotides',
    subtitle: 'Cellular Skin Repair & Circle Reduction',
    before: '/assets/images/before-eye.jpg',
    after: '/assets/images/after-eye.jpg',
    objectPosition: 'center center',
    downtime: 'Minimal (24h slight papules)',
    longevity: 'Long-Term Cellular Regeneration',
    targetArea: 'Infraorbital Rim & Periorbital Soft Tissue',
    productUsed: 'Ameela / Nucleofill Eyes (Purified Polynucleotides)',
    technique: 'Intradermal Micro-papular Infusion',
    clinicianNotes:
      'Patient presented with hollow under-eye shadowing and thin crepey dermis. A 3-session course stimulated natural collagen synthesis, thickening periorbital skin naturally without hydrophilic filler swelling.',
    patientGoal:
      'Improve tired under-eye appearance and dark circles without risking the puffiness associated with hyaluronic acid fillers.',
  },
  {
    id: 3,
    slug: 'facial-harmonisation',
    category: 'Full Facial Contouring',
    categoryKey: 'harmonisation',
    title: 'Bespoke Harmonisation & Volume Balancing',
    subtitle: 'Lateral Zygomatic Projection',
    before: '/assets/images/case3_before.jpg',
    after: '/assets/images/case3_after.jpg',
    objectPosition: 'center 40%',
    downtime: 'Zero Downtime',
    longevity: '12–18 Months',
    targetArea: 'Lateral Cheeks, Pyriform Aperture & Nasolabial Transitions',
    productUsed: 'Juvederm Voluma & Restylane Defyne',
    technique: 'Deep Supraperiosteal Bolus & Micro-cannula Layering',
    clinicianNotes:
      'Subtle structural midface enhancement that lifted descending nasolabial weight and balanced lateral cheekbones with undetectable precision.',
    patientGoal:
      'Rejuvenate midface structure, soften deep smile lines, and achieve a refreshed, lifted contour naturally.',
  },
  {
    id: 4,
    slug: 'collagen-microneedling',
    category: 'Collagen & Texture',
    categoryKey: 'microneedling',
    title: 'Medical Microneedling & Exosome Infusion',
    subtitle: 'Acne Scar Smoothing & Pore Minimisation',
    before: '/assets/images/case_g3_before.jpg',
    after: '/assets/images/case_g3_after.jpg',
    objectPosition: 'center center',
    downtime: '24–36h Mild Rosiness',
    longevity: 'Permanent Cumulative Remodelling',
    targetArea: 'Full Cheeks & Perioral Textural Irregularities',
    productUsed: 'ExoCoBio Medical Exosomes + Hyaluronic Acid Glide',
    technique: 'Fractional Medical Depth Needling (1.5mm–2.0mm)',
    clinicianNotes:
      'Significant improvement in epidermal clarity, depth of atrophic acne scarring, and global pore contraction following a 4-session treatment course.',
    patientGoal:
      'Eliminate stubborn post-acne pitting and uneven texture to achieve glass-skin radiance without heavy foundations.',
  },
  {
    id: 5,
    slug: 'periorbital-rejuvenation',
    category: 'Regenerative Medicine',
    categoryKey: 'polynucleotides',
    title: 'Periorbital Restructuring & Dark Circles',
    subtitle: 'Deep Dermal Thickening',
    before: '/assets/images/case_g5_before.jpg',
    after: '/assets/images/case_g5_after.jpg',
    objectPosition: 'center center',
    downtime: '24 Hours',
    longevity: 'Long-Term Cellular Regeneration',
    targetArea: 'Lower Eyelid & Malar Junction',
    productUsed: 'Plenhyage XL / Ameela Eyes',
    technique: 'Serial Micro-puncture Along Infraorbital Margin',
    clinicianNotes:
      'Noticeable vascular lightening and dermal thickening beneath both lower eyelids with complete preservation of ocular lymphatic drainage.',
    patientGoal:
      'Brighten chronic dark circles and strengthen paper-thin skin under the eyes without filler puffiness.',
  },
  {
    id: 6,
    slug: 'subtle-lip-contouring',
    category: 'Dermal Fillers • Lips',
    categoryKey: 'fillers',
    title: 'Conservative Lip Hydration & Pillowing',
    subtitle: 'Natural Vermilion Elevation',
    before: '/assets/images/case_g7_before.jpg',
    after: '/assets/images/case_g7_after.jpg',
    objectPosition: 'center center',
    downtime: 'Minimal (24h)',
    longevity: '9–12 Months',
    targetArea: 'Upper & Lower Lip Body',
    productUsed: 'Restylane Kysse (0.6ml Soft Touch)',
    technique: 'Micro-linear Retrograde Threading',
    clinicianNotes:
      'Preserved authentic cupid’s bow dynamics with subtle, pillowed volume increase that looks entirely untouched.',
    patientGoal:
      'Subtle lip plumpness that appears naturally hydrated rather than cosmetically injected.',
  },
];

const categoryTabs = [
  { key: 'all', label: 'All Cases' },
  { key: 'fillers', label: 'Lip Enhancement' },
  { key: 'polynucleotides', label: 'Polynucleotides' },
  { key: 'harmonisation', label: 'Facial Harmonisation' },
  { key: 'microneedling', label: 'Microneedling' },
];

export function BeforeAfterCarousel() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  const activeCase = clinicalCases[selectedCaseIdx];

  const filteredCases =
    activeTab === 'all'
      ? clinicalCases
      : clinicalCases.filter((c) => c.categoryKey === activeTab);

  return (
    <section id="results" className="py-24 sm:py-32 bg-[#eae5e0] text-[#1c1917] relative overflow-hidden border-t border-b border-[#dad3cc] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[600px] bg-[#ded8d2]/60 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] bg-[#545358]/08 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Minimalist Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-medium text-[#545358] bg-[#ded8d2] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>05 / CLINICAL PORTFOLIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1c1917] tracking-tight leading-tight">
              Before &amp; After <span className="italic text-[#545358] font-normal">Transformations</span>
            </h2>

            <p className="text-sm sm:text-base text-[#545358] font-light leading-relaxed">
              Real clinical results documented at post-treatment review. Side-by-side photographic records with standardized clinic lighting.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.08] shadow-sm text-xs text-[#545358] self-start lg:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#3b3b3d]" />
            <span className="font-space font-medium text-[11px] uppercase tracking-wider">Standardised Clinical Cases</span>
          </div>
        </motion.div>

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
                    ? 'bg-[#3b3b3d] text-[#efebe8] border-[#3b3b3d] shadow-md font-semibold'
                    : 'bg-white/80 hover:bg-white text-[#545358] border-black/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MAIN SHOWCASE STUDIO: PURE SIDE-BY-SIDE PRESENTATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column (7 cols): Side-by-Side Dual Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-3 lg:sticky lg:top-28"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="grid grid-cols-2 h-full w-full divide-x divide-black/[0.08]">
                  {/* BEFORE FRAME */}
                  <div className="relative h-full w-full bg-[#f2ede8]">
                    <Image
                      src={activeCase.before}
                      alt={`${activeCase.title} - Before`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-space uppercase tracking-widest text-white border border-white/20 font-semibold shadow-md">
                      Before
                    </div>
                  </div>

                  {/* AFTER FRAME */}
                  <div className="relative h-full w-full bg-[#f2ede8]">
                    <Image
                      src={activeCase.after}
                      alt={`${activeCase.title} - After`}
                      fill
                      unoptimized
                      priority
                      style={{ objectPosition: activeCase.objectPosition || 'center center' }}
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-space uppercase tracking-widest text-[#3b3b3d] border border-black/[0.1] font-semibold shadow-md">
                      After
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Caption Under Image */}
            <div className="flex items-center justify-between text-xs text-[#747476] font-space px-2">
              <span>Standardised clinic lighting &amp; patient positioning</span>
              <span className="text-[#3b3b3d] font-semibold">Practitioner-Led Result</span>
            </div>
          </motion.div>

          {/* Right Column (5 cols): High-Fashion Editorial Dossier */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="h-full p-6 sm:p-8 rounded-[28px] bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Case Kicker & Verified Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
                    <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#545358] font-semibold">
                      CASE 0{activeCase.id} / {activeCase.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#545358] font-space font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#545358] animate-pulse" />
                      <span>Verified Patient</span>
                    </div>
                  </div>

                  {/* Case Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1c1917] leading-tight">
                      {activeCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#747476] font-space uppercase tracking-wider font-medium">
                      {activeCase.subtitle}
                    </p>
                  </div>

                  {/* Patient Goal & Clinical Notes */}
                  <div className="space-y-4 pt-1">
                    <div className="p-4 rounded-2xl bg-[#efebe8]/80 border border-black/[0.04] space-y-1">
                      <span className="text-[10px] font-space uppercase tracking-widest text-[#545358] font-semibold block">
                        Patient Objective
                      </span>
                      <p className="text-xs text-[#1c1917] font-light leading-relaxed">
                        &ldquo;{activeCase.patientGoal}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-space uppercase tracking-widest text-[#747476] font-semibold block">
                        Clinical Approach &amp; Director Notes
                      </span>
                      <p className="text-xs text-[#545358] font-light leading-relaxed">
                        {activeCase.clinicianNotes}
                      </p>
                    </div>
                  </div>

                  {/* Technical Metadata Matrix */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#f7f5f3] border border-black/[0.04]">
                      <span className="text-[10px] font-space uppercase tracking-wider text-[#747476] block mb-0.5">
                        Treatment &amp; Product
                      </span>
                      <span className="text-[11px] text-[#1c1917] font-medium leading-tight block">
                        {activeCase.productUsed}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f7f5f3] border border-black/[0.04]">
                      <span className="text-[10px] font-space uppercase tracking-wider text-[#747476] block mb-0.5">
                        Downtime / Recovery
                      </span>
                      <span className="text-[11px] text-[#1c1917] font-medium leading-tight block">
                        {activeCase.downtime}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f7f5f3] border border-black/[0.04]">
                      <span className="text-[10px] font-space uppercase tracking-wider text-[#747476] block mb-0.5">
                        Expected Longevity
                      </span>
                      <span className="text-[11px] text-[#1c1917] font-medium leading-tight block">
                        {activeCase.longevity}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f7f5f3] border border-black/[0.04]">
                      <span className="text-[10px] font-space uppercase tracking-wider text-[#747476] block mb-0.5">
                        Target Anatomy
                      </span>
                      <span className="text-[11px] text-[#1c1917] font-medium leading-tight block truncate">
                        {activeCase.targetArea}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Consultation Direct Trigger */}
                <div className="pt-6 border-t border-black/[0.08] mt-6">
                  <a
                    href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3b3b3d] text-[#efebe8] font-space text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#545358] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-md"
                  >
                    <span>Book Similar Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Thumbnail Filmstrip Navigation */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-space text-[#747476] px-1">
            <span className="uppercase tracking-widest text-[10px]">Select a Case Study</span>
            <span>
              Showing {selectedCaseIdx + 1} of {clinicalCases.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {clinicalCases.map((caseItem, idx) => {
              const isSelected = selectedCaseIdx === idx;
              return (
                <button
                  key={caseItem.id}
                  type="button"
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 text-left p-2 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#3b3b3d] shadow-lg ring-2 ring-[#3b3b3d] ring-offset-2 ring-offset-[#eae5e0] scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-black/[0.08] hover:border-black/20'
                  }`}
                >
                  {/* Real Clinical Result Photo Thumbnail */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e4e0] mb-2">
                    <Image
                      src={caseItem.after}
                      alt={`${caseItem.title} result`}
                      fill
                      unoptimized
                      style={{ objectPosition: caseItem.objectPosition || 'center center' }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-space font-semibold text-white">
                      0{caseItem.id}
                    </div>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#545358] ring-2 ring-white" />
                    )}
                  </div>

                  <div className="px-0.5 pb-0.5">
                    <p className="text-xs font-serif text-[#1c1917] font-medium leading-tight truncate">
                      {caseItem.title}
                    </p>
                    <p className="text-[10px] font-space text-[#747476] uppercase tracking-wider truncate">
                      {caseItem.categoryKey}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Deep Link to Full Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3b3b3d] text-[#efebe8] hover:bg-[#545358] hover:text-white text-xs uppercase font-space tracking-[0.2em] font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
          >
            <span>Explore Complete Patient Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
