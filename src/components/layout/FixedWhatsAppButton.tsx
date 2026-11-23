'use client';

import React, { useState } from 'react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface FixedWhatsAppButtonProps {
  config: GlobalConfig;
}

export function FixedWhatsAppButton({ config }: FixedWhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden md:flex fixed md:bottom-6 md:left-6 z-40 select-none">
      <a
        href={config.whatsapp_url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:bg-[#20ba5a] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20"
        aria-label="Chat on WhatsApp with Clinical Director Daniel Diez"
      >
        {/* Official Authentic WhatsApp Icon */}
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-105 transition-transform" />

        {/* Floating Tooltip */}
        <div
          className={`absolute bottom-full left-0 mb-3 px-3 py-1.5 rounded-xl bg-[#1c1917] text-[#efebe8] border border-white/10 text-[10px] font-space tracking-wider uppercase whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          <span>Direct with Daniel Diez</span>
          <div className="absolute top-full left-5 -mt-1 border-4 border-transparent border-t-[#1c1917]" />
        </div>
      </a>
    </div>
  );
}
