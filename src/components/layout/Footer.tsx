'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck, Star } from 'lucide-react';
import { GlobalConfig } from '@/types/content';

interface FooterProps {
  config: GlobalConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-[#FAF8F5] text-[#1c1917] relative overflow-hidden border-t border-black/[0.06] pt-20 pb-8">
      {/* Background ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#f4ede2] rounded-full blur-[160px] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 4-Column Minimalist Luxury Directory matching Memora reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 pb-16">
          {/* Column 1: Diez Aesthetics Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#1c1917]">
              Diez Atelier
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#57534e]">
              <li>
                <Link href="/" className="hover:text-[#8c6b2d] transition-colors">
                  Home Atelier
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-[#8c6b2d] transition-colors">
                  About Daniel
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors">
                  Clinical Portfolio
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-[#8c6b2d] transition-colors">
                  Patient Gallery
                </Link>
              </li>
              <li>
                <Link href="/prices/" className="hover:text-[#8c6b2d] transition-colors">
                  Treatment Menu
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#8c6b2d] transition-colors">
                  Contact Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Clinical Treatments */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#1c1917]">
              Treatments
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#57534e]">
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Anti-Wrinkle Injections</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Dermal &amp; Lip Fillers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Polynucleotides (Eye &amp; Face)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Skin Boosters (Profhilo)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Medical Microneedling</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group">
                  <span>Bespoke Harmonisation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic & Practice */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#1c1917]">
              Clinic &amp; Practice
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#57534e]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8c6b2d] shrink-0 mt-0.5" />
                <span>260 Pentonville Road, London N1 9JY</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8c6b2d] shrink-0" />
                <span>Mon–Fri: 10:00–19:00, Sat: 10:00–18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doctor &amp; Complications Trained</span>
              </li>
              <li className="pt-2 text-xs text-[#78716c]">
                <span>King&apos;s Cross St. Pancras (4 mins walk)</span>
              </li>
              <li className="text-xs text-[#78716c]">
                <span>Appointments strictly by advance booking</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Booking */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#1c1917]">
              Connect &amp; Book
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#57534e]">
              <li>
                <a
                  href={config.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-[#1c1917]">FacesConsent Booking</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={config.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-emerald-700">WhatsApp Clinician</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:text-emerald-600 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Diez+Anti-Aging+Aesthetics+London"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8c6b2d] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Google 5.0 ★ Reviews</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#E5A93C]/20 text-[#8c6b2d] font-semibold">128</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:text-[#8c6b2d] transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#8c6b2d] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8c6b2d]" />
                  <span>{config.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-[#8c6b2d] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8c6b2d]" />
                  <span>{config.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider hairline matching reference */}
        <div className="border-t border-black/[0.07] pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-28">
              <Image
                src="/assets/images/logo-diez-aesthetics-dark.png"
                alt="Diez Aesthetics London"
                fill
                unoptimized
                className="object-contain object-left"
              />
            </div>
            <span className="text-black/20">•</span>
            <span className="font-space text-[11px] uppercase tracking-wider text-[#8c6b2d]">
              Doctor-led Aesthetics Atelier
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-space">
            <span>© 2026 Diez Aesthetics. All rights reserved.</span>
            <span className="text-black/20">•</span>
            <span>260 Pentonville Road, King&apos;s Cross London</span>
          </div>
        </div>

        {/* GIGANTIC DEBOSSED WATERMARK WORDMARK AT BOTTOM (Matches Memora reference) */}
        <div className="w-full overflow-hidden select-none pointer-events-none pt-4 sm:pt-6">
          <div className="font-serif text-[5.8vw] sm:text-[6.2vw] md:text-[6.6vw] leading-none font-light tracking-wider text-center text-[#ded5c6]/45 -mb-2 sm:-mb-6 uppercase whitespace-nowrap">
            DIEZ AESTHETICS
          </div>
        </div>
      </div>
    </footer>
  );
}
