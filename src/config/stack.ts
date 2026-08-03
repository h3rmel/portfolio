export interface StackItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'cloud' | 'testing' | 'architecture';
}

export const stack: StackItem[] = [
  { name: 'TypeScript', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'Python', category: 'languages' },

  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },

  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'Apache Airflow', category: 'backend' },

  { name: 'PostgreSQL', category: 'databases' },
  { name: 'Redis', category: 'databases' },
  { name: 'Kafka', category: 'databases' },

  { name: 'Docker', category: 'cloud' },
  { name: 'Kubernetes', category: 'cloud' },
  { name: 'GitHub Actions', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Argo CD', category: 'cloud' },

  { name: 'Jest', category: 'testing' },
  { name: 'Vitest', category: 'testing' },
  { name: 'Testing Library', category: 'testing' },

  { name: 'TDD', category: 'architecture' },
  { name: 'BDD', category: 'architecture' },
  { name: 'MVVM', category: 'architecture' },
  { name: 'Layered Architecture', category: 'architecture' },
  { name: 'ETL', category: 'architecture' },
];
