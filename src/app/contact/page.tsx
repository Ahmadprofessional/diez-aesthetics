import type { Metadata } from 'next';
import { getContactContent } from '@/lib/content';
import { ContactCard } from '@/components/contact/ContactCard';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Clinic Location | Diez Aesthetics King’s Cross London',
  description:
    'Contact Diez Aesthetics at 260 Pentonville Road, King’s Cross, London N1 9JY. Book online, chat via WhatsApp concierge, or submit a confidential medical inquiry.',
  alternates: {
    canonical: 'https://diezaesthetics.com/contact/',
  },
};

export default function ContactPage() {
  const content = getContactContent();

  return (
    <div className="pt-28 pb-16 bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 text-center border-b border-[#747476]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#747476]/20 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] font-semibold text-[#545358] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#545358]" />
            <span>CENTRAL LONDON ATELIER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c1a19] tracking-tight leading-tight">
            Get in Touch &amp; <span className="italic text-[#545358]">Visit the Clinic</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
            Located just 4 minutes from King&apos;s Cross and St Pancras International. Dedicated private medical care in an exclusive central setting.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#e8e4e0] border-b border-[#747476]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <ContactCard content={content} />
            </div>

            {/* Right Interactive Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Container */}
      <section className="py-16 bg-[#efebe8] border-t border-[#747476]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden border border-[#747476]/25 aspect-[21/9] w-full relative bg-white shadow-lg">
            <iframe
              title="Diez Aesthetics Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2618991583196!2d-0.1234907233798934!3d51.53177897181898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3e8e19e0eb%3A0x7d6f5f3e9c9b5d2!2s260%20Pentonville%20Rd%2C%20London%20N1%209JY!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}