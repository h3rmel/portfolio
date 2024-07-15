// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { CodeXml } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/components/ui/tooltip';

import { HARD_SKILLS_DATA, OTHER_HARD_SKILLS_DATA, TECH_COLORS } from '@/data/hard-skills';
import { HARD_SKILLS_LANGUAGES } from '@/i18n/hard-skills.lng';
import { useWindowDimensions } from '@/lib/screen-dimensions';
import { cn } from '@/lib/utils';

// #endregion

interface HardSkillsProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Hard Skills Section
 *
 * @component
 * @see HardSkillsProps for the props interface.
 * @returns The Hard Skills Section with his ref being forwarded.
 */
export const HardSkills = forwardRef<HTMLElement, HardSkillsProps>(function RenderHardSkills(props, ref): JSX.Element {
  const { translate } = useLanguage();
  const { windowWidth } = useWindowDimensions();

  return (
    <Section {...props} ref={ref}>
      {/* Content */}
      <CodeXml className="absolute right-4 top-4 h-6 w-6 text-muted-foreground opacity-30 sm:h-8 sm:w-8" />
      {/* Header */}
      <hgroup className="flex flex-col gap-1">
        <h2 className="text-2xl">{translate('hard-skills', HARD_SKILLS_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('tech-list', HARD_SKILLS_LANGUAGES)}</p>
      </hgroup>
      {/* Grid */}
      <TooltipProvider>
        <section className="grid grid-cols-3 place-items-center gap-8 sm:grid-cols-5 sm:gap-16">
          {HARD_SKILLS_DATA.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? 5 : -5, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 1 }}
              key={skill.name}
            >
              <Tooltip>
                <TooltipTrigger className="relative h-24 w-24 sm:h-48 sm:w-48">
                  <article
                    className={cn(
                      'group absolute left-[50%] top-[50%] h-24 w-24 translate-x-[-50%] translate-y-[-50%] overflow-hidden border border-dashed border-border duration-300 sm:h-48 sm:w-48',
                      TECH_COLORS[skill.colorKey].border,
                    )}
                  >
                    <div
                      className={cn(
                        'absolute left-0 top-0 h-8 w-8 rounded-full opacity-30 blur-xl duration-300 group-hover:left-[30%] sm:h-32 sm:w-32',
                        TECH_COLORS[skill.colorKey].bg,
                      )}
                    />
                    <div
                      className={cn(
                        'absolute bottom-0 right-0 h-8 w-8 rounded-full opacity-30 blur-xl duration-300 group-hover:right-[30%] sm:h-32 sm:w-32',
                        TECH_COLORS[skill.colorKey].bg,
                      )}
                    />
                    <Image
                      src={skill.image}
                      alt={`${skill.name}'s icon`}
                      width={windowWidth > 640 ? 96 : 64}
                      height={windowWidth > 640 ? 96 : 64}
                      className="absolute left-[50%] top-[50%] h-auto w-auto translate-x-[-50%] translate-y-[-50%] duration-300 group-hover:scale-105"
                    />
                  </article>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
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
    </Section>
  );
});
