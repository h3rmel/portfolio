export const portfolioProjectsData: {
  name: string;
  description: string;
  imageUrl: string;
  license: string;
  topics: string[];
  url?: string;
}[] = [
  {
    name: 'Front Hub',
    description: 'front_hub_desc',
    imageUrl: '/projects/front-hub.png',
    license: 'MIT',
    topics: ['react', 'next', 'typescript', 'tailwindcss', 'react-hook-form', 'zod', 'shadcn/ui'],
    url: 'https://front-hub.vercel.app/'
  },
  {
    name: 'React I.S.A',
    description: 'isa_arch_desc',
    imageUrl: '/projects/react-isa.png',
    license: 'MIT',
    topics: ['react', 'typescript', 'tailwindcss', 'zustand', 'daisyui', 'architecture'],
    url: 'https://github.com/h3rmel/isa-arch'
  },
  {
    name: 'Next LP Template',
    description: 'next_lp_template_desc',
    imageUrl: '/projects/next-lp-template.png',
    license: 'MIT',
    topics: ['react', 'next', 'typescript', 'tailwindcss', 'gtm', 'shadcn/ui', 'template'],
    url: 'https://github.com/h3rmel/next-lp-template'
  },
  {
    name: 'H3rmel Lint Config',
    description: 'h3rmel_lint_config_desc',
    imageUrl: '/projects/h3rmel-lint-config.png',
    license: 'MIT',
    topics: ['eslint', 'prettier', 'tailwindcss', 'react', 'jsx-a11y', 'react-hooks', 'import-helpers'],
    url: 'https://github.com/h3rmel/lint-config-h3rmel'
  }
];
