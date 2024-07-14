// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Image from 'next/image';

import { CodeXml } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/components/ui/tooltip';

import { HARD_SKILLS_DATA, OTHER_HARD_SKILLS_DATA, TECH_COLORS } from '@/data/hard-skills';
import { HARD_SKILLS_LANGUAGES } from '@/i18n/hard-skills.lng';
import { cn } from '@/lib/utils';

// #endregion

interface HardSkillsProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Hard Skills Section
 *
 * @see HardSkillsProps for the props interface.
 * @returns The Hard Skills Section with his ref being forwarded.
 */
export const HardSkills = forwardRef<HTMLElement, HardSkillsProps>(function RenderHardSkills(props, ref): JSX.Element {
  const { translate } = useLanguage();

  return (
    <section {...props} ref={ref} className="border-divider">
      {/* Content */}
      <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
        <CodeXml className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
        {/* Header */}
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('hard-skills', HARD_SKILLS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('tech-list', HARD_SKILLS_LANGUAGES)}</p>
        </hgroup>
        {/* Grid */}
        <TooltipProvider>
          <section className="grid grid-cols-5 gap-16">
            {HARD_SKILLS_DATA.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger className="relative h-48 w-48">
                  <article
                    key={skill.name}
                    className={cn(
                      'absolute left-[50%] top-[50%] h-48 w-48 translate-x-[-50%] translate-y-[-50%] overflow-hidden border border-dashed border-border duration-300',
                      TECH_COLORS[skill.colorKey].border,
                    )}
                  >
                    <div
                      className={cn(
                        'absolute left-[50%] top-[50%] h-32 w-32 translate-x-[-50%] translate-y-[-50%] rounded-full opacity-30 blur-xl',
                        TECH_COLORS[skill.colorKey].bg,
                      )}
                    />
                    <Image
                      src={skill.image}
                      alt={`${skill.name}'s icon`}
                      width={96}
                      height={96}
                      className="absolute left-[50%] top-[50%] h-auto w-auto translate-x-[-50%] translate-y-[-50%]"
                    />
                  </article>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </section>
        </TooltipProvider>
        <section className="flex flex-col gap-1">
          <h4 className="text-lg text-muted-foreground">{translate('other-skills', HARD_SKILLS_LANGUAGES)}:</h4>
          <ul>
            {OTHER_HARD_SKILLS_DATA.map((skill) => (
              <li key={skill}>- {translate(skill, HARD_SKILLS_LANGUAGES)}</li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
});
