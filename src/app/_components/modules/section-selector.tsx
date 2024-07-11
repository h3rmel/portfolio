// #region Imports

import { Brain, BriefcaseBusiness, CodeXml, DraftingCompass } from 'lucide-react';

import { SECTION_SELECTOR_LANGUAGES } from '@/app/_languages/section-selector.lng';

import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';

// #endregion

export function SectionSelector(): JSX.Element {
  const { translate } = useLanguage();

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
          <Button variant="outline" className="flex gap-2">
            <DraftingCompass className="h-5 w-5" />
            {translate('projects', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2">
            <CodeXml className="h-5 w-5" />
            {translate('hard-skills', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2">
            <Brain className="h-5 w-5" />
            {translate('soft-skills', SECTION_SELECTOR_LANGUAGES)}
          </Button>
          <Button variant="outline" className="flex gap-2">
            <BriefcaseBusiness className="h-5 w-5" />
            {translate('contractable-services', SECTION_SELECTOR_LANGUAGES)}
          </Button>
        </section>
      </section>
    </section>
  );
}
