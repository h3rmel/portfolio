// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Brain } from 'lucide-react';

import { SOFT_SKILLS_LANGUAGES } from '@/app/_languages/soft-skills.lng';

import { useLanguage } from '@/ui/components/language';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { SOFT_SKILLS_DATA } from '@/data/soft-skills';

// #endregion

interface SoftSkillsProps extends ComponentPropsWithoutRef<'section'> {}

export const SoftSkills = forwardRef<HTMLElement, SoftSkillsProps>(function RenderSoftSkills(props, ref): JSX.Element {
  const { translate } = useLanguage();
  return (
    <section {...props} ref={ref}>
      <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
        <Brain className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
        {/* Header */}
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('soft-skills', SOFT_SKILLS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('soft-list', SOFT_SKILLS_LANGUAGES)}</p>
        </hgroup>
        {/* Soft List */}
        <section className="grid grid-cols-2 gap-4">
          {SOFT_SKILLS_DATA.map((skill) => (
            <Card
              key={skill.name}
              className="basis-1/3 cursor-pointer rounded-none border-dashed duration-300 hover:border-emerald-500"
            >
              <CardHeader>
                <CardTitle className="tracking-wide duration-300 hover:text-emerald-500">
                  {translate(skill.name, SOFT_SKILLS_LANGUAGES)}
                </CardTitle>
                <CardDescription>{translate(skill.desc, SOFT_SKILLS_LANGUAGES)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </section>
    </section>
  );
});
