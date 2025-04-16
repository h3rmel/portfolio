import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

import { Badge } from '../ui/badge';

export function Languages() {
  const { languages } = DATA.sessions;

  return (
    <section id="languages-session" className={cn('space-y-2')}>
      <h2 className={cn('text-xl font-bold')}>{languages.title}</h2>
      <ul className={cn('inline-flex flex-wrap gap-2')}>
        {languages.content.map((language, index) => (
          <li key={index}>
            <Badge>{language}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
