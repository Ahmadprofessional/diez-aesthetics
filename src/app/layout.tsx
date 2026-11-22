import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Anton, Kaushan_Script, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { getGlobalConfig } from '@/lib/content';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBookingBar } from '@/components/layout/MobileBookingBar';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { getClinicJsonLd } from '@/lib/jsonld';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
  display: 'swap',
});

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kaushan',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const config = getGlobalConfig();

export const metadata: Metadata = {
  metadataBase: new URL('https://diezaesthetics.com'),
  title: {
    default: 'Diez Anti-Aging Aesthetics | King’s Cross London',
    template: '%s | Diez Anti-Aging Aesthetics',
  },
  description:
    'Doctor-led aesthetic clinic in King’s Cross, London (260 Pentonville Road). Specialising in subtle anti-wrinkle injections, dermal fillers, polynucleotides, skin boosters, and medical microneedling.',
  keywords: [
    'aesthetics clinic London',
    'King’s Cross aesthetics',
    'anti-wrinkle treatments London',
    'dermal fillers King’s Cross',
    'polynucleotides London',
    'Profhilo London',
    'medical microneedling',
    'Daniel Diez aesthetics',
  ],
  authors: [{ name: 'Daniel Diez' }],
  creator: 'Diez Anti-Aging Aesthetics',
  alternates: {
    canonical: 'https://diezaesthetics.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://diezaesthetics.com/',
    siteName: 'Diez Anti-Aging Aesthetics',
    title: 'Diez Anti-Aging Aesthetics | King’s Cross London',
    description:
      'Doctor-led aesthetic clinic in King’s Cross, London. Specialising in subtle anti-wrinkle treatments, dermal fillers, polynucleotides, and skin boosters.',
    images: [
      {
        url: 'https://diezaesthetics.com/wp-content/uploads/2026/06/hero-clinic.jpg',
        width: 1200,
        height: 630,
        alt: 'Diez Anti-Aging Aesthetics Clinic King’s Cross London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diez Anti-Aging Aesthetics | King’s Cross London',
    description:
      'Doctor-led aesthetic clinic in King’s Cross, London. Subtle, natural-looking results.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getClinicJsonLd(config);

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${anton.variable} ${kaushan.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans bg-[#0c0b0e] text-white antialiased selection:bg-[#c084fc] selection:text-black"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header config={config} />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer config={config} />
        <MobileBookingBar config={config} />
        <CookieBanner />
      </body>
    </html>
  );
}
