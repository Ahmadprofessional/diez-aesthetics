import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, MapPin, Calendar, Award, CheckCircle2, Languages, HeartPulse } from 'lucide-react';
import { getAboutContent, getGlobalConfig } from '@/lib/content';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Clinical Director Daniel Diez | Diez Aesthetics London',
  description:
    'Learn about Diez Aesthetics in King’s Cross, London. Founded and led by Clinical Director Daniel Diez, specialising in bespoke facial harmonisation, polynucleotides, and regenerative aesthetics.',
  alternates: {
    canonical: 'https://diezaesthetics.com/about/',
  },
};

export default function AboutPage() {
  const content = getAboutContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Editorial Luxury Hero Banner (Dark Stone) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#18171a] text-white border-b border-white/10 overflow-hidden">
        {/* Ambient atmospheric stone lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#545358]/20 rounded-full blur-[180px]" />
          <div className="absolute top-10 left-10 w-[450px] h-[350px] bg-[#747476]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] text-[#efebe8] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dcd8d4]" />
              <span>KING&apos;S CROSS CLINICAL ATELIER</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
              Welcoming <span className="italic text-[#dcd8d4]">Diez Aesthetics</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 font-light max-w-2xl mx-auto leading-relaxed">
              A doctor-led clinical sanctuary in Central London dedicated to thoughtful, subtle facial harmonisation and advanced regenerative medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Director Feature */}
      <section className="py-24 bg-[#e8e4e0] border-b border-[#747476]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-[32px] bg-white border border-[#747476]/20 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] group">
                  <div className="relative aspect-[3/4] w-full bg-[#eae5dc]">
                    <Image
                      src="/assets/images/danial-image.png"
                      alt="Daniel Diez - Clinical Director Diez Aesthetics London"
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#1c1a19] text-base font-serif italic">Daniel Diez</p>
                          <p className="text-[#545358] text-xs font-space uppercase tracking-wider font-semibold">
                            Clinical Director &amp; Injector
                          </p>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#545358]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Credential Tag */}
                <div className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2 px-4 py-2 rounded-2xl bg-[#3b3b3d] text-white text-xs shadow-xl border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#545358] animate-pulse" />
                  <span className="font-space font-medium tracking-wide">3+ Years Injecting Experience</span>
                </div>
              </div>
            </div>

            {/* Director Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase font-space tracking-[0.25em] font-semibold text-[#747476]">
                  CLINICAL ARTISTRY &amp; PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1a19] tracking-tight leading-tight">
                  Natural. Balanced. <br />
                  <span className="italic text-[#545358]">Beautifully You.</span>
                </h2>
              </div>

              <div className="text-[#4a4744] font-light text-base sm:text-lg leading-relaxed space-y-5">
                <p>
                  &ldquo;As Clinical Director of Diez Aesthetics, my clinical goal is simple: to help every patient feel confident, refreshed, and naturally enhanced without ever looking artificial or overdone.&rdquo;
                </p>
                <p>
                  &ldquo;I specialise in conservative facial harmonisation, with a strong personal commitment to regenerative treatments including polynucleotides and medical microneedling. Aesthetic medicine should elevate skin health, stimulate biological collagen renewal, and deliver lasting confidence.&rdquo;
                </p>
              </div>

              {/* Three Clinical Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-[#747476]/15 space-y-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center text-[#545358]">
                    <Languages className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-normal text-[#1c1a19]">
                    Bilingual Practice
                  </h3>
                  <p className="text-xs text-[#75716b] font-light leading-relaxed">
                    Consultations held fluently in English and Spanish for clear communication.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#747476]/15 space-y-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center text-[#545358]">
                    <ShieldCheck className="w-4 h-4 text-[#545358]" />
                  </div>
                  <h3 className="font-serif text-base font-normal text-[#1c1a19]">
                    Doctor-Led Care
                  </h3>
                  <p className="text-xs text-[#75716b] font-light leading-relaxed">
                    Every procedure personally administered by Daniel Diez with medical safety.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#747476]/15 space-y-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#efebe8] flex items-center justify-center text-[#545358]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-normal text-[#1c1a19]">
                    5.0 ★ Reputation
                  </h3>
                  <p className="text-xs text-[#75716b] font-light leading-relaxed">
                    120+ unblemished five-star patient reviews in King&apos;s Cross &amp; Central London.
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={globalConfig.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3b3b3d] hover:bg-[#1c1a19] text-white font-space text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-[#545358]" />
                  <span>Book Private Consultation</span>
                </a>

                <Link
                  href="/treatments/"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#747476]/25 hover:border-[#1c1a19] text-[#1c1a19] font-space text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm"
                >
                  <span>Explore Treatments</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection config={globalConfig} />
    </div>
  );
}