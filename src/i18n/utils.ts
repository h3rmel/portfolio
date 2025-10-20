import { translations, type Locale, type Translations } from './translations';

/**
 * Retrieves translations for a given locale.
 * Defaults to 'en' if locale is not found.
 *
 * @param locale - The locale to get translations for
 * @returns Translation object for the specified locale
 */
export function getTranslations(locale: string | undefined): Translations {
  const normalizedLocale = (locale === 'pt' ? 'pt' : 'en') as Locale;
  return translations[normalizedLocale];
}

/**
 * Checks if a given locale is supported.
 *
 * @param locale - The locale to check
 * @returns True if the locale is supported, false otherwise
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'pt';
}
