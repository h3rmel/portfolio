/**
 * Component Variants
 * CVA-based variant definitions for composite components
 */

import { cva, type VariantProps } from 'class-variance-authority';
import { GROUP_HOVER_OPACITY, ICON_TRANSLATE_X, TRANSITION_BASE } from './class-groups';

/**
 * Link item variant for styled navigation/action links
 * Used in lists and navigation components
 */
export const linkItemVariants = cva(
  ['group w-full justify-between text-base', GROUP_HOVER_OPACITY, ICON_TRANSLATE_X],
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

/**
 * Icon wrapper variant for consistent icon sizing
 */
export const iconVariants = cva('inline-flex shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * Theme toggle icon variant for animated theme switching
 */
export const themeIconVariants = cva(['transition-all', TRANSITION_BASE], {
  variants: {
    mode: {
      light: 'scale-100 rotate-0',
      dark: 'scale-0 -rotate-90',
    },
  },
  defaultVariants: {
    mode: 'light',
  },
});

export type LinkItemVariants = VariantProps<typeof linkItemVariants>;
export type IconVariants = VariantProps<typeof iconVariants>;
export type ThemeIconVariants = VariantProps<typeof themeIconVariants>;
