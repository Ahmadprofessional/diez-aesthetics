'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Phone,
} from 'lucide-react';
import { ClassicChatIcon } from '@/components/ui/Icons';
import { GlobalConfig } from '@/types/content';

interface ConciergeChatWidgetProps {
  config: GlobalConfig;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  action?: {
    label: string;
    href: string;
  };
}

export function ConciergeChatWidget({ config }: ConciergeChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const KNOWLEDGE_BASE: Record<
    string,
    { reply: string; actionLabel?: string; actionHref?: string }
  > = {
    treatments: {
      reply:
        'Diez Aesthetics specialises in doctor-led facial harmonisation and skin longevity:\n\n• Anti-Wrinkle Injections (Precision dynamic line relaxing)\n• Dermal & Lip Fillers (Conservative natural enhancement)\n• Polynucleotides (Nucleofill & Ameela for dark circles & crepey skin)\n• Profhilo Bio-Remodelling (Deep cellular hydration & elasticity)\n• Medical Microneedling with Exosomes (Glass skin rejuvenation)\n• Fat Dissolving (Targeted submental & body reduction)',
      actionLabel: 'View All Treatments',
      actionHref: '/treatments/',
    },
    pricing: {
      reply:
        'All-inclusive clinical pricing with doctor consultation included:\n\n• Anti-Wrinkle Injections: from £150 (1 area) to £240 (3 areas)\n• Dermal & Lip Fillers: £200 (0.5ml) / £260 (1.0ml)\n• Polynucleotides (Eye / Face): £280 / session (£750 for 3)\n• Profhilo Bio-Remodelling: £280 / session (£520 for 2)\n• Medical Microneedling: £160 / session\n• Fat Dissolving: from £180 / session\n\nTransparent pricing with zero hidden clinical fees.',
      actionLabel: 'View Full Treatment Menu',
      actionHref: '/prices/',
    },
    booking: {
      reply:
        'All appointments are personally conducted by Clinical Director Daniel Diez at our private King’s Cross clinic. Dedicated appointment slots can be reserved directly via our live medical booking portal.',
      actionLabel: 'Reserve Dedicated Slot',
      actionHref: config.booking_url,
    },
    location: {
      reply:
        'Diez Aesthetics is located at:\n260 Pentonville Road, King’s Cross, London N1 9JY\n\nConveniently located just a 4-minute walk from King’s Cross St Pancras International.',
      actionLabel: 'Transit & Map Directions',
      actionHref: '/contact/',
    },
    hours: {
      reply:
        'Clinic Opening Hours:\n\n• Monday – Friday: 10:00 – 19:00\n• Saturday: 10:00 – 18:00\n• Sunday: Closed\n\nAppointments strictly by advance reservation.',
      actionLabel: 'Book Appointment Online',
      actionHref: config.booking_url,
    },
    whatsapp: {
      reply:
        'Would you prefer a direct clinical consultation or to send reference photos? You can message Daniel directly on WhatsApp.',
      actionLabel: 'Chat on WhatsApp',
      actionHref: config.whatsapp_url,
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Clinical auto-responder
    setTimeout(() => {
      const lower = query.toLowerCase();
      let match = KNOWLEDGE_BASE.booking;

      if (lower.includes('price') || lower.includes('cost') || lower.includes('fee') || lower.includes('how much') || lower === 'prices') {
        match = KNOWLEDGE_BASE.pricing;
      } else if (lower.includes('treatment') || lower.includes('poly') || lower.includes('botox') || lower.includes('filler') || lower === 'treatments') {
        match = KNOWLEDGE_BASE.treatments;
      } else if (lower.includes('where') || lower.includes('address') || lower.includes('location') || lower.includes('king') || lower === 'location') {
        match = KNOWLEDGE_BASE.location;
      } else if (lower.includes('hour') || lower.includes('open') || lower.includes('time') || lower === 'hours') {
        match = KNOWLEDGE_BASE.hours;
      } else if (lower.includes('whatsapp') || lower.includes('phone') || lower.includes('call')) {
        match = KNOWLEDGE_BASE.whatsapp;
      } else if (lower.includes('book') || lower.includes('consult') || lower.includes('appointment') || lower === 'book') {
        match = KNOWLEDGE_BASE.booking;
      } else {
        match = {
          reply:
            'Thank you for reaching out to Diez Aesthetics. Clinical Director Daniel Diez provides doctor-led aesthetic care and natural facial harmonisation. How can we best assist your aesthetic journey?',
          actionLabel: 'Book Consultation',
          actionHref: config.booking_url,
        };
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: match.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: match.actionLabel
          ? {
              label: match.actionLabel,
              href: match.actionHref || config.booking_url,
            }
          : undefined,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      {/* Click-outside backdrop to dismiss modal seamlessly */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[75] bg-black/30 backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Trigger Button: Rigidly pinned, NEVER moves */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-[80] select-none">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3b3b3d] text-[#efebe8] border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.35)] hover:bg-[#c48b7e] hover:border-[#c48b7e] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label={isOpen ? "Close concierge chat" : "Open clinical concierge chat"}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
          ) : (
            <ClassicChatIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#efebe8] group-hover:text-white transition-colors" />
          )}

          {/* Floating Tooltip */}
          {!isOpen && (
            <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-xl bg-[#1c1917] text-[#efebe8] border border-white/10 text-[10px] font-space tracking-wider uppercase whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span>Concierge Chat</span>
              <div className="absolute top-full right-5 -mt-1 border-4 border-transparent border-t-[#1c1917]" />
            </div>
          )}
        </button>
      </div>

      {/* Concierge Modal: Positioned cleanly ABOVE the trigger button, locked to the right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[92px] right-4 md:bottom-[78px] md:right-6 z-[80] w-[350px] max-w-[calc(100vw-2rem)] h-[440px] max-h-[calc(100vh-140px)] bg-[#efebe8] rounded-3xl border border-black/[0.15] shadow-[0_25px_70px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden font-sans text-[#1c1917] select-none"
          >
            {/* Header matching user reference */}
            <div className="bg-[#2c2c2e] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <ClassicChatIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-normal tracking-tight text-[#efebe8] leading-tight">
                    Diez Aesthetics
                  </h3>
                  <p className="text-[11px] font-space text-[#c48b7e] font-light">
                    Usually replies in seconds
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                aria-label="Close concierge chat"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Content & Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {/* Friendly Welcome Card (matching user reference) */}
              <div className="py-5 px-4 text-center space-y-2.5 bg-white/70 rounded-2xl border border-black/[0.05] shadow-xs">
                <div className="w-11 h-11 rounded-2xl bg-[#e8e4e0] flex items-center justify-center text-lg mx-auto shadow-inner">
                  👋
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl text-[#1c1917] font-normal tracking-tight">
                    Hi there!
                  </h4>
                  <p className="text-xs text-[#545358] max-w-[240px] mx-auto font-light leading-relaxed">
                    Ask about treatments, prices, or book your free consultation.
                  </p>
                </div>

                {/* Quick Suggestion Chips */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {[
                    { label: 'Treatments', query: 'treatments' },
                    { label: 'Prices', query: 'prices' },
                    { label: 'Book', query: 'book' },
                    { label: 'Location', query: 'location' },
                    { label: 'Hours', query: 'hours' },
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => handleSend(chip.query)}
                      className="px-3 py-1 rounded-full bg-white text-xs font-space text-[#3b3b3d] hover:bg-[#3b3b3d] hover:text-[#efebe8] border border-black/[0.08] shadow-xs transition-all transform hover:scale-105 active:scale-95"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Conversation Thread */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-line shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#3b3b3d] text-[#efebe8] rounded-br-xs'
                        : 'bg-white text-[#1c1917] border border-black/[0.06] rounded-bl-xs'
                    }`}
                  >
                    {msg.text}

                    {msg.action && (
                      <div className="pt-2.5 mt-2.5 border-t border-black/[0.08]">
                        <a
                          href={msg.action.href}
                          target={msg.action.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3b3b3d] text-[#efebe8] text-[10px] font-space tracking-wider uppercase font-semibold hover:bg-[#c48b7e] transition-colors"
                        >
                          <span>{msg.action.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] font-space text-[#747476] px-1 pt-1">
                    {msg.time}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Contact & Booking Strip */}
            <div className="px-4 py-2 bg-[#e8e4e0] border-t border-b border-black/[0.06] flex items-center justify-center gap-4 text-xs font-space text-[#3b3b3d] shrink-0">
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-[#c48b7e] font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#545358]" />
                <span>{config.phone}</span>
              </a>
              <span className="text-[#a8a5a3]">|</span>
              <a
                href={config.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#c48b7e] font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#545358]" />
                <span>Book Consultation</span>
              </a>
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 bg-white border-t border-black/[0.08] flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 text-xs rounded-full bg-[#f7f5f3] border border-black/[0.08] text-[#1c1917] placeholder-[#747476] focus:outline-none focus:border-[#3b3b3d] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-full bg-[#3b3b3d] text-[#efebe8] hover:bg-[#c48b7e] disabled:opacity-40 disabled:hover:bg-[#3b3b3d] flex items-center justify-center transition-all shrink-0 shadow-sm"
                aria-label="Send message"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
