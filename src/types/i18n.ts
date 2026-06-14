export const SUPPORTED_LOCALES = ['en', 'sq', 'es', 'fr', 'it', 'el'] as const;
export const DEFAULT_LOCALE = 'en' as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export interface LocaleConfig {
  readonly code: SupportedLocale;
  readonly label: string;
  readonly flag: string;
  readonly direction: 'ltr' | 'rtl';
}

export const LOCALE_CONFIG: Readonly<Record<SupportedLocale, LocaleConfig>> = {
  en: { code: 'en', label: 'English', flag: '🇬🇧', direction: 'ltr' },
  sq: { code: 'sq', label: 'Shqip', flag: '🇦🇱', direction: 'ltr' },
  es: { code: 'es', label: 'Español', flag: '🇪🇸', direction: 'ltr' },
  fr: { code: 'fr', label: 'Français', flag: '🇫🇷', direction: 'ltr' },
  it: { code: 'it', label: 'Italiano', flag: '🇮🇹', direction: 'ltr' },
  el: { code: 'el', label: 'Ελληνικά', flag: '🇬🇷', direction: 'ltr' },
} as const satisfies Record<SupportedLocale, LocaleConfig>;
