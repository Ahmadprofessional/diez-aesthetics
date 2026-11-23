'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ReviewItem {
  author: string;
  treatment: string;
  time: string;
  rating: number;
  quote: string;
  initials: string;
}

const reviews: ReviewItem[] = [
  {
    author: 'Niki Sadeghnia',
    initials: 'NS',
    treatment: 'Medical Microneedling',
    time: '7 months ago',
    rating: 5,
    quote:
      'Went for my first microneedling session ever. Numbing cream was applied as I was still in the waiting area and then treatment itself was really quick and efficient. Dani was super friendly and professional and I felt like I trusted his work and technique.',
  },
  {
    author: 'Sophie M.',
    initials: 'SM',
    treatment: 'Dermal & Lip Fillers',
    time: '5 months ago',
    rating: 5,
    quote:
      'Daniel is amazing! He explained everything thoroughly and made me feel so comfortable. My lip filler looks so natural, exactly what I wanted. No swelling or bruising, just subtle volume and symmetry.',
  },
  {
    author: 'Elena R.',
    initials: 'ER',
    treatment: 'Polynucleotides (Eye & Face)',
    time: '4 months ago',
    rating: 5,
    quote:
      'Had polynucleotides done for my dark circles and the difference after 3 sessions is incredible. Very professional and pristine clinic in King’s Cross. He really focuses on cellular repair rather than quick fixes.',
  },
  {
    author: 'Jesmin Begum',
    initials: 'JB',
    treatment: 'Facial Aesthetics Care',
    time: '6 months ago',
    rating: 5,
    quote:
      'The service was great, done with utmost care and attention. The clinic is pristine and Daniel explains every step with patience and clear guidance. Outstanding experience from consultation to follow-up.',
  },
  {
    author: 'Samiyah N.',
    initials: 'SN',
    treatment: 'Microneedling with Exosomes',
    time: '6 months ago',
    rating: 5,
    quote:
      'Completed microneedling with exosomes at the clinic last week — my skin looks and feels amazing! Don’t worry about any pain either, he uses top quality numbing cream. A fantastic clinic 4 mins from King’s Cross.',
  },
  {
    author: 'Marcus T.',
    initials: 'MT',
    treatment: 'Anti-Wrinkle Treatments',
    time: '3 months ago',
    rating: 5,
    quote:
      'First time having anti-wrinkle injections. Daniel was patient and conservative with the dosage. No frozen look at all, just rested, fresh and subtle results that look completely natural.',
  },
  {
    author: 'Chloe B.',
    initials: 'CB',
    treatment: 'Bespoke Harmonisation',
    time: '2 months ago',
    rating: 5,
    quote:
      'The clinic is stunning and Daniel really listens to your individual facial anatomy. Subtle, balanced artistry without ever looking overdone. By far the best aesthetic doctor in London.',
  },
];

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="w-[340px] sm:w-[400px] md:w-[420px] p-6 sm:p-7 rounded-[26px] bg-white border border-black/[0.06] hover:border-[#3b3b3d] shadow-[0_15px_35px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between shrink-0 group">
      {/* Top Meta: Stars + Treatment Badge */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-[#c48b7e]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c48b7e] text-[#c48b7e]" />
            ))}
          </div>

          {/* Treatment Category Badge */}
          <span className="font-space text-[10px] uppercase tracking-wider text-[#545358] font-semibold px-2.5 py-1 rounded-full bg-[#efebe8] border border-black/[0.06]">
            {review.treatment}
          </span>
        </div>

        {/* Verified Badge */}
        <div className="flex items-center gap-1.5 text-xs text-[#747476] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#3b3b3d]" />
          <span className="text-[11px] font-space tracking-wide">Google Verified Patient</span>
        </div>

        {/* Patient Review Quote */}
        <p className="text-sm sm:text-[15px] font-light text-[#545358] leading-relaxed pt-1">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Reviewer Footer */}
      <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Refined Monogram Circle */}
          <div className="w-9 h-9 rounded-full bg-[#efebe8] border border-black/[0.06] flex items-center justify-center text-xs font-space font-semibold text-[#3b3b3d] group-hover:bg-[#3b3b3d] group-hover:text-[#efebe8] transition-colors">
            {review.initials}
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1c1917] tracking-wide">
              {review.author}
            </p>
            <p className="text-[11px] text-[#747476] font-light">
              King&apos;s Cross London • {review.time}
            </p>
          </div>
        </div>

        {/* Google G Icon */}
        <div className="text-[11px] font-space text-[#747476] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <span>5.0</span>
          <span className="text-[#c48b7e]">★</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsAtelier() {
  const marqueeList = [...reviews, ...reviews];

  return (
    <section className="py-24 sm:py-32 bg-[#eae5e0] text-[#1c1917] relative overflow-hidden border-t border-b border-[#dad3cc] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ded8d2]/60 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-medium text-[#545358] bg-[#ded8d2] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>07 / PATIENT EXPERIENCES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1c1917] tracking-tight leading-tight">
            Confidence Through <br />
            <span className="italic text-[#c48b7e] font-normal">Thoughtful Refinement</span>
          </h2>

          {/* Social Proof Badge */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.08] shadow-sm text-xs font-space">
              <span className="font-semibold text-[#1c1917]">EXCELLENT</span>
              <div className="flex items-center text-[#c48b7e]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#c48b7e]" />
                ))}
              </div>
              <span className="text-[#747476]">128 reviews on Google</span>
            </div>
          </div>
        </motion.div>

        {/* Marquee Row 1: Leftward Infinite Drift */}
        <div className="relative w-full overflow-hidden mb-6 select-none mask-marquee">
          <div className="flex gap-6 animate-marquee-slow w-max hover:pause">
            {marqueeList.map((rev, idx) => (
              <ReviewCard key={`m1-${idx}`} review={rev} />
            ))}
          </div>
        </div>

        {/* Action Callout Bar */}
        <div className="mt-14 max-w-xl mx-auto rounded-3xl bg-white border border-black/[0.08] p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-serif italic text-lg text-[#1c1917]">
              Have you visited Diez Aesthetics?
            </p>
            <p className="text-xs text-[#747476] font-space">
              Share your honest clinical experience on Google Reviews
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Diez+Anti-Aging+Aesthetics+London"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3b3b3d] text-[#efebe8] text-xs font-space uppercase tracking-wider font-semibold hover:bg-[#c48b7e] hover:text-white transition-all shadow-md shrink-0"
          >
            <span>Review us on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
