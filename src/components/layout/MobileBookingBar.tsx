'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface MobileBookingBarProps {
  config: GlobalConfig;
}

export function MobileBookingBar({ config }: MobileBookingBarProps) {
  return (
    <aside
      aria-label="Quick booking actions"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#efebe8]/95 backdrop-blur-md border-t border-black/10 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={config.whatsapp_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#747476]/30 text-[#1c1a19] text-xs uppercase tracking-wider font-medium hover:bg-zinc-100 transition-colors shadow-sm"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#747476]" />
          <span>WhatsApp</span>
        </a>

        <a
          href={config.booking_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#3b3b3d] border border-white/20 text-[#efebe8] text-xs uppercase tracking-wider font-semibold shadow-sm hover:bg-[#545358] transition-colors"
          aria-label="Book your treatment online"
        >
          <Calendar className="w-4 h-4 shrink-0 text-[#efebe8]" />
          <span>Book Now</span>
        </a>
      </div>
    </aside>
  );
}
