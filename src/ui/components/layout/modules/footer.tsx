'use client';

// #region Imports

import Link from 'next/link';

import { Github, Linkedin } from 'lucide-react';

import { useWindowDimensions } from '@/lib/screen-dimensions';
import { LanguageToggle } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import { Separator } from '@/ui/components/ui/separator';

// #endregion

/**
 * Renders a footer component.
 *
 * @component
 * @returns {JSX.Element} The footer component.
 */
export function Footer(): JSX.Element {
  const { windowWidth } = useWindowDimensions();

  return (
    <footer className="bg-dots w-full bg-fixed">
      <section className="container flex flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:gap-0 sm:p-16">
        <section className="flex flex-col items-center gap-2 sm:flex-col sm:items-start sm:gap-4">
          <hgroup className="text-center sm:text-left">
            <h3 className="text-xl">Isaac "Hermel" Reginato.</h3>
            <p className="text-sm text-muted-foreground">&copy; 2024</p>
          </hgroup>
          <ul className="inline-flex items-center gap-2">
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/h3rmel" target="_blank" aria-label="Github link">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/isaachermel/" target="_blank" aria-label="Linkedin link">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </li>
          </ul>
        </section>
        {windowWidth < 640 && <Separator />}
        <LanguageToggle />
      </section>
    </footer>
  );
}
