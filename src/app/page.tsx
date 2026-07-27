import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero';
import { SectionLazyFallback } from '@/components/shared/section-lazy-fallback';

const ExperienceSection = dynamic(
  () => import('@/components/sections/experience').then((mod) => ({ default: mod.ExperienceSection })),
  { loading: () => <SectionLazyFallback className='min-h-112' /> },
);

const ProjectsSection = dynamic(
  () => import('@/components/sections/projects').then((mod) => ({ default: mod.ProjectsSection })),
  { loading: () => <SectionLazyFallback className='min-h-144' /> },
);

const StackSection = dynamic(
  () => import('@/components/sections/stack').then((mod) => ({ default: mod.StackSection })),
  { loading: () => <SectionLazyFallback className='min-h-160' /> },
);

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <Footer />
    </>
  );
}
