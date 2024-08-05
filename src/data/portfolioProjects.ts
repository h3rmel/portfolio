export const portfolioProjects: {
  name: string;
  description: string;
  imageUrl: string;
  license: string;
  topics: string[];
  url: string;
}[] = [
  {
    name: 'FrontFlow',
    description: 'front_flow_desc',
    imageUrl: '/projects/front-flow.png',
    license: 'MIT',
    topics: ['react', 'next', 'typescript', 'tailwindcss', 'react-hook-form', 'zod', 'shadcn/ui'],
    url: 'https://front-flow-main.vercel.app/'
  },
  {
    name: 'React I.S.A',
    description: 'isa_arch_desc',
    imageUrl: '/projects/isa-arch.png',
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
    name: 'SenFinança',
    description: 'sen_financa_desc',
    imageUrl: '/projects/sen-financa.png',
    license: 'MIT',
    topics: ['react', 'react-router', 'tailwindcss', 'daisyui', 'vite', 'pwa'],
    url: 'https://sen-financa-henna.vercel.app/'
  },
  {
    name: 'Portfolio',
    description: 'portfolio_desc',
    imageUrl: '/projects/portfolio.png',
    license: 'MIT',
    topics: ['vue', 'vue-router', 'typescript', 'tailwindcss', 'shadcn-vue', 'framer motion', 'vite'],
    url: 'https://h3rmel.vercel.app/'
  }
];
