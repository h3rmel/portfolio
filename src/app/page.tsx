'use client';

// #region Imports

import { useRef } from 'react';

import {
  AboutMe,
  ContractableServices,
  HardSkills,
  Portfolio,
  SectionSelector,
  SoftSkills,
} from '@/ui/components/sections';

// #endregion

/**
 * Renders the Home page.
 *
 * @returns {JSX.Element} The Home page.
 */
export default function Page(): JSX.Element {
  const portfolioRef = useRef(null);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const contractableServicesRef = useRef(null);

  return (
    <main className="min-h-screen w-full">
      <AboutMe />
      <SectionSelector
        portfolioRef={portfolioRef}
        hardSkillsRef={hardSkillsRef}
        softSkillsRef={softSkillsRef}
        contractableServicesRef={contractableServicesRef}
      />
      <Portfolio ref={portfolioRef} />
      <HardSkills ref={hardSkillsRef} />
      <SoftSkills ref={softSkillsRef} />
      <ContractableServices ref={contractableServicesRef} />
    </main>
  );
}
