'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
  Sparkles,
  Info,
  Sparkle,
} from 'lucide-react';

export function SkinBoostersLandingClient() {
  const bookingUrl =
    'https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio';
  const whatsappUrl = 'https://wa.link/l51u63';
  const phoneTel = 'tel:+447348947988';
  const mapUrl = 'https://maps.google.com/?q=260+Pentonville+Road+London+N1+9JY';

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What's the difference between a skin booster and filler?",
      a: "Skin boosters like Profhilo disperse ultra-pure, uncrosslinked hyaluronic acid across the dermis to bio-remodel collagen, deeply hydrate, and firm the tissue without adding artificial volume or altering facial contours. Dermal fillers are thicker, crosslinked gels placed deep in specific areas to add structural volume, shape, or projection.",
    },
    {
      q: 'How many sessions do I need?',
      a: 'For Profhilo, a standard initial course of 2 sessions spaced 4 weeks apart is clinically recommended to stimulate cumulative collagen and elastin bio-remodelling. Single top-up maintenance sessions are typically booked every 6 months to sustain results.',
    },
    {
      q: 'Is there downtime?',
      a: 'Downtime is minimal. You may notice small localized bumps at the 5 Bio-Aesthetic Points on each side of the face immediately post-treatment, resembling small insect bites. These naturally diffuse and flatten into the dermis within 12 to 24 hours.',
    },
    {
      q: 'Is it painful?',
      a: 'Discomfort is minimal. Treatment is administered using ultra-fine needles at just 5 designated anatomical points per side of the face, away from major nerves and vessels. The injection procedure takes approximately 15 minutes, and a topical numbing agent is available upon request.',
    },
    {
      q: 'Profhilo vs polynucleotides: which one do I need?',
      a: 'Profhilo uses thermal-stabilized hyaluronic acid to flood the dermis with deep hydration and bio-remodel global elasticity across the face glow, neck, hands, and décolletage. Polynucleotides use purified salmon DNA fractions to repair delicate cellular structures and stimulate neo-collagenesis, making them especially suited for dark under-eye circles and hollow tear troughs where hyaluronic acid could cause puffiness.',
    },
  ];

  return (
    <div className="bg-[#141316] text-[#efebe8] min-h-screen selection:bg-[#545358] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: HERO (TOP OF PAGE - BEFORE SCROLLING ON MOBILE)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#18171a] via-[#141316] to-[#121113]">
        {/* Ambient atmospheric stone gray glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[500px] bg-[#545358]/20 rounded-full blur-[180px]" />
          <div className="absolute top-10 right-1/4 w-[450px] h-[350px] bg-[#747476]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Essential Hero Information Above the Fold */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-4 text-left"
            >
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-space uppercase tracking-[0.22em] text-[#dcd8d4] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>SKIN BIO-REMODELLING • KING’S CROSS LONDON</span>
              </div>

              {/* Exact H1 requested by brief */}
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
                  Skin Booster Treatment in King&apos;s Cross, London
                </h1>
              </div>

              {/* Required one-line explanation */}
              <p className="text-sm sm:text-base text-emerald-300/90 font-mono tracking-wide">
                Injectable hyaluronic acid that deeply hydrates the skin and stimulates collagen.
              </p>

              {/* First paragraph containing skin booster, Profhilo and King's Cross for Quality Score alignment */}
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl leading-relaxed">
                Experience practitioner-led <strong>skin booster</strong> and <strong>Profhilo</strong> treatments at our private clinic in <strong>King&apos;s Cross</strong>. Ultra-pure hyaluronic acid bio-remodelling engineered to hydrate deep tissue layers, restore firmness, and produce a radiant glow without artificial volume.
              </p>

              {/* Prices visible at once before scrolling */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 max-w-lg">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/15">
                  <span className="text-[10px] uppercase font-space tracking-wider text-[#dcd8d4] block">
                    Profhilo (1 Session)
                  </span>
                  <span className="font-serif text-2xl text-white font-normal">
                    £140
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.08] border border-emerald-500/30 ring-1 ring-emerald-500/20">
                  <span className="text-[10px] uppercase font-space tracking-wider text-emerald-300 block">
                    Profhilo (2 Sessions)
                  </span>
                  <span className="font-serif text-2xl text-white font-normal">
                    £250
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/15 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-space tracking-wider text-[#dcd8d4] block">
                    Glutathione Glow-Up
                  </span>
                  <span className="font-serif text-2xl text-white font-normal">
                    £90
                  </span>
                </div>
              </div>

              {/* Exact Trust Line requested by brief */}
              <div className="flex items-center gap-2 pt-1 text-xs text-[#dcd8d4] font-space">
                <div className="flex text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs">
                  5.0 on Google, 191 reviews, practitioner-led, 260 Pentonville Road, 4 mins from St Pancras
                </span>
              </div>

              {/* Required Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-[#141316] text-xs font-space uppercase tracking-wider font-semibold hover:bg-[#efebe8] transition-all shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book consultation</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-space uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={phoneTel}
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-space uppercase tracking-wider font-medium transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +44 7348 947988</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Treatment Suite Visual & Clinical Authority */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/05 backdrop-blur-md shadow-2xl aspect-[4/4.5] group max-w-sm lg:max-w-none mx-auto">
                <Image
                  src="/assets/images/clinic_treatment_suite.webp"
                  alt="Diez Aesthetics Private Clinical Treatment Suite King's Cross London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-space uppercase tracking-widest text-[#dcd8d4] block">
                    Practitioner-Led Clinical Suite
                  </span>
                  <p className="font-serif text-lg leading-snug">
                    Private Treatment Room
                  </p>
                  <p className="text-xs text-white/70 font-light">
                    260 Pentonville Road, King’s Cross N1 9JY
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-space">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Complimentary consultation when proceeding with treatment</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: WHAT IT IS AND WHO IT'S FOR
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] text-[#1c1917] border-b border-[#e5dfd8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>01 / TREATMENT OVERVIEW</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1917] tracking-tight">
              What It Is &amp; <span className="italic text-[#545358] font-normal">Who It&apos;s For</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
              Skin boosters are high-concentration, ultra-pure hyaluronic acid injectables that flow smoothly beneath the skin to stimulate four types of collagen and elastin. Unlike traditional dermal fillers, they do not create volume or change facial contours.
            </p>
          </div>

          {/* Exact 4 areas listed on the site: face glow, neck, hands and décolletage */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-center text-[#1c1917]">
              Treatment Areas Listed on Our Clinic Menu:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm text-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-[#1c1917] text-white inline-flex items-center justify-center font-serif text-sm font-semibold">
                  01
                </span>
                <h4 className="font-serif text-lg text-[#1c1917]">Face Glow</h4>
                <p className="text-xs text-[#78716c] font-light">
                  Smooths fine superficial lines, tightens mild skin laxity, and restores luminosity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm text-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-[#1c1917] text-white inline-flex items-center justify-center font-serif text-sm font-semibold">
                  02
                </span>
                <h4 className="font-serif text-lg text-[#1c1917]">Neck</h4>
                <p className="text-xs text-[#78716c] font-light">
                  Softens horizontal neck creases and horizontal necklace bands.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm text-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-[#1c1917] text-white inline-flex items-center justify-center font-serif text-sm font-semibold">
                  03
                </span>
                <h4 className="font-serif text-lg text-[#1c1917]">Hands</h4>
                <p className="text-xs text-[#78716c] font-light">
                  Hydrates thin dorsal skin and minimizes visible tendon crepiness.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm text-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-[#1c1917] text-white inline-flex items-center justify-center font-serif text-sm font-semibold">
                  04
                </span>
                <h4 className="font-serif text-lg text-[#1c1917]">Décolletage</h4>
                <p className="text-xs text-[#78716c] font-light">
                  Rehydrates chest crinkling caused by sun exposure and sleep position.
                </p>
              </div>
            </div>
          </div>

          {/* Who It Is For Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917]">
              Who Is the Ideal Candidate?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#44403c] font-light">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Patients noticing dull, parched, or tired skin that regular moisturizers cannot penetrate.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Individuals seeking genuine collagen stimulation without puffy, migrated dermal filler.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Early to moderate signs of aging in the face glow, neck, hands, or décolletage.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Anyone wanting a subtle, natural glow with zero downtime disruption.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: HOW IT WORKS AND WHAT TO EXPECT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#18171a] text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-space uppercase tracking-[0.22em] text-[#dcd8d4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dcd8d4]" />
              <span>02 / CLINICAL EXPECTATIONS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              How It Works &amp; <span className="italic text-[#dcd8d4]">What to Expect</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Every appointment is personally planned and administered by Clinical Director Daniel Diez following strict clinical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Number of sessions & gap */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block font-semibold">
                Sessions &amp; Timing
              </span>
              <h3 className="font-serif text-xl text-white">2 Sessions Spaced 4 Weeks Apart</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                A full course consists of 2 sessions. The first injection kick-starts hydration, while the second session 4 weeks later locks in cumulative cellular collagen and elastin remodelling.
              </p>
            </div>

            {/* Downtime */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block font-semibold">
                Downtime &amp; Recovery
              </span>
              <h3 className="font-serif text-xl text-white">12–24 Hours Minimal Downtime</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Small, localized papules appear at the specific injection sites. These naturally diffuse and flatten into the deeper dermal layers within 12 to 24 hours.
              </p>
            </div>

            {/* How long results last */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block font-semibold">
                Longevity
              </span>
              <h3 className="font-serif text-xl text-white">6 to 9 Months Duration</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Skin radiance and hydration settle within 10–14 days, with structural firmness peaking around 8–12 weeks. Results last 6 to 9 months, maintained with a single top-up.
              </p>
            </div>

            {/* Aftercare */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block font-semibold">
                Post-Treatment Care
              </span>
              <h3 className="font-serif text-xl text-white">Simple 24-Hour Precautions</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Avoid applying makeup or heavy skincare for 24 hours. Refrain from strenuous exercise, saunas, steam rooms, and alcohol for 48 hours to minimize any localized swelling.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: WHY DIEZ
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] text-[#1c1917] border-b border-[#e5dfd8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>03 / PRACTITIONER AUTHORITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1917] tracking-tight">
              Why Choose <span className="italic text-[#545358] font-normal">Diez Aesthetics</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
              Medical precision, discreet setting, and dedicated one-to-one clinical care.
            </p>
          </div>

          {/* 4 Pillars directly from site copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-3">
              <Award className="w-6 h-6 text-[#545358]" />
              <h3 className="font-serif text-lg text-[#1c1917]">Three Years Experience</h3>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Led personally by Clinical Director Daniel Diez with three years of dedicated clinical injecting experience in London.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="font-serif text-lg text-[#1c1917]">Practitioner-Led &amp; Insured</h3>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Fully insured, complications-trained, and operating under hospital-grade sterile clinical standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-3">
              <Info className="w-6 h-6 text-[#545358]" />
              <h3 className="font-serif text-lg text-[#1c1917]">English &amp; Spanish</h3>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Consultations and treatment plans delivered fluently in both English and Spanish for seamless patient communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              <h3 className="font-serif text-lg text-[#1c1917]">Complimentary Review</h3>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Your consultation is complimentary when you proceed with treatment, including thorough follow-up care.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PROOF (REVIEWS & CLINICAL INTEGRITY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#18171a] text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-space uppercase tracking-[0.22em] text-[#dcd8d4]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>04 / PATIENT PROOF</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Verified Patient <span className="italic text-[#dcd8d4]">Satisfaction</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Consistently rated 5.0 on Google across 191 verified patient reviews for clinical safety, subtle enhancement, and genuine care.
            </p>
          </div>

          {/* Real Google Reviews (Verbatim authentic reviews from Google Business Profile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-3">
              <div className="flex text-[#eab308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light italic leading-relaxed">
                &ldquo;The service was great, done with utmost care and attention. The clinic is pristine and Daniel explains every step with patience and clear guidance. Outstanding experience from consultation to follow-up.&rdquo;
              </p>
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block">
                Jesmin Begum · Verified Google Review
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-3">
              <div className="flex text-[#eab308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light italic leading-relaxed">
                &ldquo;Completed treatment at the clinic last week — my skin looks and feels amazing! Don’t worry about any pain either, he uses top quality numbing cream. A fantastic clinic 4 mins from King’s Cross.&rdquo;
              </p>
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block">
                Samiyah N. · Verified Google Review
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-3">
              <div className="flex text-[#eab308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light italic leading-relaxed">
                &ldquo;Numbing cream was applied as I was still in the waiting area and then treatment itself was really quick and efficient. Dani was super friendly and professional and I felt like I trusted his work and technique.&rdquo;
              </p>
              <span className="text-[10px] font-space uppercase tracking-wider text-emerald-400 block">
                Niki S. · Verified Google Review
              </span>
            </div>

          </div>

          {/* Link to all 191 Google Reviews */}
          <div className="text-center pt-2">
            <a
              href="https://maps.google.com/?q=Diez+Anti-Aging+Aesthetics+London"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-space uppercase tracking-wider text-white/80 hover:text-white transition-colors underline underline-offset-4"
            >
              <span>Read all 191 Google Reviews on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Privacy & Clinical Case Studies Statement (No reuse of polynucleotide photos) */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs text-white/80 font-light leading-relaxed">
              <strong>Patient Confidentiality &amp; UK Advertising Compliance:</strong> In accordance with UK CMA and CAP regulations, authentic Profhilo and skin booster before-and-after photographic records with signed written patient consent are reviewed in person during your private clinical consultation.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PRICING AND BOOKING POLICY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] text-[#1c1917] border-b border-[#e5dfd8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-space tracking-[0.25em] uppercase bg-[#e8e4e0] text-[#545358] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
              <span>05 / TRANSPARENT FEES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1917] tracking-tight">
              Skin Booster <span className="italic text-[#545358] font-normal">Pricing Menu</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
              Official London clinic prices directly from our verified menu.
            </p>
          </div>

          {/* Official Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Profhilo Single */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-sm space-y-4 text-center">
              <span className="text-[10px] uppercase font-space tracking-wider text-[#78716c] block">
                Single Treatment
              </span>
              <h3 className="font-serif text-2xl text-[#1c1917]">Profhilo (1 Session)</h3>
              <div className="font-serif text-4xl text-[#1c1917]">£140</div>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Initial bio-remodelling or 6-month maintenance session. 5 injection points per side.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 rounded-full text-center text-xs font-space uppercase tracking-wider font-semibold border border-black/20 text-[#1c1917] hover:bg-black/[0.04] transition-all"
              >
                Reserve Single
              </a>
            </div>

            {/* Profhilo Course (Best Value) */}
            <div className="p-6 rounded-3xl bg-[#18171a] text-white border-2 border-white/20 shadow-xl space-y-4 text-center relative">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-space uppercase tracking-wider">
                Recommended Course
              </div>
              <h3 className="font-serif text-2xl text-white">Profhilo (2 Sessions)</h3>
              <div className="font-serif text-4xl text-white">£250</div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Complete clinical course spaced 4 weeks apart. Required for full cellular collagen synthesis.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 rounded-full text-center text-xs font-space uppercase tracking-wider font-semibold bg-white text-[#18171a] hover:bg-[#efebe8] transition-all shadow-md"
              >
                Reserve Course of 2
              </a>
            </div>

            {/* Glutathione */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-sm space-y-4 text-center">
              <span className="text-[10px] uppercase font-space tracking-wider text-[#78716c] block">
                Targeted Booster
              </span>
              <h3 className="font-serif text-2xl text-[#1c1917]">Glutathione Glow-Up</h3>
              <div className="font-serif text-4xl text-[#1c1917]">£90</div>
              <p className="text-xs text-[#78716c] font-light leading-relaxed">
                Antioxidant booster designed to brighten tired skin and stimulate internal cellular defense.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 rounded-full text-center text-xs font-space uppercase tracking-wider font-semibold border border-black/20 text-[#1c1917] hover:bg-black/[0.04] transition-all"
              >
                Reserve Glutathione
              </a>
            </div>

          </div>

          {/* Booking & Cancellation Policy */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] text-xs text-[#57534e] space-y-2">
            <h4 className="font-serif text-base text-[#1c1917]">Clinical Booking &amp; Cancellation Policy:</h4>
            <p className="leading-relaxed">
              A deposit is required to secure your appointment slot with Clinical Director Daniel Diez. We operate a strict <strong>48-hour cancellation policy</strong> to allow other patients to book reserved clinic times. Consultations are complimentary when proceeding with your tailored treatment plan.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FAQS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#18171a] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-space uppercase tracking-[0.22em] text-[#dcd8d4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dcd8d4]" />
              <span>06 / COMMON QUESTIONS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Frequently Asked <span className="italic text-[#dcd8d4]">Questions</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Clear clinical answers regarding Profhilo and skin booster treatments.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#dcd8d4] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/05 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FINAL BOOKING BUTTON & ADDRESS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 bg-[#121113] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] text-[#dcd8d4]">
            <Calendar className="w-3.5 h-3.5" />
            <span>APPOINTMENTS BY ADVANCE RESERVATION ONLY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Restore Natural Radiance <br />
            <span className="italic text-[#dcd8d4]">In King&apos;s Cross</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto leading-relaxed">
            Personalised consultation and direct care with Clinical Director Daniel Diez. Transparent fees, hospital-grade sterility, and genuine clinical discretion.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#121113] text-xs font-space uppercase tracking-[0.2em] font-semibold hover:bg-[#efebe8] transition-all shadow-2xl"
            >
              Book Consultation Online
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-space uppercase tracking-[0.2em] font-medium hover:bg-[#25D366]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Daniel</span>
            </a>

            <a
              href={phoneTel}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 text-white text-xs font-space uppercase tracking-[0.2em] font-medium border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Location & Map Link */}
          <div className="pt-8 border-t border-white/10 max-w-md mx-auto space-y-2 text-xs text-white/70 font-space">
            <div className="flex items-center justify-center gap-1.5 text-white">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>260 Pentonville Road, London N1 9JY</span>
            </div>
            <p className="text-white/50 text-[11px]">
              Conveniently located 4 minutes walk from King’s Cross St. Pancras International.
            </p>
            <div className="pt-2">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
              >
                <span>View on Google Maps &rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STICKY MOBILE BOOKING BAR
          ───────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#18171a]/95 backdrop-blur-md border-t border-white/10 py-3 px-4 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="leading-tight">
          <span className="text-[10px] font-space uppercase tracking-wider text-[#dcd8d4] block">
            Profhilo
          </span>
          <span className="font-serif text-base text-white font-medium">
            £140 <span className="text-[10px] text-white/60">/ 2 for £250</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shrink-0"
            aria-label="WhatsApp clinic"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-[#18171a] text-xs font-space uppercase tracking-wider font-semibold shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>

    </div>
  );
}
