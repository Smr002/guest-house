import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type SupportedLocale } from '@app-types/i18n';
import type { Translations } from '@app-types/translations';

export async function loadTranslations(locale: SupportedLocale): Promise<Translations> {
  try {
    const module = await import(`../i18n/${locale}.json`);
    return module.default as Translations;
  } catch {
    const fallback = await import(`../i18n/${DEFAULT_LOCALE}.json`);
    return fallback.default as Translations;
  }
}

export function t(
  translations: Translations,
  key: string,
  replacements?: Readonly<Record<string, string | number>>,
): string {
  const value: unknown = key.split('.').reduce<unknown>((obj: unknown, segment: string) => {
    if (obj !== null && typeof obj === 'object' && segment in obj) {
      return (obj as Record<string, unknown>)[segment];
    }

    return undefined;
  }, translations);

  if (typeof value !== 'string') {
    console.warn(`[i18n] Missing translation key: "${key}"`);
    return key;
  }

  if (replacements === undefined) {
    return value;
  }

  return Object.entries(replacements).reduce(
    (result: string, [placeholder, replacement]: [string, string | number]) =>
      result.replaceAll(`{{${placeholder}}}`, String(replacement)),
    value,
  );
}

export function localePath(locale: SupportedLocale, path = ''): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath === '/' ? `/${locale}/` : `/${locale}${normalizedPath}`;
}

export function getRoomContent<Translation>(
  item: {
    readonly translations: Readonly<Record<SupportedLocale, Translation>>;
  },
  locale: SupportedLocale,
): Translation {
  return item.translations[locale] ?? item.translations[DEFAULT_LOCALE];
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
