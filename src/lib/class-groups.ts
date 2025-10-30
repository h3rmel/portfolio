/**
 * Class Groups
 * Reusable Tailwind class compositions for common patterns
 */

/**
 * Focus visible ring pattern used across interactive elements
 */
export const FOCUS_VISIBLE =
  'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';

/**
 * Invalid state styling for form elements
 */
export const INVALID_STATE =
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

/**
 * Active state scale transformation
 */
export const ACTIVE_SCALE = 'transition-transform active:scale-[0.98]';

/**
 * SVG icon size and behavior normalization
 */
export const SVG_NORMALIZE =
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0";

/**
 * Icon translate on hover pattern
 */
export const ICON_TRANSLATE_X =
  '[&_svg]:transition-transform hover:[&_svg]:translate-x-1';

/**
 * Complete button-like interactive element base
 */
export const INTERACTIVE_BASE = [
  'cursor-pointer',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
  FOCUS_VISIBLE,
  ACTIVE_SCALE,
].join(' ');

/**
 * Base transition for smooth interactions
 */
export const TRANSITION_BASE = 'transition-all duration-[250ms]';

/**
 * Group hover opacity pattern
 */
export const GROUP_HOVER_OPACITY = 'group-hover:opacity-60 group-hover:hover:opacity-100';
