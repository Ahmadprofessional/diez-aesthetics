import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Anton, Kaushan_Script, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { getGlobalConfig } from '@/lib/content';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBookingBar } from '@/components/layout/MobileBookingBar';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { FixedWhatsAppButton } from '@/components/layout/FixedWhatsAppButton';
import { ConciergeChatWidget } from '@/components/layout/ConciergeChatWidget';
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
    default: 'Diez Aesthetics | King’s Cross London',
    template: '%s | Diez Aesthetics',
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
  creator: 'Diez Aesthetics',
  alternates: {
    canonical: 'https://diezaesthetics.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://diezaesthetics.com/',
    siteName: 'Diez Aesthetics',
    title: 'Diez Aesthetics | King’s Cross London',
    description:
      'Doctor-led aesthetic clinic in King’s Cross, London. Specialising in subtle anti-wrinkle treatments, dermal fillers, polynucleotides, and skin boosters.',
    images: [
      {
        url: 'https://diezaesthetics.com/wp-content/uploads/2026/06/hero-clinic.jpg',
        width: 1200,
        height: 630,
        alt: 'Diez Aesthetics Clinic King’s Cross London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diez Aesthetics | King’s Cross London',
    description:
      'Doctor-led aesthetic clinic in King’s Cross, London. Subtle, natural-looking results.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', sizes: '128x128', type: 'image/png' },
    ],
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
        className="font-sans bg-[#efebe8] text-[#1c1917] antialiased selection:bg-[#545358] selection:text-white"
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
        <FixedWhatsAppButton config={config} />
        <ConciergeChatWidget config={config} />
        <CookieBanner />
      </body>
    </html>
  );
}
