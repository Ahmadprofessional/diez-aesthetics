'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface TreatmentCardGridProps {
  content: HomeContent['treatments_preview'];
}

export function TreatmentCardGrid({ content }: TreatmentCardGridProps) {
  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#3b3b3d]">
            {content.label}
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
            Tailored to Enhance Your <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#3b3b3d] font-normal">Natural Beauty</span>
          </h2>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.treatments.map((treatment, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-black/[0.07] hover:border-[#545358]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.09)] transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full bg-[#f2ede4] overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  unoptimized
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-normal text-[#1c1917] group-hover:text-[#3b3b3d] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#57534e] font-light leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={treatment.cta.href}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3b3b3d] group-hover:text-[#545358] transition-colors"
                  >
                    <span>{treatment.cta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTAs */}
        <div className="mt-14 text-center">
          <Link
            href="/treatments/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-black/15 bg-white text-[#1c1917] hover:bg-[#1c1917] hover:text-white text-xs uppercase tracking-[0.2em] font-medium shadow-sm transition-all"
          >
            <span>Explore All 6 Treatment Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
