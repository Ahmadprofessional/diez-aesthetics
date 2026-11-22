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
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {content.categories.map((cat, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === idx
                ? 'bg-[#1c1917] text-white shadow-md'
                : 'bg-white text-[#57534e] hover:text-black border border-black/10 hover:border-black/20 shadow-sm'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Active Category Description */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-[#8c6b2d] font-medium tracking-wide">
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
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto space-y-3"
        >
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.07] hover:border-[#8c6b2d]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-normal text-[#1c1917] group-hover:text-[#8c6b2d] transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#78716c]">
                  <Clock className="w-3.5 h-3.5 text-[#8c6b2d]" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/[0.05]">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
                  {item.price}
                </span>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FAF8F5] border border-black/10 text-[#1c1917] hover:bg-[#1c1917] hover:text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#8c6b2d]" />
                  <span>Book</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Deposit & Cancellation Policy Callout */}
      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-black/[0.08] flex items-start gap-3.5 text-xs text-[#57534e] shadow-sm">
        <AlertCircle className="w-4 h-4 text-[#8c6b2d] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-[#1c1917] font-semibold uppercase tracking-wider">Deposit &amp; Appointment Policy</p>
          <p className="leading-relaxed">{content.booking_note}</p>
        </div>
      </div>
    </div>
  );
}
