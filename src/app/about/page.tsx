import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, Sparkles, MapPin, Calendar, Award } from 'lucide-react';
import { getAboutContent, getGlobalConfig } from '@/lib/content';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Diez Anti-Aging Aesthetics in King’s Cross, London. Led by our Clinical Director specialising in regenerative treatments, polynucleotides, and natural aesthetic results.',
  alternates: {
    canonical: 'https://diezaesthetics.com/about/',
  },
};

export default function AboutPage() {
  const content = getAboutContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="pt-28 pb-16 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-16 text-center border-b border-black/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8c6b2d]">
            {content.header.subtitle}
          </span>
          <h1 className="font-sans text-4xl sm:text-6xl font-light text-[#1c1917] tracking-tight leading-tight">
            Welcoming Diez <span className="font-serif italic text-[#8c6b2d] font-normal">Anti-Aging Aesthetics</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto">
            {content.header.subtitle2}
          </p>
        </div>
      </section>

      {/* Clinical Director Feature */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-[28px] bg-white border border-black/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[3/4] w-full bg-[#eae5dc]">
                    <Image
                      src="/assets/images/danial-image.png"
                      alt="Daniel Diez - Clinical Director Diez Anti-Aging Aesthetics"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-black/10 shadow-sm">
                      <p className="text-[#1c1917] text-sm font-semibold">Danial Diez</p>
                      <p className="text-[#8c6b2d] text-xs">Clinical Director &amp; Regenerative Aesthetics Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8c6b2d]">
                  CLINICAL EXPERTISE
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1917] tracking-tight leading-tight">
                  {content.director_section.heading}
                </h2>
              </div>

              <div className="text-[#57534e] font-light text-base leading-relaxed space-y-4">
                <p>{content.director_section.bio}</p>
              </div>

              {/* Values Grid */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {content.director_section.values.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-black/[0.07] space-y-2 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#8c6b2d]/20 flex items-center justify-center text-[#8c6b2d]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base font-normal text-[#1c1917]">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#78716c] font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4">
                <a
                  href={content.cta_section.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1c1917] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#8c6b2d] transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4 text-[#ded5c6]" />
                  <span>{content.cta_section.cta.label}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection config={globalConfig} />
    </div>
  );
}
