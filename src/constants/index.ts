/**
 * Application constants and configuration values.
 * Centralizes hardcoded values for easier maintenance and updates.
 */

/**
 * User profile information
 */
export const USER_PROFILE = {
  name: 'Isaac Hermel Reginato',
  initials: 'IR',
  githubUsername: 'h3rmel',
} as const;

/**
 * Default theme configuration
 */
export const THEME = {
  default: 'theme-light' as const,
  storageKey: 'theme',
} as const;

/**
 * Locale configuration
 */
export const LOCALE = {
  default: 'en' as const,
  supported: ['en', 'pt'] as const,
} as const;

/**
 * Icon sizes used across the application
 */
export const ICON_SIZES = {
  small: 16,
  medium: 24,
  large: 32,
} as const;
