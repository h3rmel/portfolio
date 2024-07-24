'use client';

// #region Imports

import { RefObject } from 'react';

import { Brain, BriefcaseBusiness, CodeXml, Compass, DraftingCompass } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Button } from '@/ui/components/ui/button';
import { handleScroll } from '@/utils/scrolls';

import { SECTION_SELECTOR_LANGUAGES } from './language';

// #endregion

/**
 * @param portfolioRef - The reference to the projects section.
 * @param hardSkillsRef - The reference to the hard skills section.
 * @param softSkillsRef - The reference to the soft skills section.
 * @param contractableServicesRef - The reference to the contractable services section.
 */
interface SectionSelectorProps {
  refs: {
    experienceRef: RefObject<HTMLHeadingElement>;
    portfolioRef: RefObject<HTMLHeadingElement>;
    hardSkillsRef: RefObject<HTMLHeadingElement>;
    softSkillsRef: RefObject<HTMLHeadingElement>;
    contractableServicesRef: RefObject<HTMLHeadingElement>;
  };
}

/**
 * Render the SectionSelector component
 *
 * The SectionSelector is responsible for manipulating the scroll to the desired section.
 *
 * @component
 * @see SectionSelectorProps for the props interface.
 * @returns {JSX.Element} The SectionSelector component
 */
export function SectionSelector({ refs }: SectionSelectorProps): JSX.Element {
  const { translate } = useLanguage();

  return (
    <Section>
      {/* Header */}
      <hgroup className="flex flex-col">
        <h2 className="text-2xl">{translate('what-you-want-to-know', SECTION_SELECTOR_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('click-here-to', SECTION_SELECTOR_LANGUAGES)}</p>
      </hgroup>
      {/* Buttons List */}
      <section className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button variant="outline" className="inline-flex gap-2" onClick={() => handleScroll('ref', refs.experienceRef)}>
          <Compass className="h-5 w-5" />
          {translate('experience', SECTION_SELECTOR_LANGUAGES)}
        </Button>
        <Button variant="outline" className="inline-flex gap-2" onClick={() => handleScroll('ref', refs.portfolioRef)}>
          <DraftingCompass className="h-5 w-5" />
          {translate('portfolio', SECTION_SELECTOR_LANGUAGES)}
        </Button>
        <Button variant="outline" className="inline-flex gap-2" onClick={() => handleScroll('ref', refs.hardSkillsRef)}>
          <CodeXml className="h-5 w-5" />
          {translate('hard-skills', SECTION_SELECTOR_LANGUAGES)}
        </Button>
        <Button variant="outline" className="inline-flex gap-2" onClick={() => handleScroll('ref', refs.softSkillsRef)}>
          <Brain className="h-5 w-5" />
          {translate('soft-skills', SECTION_SELECTOR_LANGUAGES)}
        </Button>
        <Button
          variant="outline"
          className="inline-flex gap-2"
          onClick={() => handleScroll('ref', refs.contractableServicesRef)}
        >
          <BriefcaseBusiness className="h-5 w-5" />
          {translate('contractable-services', SECTION_SELECTOR_LANGUAGES)}
        </Button>
      </section>
    </Section>
  );
}
