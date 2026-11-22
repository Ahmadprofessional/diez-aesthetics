import { z } from 'zod';

export const NavigationItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});
export type NavigationItem = z.infer<typeof NavigationItemSchema>;

export const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  area: z.string(),
  country: z.string(),
});
export type Address = z.infer<typeof AddressSchema>;

export const GlobalConfigSchema = z.object({
  clinic_name: z.string(),
  tagline: z.string(),
  phone: z.string(),
  phone_alt: z.string().optional(),
  email: z.string().email(),
  address: AddressSchema,
  booking_url: z.string().url(),
  whatsapp_url: z.string().url(),
  navigation: z.array(NavigationItemSchema),
  footer: z.object({
    copyright: z.string(),
    tagline: z.string(),
    hours: z.string(),
  }),
});
export type GlobalConfig = z.infer<typeof GlobalConfigSchema>;

export const TreatmentPreviewSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});
export type TreatmentPreview = z.infer<typeof TreatmentPreviewSchema>;

export const BeforeAfterPairSchema = z.object({
  treatment: z.string(),
  before: z.string(),
  after: z.string(),
});
export type BeforeAfterPair = z.infer<typeof BeforeAfterPairSchema>;

export const ReviewItemSchema = z.object({
  author: z.string(),
  rating: z.number(),
  avatar: z.string(),
  review: z.string(),
});
export type ReviewItem = z.infer<typeof ReviewItemSchema>;

export const HomeContentSchema = z.object({
  hero: z.object({
    subtitle: z.string(),
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    ctas: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
  }),
  about_founder: z.object({
    label: z.string(),
    heading: z.string(),
    bio: z.array(z.string()),
    qualifications: z.array(z.string()),
    cta: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
  treatments_preview: z.object({
    label: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    treatments: z.array(TreatmentPreviewSchema),
  }),
  why_choose: z.object({
    label: z.string(),
    heading: z.string(),
    points: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    ),
  }),
  before_after: z.object({
    label: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    pairs: z.array(BeforeAfterPairSchema),
  }),
  reviews: z.object({
    label: z.string(),
    heading: z.string(),
    rating: z.string(),
    total_reviews: z.string(),
    source: z.string(),
    items: z.array(ReviewItemSchema),
  }),
});
export type HomeContent = z.infer<typeof HomeContentSchema>;

export const TreatmentServiceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  icon: z.string(),
  description: z.string(),
  areas: z.array(z.string()),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});
export type TreatmentService = z.infer<typeof TreatmentServiceSchema>;

export const TreatmentsContentSchema = z.object({
  header: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  services: z.array(TreatmentServiceSchema),
});
export type TreatmentsContent = z.infer<typeof TreatmentsContentSchema>;

export const PriceItemSchema = z.object({
  name: z.string(),
  price: z.string(),
  duration: z.string(),
});
export type PriceItem = z.infer<typeof PriceItemSchema>;

export const PriceCategorySchema = z.object({
  category: z.string(),
  note: z.string(),
  items: z.array(PriceItemSchema),
});
export type PriceCategory = z.infer<typeof PriceCategorySchema>;

export const PricesContentSchema = z.object({
  header: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  categories: z.array(PriceCategorySchema),
  booking_note: z.string(),
});
export type PricesContent = z.infer<typeof PricesContentSchema>;

export const AboutContentSchema = z.object({
  header: z.object({
    subtitle: z.string(),
    title: z.string(),
    subtitle2: z.string(),
  }),
  director_section: z.object({
    heading: z.string(),
    bio: z.string(),
    values: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    ),
  }),
  cta_section: z.object({
    heading: z.string(),
    subtitle: z.string(),
    cta: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
});
export type AboutContent = z.infer<typeof AboutContentSchema>;

export const GalleryItemSchema = z.object({
  url: z.string(),
  treatment: z.string(),
  alt: z.string(),
});
export type GalleryItem = z.infer<typeof GalleryItemSchema>;

export const GalleryContentSchema = z.object({
  header: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  categories: z.array(z.string()),
  items: z.array(GalleryItemSchema),
});
export type GalleryContent = z.infer<typeof GalleryContentSchema>;

export const ContactContentSchema = z.object({
  header: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  contact_methods: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
      link: z.string(),
    })
  ),
  opening_hours: z.array(
    z.object({
      day: z.string(),
      hours: z.string(),
    })
  ),
  transit_info: z.string(),
});
export type ContactContent = z.infer<typeof ContactContentSchema>;

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
