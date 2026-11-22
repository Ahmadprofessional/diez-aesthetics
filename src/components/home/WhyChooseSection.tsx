'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface WhyChooseSectionProps {
  content: HomeContent['why_choose'];
}

export function WhyChooseSection({ content }: WhyChooseSectionProps) {
  const icons = [ShieldCheck, UserCheck, Sparkles, HeartHandshake];

  return (
    <section className="py-24 sm:py-32 bg-[#100e13] text-white border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c48b7e]/10 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space font-medium tracking-[0.25em] uppercase bg-white/[0.06] text-[#c48b7e] border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
            <span>{content.label}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            Committed to Excellence &amp; <span className="italic text-[#c48b7e] font-normal">Safety</span>
          </h2>
          <p className="font-space text-xs text-zinc-400 font-light max-w-lg mx-auto uppercase tracking-wider">
            Medical rigor, transparent consultation, and natural-looking artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#161418] border border-white/10 hover:border-[#c48b7e]/50 transition-all duration-300 space-y-4 shadow-[0_20px_45px_rgba(0,0,0,0.6)] transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#c48b7e] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
