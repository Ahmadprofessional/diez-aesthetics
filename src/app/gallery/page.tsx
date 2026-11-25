import type { Metadata } from 'next';
import Image from 'next/image';
import { getGalleryContent, getGlobalConfig } from '@/lib/content';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CTASection } from '@/components/home/CTASection';
import { ShieldCheck, Camera, CheckCircle2, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Clinical Results & Case Studies | Diez Aesthetics London',
  description:
    'Clinical results and patient case studies from Diez Aesthetics in King’s Cross, London. Standardised before-and-after clinical photography of subtle, doctor-led transformations.',
  alternates: {
    canonical: 'https://diezaesthetics.com/gallery/',
  },
};

export default function GalleryPage() {
  const content = getGalleryContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Editorial Luxury Hero Banner (Dark Stone & Founder Clinical Authority) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#18171a] text-white border-b border-white/10 overflow-hidden">
        {/* Ambient atmospheric stone lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#545358]/20 rounded-full blur-[180px]" />
          <div className="absolute top-10 left-10 w-[450px] h-[350px] bg-[#747476]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] text-[#efebe8] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcd8d4]" />
                <span>PATIENT CASE STUDIES • KING’S CROSS</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.08]">
                Clinical Results &amp;{' '}
                <span className="italic text-[#dcd8d4]">Case Studies</span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
                Standardised clinical photography showing genuine patient transformations under the direct care of Clinical Director Daniel Diez.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white/80">
                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Authentic Patient Documentation</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <Camera className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Standardised Clinical Lighting</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <Award className="w-3.5 h-3.5 text-[#dcd8d4]" />
                  <span>Doctor-Led Treatments</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clinical Director Authority Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/05 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.5)] max-w-sm lg:max-w-md mx-auto">
                <div className="relative aspect-[4/4.6] w-full">
                  <Image
                    src="/assets/images/danial-centered.png"
                    alt="Daniel Diez, Clinical Director at Diez Aesthetics London"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[10px] font-space uppercase tracking-widest text-[#dcd8d4] block">
                      Clinical Director
                    </span>
                    <p className="font-serif text-lg leading-snug">
                      Daniel Diez
                    </p>
                    <p className="text-xs text-white/70 font-light">
                      Medical aesthetic practitioner dedicated to natural facial preservation
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Results Gallery Stage */}
      <section className="py-20 bg-[#e8e4e0] border-b border-[#747476]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid content={content} />
        </div>
      </section>

      {/* Global CTA */}
      <CTASection config={globalConfig} />
    </div>
  );
}