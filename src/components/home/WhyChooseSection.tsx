'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Award, HeartHandshake } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface WhyChooseSectionProps {
  content: HomeContent['why_choose'];
}

export function WhyChooseSection({ content }: WhyChooseSectionProps) {
  const icons = [ShieldCheck, UserCheck, Award, HeartHandshake];

  return (
    <section className="py-24 sm:py-32 bg-[#f7f5f3] text-[#1c1917] border-t border-b border-[#e5dfd8] relative overflow-hidden transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ded9d5]/60 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space font-medium tracking-[0.25em] uppercase bg-[#ded8d2] text-[#545358] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>06 / THE DIEZ STANDARD</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
            Committed to Excellence &amp; <span className="italic text-[#c48b7e] font-normal">Safety</span>
          </h2>
          <p className="font-space text-xs text-[#747476] font-light max-w-lg mx-auto uppercase tracking-wider">
            Medical rigor, transparent consultation, and natural-looking artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 rounded-3xl bg-white border border-black/[0.06] hover:border-[#3b3b3d] transition-all duration-300 space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.04)] transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#efebe8] border border-black/[0.06] flex items-center justify-center text-[#3b3b3d] group-hover:scale-110 group-hover:bg-[#3b3b3d] group-hover:text-[#efebe8] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1c1917]">
                  {point.title}
                </h3>
                <p className="text-xs text-[#545358] leading-relaxed font-light">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
