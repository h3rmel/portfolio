'use client';

// #region Imports

import { useRef } from 'react';

import { AboutMe, ContractableServices, HardSkills, Projects, SectionSelector, SoftSkills } from './_components';

// #endregion

export default function Home() {
  const projectsRef = useRef(null);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const contractableServicesRef = useRef(null);

  console.log({
    projectsRef,
    hardSkillsRef,
    softSkillsRef,
    contractableServicesRef,
  });

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
