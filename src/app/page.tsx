import React from 'react';
import { getHomeContent, getGlobalConfig, getTreatmentsContent } from '@/lib/content';
import { Hero } from '@/components/home/Hero';
import { TreatmentsAtelier } from '@/components/home/TreatmentsAtelier';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { AboutDanielSection } from '@/components/home/AboutDanielSection';
import { ClinicalJourney } from '@/components/home/ClinicalJourney';
import { BeforeAfterCarousel } from '@/components/home/BeforeAfterCarousel';
import { TestimonialsAtelier } from '@/components/home/TestimonialsAtelier';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  const content = getHomeContent();
  const treatments = getTreatmentsContent();
  const globalConfig = getGlobalConfig();

  const quote =
    'True aesthetic medicine is not just about quick changes, it is about improving skin quality, encouraging natural regeneration, and creating results that look healthy, balanced, and long-lasting.';

  return (
    <>
      <Hero content={content.hero} />
      <TreatmentsAtelier content={treatments} bookingUrl={globalConfig.booking_url} />
      <PhilosophySection bioQuote={quote} />
      <AboutDanielSection />
      <ClinicalJourney bookingUrl={globalConfig.booking_url} />
      <BeforeAfterCarousel />
      <WhyChooseSection content={content.why_choose} />
      <TestimonialsAtelier />
      <CTASection config={globalConfig} />
    </>
  );
}
