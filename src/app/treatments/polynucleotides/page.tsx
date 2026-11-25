import type { Metadata } from 'next';
import { PolynucleotidesLandingClient } from '@/components/treatments/PolynucleotidesLandingClient';

export const metadata: Metadata = {
  title: 'Polynucleotides London | Under-Eye & Tear Trough Treatment | Diez Aesthetics',
  description:
    'Advanced polynucleotides treatment in King’s Cross, London. Naturally repair under-eye dark circles, tear troughs, and crepey skin with regenerative salmon DNA. Course of 3 £520.',
  alternates: {
    canonical: 'https://diezaesthetics.com/treatments/polynucleotides/',
  },
  openGraph: {
    title: 'Polynucleotides London | Under-Eye Rejuvenation | Diez Aesthetics',
    description:
      'Target stubborn dark circles, hollows, and fine lines with natural salmon DNA biostimulation in King’s Cross, London. 5.0 Google Reviews.',
    url: 'https://diezaesthetics.com/treatments/polynucleotides/',
    siteName: 'Diez Aesthetics London',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PolynucleotidesPage() {
  // Structured Data (JSON-LD) for LocalBusiness & MedicalProcedure
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
          reviewCount: '50',
        },
        priceRange: '££',
      },
      {
        '@type': 'MedicalProcedure',
        '@id': 'https://diezaesthetics.com/treatments/polynucleotides/#procedure',
        name: 'Polynucleotide Skin Regeneration & Under-Eye Treatment',
        description:
          'Biostimulatory injectable treatment utilizing highly purified salmon DNA (PDRN) to stimulate collagen synthesis, thicken dermal tissue, and brighten periorbital dark circles.',
        bodyLocation: 'Under-eye, Tear Trough, Face, Neck',
        procedureType: 'Non-surgical aesthetic regenerative medicine',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: '200',
          highPrice: '520',
          offerCount: '2',
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
      <PolynucleotidesLandingClient />
    </>
  );
}
