'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Calendar } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';
import { MobileDrawer } from './MobileDrawer';

interface HeaderProps {
  config: GlobalConfig;
}

export function Header({ config }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isDarkHero = pathname === '/';

  useEffect(() => {
    setMounted(true);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if at top
      if (currentScrollY < 30) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);

        // Smart scroll: scroll down -> hide navbar; scroll up -> reveal navbar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled
            ? isDarkHero
              ? 'bg-[#161418]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
              : 'bg-[#efebe8]/95 backdrop-blur-xl py-3 border-b border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Official Diez Aesthetics Logo - Adaptive for Dark Hero vs Light Inner Pages */}
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none group z-10"
              aria-label="Diez Aesthetics London Homepage"
            >
              <div className="relative h-10 sm:h-12 w-32 sm:w-40">
                <Image
                  src={
                    isDarkHero
                      ? '/assets/images/logo-diez-aesthetics.png'
                      : '/assets/images/logo-diez-aesthetics-dark.png'
                  }
                  alt="Diez Aesthetics Clinic London"
                  fill
                  unoptimized
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Mathematically Centered */}
            <nav
              className="hidden md:flex items-center space-x-7 lg:space-x-8 font-space absolute left-1/2 -translate-x-1/2 z-10"
              aria-label="Main Navigation"
            >
              {config.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-all relative py-1 ${
                      isActive
                        ? 'text-[#c48b7e] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#c48b7e]'
                        : isDarkHero
                        ? 'text-zinc-300 hover:text-[#c48b7e]'
                        : 'text-[#3b3b3d] hover:text-[#c48b7e]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3 font-space z-10">
              <a
                href={config.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] rounded-full border transition-all ${
                  isDarkHero
                    ? 'border-white/15 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-[#747476] hover:bg-white/[0.08]'
                    : 'border-[#747476]/30 bg-transparent text-[#3b3b3d] hover:text-black hover:border-[#3b3b3d] hover:bg-black/[0.04]'
                }`}
                aria-label="Chat on WhatsApp with Diez Aesthetics"
              >
                <WhatsAppIcon className={`w-3.5 h-3.5 ${isDarkHero ? 'text-zinc-300' : 'text-[#545358]'}`} />
                <span>WhatsApp</span>
              </a>

              <a
                href={config.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] hover:bg-[#c48b7e] hover:border-[#c48b7e] hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consultation</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={config.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[10px] uppercase font-space tracking-wider font-semibold rounded-full bg-[#3b3b3d] border border-white/20 text-[#efebe8] hover:bg-[#c48b7e] transition-colors"
              >
                Book
              </a>
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                className={`p-2 rounded-lg border focus:outline-none transition-colors ${
                  isDarkHero
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-black/20 text-[#1c1917] hover:bg-black/5'
                }`}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mounted && (
        <MobileDrawer
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          config={config}
        />
      )}
    </>
  );
}
