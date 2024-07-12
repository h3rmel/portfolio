// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { DraftingCompass } from 'lucide-react';

import { PROJECTS_LANGUAGES } from '@/app/_languages/projects.lng';

import { useLanguage } from '@/ui/components/language';

// #endregion

interface ProjectsProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Projects Section
 *
 * @see ProjectsProps for the props interface.
 * @returns The Projects Section with his ref being forwarded.
 */
export const Projects = forwardRef<HTMLElement, ProjectsProps>(function RenderProjects(props, ref): JSX.Element {
  const { translate } = useLanguage();

  return (
    <section {...props} ref={ref}>
      <section className="container relative border-x border-dashed border-border p-16">
        <DraftingCompass className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
        {/* Header */}
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('projects', PROJECTS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('projects-list', PROJECTS_LANGUAGES)}</p>
        </hgroup>
      </section>
    </section>
  );
});
