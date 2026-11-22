'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { GlobalConfig } from '@/types/content';

interface CTASectionProps {
  config: GlobalConfig;
}

export function CTASection({ config }: CTASectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0b0e] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c48b7e]/15 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[36px] sm:rounded-[44px] bg-[#161418] border border-white/10 p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Subtle inner spotlight */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

          {/* Official Logo */}
          <div className="flex justify-center pb-2">
            <div className="relative h-12 sm:h-14 w-36 sm:w-44">
              <Image
                src="/assets/images/logo-diez-aesthetics.png"
                alt="Diez Aesthetics London"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-white/[0.06] text-[#c48b7e] border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#c48b7e]" />
              <span>PRIVATE CLINICAL SANCTUARY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Ready to Begin Your <br />
              <span className="italic text-[#c48b7e] font-normal">Aesthetic Journey?</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed pt-1">
              Book a private one-on-one consultation with Daniel Diez at our clinic near King&apos;s Cross St. Pancras. Personalized care with zero pressure.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={config.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c48b7e] text-[#0f0e11] text-xs uppercase font-space tracking-[0.2em] font-semibold hover:bg-white shadow-[0_4px_25px_rgba(192,132,252,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-[#0f0e11]" />
              <span>Book Consultation</span>
            </a>

            <a
              href={config.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] text-white text-xs uppercase font-space tracking-[0.2em] font-medium hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-white transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Clinician</span>
            </a>
          </div>

          {/* Location Badge */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-400 font-space">
            <MapPin className="w-3.5 h-3.5 text-[#c48b7e]" />
            <span>260 Pentonville Road, King&apos;s Cross London N1 9JY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
