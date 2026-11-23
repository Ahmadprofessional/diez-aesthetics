import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { HomeContent } from '@/types/content';

interface FounderSectionProps {
  content: HomeContent['about_founder'];
}

export function FounderSection({ content }: FounderSectionProps) {
  return (
    <section className="py-24 bg-[#F5F2EB] border-t border-b border-black/[0.05] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl bg-white border border-black/[0.08] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[3/4] w-full bg-[#eae5dc]">
                  <Image
                    src="https://diezaesthetics.com/wp-content/uploads/2026/06/hero-clinic.jpg"
                    alt="Daniel Diez - Aesthetic Practitioner"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating credentials badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f4ebd2] border border-[#545358]/30 flex items-center justify-center text-[#3b3b3d] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[#1c1917] text-xs font-semibold">Clinical Director & Practitioner</p>
                      <p className="text-[#3b3b3d] text-[11px]">Subtle, Regenerative Facial Aesthetics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#3b3b3d]">
                {content.label}
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
                Natural. Balanced. <br />
                <span className="font-serif italic font-normal text-[#3b3b3d]">Beautifully You.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#57534e] font-light text-sm sm:text-base leading-relaxed">
              {content.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Qualifications List */}
            <div className="pt-2 space-y-2.5">
              {content.qualifications.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#292524]">
                  <div className="w-5 h-5 rounded-full bg-[#f4ebd2] border border-[#545358]/30 flex items-center justify-center text-[#3b3b3d] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <Link
                href={content.cta.href}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#3b3b3d] hover:text-[#545358] border-b border-[#3b3b3d]/40 pb-0.5 hover:border-[#545358] transition-all group"
              >
                <span>{content.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
