'use client';

// #region Imports

import { Brain } from 'lucide-react';

import { SOFT_SKILLS_LANGUAGES } from '@/app/_languages/soft-skills.lng';

import { useLanguage } from '@/ui/components/language';

// #endregion

export function SoftSkills(): JSX.Element {
  const { translate } = useLanguage();
  return (
    <section>
      <section className="container relative border-x border-dashed border-border p-16">
        <Brain className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('soft-skills', SOFT_SKILLS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('soft-list', SOFT_SKILLS_LANGUAGES)}</p>
        </hgroup>
      </section>
    </section>
  );
}
