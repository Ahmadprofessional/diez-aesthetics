import fs from 'fs';
import path from 'path';
import {
  GlobalConfig,
  GlobalConfigSchema,
  HomeContent,
  HomeContentSchema,
  AboutContent,
  AboutContentSchema,
  TreatmentsContent,
  TreatmentsContentSchema,
  PricesContent,
  PricesContentSchema,
  GalleryContent,
  GalleryContentSchema,
  ContactContent,
  ContactContentSchema,
} from '@/types/content';

/**
 * Universal content adapter.
 * Currently reads from verified, verbatim JSON files in `/content`.
 * Structured so that switching to a headless CMS (Sanity, Payload, Decap)
 * requires only updating this single adapter file.
 */

function readContentFile<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'content', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getGlobalConfig(): GlobalConfig {
  const data = readContentFile<GlobalConfig>('global.json');
  return GlobalConfigSchema.parse(data);
}

export function getHomeContent(): HomeContent {
  const data = readContentFile<HomeContent>('home.json');
  return HomeContentSchema.parse(data);
}

export function getAboutContent(): AboutContent {
  const data = readContentFile<AboutContent>('about.json');
  return AboutContentSchema.parse(data);
}

export function getTreatmentsContent(): TreatmentsContent {
  const data = readContentFile<TreatmentsContent>('treatments.json');
  return TreatmentsContentSchema.parse(data);
}

export function getPricesContent(): PricesContent {
  const data = readContentFile<PricesContent>('prices.json');
  return PricesContentSchema.parse(data);
}

export function getGalleryContent(): GalleryContent {
  const data = readContentFile<GalleryContent>('gallery.json');
  return GalleryContentSchema.parse(data);
}

export function getContactContent(): ContactContent {
  const data = readContentFile<ContactContent>('contact.json');
  return ContactContentSchema.parse(data);
}
