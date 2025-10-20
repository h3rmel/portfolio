/**
 * Translation dictionary for supported locales.
 * Provides type-safe translations for all UI strings in the application.
 */

export type Locale = 'en' | 'pt';

export interface Translations {
  home: {
    greeting: string;
    subtitle: string;
    about: string;
    projects: string;
    cv: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    home: {
      greeting: "Hi — I'm Isaac Hermel Reginato, a Software Engineer based in Brazil.",
      subtitle:
        'Front-end specialist and open-source contributor. Currently creating and learning new things. You can find more about me below.',
      about: 'About',
      projects: 'Projects',
      cv: 'CV',
    },
  },
  pt: {
    home: {
      greeting:
        'Olá — Eu sou Isaac Hermel Reginato, um Engenheiro de Software do Brasil.',
      subtitle:
        'Especialista em front-end e contribuidor open-source. Atualmente criando e aprendendo coisas novas. Você pode saber mais sobre mim abaixo.',
      about: 'Sobre',
      projects: 'Projetos',
      cv: 'Currículo',
    },
  },
};
