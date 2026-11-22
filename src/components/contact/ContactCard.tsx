import React from 'react';
import { Phone, Mail, MapPin, Clock, Train } from 'lucide-react';
import { ContactContent } from '@/types/content';

interface ContactCardProps {
  content: ContactContent;
}

export function ContactCard({ content }: ContactCardProps) {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="rounded-[24px] bg-white border border-black/[0.08] p-6 sm:p-8 space-y-6 shadow-sm">
        <h3 className="font-serif text-2xl font-normal text-[#1c1917]">
          Contact Details
        </h3>

        <div className="space-y-5">
          {content.contact_methods.map((method, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#8c6b2d]/20 flex items-center justify-center text-[#8c6b2d] shrink-0">
                {method.type.includes('Phone') ? (
                  <Phone className="w-4 h-4" />
                ) : method.type.includes('Email') ? (
                  <Mail className="w-4 h-4" />
                ) : (
                  <MapPin className="w-4 h-4" />
                )}
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-[#78716c] font-medium font-mono">
                  {method.type}
                </span>
                <p>
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm sm:text-base text-[#1c1917] hover:text-[#8c6b2d] transition-colors font-medium"
                  >
                    {method.value}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transit Badge */}
        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#8c6b2d]/20 flex items-start gap-3 text-xs text-[#57534e]">
          <Train className="w-5 h-5 text-[#8c6b2d] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-[#1c1917] font-semibold mb-0.5">Transit &amp; Accessibility</strong>
            <span>{content.transit_info}</span>
          </div>
        </div>
      </div>

      {/* Opening Hours Card */}
      <div className="rounded-[24px] bg-white border border-black/[0.08] p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#8c6b2d]/20 flex items-center justify-center text-[#8c6b2d]">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl font-normal text-[#1c1917]">
            Opening Hours
          </h3>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm">
          {content.opening_hours.map((schedule, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 border-b border-black/[0.04] last:border-0"
            >
              <span className="text-[#57534e]">{schedule.day}</span>
              <span className="text-[#1c1917] font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
