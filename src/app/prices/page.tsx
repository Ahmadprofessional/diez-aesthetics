import type { Metadata } from 'next';
import { getPricesContent, getGlobalConfig } from '@/lib/content';
import { PriceTabs } from '@/components/prices/PriceTabs';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Treatment Prices & Fee Schedule | Diez Aesthetics London',
  description:
    'Transparent pricing for aesthetic treatments at Diez Aesthetics in King’s Cross, London. Anti-wrinkle injections, signature lip enhancement, polynucleotides, Profhilo, and medical microneedling.',
  alternates: {
    canonical: 'https://diezaesthetics.com/prices/',
  },
};

export default function PricesPage() {
  const content = getPricesContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="pt-28 pb-16 bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 text-center border-b border-[#747476]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#747476]/20 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-semibold text-[#545358] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>CLINICAL PRICING ATELIER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c1a19] tracking-tight leading-tight">
            Transparent Pricing &amp; <span className="italic text-[#c48b7e]">Treatment Menu</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
            Honest, all-inclusive medical fees with no hidden costs. Every injectable and regenerative protocol includes a detailed medical consultation.
          </p>
        </div>
      </section>

      {/* Main Pricing Tabs Stage */}
      <section className="py-20 bg-[#e8e4e0] border-b border-[#747476]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceTabs
            content={content}
            bookingUrl={globalConfig.booking_url}
          />
        </div>
      </section>

      {/* Global CTA */}
      <CTASection config={globalConfig} />
    </div>
  );
}