'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, CheckCircle2 } from 'lucide-react';

export function OfficialPriceCards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const priceCards = [
    {
      src: '/assets/images/diez-official-price-list-1.jpg',
      alt: 'Diez Aesthetics Official Price List 1 - Anti-Wrinkle Injections & Microneedling',
      title: 'Anti-Wrinkle Injections & Microneedling',
      subtitle: 'From £90 · Prescription Toxin & Collagen Induction',
    },
    {
      src: '/assets/images/diez-official-price-list-2.jpg',
      alt: 'Diez Aesthetics Official Price List 2 - Dermal Fillers, Fat Dissolving, Skin Boosters & Polynucleotides',
      title: 'Fillers, Polynucleotides & Skin Boosters',
      subtitle: 'From £90 · Dermal Contouring, Profhilo & Regenerative DNA',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#18171a] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.22em] text-[#efebe8]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>OFFICIAL INSTAGRAM PRICE LIST</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Official Clinic <span className="italic text-[#dcd8d4]">Price Menu</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Verified official fee schedule published directly on Instagram (<a href="https://instagram.com/diez_aesthetics" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">@diez_aesthetics</a>). Honest, fixed London pricing with zero hidden surcharges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-white/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Fixed Fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complimentary Consultation With Treatment</span>
            </div>
          </div>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {priceCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-md shadow-2xl hover:border-white/30 transition-all cursor-pointer"
              onClick={() => setSelectedImage(card.src)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[1/1.08] w-full bg-[#121113] overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-contain p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-space text-xs uppercase tracking-wider backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Card Footer info */}
              <div className="p-5 bg-white/[0.04] border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-white group-hover:text-[#dcd8d4] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light font-space pt-0.5">
                    {card.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-[#18171a] transition-all shrink-0">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note below cards */}
        <div className="text-center pt-8 text-xs text-white/50 font-light font-space">
          Click any price card to expand in high resolution · Direct appointments at 260 Pentonville Road, London N1 9JY
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={selectedImage}
                  alt="Official Price List Full View"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
