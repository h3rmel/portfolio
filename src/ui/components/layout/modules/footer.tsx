'use client';

// #region Imports

import Image from 'next/image';
import Link from 'next/link';

import { Github, Linkedin } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { buttonVariants } from '@/ui/components/ui/button';
import { Separator } from '@/ui/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/ui/components/ui/toggle-group';

import { useWindowDimensions } from '@/lib/screen-dimensions';

// #endregion

/**
 * Renders a footer component.
 *
 * @component
 * @returns {JSX.Element} The footer component.
 */
export function Footer(): JSX.Element {
  const { language, setLanguage } = useLanguage();
  const { windowWidth } = useWindowDimensions();

  return (
    <footer className="w-full bg-dots bg-fixed">
      <section className="container flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:gap-0 sm:p-16">
        <div className="flex flex-col items-center gap-2 sm:flex-col sm:items-start sm:gap-4">
          <hgroup className="text-center sm:text-left">
            <h3 className="text-xl">Isaac "Hermel" Reginato.</h3>
            <p className="text-sm text-muted-foreground">&copy; 2024</p>
          </hgroup>
          <ul className="inline-flex items-center gap-2">
            <li className={`${buttonVariants({ variant: 'outline', size: 'icon' })}`}>
              <Link href="https://github.com/h3rmel" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </li>
            <li className={`${buttonVariants({ variant: 'outline', size: 'icon' })}`}>
              <Link href="https://www.linkedin.com/in/isaachermel/" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
        {windowWidth < 640 && <Separator />}
        <ToggleGroup type="single" defaultValue={language} onValueChange={(value) => setLanguage(value as Language)}>
          <ToggleGroupItem value="pt-BR">
            <Image src="/languages/pt-BR.png" alt={`Brasil's flag`} width={24} height={24} />
          </ToggleGroupItem>
          <ToggleGroupItem value="en-US">
            <Image src="/languages/en-US.png" alt={`United States's flag`} width={24} height={24} />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    </footer>
  );
}
