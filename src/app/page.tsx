'use client';

// #region Imports

import { AboutMe, ContractableServices, HardSkills, Projects, SectionSelector, SoftSkills } from './_components';

// #endregion

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <AboutMe />
      <SectionSelector />
      <Projects />
      <HardSkills />
      <SoftSkills />
      <ContractableServices />
    </main>
  );
}
