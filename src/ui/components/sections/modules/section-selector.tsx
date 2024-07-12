// #region Imports

import { RefObject } from 'react';

import { Brain, BriefcaseBusiness, CodeXml, DraftingCompass } from 'lucide-react';

import { SECTION_SELECTOR_LANGUAGES } from '@/app/_languages/section-selector.lng';

import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';

// #endregion

/**
 * @param projectsRef - The reference to the projects section.
 * @param hardSkillsRef - The reference to the hard skills section.
 * @param softSkillsRef - The reference to the soft skills section.
 * @param contractableServicesRef - The reference to the contractable services section.
 */
interface SectionSelectorProps {
  projectsRef: RefObject<HTMLHeadingElement>;
  hardSkillsRef: RefObject<HTMLHeadingElement>;
  softSkillsRef: RefObject<HTMLHeadingElement>;
  contractableServicesRef: RefObject<HTMLHeadingElement>;
}

/**
 * Render the SectionSelector component
 *
 * The SectionSelector is responsible for manipulating the scroll to the desired section.
 *
 * @see SectionSelectorProps for the props interface.
 * @returns {JSX.Element} The SectionSelector component
 */
export function SectionSelector({
  contractableServicesRef,
  hardSkillsRef,
  projectsRef,
  softSkillsRef,
}: SectionSelectorProps): JSX.Element {
  const { translate } = useLanguage();

  /**
   * Renders the scroll to the desired section.
   *
   * @param ref - The reference of the desired section.
   */
  function handleScrollToRef(ref: RefObject<HTMLHeadingElement>) {
    window.scrollTo({
      top: (ref.current?.offsetTop ?? 0) - 96,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section className="border-y border-dashed border-border">
      <section className="container flex flex-col justify-center gap-4 border-x border-dashed border-border p-16">
        {/* Header */}
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('what-you-want-to-know', SECTION_SELECTOR_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('click-here-to', SECTION_SELECTOR_LANGUAGES)}</p>
        </hgroup>
        {/* Buttons List */}
        <section className="flex items-center gap-4">
          <Button variant="outline" className="flex gap-2" onClick={() => handleScrollToRef(projectsRef)}>
            <DraftingCompass className="h-5 w-5" />
            {translate('projects', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2" onClick={() => handleScrollToRef(hardSkillsRef)}>
            <CodeXml className="h-5 w-5" />
            {translate('hard-skills', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2" onClick={() => handleScrollToRef(softSkillsRef)}>
            <Brain className="h-5 w-5" />
            {translate('soft-skills', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2" onClick={() => handleScrollToRef(contractableServicesRef)}>
            <BriefcaseBusiness className="h-5 w-5" />
            {translate('contractable-services', SECTION_SELECTOR_LANGUAGES)}
          </Button>
        </section>
      </section>
    </section>
  );
}
