// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Brain } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { SOFT_SKILLS_DATA } from '@/data/soft-skills';
import { SOFT_SKILLS_LANGUAGES } from '@/i18n/soft-skills.lng';

// #endregion

interface SoftSkillsProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Soft Skills Section
 *
 * @see SoftSkillsProps for the props interface.
 * @returns The Soft Skills Section with his ref being forwarded.
 */
export const SoftSkills = forwardRef<HTMLElement, SoftSkillsProps>(function RenderSoftSkills(props, ref): JSX.Element {
  const { translate } = useLanguage();
  return (
    <section {...props} ref={ref} className="border-divider">
      {/* Content */}
      <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
        <Brain className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
        {/* Header */}
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('soft-skills', SOFT_SKILLS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('soft-list', SOFT_SKILLS_LANGUAGES)}</p>
        </hgroup>
        {/* Grid */}
        <section className="grid grid-cols-2 gap-4">
          {SOFT_SKILLS_DATA.map((skill) => (
            <Card key={skill.name} className="group basis-1/3 cursor-pointer duration-300 hover:border-emerald-500">
              <CardHeader>
                <CardTitle className="tracking-wide duration-300 group-hover:text-emerald-500">
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
