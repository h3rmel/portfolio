'use client';

import type { ReactElement } from 'react';

import { TypingAnimation } from '@/components/ui/typing-animation';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  index: string;
  /** Visible in the corner via TypingAnimation; duplicated for document outline when not hidden. */
  title: string;
  className?: string;
  /** Hero uses h1 for the name; omit the section-level h2 to avoid an extra heading. */
  hideSectionHeading?: boolean;
}

export function Section({ children, index, title, className, hideSectionHeading = false }: SectionProps): ReactElement {
  return (
    <section className='relative px-6 py-20 md:px-12 lg:px-24'>
      <SectionHeader index={index} title={title} className={className} />
      <SectionContent>
        {hideSectionHeading ? null : <h2 className='sr-only'>{title}</h2>}
        {children}
      </SectionContent>
    </section>
  );
}

interface SectionHeaderProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionHeader({ index, title, className }: SectionHeaderProps): ReactElement {
  const text = `[ ${index} / ${title} ]`;

  return (
    <div className={cn('absolute top-6 right-6', className)}>
      <div className='font-mono text-xs tracking-widest text-muted-foreground'>
        <TypingAnimation key={text} as='span' className='uppercase' showCursor cursorStyle='underscore' duration={55}>
          {text}
        </TypingAnimation>
      </div>
    </div>
  );
}

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContent({ children, className }: SectionContentProps): ReactElement {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
}
