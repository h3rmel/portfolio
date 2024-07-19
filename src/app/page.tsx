'use client';

// #region Imports

import { useRef } from 'react';

import { AboutMe, ContractableServices, HardSkills, Portfolio, SectionSelector, SoftSkills } from '@/sections';
import { Footer, Navbar } from '@/ui/components/layout';

// #endregion

/**
 * Renders the Home page.
 *
 * @page
 * @returns {JSX.Element} The Home page.
 */
export default function Page(): JSX.Element {
  // Refs
  const portfolioRef = useRef(null);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const contractableServicesRef = useRef(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-hidden">
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
      <Footer />
    </>
  );
}
