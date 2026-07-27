import { useReducedMotion, type Variants } from 'motion/react';
import { useMemo } from 'react';

export const EASE_MECHANICAL = [0.22, 1, 0.36, 1] as const;

interface MechanicalVariantsOptions {
  stagger?: number;
  duration?: number;
  offsetY?: number;
}

/**
 * Shared "mechanical" mount/scroll-in variants: opacity (+ optional y offset) fade-in with
 * per-index stagger, honoring prefers-reduced-motion via a zero-duration, no-offset path.
 */
export function useMechanicalVariants({
  stagger = 0.1,
  duration = 0.45,
  offsetY = 8,
}: MechanicalVariantsOptions = {}): Variants {
  const prefersReducedMotion = useReducedMotion();

  return useMemo(
    () => ({
      hidden: {
        opacity: prefersReducedMotion ? 1 : 0,
        ...(offsetY !== 0 && { y: prefersReducedMotion ? 0 : offsetY }),
      },
      visible: (i: number) => ({
        opacity: 1,
        ...(offsetY !== 0 && { y: 0 }),
        transition: prefersReducedMotion
          ? { duration: 0 }
          : {
              delay: i * stagger,
              duration,
              ease: EASE_MECHANICAL,
            },
      }),
    }),
    [prefersReducedMotion, stagger, duration, offsetY],
  );
}
