import type { SupportedLocale } from './i18n';

export type GalleryImageKey = 'courtyard' | 'room' | 'breakfast' | 'old-town' | 'castle';

export interface GalleryItemTranslation {
  readonly title: string;
  readonly alt: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly image: GalleryImageKey;
  readonly featured: boolean;
  readonly translations: Readonly<Record<SupportedLocale, GalleryItemTranslation>>;
}

export interface GalleryData {
  readonly gallery: readonly GalleryItem[];
}
