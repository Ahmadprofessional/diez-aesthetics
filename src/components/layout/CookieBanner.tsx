'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('diez_cookie_consent');
      if (!saved) {
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  const updateGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const fullConsent = { necessary: true, analytics: true, marketing: true };
    try {
      localStorage.setItem('diez_cookie_consent', JSON.stringify(fullConsent));
    } catch (e) {}
    updateGtagConsent(true, true);
    setIsOpen(false);
  };

  const handleEssentialOnly = () => {
    const essential = { necessary: true, analytics: false, marketing: false };
    try {
      localStorage.setItem('diez_cookie_consent', JSON.stringify(essential));
    } catch (e) {}
    updateGtagConsent(false, false);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    try {
      localStorage.setItem('diez_cookie_consent', JSON.stringify(consent));
    } catch (e) {}
    updateGtagConsent(consent.analytics, consent.marketing);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-white border border-black/10 rounded-2xl p-5 shadow-2xl text-[#44403c] text-xs"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#e8e4e0] border border-black/[0.08] flex items-center justify-center text-[#3b3b3d] shrink-0">
          <Shield className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-[#1c1917] text-sm">Privacy &amp; Cookie Choices</h4>
          <p className="text-[#545358] leading-relaxed text-[11px]">
            We use cookies to enhance navigation, analyze site performance, and ensure secure medical appointment booking.
          </p>
        </div>
      </div>

      {showPreferences && (
        <div className="mt-4 pt-3 border-t border-black/5 space-y-2.5 text-[11px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-[#1c1917]">Essential Cookies</span>
              <p className="text-[#747476] text-[10px]">Required for security and booking functions.</p>
            </div>
            <span className="text-[#3b3b3d] font-semibold text-[10px] uppercase">Always Active</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-[#1c1917]">Analytics Cookies</span>
              <p className="text-[#747476] text-[10px]">Anonymous visitor metrics (GA4).</p>
            </div>
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
              className="accent-[#3b3b3d] w-4 h-4 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-[#1c1917]">Marketing Cookies</span>
              <p className="text-[#747476] text-[10px]">Campaign attribution &amp; Instagram integration.</p>
            </div>
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
              className="accent-[#3b3b3d] w-4 h-4 rounded cursor-pointer"
            />
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setShowPreferences(!showPreferences)}
          className="text-[#747476] hover:text-[#1c1917] underline text-[10px]"
        >
          {showPreferences ? 'Hide Options' : 'Preferences'}
        </button>

        <div className="flex items-center gap-2">
          {showPreferences ? (
            <button
              type="button"
              onClick={handleSavePreferences}
              className="px-3 py-1.5 rounded-lg bg-[#e8e4e0] text-[#1c1917] hover:bg-[#d6d3cd] text-[11px] font-medium"
            >
              Save Choices
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="px-3 py-1.5 rounded-lg bg-[#e8e4e0] text-[#1c1917] hover:bg-[#d6d3cd] text-[11px] font-medium"
            >
              Essential Only
            </button>
          )}

          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-3.5 py-1.5 rounded-lg bg-[#3b3b3d] text-[#efebe8] hover:bg-[#545358] hover:text-white font-semibold text-[11px] flex items-center gap-1 shadow-sm transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
}
