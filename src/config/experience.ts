export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  metric: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Zenvia',
    role: 'Software Engineer',
    period: '08/2023 — Present',
    metric: '26% ETL optimization · TTI 5s → 3.2s',
    description:
      'Led the end-to-end refactoring of Zenvia Nutrir. Architected a new React front-end utilizing MVVM and standardized Axios network layers, successfully reducing TTI from 5s to 3.2s. Optimized backend Python/Flask RESTful APIs and ETL pipelines for a 26% performance increase. Ensured robust system reliability by eliminating UI sync failures through BDD-driven testing.',
    tags: ['React', 'MVVM', 'BDD', 'Flask', 'Axios', 'Data Engineering', 'ETL'],
  },
  {
    company: 'Catency',
    role: 'Front-end Developer',
    period: '04/2023 — 03/2025',
    metric: 'LCP < 2.5s · 5 platforms shipped',
    description:
      'Engineered high-conversion web interfaces for a B2B client portfolio using Next.js and Tailwind CSS. Applied hybrid rendering (SSG/SSR) for strict SEO indexing control. Executed pixel-perfect implementation with absolute responsiveness and CLS mitigation. Delivered 5 platforms with Core Web Vitals compliance for high organic ranking.',
    tags: ['Next.js', 'Tailwind CSS', 'SSG/SSR', 'Core Web Vitals', 'SEO'],
  },
  {
    company: 'Umbler',
    role: 'Full-stack Developer',
    period: '02/2022 — 04/2023',
    metric: '100,000 clients · base automation',
    description:
      'End-to-end development with .NET and Blazor for internal Customer Success tools. Structured codebase on the MVC pattern separating data modeling from control interfaces. Customized Bootstrap as the standardized Design System across internal systems. Enabled process documentation, learning paths, and automation of base management for the service team.',
    tags: ['.NET', 'Blazor', 'MVC', 'Bootstrap', 'Internal Tools'],
  },
];
