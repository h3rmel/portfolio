import { ReactElement } from 'react';

import { ExperienceSection } from '@/components/sections/experience';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { StackSection } from '@/components/sections/stack';

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
