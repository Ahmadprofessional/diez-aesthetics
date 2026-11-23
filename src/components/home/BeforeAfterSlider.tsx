'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface BeforeAfterSliderProps {
  content: HomeContent['before_after'];
}

export function BeforeAfterSlider({ content }: BeforeAfterSliderProps) {
  const [activePairIndex, setActivePairIndex] = useState(0);

  // Safe fallback ensuring local images are always used
  const pairs = [
    {
      treatment: 'Lip Enhancement',
      before: '/assets/images/before-lip.jpg',
      after: '/assets/images/after-lip.jpg',
    },
    {
      treatment: 'Under-Eye & Tear Trough Polynucleotides',
      before: '/assets/images/before-eye.jpg',
      after: '/assets/images/after-eye.jpg',
    },
    {
      treatment: 'Facial Rejuvenation & Skin Quality',
      before: '/assets/images/before-lip.jpg',
      after: '/assets/images/after-lip.jpg',
    },
  ];

  const activePair = pairs[activePairIndex] || pairs[0];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-b border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.25em] uppercase bg-black/[0.04] text-[#8c6b2d] border border-black/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>REAL RESULTS</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
            Before &amp; After <span className="font-serif italic font-normal text-[#8c6b2d]">Transformations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-xl mx-auto">
            Subtle, balanced enhancements showcasing natural regenerative results. Unretouched clinical documentation.
          </p>
        </motion.div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {pairs.map((pair, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActivePairIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activePairIndex === idx
                  ? 'bg-[#1c1917] text-white font-semibold shadow-md'
                  : 'bg-white text-[#57534e] hover:text-black border border-black/10 hover:border-black/20'
              }`}
            >
              {pair.treatment}
            </button>
          ))}
        </div>

        {/* Main Comparison Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            {/* Slider Component */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
              <ReactCompareSlider
                itemOne={
                  <div className="relative w-full h-full bg-[#f2ede4]">
                    <Image
                      src={activePair.before}
                      alt={`${activePair.treatment} - Before Treatment`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-[#1c1917] text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                      Before
                    </div>
                  </div>
                }
                itemTwo={
                  <div className="relative w-full h-full bg-[#f2ede4]">
                    <Image
                      src={activePair.after}
                      alt={`${activePair.treatment} - After Treatment`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#8c6b2d] text-white text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                      After
                    </div>
                  </div>
                }
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      backgroundColor: '#8c6b2d',
                      border: '2px solid #ffffff',
                      color: '#ffffff',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
                    }}
                    linesStyle={{
                      color: '#8c6b2d',
                      width: 2,
                    }}
                  />
                }
                className="w-full h-full select-none"
              />
            </div>

            {/* Stage Footer Banner */}
            <div className="p-4 sm:p-5 bg-white border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#44403c]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Case: <strong className="text-[#1c1917] font-medium">{activePair.treatment}</strong> (Unretouched clinical photograph)
                </span>
              </div>
              <div className="text-[#78716c] text-[11px] font-mono">
                Drag slider to compare before &amp; after results
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Deep-link */}
        <div className="mt-12 text-center">
          <a
            href="/gallery/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/10 bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#8c6b2d] hover:bg-[#FAF8F5] transition-colors shadow-sm"
          >
            <span>View Full Clinical Gallery (14 Cases)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
