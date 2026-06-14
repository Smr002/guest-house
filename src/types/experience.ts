import type { SupportedLocale } from './i18n';

export type ExperienceCategory = 'history' | 'nature' | 'culture' | 'food' | 'architecture';

export interface ExperienceTranslation {
  readonly name: string;
  readonly description: string;
  readonly tip: string;
}

export interface Experience {
  readonly id: string;
  readonly category: ExperienceCategory;
  readonly distanceMin: number;
  readonly travelMode: 'walk' | 'drive';
  readonly icon: string;
  readonly translations: Readonly<Record<SupportedLocale, ExperienceTranslation>>;
}

export interface ExperiencesData {
  readonly experiences: readonly Experience[];
}
