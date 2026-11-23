'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: GlobalConfig;
}

export function MobileDrawer({ isOpen, onClose, config }: MobileDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] md:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#18171a] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-light tracking-[0.2em] text-white">
                DIEZ
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#c48b7e] uppercase">
                AESTHETICS
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-md border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col space-y-4" aria-label="Mobile Navigation">
            {config.navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`text-sm uppercase tracking-[0.2em] font-medium py-2 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#c48b7e] font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Clinic Details */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <a
            href={config.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] text-xs uppercase tracking-wider font-semibold shadow-lg hover:bg-[#c48b7e] hover:border-[#c48b7e] hover:text-white transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </a>

          <a
            href={config.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/15 text-zinc-300 bg-white/[0.04] text-xs uppercase tracking-wider font-medium hover:bg-white/10 hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="pt-2 text-xs text-zinc-400 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#747476] shrink-0 mt-0.5" />
              <span>{config.address.street}, {config.address.area}, London {config.address.postcode}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#747476] shrink-0" />
              <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {config.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
