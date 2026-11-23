'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { PricesContent } from '@/types/content';

interface PriceTabsProps {
  content: PricesContent;
  bookingUrl: string;
}

export function PriceTabs({ content, bookingUrl }: PriceTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = content.categories[activeTab] || content.categories[0];

  return (
    <div className="space-y-10">
      {/* Category Tabs in Client Stone Gray & Slate Styling */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {content.categories.map((cat, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase font-space tracking-wider font-semibold transition-all select-none ${
              activeTab === idx
                ? 'bg-[#3b3b3d] text-white shadow-lg ring-2 ring-[#1c1a19] ring-offset-2 ring-offset-[#efebe8] scale-[1.02]'
                : 'bg-white text-[#545358] hover:text-[#1c1a19] border border-[#747476]/25 hover:border-[#747476] shadow-sm'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Active Category Description */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-[#747476] font-space tracking-wide">
          {activeCategory.note}
        </p>
      </div>

      {/* Pricing Cards / Table */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="max-w-4xl mx-auto space-y-3"
        >
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#747476]/15 hover:border-[#545358]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-normal text-[#1c1a19] group-hover:text-[#545358] transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#747476]">
                  <Clock className="w-3.5 h-3.5 text-[#545358]" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#747476]/10">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1a19]">
                  {item.price}
                </span>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#3b3b3d] text-white hover:bg-[#545358] text-xs font-space uppercase tracking-wider font-semibold transition-all shadow-sm transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#545358]" />
                  <span>Book</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Deposit & Cancellation Policy Callout */}
      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-[#747476]/20 flex items-start gap-3.5 text-xs text-[#57534e] shadow-sm">
        <AlertCircle className="w-4 h-4 text-[#545358] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-[#1c1a19] font-space font-semibold uppercase tracking-wider text-[11px]">Deposit &amp; Appointment Policy</p>
          <p className="leading-relaxed font-light">{content.booking_note}</p>
        </div>
      </div>
    </div>
  );
}