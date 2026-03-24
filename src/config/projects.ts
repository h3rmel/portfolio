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
      'Open-source platform with 50 React hooks. Documentation ecosystem integrated with content-collections and distribution via the shadcn package registry. ~100 active users.',
    metric: '50 hooks · ~100 users · shadcn registry',
    url: 'https://github.com/h3rmel/guarahooks',
    tags: ['React', 'Hooks', 'Open Source', 'shadcn'],
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
      'Reference implementation for mission-critical React applications. Shift-Left Testing approach using TypeScript, Vitest, and React Testing Library with rigorous TDD/BDD for complex UI domain validation.',
    metric: 'Shift-Left · TDD/BDD · zero regression',
    url: 'https://github.com/h3rmel/enterprise-react-architecture',
    tags: ['Architecture', 'Vitest', 'TDD/BDD', 'Testing Library'],
    status: 'stable',
  },
];
