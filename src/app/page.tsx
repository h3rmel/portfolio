'use client';

// #region Imports

import { useEffect, useRef } from 'react';

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
 * @page
 * @returns {JSX.Element} The Home page.
 */
export default function Page(): JSX.Element {
  // Refs
  const portfolioRef = useRef(null);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const contractableServicesRef = useRef(null);

  useEffect(() => {
    const cursor = document.getElementById('cursor-dot')!;

    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;

      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
      cursor.style.display = 'block';
    });

    document.addEventListener('mouseout', () => {
      cursor.style.display = 'none';
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseout', () => {});
    };
  }, []);

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
