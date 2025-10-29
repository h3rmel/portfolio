/**
 * SEO configuration and metadata for the application.
 * Centralized location for all SEO-related content.
 */

export const SEO_CONFIG = {
  siteName: 'Isaac Hermel Reginato',
  siteUrl: 'https://isaachermel.dev.br',
  defaultLocale: 'en',
  twitter: '@isaach3rmel',
} as const;

/**
 * Default SEO metadata per locale
 */
export const DEFAULT_SEO = {
  en: {
    title: 'Isaac Hermel Reginato - Software Engineer',
    description:
      'Full-Stack Developer specializing in Front-End. Building scalable and intuitive applications with TypeScript, React, and Next.js. Open-source contributor.',
    keywords: [
      'Isaac Hermel',
      'Software Engineer',
      'Frontend Developer',
      'Full Stack Developer',
      'TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Web Development',
      'Brazil',
    ],
  },
  pt: {
    title: 'Isaac Hermel Reginato - Engenheiro de Software',
    description:
      'Desenvolvedor Full-Stack com especialização em Front-End. Construindo aplicações escaláveis e intuitivas com TypeScript, React e Next.js. Contribuidor open-source.',
    keywords: [
      'Isaac Hermel',
      'Engenheiro de Software',
      'Desenvolvedor Frontend',
      'Desenvolvedor Full Stack',
      'TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Desenvolvimento Web',
      'Brasil',
    ],
  },
} as const;

/**
 * Page-specific SEO metadata
 */
export const PAGE_SEO = {
  about: {
    en: {
      title: 'About - Isaac Hermel Reginato',
      description:
        'Learn more about Isaac Hermel Reginato: professional experience, education, and technical skills. Software Engineer with 3+ years of experience.',
    },
    pt: {
      title: 'Sobre - Isaac Hermel Reginato',
      description:
        'Conheça mais sobre Isaac Hermel Reginato: experiência profissional, formação e habilidades técnicas. Engenheiro de Software com mais de 3 anos de experiência.',
    },
  },
  projects: {
    en: {
      title: 'Projects - Isaac Hermel Reginato',
      description:
        'Explore my latest projects and open-source contributions. Building tools and libraries for the web development community.',
    },
    pt: {
      title: 'Projetos - Isaac Hermel Reginato',
      description:
        'Explore meus últimos projetos e contribuições open-source. Construindo ferramentas e bibliotecas para a comunidade de desenvolvimento web.',
    },
  },
} as const;
