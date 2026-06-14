import type { SupportedLocale } from './i18n';

export type AmenityKey =
  | 'wifi'
  | 'private-bathroom'
  | 'air-conditioning'
  | 'breakfast'
  | 'castle-view'
  | 'courtyard-view'
  | 'city-view'
  | 'king-bed'
  | 'twin-beds'
  | 'balcony'
  | 'smart-tv'
  | 'safe'
  | 'mini-fridge';

export interface RoomTranslation {
  readonly name: string;
  readonly shortDescription: string;
  readonly description: string;
}

export interface RoomImageSet {
  readonly main: string;
  readonly gallery: readonly string[];
}

export interface Room {
  readonly id: string;
  readonly slug: string;
  readonly capacity: number;
  readonly pricePerNight: number;
  readonly currency: string;
  readonly sizeM2: number;
  readonly featured: boolean;
  readonly images: RoomImageSet;
  readonly amenities: readonly AmenityKey[];
  readonly translations: Readonly<Record<SupportedLocale, RoomTranslation>>;
}

export interface RoomsData {
  readonly rooms: readonly Room[];
}
