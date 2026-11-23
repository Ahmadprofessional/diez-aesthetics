import type { Metadata } from 'next';
import { getGalleryContent, getGlobalConfig } from '@/lib/content';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Clinical Results & Case Studies | Diez Aesthetics London',
  description:
    'Clinical results and patient case studies from Diez Aesthetics in King’s Cross, London. 100% unretouched before-and-after photographs of subtle, doctor-led transformations.',
  alternates: {
    canonical: 'https://diezaesthetics.com/gallery/',
  },
};

export default function GalleryPage() {
  const content = getGalleryContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="pt-28 pb-16 bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 text-center border-b border-[#747476]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#747476]/20 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-semibold text-[#545358] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>UNRETOUCHED CLINICAL PORTFOLIO</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c1a19] tracking-tight leading-tight">
            Clinical Results &amp; <span className="italic text-[#545358]">Case Studies</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
            Standardised clinical photography showing genuine patient transformations under the direct care of Clinical Director Daniel Diez.
          </p>
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