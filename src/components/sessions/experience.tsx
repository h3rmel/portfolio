import { ExperienceCard } from '@/components/experience-card';
import { ExperienceGrid } from '@/components/experience-grid';
import { Accordion } from '@/components/ui/accordion';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

export function Experience() {
  const { experience } = DATA.sessions;

  return (
    <section id="experience-session">
      <h2 className={cn('text-2xl font-bold', 'mb-2')}>{experience.title}</h2>
      <ExperienceGrid />
      <h3 className={cn('text-2xl font-bold', 'mt-12 mb-2')}>{experience.title2}</h3>
      <Accordion type="multiple" className={cn('space-y-2')}>
        {experience.content.map((item, index) => (
          <ExperienceCard key={index} index={index.toString()} content={item} />
        ))}
      </Accordion>
    </section>
  );
}
