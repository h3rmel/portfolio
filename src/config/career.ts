import catencyLogo from '@/assets/catency.webp';
import umblerLogo from '@/assets/umbler.webp';
import zenviaLogo from '@/assets/zenvia.webp';

/**
 * Career experience logo configuration.
 * Maps employer names to their imported image assets.
 */
export const CAREER_LOGOS = {
  Zenvia: zenviaLogo,
  Catency: catencyLogo,
  Umbler: umblerLogo,
} as const;
