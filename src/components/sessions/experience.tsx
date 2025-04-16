import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

import { ExperienceCard } from '../experience-card';
import { Accordion } from '../ui/accordion';

export function Experience() {
  const { experience } = DATA.sessions;

  return (
    <section id="experience-session" className={cn('space-y-2')}>
      <h2 className={cn('text-xl font-bold')}>{experience.title}</h2>
      <Accordion type="multiple" className={cn('space-y-2')}>
        {experience.content.map((item, index) => (
          <ExperienceCard key={index} index={index.toString()} content={item} />
        ))}
      </Accordion>
    </section>
  );
}
