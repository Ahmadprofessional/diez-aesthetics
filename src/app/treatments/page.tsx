import type { Metadata } from 'next';
import { getTreatmentsContent, getGlobalConfig } from '@/lib/content';
import { TreatmentAccordion } from '@/components/treatments/TreatmentAccordion';
import { FAQSection } from '@/components/treatments/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Treatments',
  description:
    'Explore treatments at Diez Anti-Aging Aesthetics in King’s Cross: Anti-Wrinkle Injections, Dermal Fillers, Polynucleotides, Skin Boosters, and Medical Microneedling.',
  alternates: {
    canonical: 'https://diezaesthetics.com/treatments/',
  },
};

export default function TreatmentsPage() {
  const content = getTreatmentsContent();
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
            Comprehensive Dermatology &amp; <span className="font-serif italic text-[#8c6b2d] font-normal">Aesthetic Care</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto">
            {content.header.description}
          </p>
        </div>
      </section>

      {/* Main Accordion List */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TreatmentAccordion services={content.services} />
        </div>
      </section>

      {/* FAQ Section with FAQPage Schema */}
      <FAQSection />

      {/* Global CTA */}
      <CTASection config={globalConfig} />
    </div>
  );
}
