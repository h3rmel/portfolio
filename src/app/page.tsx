import {
  Contact,
  Education,
  Experience,
  Hero,
  Languages,
  Projects,
  Skills,
} from '@/components/sessions';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main
      className={cn(
        'w-full max-w-screen-sm overflow-x-hidden',
        'flex flex-col gap-12',
        'mx-auto px-4 lg:px-0 py-8 lg:py-12',
      )}
    >
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
    </main>
  );
}
