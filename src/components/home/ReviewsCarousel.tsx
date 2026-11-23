'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface ReviewsCarouselProps {
  content: HomeContent['reviews'];
}

export function ReviewsCarousel({ content }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-[#F5F2EB] border-t border-b border-black/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#3b3b3d]">
              {content.label}
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
              Real Stories. <span className="font-serif italic font-normal text-[#3b3b3d]">Real Confidence</span>
            </h2>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1c1917]">{content.rating}</span>
              <span className="text-xs text-[#78716c]">({content.total_reviews} Verified {content.source})</span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-black/10 hover:border-black/30 text-[#44403c] hover:text-black transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-black/10 hover:border-black/30 text-[#44403c] hover:text-black transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {content.items.map((item, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-black/[0.07] flex flex-col justify-between space-y-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-shadow">
                  <div className="space-y-4">
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-[#3b3b3d]/30" />
                    </div>

                    {/* Review Body */}
                    <p className="text-xs sm:text-sm text-[#44403c] font-light leading-relaxed italic">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-black/[0.05] flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#eae5dc] border border-black/10 shrink-0">
                      <Image
                        src={item.avatar.replace('/assets/original/reviews/', '/assets/reviews/')}
                        alt={item.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-medium text-[#1c1917]">{item.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-[11px] text-[#78716c]">Google Verified Patient</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
