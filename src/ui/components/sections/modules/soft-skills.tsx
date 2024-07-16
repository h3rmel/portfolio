// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { SOFT_SKILLS_DATA } from '@/data/soft-skills';
import { SOFT_SKILLS_LANGUAGES } from '@/i18n/soft-skills.lng';

// #endregion

interface SoftSkillsProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Soft Skills Section
 *
 * @component
 * @see SoftSkillsProps for the props interface.
 * @returns The Soft Skills Section with his ref being forwarded.
 */
export const SoftSkills = forwardRef<HTMLElement, SoftSkillsProps>(function RenderSoftSkills(props, ref): JSX.Element {
  const { translate } = useLanguage();
  return (
    <Section {...props} ref={ref} className="border-divider">
      {/* Content */}
      <motion.div
        className="absolute right-4 top-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Brain className="h-6 w-6 text-muted-foreground opacity-30 sm:h-8 sm:w-8" />
      </motion.div>
      {/* Header */}
      <hgroup className="flex flex-col gap-1">
        <h2 className="text-2xl">{translate('soft-skills', SOFT_SKILLS_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('soft-list', SOFT_SKILLS_LANGUAGES)}</p>
      </hgroup>
      {/* Grid */}
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        {SOFT_SKILLS_DATA.map((skill) => (
          <Card key={skill.name} className="group h-full w-full duration-300 hover:border-emerald-500">
            <CardHeader>
              <CardTitle className="tracking-wide duration-300 group-hover:text-emerald-500">
                {translate(skill.name, SOFT_SKILLS_LANGUAGES)}
              </CardTitle>
              <CardDescription>{translate(skill.desc, SOFT_SKILLS_LANGUAGES)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </Section>
  );
});
