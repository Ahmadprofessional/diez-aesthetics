import type { Metadata } from 'next';
import { getContactContent } from '@/lib/content';
import { ContactCard } from '@/components/contact/ContactCard';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Diez Anti-Aging Aesthetics at 260 Pentonville Road, King’s Cross, London N1 9JY. Call, WhatsApp, or send an inquiry to book your consultation.',
  alternates: {
    canonical: 'https://diezaesthetics.com/contact/',
  },
};

export default function ContactPage() {
  const content = getContactContent();

  return (
    <div className="pt-28 pb-16 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-16 text-center border-b border-black/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8c6b2d]">
            {content.header.subtitle}
          </span>
          <h1 className="font-sans text-4xl sm:text-6xl font-light text-[#1c1917] tracking-tight leading-tight">
            Get in Touch &amp; <span className="font-serif italic text-[#8c6b2d] font-normal">Visit the Clinic</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto">
            {content.header.description}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#F5F2EB]">
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
      <section className="py-16 bg-[#FAF8F5] border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] overflow-hidden border border-black/10 aspect-[21/9] w-full relative bg-white shadow-md">
            <iframe
              title="Diez Anti-Aging Aesthetics Clinic Location Map"
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
