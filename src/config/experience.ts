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
    metric: 'LCP 2.91s → 2.35s · INP 275ms → 199ms',
    description:
      "Full ownership, from scratch, of the ZCC ↔ Mercado Livre messaging integration (Q&A, post-sale, complaints), plus ZCC ↔ ERP integration interfaces (Bling, Tiny, Omie, Microvix) shipped under feature-flag-controlled rollout (Canary) with per-client versioned exposure. Ownership of partners-api, a batch CSV-import service in layered architecture with dependency injection isolating business rules from I/O, sustaining peaks of 60k rows/minute in production. Ownership of the ETL pipelines synchronizing with ERPs — Apache Airflow DAGs (Python) covering contacts, orders, invoices, and product catalog, architected against two nested vendor-API budgets (3 requests/second and 120k requests/day, per client) under an HTTP N+1 pattern: work-conserving scheduling with priority-weighted allocation across concurrent streams, and durable resumption via page-and-record checkpoint on hitting the daily quota. Cut production Core Web Vitals into the 'good' range via a React rendering refactor on MVVM. Contributor to the company design system in StencilJS/Storybook.",
    tags: [
      'React',
      'MVVM',
      'Feature Flags',
      'Core Web Vitals',
      'StencilJS',
      'Layered Architecture',
      'Apache Airflow',
      'Python',
      'ETL',
    ],
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
