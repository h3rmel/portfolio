'use client';

// #region Imports

import { useRef } from 'react';

import {
  AboutMe,
  ContractableServices,
  HardSkills,
  Projects,
  SectionSelector,
  SoftSkills,
} from '@/ui/components/sections';

// #endregion

/**
 * Renders the Home page.
 *
 * @returns {JSX.Element} The Home page.
 */
export default function Home(): JSX.Element {
  const projectsRef = useRef(null);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const contractableServicesRef = useRef(null);

  return (
    <main className="min-h-screen w-full">
      <AboutMe />
      <SectionSelector
        projectsRef={projectsRef}
        hardSkillsRef={hardSkillsRef}
        softSkillsRef={softSkillsRef}
        contractableServicesRef={contractableServicesRef}
      />
      <Projects ref={projectsRef} />
      <HardSkills ref={hardSkillsRef} />
      <SoftSkills ref={softSkillsRef} />
      <ContractableServices ref={contractableServicesRef} />
    </main>
  );
}
