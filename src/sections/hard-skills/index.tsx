'use client';

// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { CodeXml } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/components/ui/tooltip';

import { HARD_SKILLS_DATA, OTHER_HARD_SKILLS_DATA, TECH_COLORS } from './data';
import { HARD_SKILLS_LANGUAGES } from './language';

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

  return (
    <Section {...props} ref={ref}>
      {/* Content */}
      <CodeXml className="absolute right-4 top-4 h-6 w-6 text-muted-foreground opacity-30 duration-300 hover:opacity-100 sm:h-8 sm:w-8" />
      {/* Header */}
      <hgroup className="flex flex-col">
        <h2 className="text-2xl">{translate('hard-skills', HARD_SKILLS_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('tech-list', HARD_SKILLS_LANGUAGES)}</p>
      </hgroup>
      {/* Grid */}
      <TooltipProvider delayDuration={100} skipDelayDuration={0}>
        <section className="grid grid-cols-3 place-items-center gap-7 sm:grid-cols-5 sm:gap-16">
          {HARD_SKILLS_DATA.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 + index / 30 }}
              viewport={{ once: true }}
              key={skill.name}
            >
              <Tooltip>
                <TooltipTrigger className="relative h-24 w-24 cursor-default sm:h-48 sm:w-48">
                  <article
                    className={cn(
                      'group absolute left-[50%] top-[50%] h-24 w-24 translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg border border-dashed border-border duration-300 sm:h-48 sm:w-48',
                      TECH_COLORS[skill.colorKey].border,
                    )}
                  >
                    <div
                      className={cn(
                        'absolute left-4 top-4 h-8 w-8 rounded-full opacity-60 blur-lg duration-500 group-hover:left-[45%] sm:left-0 sm:top-0 sm:h-32 sm:w-32 sm:opacity-30 sm:blur-xl sm:group-hover:left-[30%]',
                        TECH_COLORS[skill.colorKey].bg,
                      )}
                    />
                    <div
                      className={cn(
                        'absolute bottom-4 right-4 h-8 w-8 rounded-full opacity-60 blur-lg duration-500 group-hover:right-[45%] sm:bottom-0 sm:right-0 sm:h-32 sm:w-32 sm:opacity-30 sm:blur-xl sm:group-hover:right-[30%]',
                        TECH_COLORS[skill.colorKey].bg,
                      )}
                    />
                    <Image
                      src={skill.image}
                      alt={`${skill.name}'s icon`}
                      width={72}
                      height={72}
                      className="absolute left-[50%] top-[50%] h-auto w-16 translate-x-[-50%] translate-y-[-50%] duration-300 group-hover:scale-105 sm:w-auto"
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
        <h3 className="text-lg text-muted-foreground">{translate('other-skills', HARD_SKILLS_LANGUAGES)}:</h3>
        <ul className="flex flex-col gap-1 sm:gap-0">
          {OTHER_HARD_SKILLS_DATA.map((skill) => (
            <li key={skill} className="text-sm sm:text-base">
              - {translate(skill, HARD_SKILLS_LANGUAGES)}
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
});
