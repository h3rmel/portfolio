import aluraLogo from '@/assets/alura.webp';
import decomplicaLogo from '@/assets/descomplica.webp';
import ifsulLogo from '@/assets/ifsul.webp';
import udemyLogo from '@/assets/udemy.webp';

/**
 * Education institution logo configuration.
 * Maps institution names to their imported image assets.
 */
export const EDUCATION_LOGOS = {
  Descomplica: decomplicaLogo,
  IFSul: ifsulLogo,
  Udemy: udemyLogo,
  Alura: aluraLogo,
} as const;
