import type { Metadata } from 'next';
import { getPricesContent, getGlobalConfig } from '@/lib/content';
import { PriceTabs } from '@/components/prices/PriceTabs';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Prices',
  description:
    'Transparent pricing for aesthetic treatments at Diez Anti-Aging Aesthetics London. Anti-wrinkle injections, dermal fillers, polynucleotides, skin boosters, and microneedling.',
  alternates: {
    canonical: 'https://diezaesthetics.com/prices/',
  },
};

export default function PricesPage() {
  const content = getPricesContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="pt-28 pb-16 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-16 text-center border-b border-black/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8c6b2d]">
            {content.header.subtitle}
          </span>
          <h1 className="font-sans text-4xl sm:text-6xl font-light text-[#1c1917] tracking-tight leading-tight">
            Transparent Pricing &amp; <span className="font-serif italic text-[#8c6b2d] font-normal">Treatment Menu</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto">
            {content.header.description}
          </p>
        </div>
      </section>

      {/* Main Pricing Tabs Stage */}
      <section className="py-20 bg-[#F5F2EB]">
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
