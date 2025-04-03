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
        'w-full max-w-screen-sm',
        'flex flex-col gap-12',
        'mx-auto px-3 lg:px-0 lg:pt-32 py-8 lg:pb-12',
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
