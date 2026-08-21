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
    metric: '60k rows/min · LCP 2.91s → 2.35s',
    description:
      "Owns partners-api, a layered CSV-import service with DI-isolated business rules sustaining 60k rows/minute in production. Owns the ETL pipelines syncing Bling, Tiny, and Microvix via Apache Airflow DAGs, with priority-weighted scheduling and checkpoint resumption against per-client rate budgets as tight as 3 requests/second. Authored security-settings-sdk, an HTTP client and cache library adopted by four internal apps, replacing duplicated logic with a typed Result-pattern error contract. Fixed a prototype-chain regression in the org's Winston-based logger that had silently broken instanceof checks and test mocking across every consumer. Cut production Core Web Vitals into the 'good' range (LCP 2.91s → 2.35s, INP 275ms → 199ms) via an MVVM rendering refactor.",
    tags: [
      'React',
      'MVVM',
      'Result Pattern',
      'Core Web Vitals',
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
