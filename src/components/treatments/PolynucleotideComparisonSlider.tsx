'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export function PolynucleotideComparisonSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      {/* Slider Viewport */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#f2ede4]">
        {isMounted ? (
          <ReactCompareSlider
            itemOne={
              <div className="relative w-full h-full bg-[#f2ede4]">
                <Image
                  src="/assets/images/before-eye.jpg"
                  alt="Under-Eye Dark Circles and Tear Troughs - Before Polynucleotide Treatment"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                  Before Treatment
                </div>
              </div>
            }
            itemTwo={
              <div className="relative w-full h-full bg-[#f2ede4]">
                <Image
                  src="/assets/images/after-eye.jpg"
                  alt="Under-Eye Rejuvenation and Dark Circle Reduction - After Polynucleotides Course"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-[#1c1917] text-[11px] uppercase tracking-wider font-semibold shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>After 3 Sessions</span>
                </div>
              </div>
            }
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backgroundColor: '#3b3b3d',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
                }}
                linesStyle={{
                  color: '#3b3b3d',
                  width: 2,
                }}
              />
            }
            className="w-full h-full select-none"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/after-eye.jpg"
              alt="Under-Eye Rejuvenation - After Polynucleotides Course"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* Clinical Notes Footer */}
      <div className="p-4 sm:p-5 bg-white border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#44403c]">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Case: <strong className="text-[#1c1917] font-medium">Under-Eye Hollows &amp; Tear Troughs</strong> (Standardised Clinical Documentation)
            <span className="block text-[11px] text-[#78716c] font-normal pt-0.5">
              Clinical case study record. Full patient portfolios and documentation with signed written consent are reviewed during private in-clinic consultation.
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#78716c]">
          <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>Practitioner-Led Treatment</span>
        </div>
      </div>
    </div>
  );
}
