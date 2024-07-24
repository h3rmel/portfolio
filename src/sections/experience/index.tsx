// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Compass } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';

import { EXPERIENCE_LANGUAGES } from './language';

// #endregion

interface ExperienceProps extends ComponentPropsWithoutRef<'section'> {}

export const Experience = forwardRef<HTMLElement, ExperienceProps>(function RenderPortfolio(props, ref): JSX.Element {
  const { translate } = useLanguage();

  return (
    <Section {...props} ref={ref}>
      {/* Content */}
      <Compass className="absolute right-4 top-4 h-6 w-6 text-muted-foreground opacity-30 duration-300 hover:opacity-100 sm:h-8 sm:w-8" />
      {/* Header */}
      <hgroup className="flex flex-col">
        <h2 className="text-2xl">{translate('experience', EXPERIENCE_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('experience-desc', EXPERIENCE_LANGUAGES)}</p>
      </hgroup>
      <p className="text-justify">{translate('experience-content', EXPERIENCE_LANGUAGES)}</p>
      {/* Second Header */}
      <hgroup className="flex flex-col gap-1">
        <h3 className="text-xl">{translate('clients', EXPERIENCE_LANGUAGES)}</h3>
        <p className="text-muted-foreground">{translate('clients-desc', EXPERIENCE_LANGUAGES)}</p>
      </hgroup>
    </Section>
  );
});
