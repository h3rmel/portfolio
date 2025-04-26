import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

import { EducationCard } from '@/components/education-card';

export function Education() {
  const { education } = DATA.sessions;

  return (
    <section id="education-session" className={cn('space-y-2')}>
      <h2 className={cn('text-xl font-bold')}>{education.title}</h2>
      <ul className={cn('space-y-2')}>
        {education.content.map((item, index) => (
          <li key={index}>
            <EducationCard content={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
