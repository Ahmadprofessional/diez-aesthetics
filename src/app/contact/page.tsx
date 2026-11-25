import type { Metadata } from 'next';
import Image from 'next/image';
import { getContactContent } from '@/lib/content';
import { ContactCard } from '@/components/contact/ContactCard';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

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
    <div className="bg-[#efebe8] text-[#1c1a19] min-h-screen">
      {/* Editorial Luxury Hero Banner (Dark Stone & Clinic Location) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#18171a] text-white border-b border-white/10 overflow-hidden">
        {/* Ambient atmospheric stone lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#545358]/20 rounded-full blur-[180px]" />
          <div className="absolute top-10 left-10 w-[450px] h-[350px] bg-[#747476]/15 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-space uppercase tracking-[0.25em] text-[#efebe8] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcd8d4]" />
                <span>CENTRAL LONDON CLINIC • KING’S CROSS N1</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.08]">
                Get in Touch &amp;{' '}
                <span className="italic text-[#dcd8d4]">Visit the Clinic</span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
                Located just 4 minutes from King&apos;s Cross and St Pancras International. Dedicated private medical care in an exclusive central London setting.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white/80">
                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>4 Mins from St Pancras Int’l</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Confidential Medical Consultations</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/05 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-[#dcd8d4]" />
                  <span>Prompt Concierge Reply</span>
                </div>
              </div>
            </div>

            {/* Right Column: Treatment Room Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/05 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/clinic_treatment_suite.webp"
                    alt="Diez Aesthetics Private Clinical Treatment Suite London"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <span className="text-[10px] font-space uppercase tracking-widest text-[#dcd8d4] block">
                      King’s Cross Clinic
                    </span>
                    <p className="font-serif text-lg leading-snug">
                      260 Pentonville Road, London N1 9JY
                    </p>
                    <p className="text-xs text-white/60 font-light">
                      Subtle aesthetic enhancements delivered in complete discretion
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
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