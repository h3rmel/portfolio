export interface ProjectEntry {
  name: string;
  description: string;
  metric: string;
  url: string;
  tags: string[];
  status: 'active' | 'stable' | 'archived';
}

export const projects: ProjectEntry[] = [
  {
    name: 'Distributed Systems Lab',
    description:
      'Full-stack monorepo with a scalable webhook ingestion API (NestJS/Fastify, BullMQ), memory-safe data streaming pipeline, and real-time analytics dashboard (Next.js 16, Socket.io, Zustand). Processed 5M records with 57MB RAM via Node.js Streams and Postgres COPY.',
    metric: '5M records · 57MB RAM · 7.35ms P95 · 60 FPS',
    url: 'https://github.com/h3rmel/distributed-systems-lab',
    tags: ['NestJS', 'BullMQ', 'Streams', 'WebSocket', 'Postgres'],
    status: 'active',
  },
  {
    name: 'Guarahooks',
    description:
      'Open-source React hooks library — 50 hooks, distributed via the shadcn package registry with a CLI published on npm (guara-cli). Documentation ecosystem built on content-collections. Code consumed by third-party applications.',
    metric: '50 hooks · shadcn registry · guara-cli (npm) · 107 stars',
    url: 'https://github.com/h3rmel/guarahooks',
    tags: ['React', 'Hooks', 'Open Source', 'shadcn', 'npm'],
    status: 'active',
  },
  {
    name: 'MagicUI',
    description:
      'Developed 5 visual components for an open-source UI library using React.js, Tailwind CSS, and Framer Motion. Applied Lazy Loading and rendering control via memoization hooks (useMemo, useCallback).',
    metric: '5 components · ~5KB bundle reduction',
    url: 'https://github.com/magicuidesign/magicui',
    tags: ['React', 'Framer Motion', 'Performance', 'UI'],
    status: 'active',
  },
  {
    name: 'Enterprise React Architecture',
    description:
      'A volleyball-scoreboard app used as a testbed for Shift-Left Testing: Clean Architecture separates framework-agnostic domain rules, Zustand-based application state, and React presentation, while Cucumber.js/Gherkin specs precede Red-Green-Refactor TDD in Vitest and React Testing Library.',
    metric: 'Clean Architecture · Shift-Left TDD/BDD',
    url: 'https://github.com/h3rmel/enterprise-react-architecture',
    tags: ['TypeScript', 'Clean Architecture', 'Zustand', 'Vitest', 'Cucumber.js'],
    status: 'stable',
  },
];
