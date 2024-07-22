'use client';

// #region Imports

import { RefObject, useState } from 'react';

import { Menu } from 'lucide-react';

import { LanguageToggle } from '@/ui/components/language';
import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/ui/dropdown-menu';
import { Separator } from '@/ui/components/ui/separator';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/ui/components/ui/sheet';
import { handleScroll } from '@/utils/scrolls';

import { NAVBAR_LANGUAGES } from './navbar.lng';

// #endregion

/**
 * @param portfolioRef - The reference to the projects section.
 * @param hardSkillsRef - The reference to the hard skills section.
 * @param softSkillsRef - The reference to the soft skills section.
 * @param contractableServicesRef - The reference to the contractable services section.
 */
interface NavbarProps {
  refs: {
    portfolioRef: RefObject<HTMLHeadingElement>;
    hardSkillsRef: RefObject<HTMLHeadingElement>;
    softSkillsRef: RefObject<HTMLHeadingElement>;
    contractableServicesRef: RefObject<HTMLHeadingElement>;
  };
}

/**
 * Renders a navbar component.
 *
 * The navbar is responsible for navigating the user to the desired section and changing the language.
 *
 * @component
 * @returns {JSX.Element} The navbar component.
 */
export function Navbar({ refs }: NavbarProps): JSX.Element {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const { translate } = useLanguage();

  return (
    <header className="fixed z-[999] flex w-full items-center justify-center sm:top-4">
      <nav className="relative flex h-20 w-full max-w-3xl items-center justify-between border-b border-border bg-gradient-to-br from-background/30 to-neutral-800/30 px-4 backdrop-blur-md sm:h-16 sm:rounded-md sm:border">
        {/* Logo */}
        <Button variant="link" className="p-0 hover:scale-100 hover:no-underline" onClick={() => scrollTo({ top: 0 })}>
          <h1 className="w-fit text-2xl font-semibold tracking-widest duration-150 hover:text-emerald-500">Hermel</h1>
        </Button>
        <section className="hidden basis-1/2 items-center justify-center sm:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Links
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[999]">
              <DropdownMenuItem onClick={() => handleScroll('ref', refs.portfolioRef)}>
                {translate('portfolio', NAVBAR_LANGUAGES)}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScroll('ref', refs.hardSkillsRef)}>
                {translate('hard-skills', NAVBAR_LANGUAGES)}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScroll('ref', refs.softSkillsRef)}>
                {translate('soft-skills', NAVBAR_LANGUAGES)}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScroll('ref', refs.contractableServicesRef)}>
                {translate('contractable-services', NAVBAR_LANGUAGES)}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScroll('id', 'contact-me')}>
                {translate('contact', NAVBAR_LANGUAGES)}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
        <section className="hidden sm:block">
          <LanguageToggle />
        </section>
        <section className="block sm:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => setSheetOpen(true)} aria-label="Navbar Options">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="z-[999] flex w-3/4 flex-col gap-4">
              <SheetTitle>{translate('options', NAVBAR_LANGUAGES)}</SheetTitle>
              <ul className="flex flex-col gap-2">
                <li>
                  <Button variant="secondary" className="w-full" onClick={() => handleScroll('ref', refs.portfolioRef)}>
                    {translate('portfolio', NAVBAR_LANGUAGES)}
                  </Button>
                </li>
                <li>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleScroll('ref', refs.hardSkillsRef)}
                  >
                    {translate('hard-skills', NAVBAR_LANGUAGES)}
                  </Button>
                </li>
                <li>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleScroll('ref', refs.softSkillsRef)}
                  >
                    {translate('soft-skills', NAVBAR_LANGUAGES)}
                  </Button>
                </li>
                <li>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleScroll('ref', refs.contractableServicesRef)}
                  >
                    {translate('contractable-services', NAVBAR_LANGUAGES)}
                  </Button>
                </li>
                <li>
                  <Button variant="secondary" className="w-full" onClick={() => handleScroll('id', 'contact-me')}>
                    {translate('contact', NAVBAR_LANGUAGES)}
                  </Button>
                </li>
              </ul>
              <Separator />
              <LanguageToggle />
            </SheetContent>
          </Sheet>
        </section>
      </nav>
    </header>
  );
}
