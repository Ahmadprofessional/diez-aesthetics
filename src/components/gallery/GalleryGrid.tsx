'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GalleryContent } from '@/types/content';

interface GalleryGridProps {
  content: GalleryContent;
}

export function GalleryGrid({ content }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Category Pills in Client Stone Styling */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {content.categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-space uppercase tracking-wider font-semibold transition-all select-none ${
              activeCategory === cat
                ? 'bg-[#3b3b3d] text-white shadow-lg ring-2 ring-[#1c1a19] ring-offset-2 ring-offset-[#efebe8] scale-[1.02]'
                : 'bg-white text-[#545358] hover:text-[#1c1a19] border border-[#747476]/25 hover:border-[#747476] shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of 14 cases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {content.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
            onClick={() => setSelectedImage(item.url)}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-[#747476]/20 hover:border-[#545358] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={idx < 4}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="flex items-center justify-between w-full text-white">
                <span className="text-xs font-space font-medium uppercase tracking-wider">
                  {item.treatment}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal with Highest Z-Index (Z-[100]) so it never conflicts with navbar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Top Bar with Clear Close Button and Branding */}
            <div className="w-full max-w-6xl flex items-center justify-between pb-4 z-10" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#545358]" />
                <span className="text-xs uppercase font-space tracking-[0.2em] text-[#efebe8]">
                  Clinical Case Inspection
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-xs font-space uppercase tracking-wider font-semibold shadow-lg"
                aria-label="Close image preview"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/10">
                <Image
                  src={selectedImage}
                  alt="Enlarged clinical result"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            <div className="w-full text-center text-xs text-[#a8a5a3] font-space tracking-wider pt-2">
              Standardised clinical case • Diez Aesthetics London
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
