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
    // TODO(star-count): replace '~102 stars' placeholder with real stargazers_count from the GitHub API — no GITHUB_TOKEN was available at edit time.
    metric: '50 hooks · shadcn registry · guara-cli (npm) · ~102 stars',
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
      'A volleyball-scoreboard proof of concept built to exercise a Shift-Left testing workflow — TypeScript, Vitest, and React Testing Library driving TDD/BDD over a stateful UI domain.',
    metric: 'Shift-Left · TDD/BDD · Vitest',
    url: 'https://github.com/h3rmel/enterprise-react-architecture',
    tags: ['TypeScript', 'Vitest', 'TDD/BDD', 'Testing Library'],
    status: 'stable',
  },
];
