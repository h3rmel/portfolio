import { PROJECT_DATA } from '@/config/projects';
import { LOCALE } from '@/constants';
import type { Locale, Project } from '@/types';

import { translations, type Translations } from './translations';

/**
 * Retrieves translations for a given locale.
 * Defaults to 'en' if locale is not found.
 *
 * @param locale - The locale to get translations for
 * @returns Translation object for the specified locale
 */
export function getTranslations(locale: string | undefined): Translations {
  const normalizedLocale = (locale === 'pt' ? 'pt' : LOCALE.default) as Locale;
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

/**
 * Validates and returns a valid locale, with fallback to default locale.
 * Use this instead of non-null assertions when working with potentially undefined locales.
 *
 * @param locale - The locale to validate
 * @returns A valid Locale ('en' or 'pt'), defaults to configured default if invalid
 */
export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return LOCALE.default;
}

/**
 * Retrieves projects with translations for a given locale.
 * Combines static project data with localized title and description.
 *
 * @param locale - The locale to get projects for
 * @returns Array of projects with translations
 */
export function getProjects(locale: string | undefined): Project[] {
  const t = getTranslations(locale);
  const projectTranslations = t.projects.items;

  return PROJECT_DATA.map((project) => ({
    ...project,
    title: projectTranslations[project.id]?.title ?? project.id,
    description: projectTranslations[project.id]?.description ?? '',
  }));
}
