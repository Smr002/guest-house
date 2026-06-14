import type { ImageMetadata } from 'astro';
import type { GalleryImageKey } from '@app-types/gallery';

import breakfastCourtyard from '../assets/breakfast-courtyard.png';
import castleOverlook from '../assets/castle-overlook.png';
import heroCourtyard from '../assets/hero-courtyard.png';
import oldTownStreet from '../assets/old-town-street.png';
import roomInterior from '../assets/room-interior.png';

const ROOM_IMAGE_BY_ID = {
  'castle-view': castleOverlook,
  'courtyard-suite': roomInterior,
  'old-town-double': oldTownStreet,
  'family-room': roomInterior,
} as const satisfies Readonly<Record<string, ImageMetadata>>;

const GALLERY_IMAGE_BY_KEY = {
  courtyard: heroCourtyard,
  room: roomInterior,
  breakfast: breakfastCourtyard,
  'old-town': oldTownStreet,
  castle: castleOverlook,
} as const satisfies Readonly<Record<GalleryImageKey, ImageMetadata>>;

export function getHeroImage(): ImageMetadata {
  return heroCourtyard;
}

export function getRoomImage(roomId: string): ImageMetadata {
  if (roomId in ROOM_IMAGE_BY_ID) {
    return ROOM_IMAGE_BY_ID[roomId as keyof typeof ROOM_IMAGE_BY_ID];
  }

  return roomInterior;
}

export function getGalleryImage(imageKey: GalleryImageKey): ImageMetadata {
  return GALLERY_IMAGE_BY_KEY[imageKey];
}
