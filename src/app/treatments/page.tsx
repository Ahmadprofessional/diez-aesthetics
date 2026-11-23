import type { Metadata } from 'next';
import { getTreatmentsContent, getGlobalConfig } from '@/lib/content';
import { TreatmentAccordion } from '@/components/treatments/TreatmentAccordion';
import { FAQSection } from '@/components/treatments/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Treatments & Clinical Protocols | Diez Aesthetics London',
  description:
    'Explore doctor-led treatments at Diez Aesthetics in King’s Cross: Anti-Wrinkle Injections, Signature Lips, Polynucleotides, Profhilo, and Medical Microneedling with Exosomes.',
  alternates: {
    canonical: 'https://diezaesthetics.com/treatments/',
  },
};

export default function TreatmentsPage() {
  const content = getTreatmentsContent();
  const globalConfig = getGlobalConfig();

  return (
    <div className="pt-28 pb-16 bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 text-center border-b border-[#747476]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#747476]/20 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-semibold text-[#545358] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b7e]" />
            <span>TREATMENT PROTOCOLS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c1a19] tracking-tight leading-tight">
            Comprehensive Facial Harmonisation &amp; <span className="italic text-[#c48b7e]">Aesthetic Care</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
            Conservative medical techniques focused on facial symmetry, natural expression preservation, and cellular skin regeneration.
          </p>
        </div>
      </section>

      {/* Main Accordion List */}
      <section className="py-20 bg-[#e8e4e0] border-b border-[#747476]/15">
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