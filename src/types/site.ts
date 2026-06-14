export interface SiteContact {
  readonly phone: string;
  readonly whatsapp: string;
  readonly email: string;
  readonly instagram: string;
  readonly facebook: string;
}

export interface Coordinates {
  readonly lat: number;
  readonly lng: number;
}

export interface SiteLocation {
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly coordinates: Coordinates;
  readonly googleMapsUrl: string;
}

export interface SiteHours {
  readonly checkIn: string;
  readonly checkOut: string;
  readonly reception: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly established: number;
  readonly contact: SiteContact;
  readonly location: SiteLocation;
  readonly hours: SiteHours;
}
