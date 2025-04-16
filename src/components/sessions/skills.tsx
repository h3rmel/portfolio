import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

import { Badge } from '../ui/badge';

export function Skills() {
  const { skills } = DATA.sessions;

  return (
    <section id="skills-session" className={cn('space-y-2')}>
      <h2 className={cn('text-xl font-bold')}>{skills.title}</h2>
      <ul className={cn('inline-flex flex-wrap gap-2')}>
        {skills.content.map((skill, index) => (
          <li key={index}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
