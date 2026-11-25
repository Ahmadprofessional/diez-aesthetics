'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface CTASectionProps {
  config: GlobalConfig;
}

export function CTASection({ config }: CTASectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#f7f5f3] text-[#1c1917] relative overflow-hidden border-t border-[#e5dfd8] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ded9d5]/60 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[36px] sm:rounded-[44px] bg-[#2c2b2e] text-[#efebe8] border border-black/[0.1] p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-[0_25px_70px_rgba(0,0,0,0.25)] relative overflow-hidden"
        >
          {/* Subtle inner spotlight */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-white/[0.05] rounded-full blur-[120px] pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-space tracking-[0.25em] uppercase bg-white/[0.08] text-white/90 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>08 / PRIVATE CONSULTATION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Ready to Begin Your <br />
              <span className="italic text-[#dcd8d4] font-normal">Aesthetic Journey?</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed pt-1">
              Personalised one-to-one consultations with Clinical Director &amp; Aesthetic Practitioner Daniel Diez. Advanced regenerative care, practitioner precision, and subtle natural results.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={config.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#1c1917] font-space text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#efebe8] transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation Slot</span>
            </a>

            <a
              href={config.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/25 bg-white/[0.08] text-white font-space text-xs uppercase tracking-[0.2em] font-medium hover:border-white hover:bg-white/15 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Location & Transit Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-space">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white/70" />
              <span>260 Pentonville Road, King&apos;s Cross N1 9JY</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>•</span>
              <span>4 mins walk from St Pancras</span>
              <span>•</span>
              <span>By appointment only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
