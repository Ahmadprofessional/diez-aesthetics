import type { Metadata } from 'next';
import { SkinBoostersLandingClient } from '@/components/treatments/SkinBoostersLandingClient';

export const metadata: Metadata = {
  title: "Skin Booster Treatment King's Cross London | Profhilo | Diez Aesthetics",
  description:
    "Skin booster and Profhilo treatments in King's Cross, London. Injectable hyaluronic acid that deeply hydrates the skin and stimulates collagen. 1 session £140, 2 sessions £250.",
  alternates: {
    canonical: 'https://diezaesthetics.com/treatments/skin-boosters/',
  },
  openGraph: {
    title: "Skin Booster Treatment King's Cross London | Profhilo | Diez Aesthetics",
    description:
      "Practitioner-led Profhilo and skin booster bio-remodelling in King's Cross, London. Restore natural glow, firmness, and deep hydration. 5.0 on Google, 191 verified reviews.",
    url: 'https://diezaesthetics.com/treatments/skin-boosters/',
    siteName: 'Diez Aesthetics London',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function SkinBoostersPage() {
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://diezaesthetics.com/#clinic',
        name: 'Diez Anti-Aging Aesthetics',
        telephone: '+44 7348 947988',
        email: 'info@diezaesthetics.com',
        url: 'https://diezaesthetics.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '260 Pentonville Road',
          addressLocality: "King's Cross",
          addressRegion: 'London',
          postalCode: 'N1 9JY',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.5312,
          longitude: -0.1197,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '191',
        },
        priceRange: '££',
      },
      {
        '@type': 'MedicalProcedure',
        '@id': 'https://diezaesthetics.com/treatments/skin-boosters/#procedure',
        name: 'Skin Booster & Profhilo Bio-Remodelling Treatment',
        description:
          'Injectable hyaluronic acid bio-remodelling treatment designed to deeply hydrate the skin, stimulate collagen and elastin, and improve skin elasticity across face glow, neck, hands, and décolletage.',
        bodyLocation: 'Face glow, neck, hands and décolletage',
        procedureType: 'Non-surgical aesthetic regenerative medicine',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: '90',
          highPrice: '250',
          offerCount: '3',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <SkinBoostersLandingClient />
    </>
  );
}
