/**
 * Design Tokens (TypeScript)
 * Type-safe access to CSS custom properties and design values
 */

export const DESIGN_TOKENS = {
  spacing: {
    base: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  iconSize: {
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  avatarSize: {
    sm: '2rem',
    md: '4rem',
    lg: '6rem',
  },
  animation: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
export type IconSize = keyof typeof DESIGN_TOKENS.iconSize;
export type AvatarSize = keyof typeof DESIGN_TOKENS.avatarSize;
