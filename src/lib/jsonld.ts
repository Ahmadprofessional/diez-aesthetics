import { GlobalConfig } from '@/types/content';

export function getClinicJsonLd(config: GlobalConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://diezaesthetics.com/#organization',
    name: config.clinic_name,
    alternateName: 'Diez Aesthetics London',
    url: 'https://diezaesthetics.com/',
    logo: 'https://diezaesthetics.com/assets/original/logo.png',
    image: 'https://diezaesthetics.com/wp-content/uploads/2026/06/hero-clinic.jpg',
    telephone: config.phone,
    email: config.email,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      postalCode: config.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5318,
      longitude: -0.1209,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/diezaesthetics',
      config.booking_url,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
