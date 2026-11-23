'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface FooterProps {
  config: GlobalConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="relative bg-[#585b63] text-white overflow-hidden border-t border-white/10 pt-10 sm:pt-14 pb-10 sm:pb-12">
      {/* Authentic Gray Marble Texture Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/assets/images/diez-gray-marble-bg.webp')` }}
      />
      {/* Ambient Depth Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4e5158]/50 via-transparent to-[#3f4248]/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 4-Column Directory matching Diez Aesthetics Reference */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-8">
          
          {/* Column 1: Brand & Clinical Philosophy */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-11 w-36">
              <Image
                src="/assets/images/logo-diez-aesthetics.png"
                alt="Diez Aesthetics London"
                fill
                unoptimized
                className="object-contain object-left brightness-100"
              />
            </div>
            <p className="text-xs sm:text-sm font-light text-white/85 leading-relaxed pt-1">
              Advanced aesthetic and regenerative treatments designed to enhance your natural features and elevate your confidence with subtle, balanced results.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-white/90 shrink-0" />
              <span>Doctor-Led &amp; Complications Trained</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <div>
              <h3 className="font-space text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
                Quick Links
              </h3>
              <div className="w-8 h-[2px] bg-white/70 mt-2 mb-4" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/80">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Home Atelier
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  About Daniel
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Patient Gallery
                </Link>
              </li>
              <li>
                <Link href="/prices/" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Treatment Menu &amp; Prices
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Contact Clinic
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Diez+Anti-Aging+Aesthetics+London"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Google 5.0 <span className="text-[#eab308]">★</span> Reviews (128)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="space-y-4">
            <div>
              <h3 className="font-space text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
                Treatments
              </h3>
              <div className="w-8 h-[2px] bg-white/70 mt-2 mb-4" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/80">
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Lip Fillers &amp; Definition</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Anti-Wrinkle Injections</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Polynucleotides (Eye &amp; Face)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medical Microneedling</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Skin Boosters (Profhilo)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/treatments/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Bespoke Harmonisation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <div>
              <h3 className="font-space text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
                Contact
              </h3>
              <div className="w-8 h-[2px] bg-white/70 mt-2 mb-4" />
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-white/80">
              <li>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-white/90 shrink-0" />
                  <span className="font-medium text-white">{config.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-white/90 shrink-0" />
                  <span>{config.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/90 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">London, UK</span>
                  <span className="text-white/70 text-xs">260 Pentonville Road, N1 9JY (King&apos;s Cross)</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-xs pt-1">
                <Clock className="w-3.5 h-3.5 text-white/80 shrink-0" />
                <span>Mon–Fri: 10:00–19:00, Sat: 10:00–18:00</span>
              </li>
              <li className="pt-2">
                <a
                  href={config.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-xs text-white transition-colors"
                >
                  <span>Book Online (FacesConsent)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider hairline */}
        <div className="border-t border-white/15 pt-5 pb-3 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-3">
          <div className="flex items-center gap-3">
            <span className="font-space text-[11px] uppercase tracking-wider text-white/80">
              Doctor-Led Aesthetics Atelier London
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] font-space text-white/70">
            <span>© 2026 Diez Aesthetics. All rights reserved.</span>
            <span className="text-white/30">•</span>
            <span>260 Pentonville Road, King&apos;s Cross London</span>
          </div>
        </div>

        {/* FULL, COMPACT DIEZ AESTHETICS WORDMARK (TIGHT & NEVER CUT OFF) */}
        <div className="w-full select-none pointer-events-none pt-4 sm:pt-6 pb-1">
          <div
            className="font-serif text-[4.8vw] sm:text-[4.2vw] md:text-[3.8vw] lg:text-[3.4vw] leading-tight font-normal tracking-[0.08em] text-center uppercase whitespace-nowrap"
            style={{
              color: 'rgba(255, 255, 255, 0.25)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.45), 0 -1px 1px rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.1em',
            }}
          >
            DIEZ AESTHETICS
          </div>
        </div>

      </div>
    </footer>
  );
}
