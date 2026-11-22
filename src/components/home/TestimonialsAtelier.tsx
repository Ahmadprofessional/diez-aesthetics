'use client';

import React from 'react';
import { Star, CheckCircle2, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

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
    <div className="w-[340px] sm:w-[400px] md:w-[420px] p-6 sm:p-7 rounded-[26px] bg-[#161418] border border-white/10 hover:border-[#c48b7e]/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shrink-0 group">
      {/* Top Meta: Stars + Treatment Badge */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          {/* 5 Glowing Gold Stars */}
          <div className="flex items-center gap-1 text-[#E5A93C]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#E5A93C] text-[#E5A93C]" />
            ))}
          </div>

          {/* Treatment Category Badge */}
          <span className="font-space text-[10px] uppercase tracking-wider text-[#c48b7e] font-semibold px-2.5 py-1 rounded-full bg-[#c48b7e]/10 border border-[#c48b7e]/20">
            {review.treatment}
          </span>
        </div>

        {/* Verified Badge */}
        <div className="flex items-center gap-1.5 text-xs text-[#a8a5a3] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#c48b7e]" />
          <span className="text-[11px] font-space tracking-wide">Google Verified Patient</span>
        </div>

        {/* Patient Review Quote */}
        <p className="text-sm sm:text-[15px] font-light text-zinc-200 leading-relaxed pt-1">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Reviewer Footer */}
      <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Refined Monogram Circle */}
          <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-space font-semibold text-[#c48b7e] group-hover:border-[#c48b7e]/40 transition-colors">
            {review.initials}
          </div>
          <div>
            <p className="text-xs font-semibold text-white tracking-wide">
              {review.author}
            </p>
            <p className="text-[11px] text-zinc-400 font-light">
              King&apos;s Cross London • {review.time}
            </p>
          </div>
        </div>

        {/* Google G Icon */}
        <div className="text-[11px] font-space text-zinc-400 flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
          <span>5.0</span>
          <span className="text-[#E5A93C]">★</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsAtelier() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...reviews, ...reviews];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0b0e] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#c48b7e]/10 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-medium text-[#c48b7e] bg-white/[0.06] border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
            <span>PATIENT TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Confidence Through <br />
            <span className="italic text-[#c48b7e] font-normal">Thoughtful Refinement</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            Real experiences from patients who trust Diez Aesthetics for natural, subtle facial harmonisation and regenerative skin treatments.
          </p>

          {/* Google Verified Banner Pill */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white shadow-xl">
              <span className="font-space font-semibold tracking-wider text-[11px] uppercase text-[#c48b7e]">
                EXCELLENT 5.0
              </span>
              <div className="flex items-center text-[#c48b7e]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#c48b7e] text-[#c48b7e]" />
                ))}
              </div>
              <span className="text-[#a8a5a3] font-light text-[11px]">
                128 Verified Reviews on
              </span>
              <span className="text-white font-semibold text-xs">Google</span>
              <span className="text-white/20">•</span>
              <span className="text-[#efebe8] font-medium text-[11px]">100% Patient Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Infinite Marquee Carousel (3-4 Reviews Visible simultaneously on desktop) */}
      <div className="relative w-full overflow-hidden pause-on-hover py-4">
        {/* Soft edge fade masks on both sides for luxury editorial finish */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0c0b0e] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0c0b0e] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track (Smooth Continuous Animation, Pauses on Hover) */}
        <div className="animate-marquee flex gap-6 px-4">
          {marqueeList.map((review, idx) => (
            <ReviewCard key={`${review.author}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Row: Direct Google Review Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://maps.google.com/?q=Diez+Anti-Aging+Aesthetics+London"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/15 text-xs font-space uppercase tracking-[0.2em] font-medium transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Read All 128 Reviews on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#c48b7e] hover:bg-white text-white hover:text-black text-xs font-space uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_4px_20px_rgba(196,139,126,0.35)] transform hover:-translate-y-0.5"
          >
            <span>Book Your Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
