'use client';

// #region Imports

import { useState } from 'react';

import Link from 'next/link';

import { Menu } from 'lucide-react';

import { LanguageToggle } from '@/ui/components/language';
import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import { Separator } from '@/ui/components/ui/separator';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/ui/components/ui/sheet';

import { NAVBAR_LANGUAGES } from './navbar.lng';

// #endregion

/**
 * Renders a navbar component.
 *
 * @component
 * @returns {JSX.Element} The navbar component.
 */
export function Navbar(): JSX.Element {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const { translate } = useLanguage();

  /**
   * Renders the scroll to the desired section.
   *
   * @param id - The id of the desired section.
   */
  function handleScrollToId(id: string) {
    const element = document.getElementById(id);

    if (element) element.scrollIntoView();
  }

  return (
    <header className="fixed z-[999] flex w-full items-center justify-center sm:top-4">
      <nav
        id="navbar"
        className="relative flex h-20 w-full max-w-3xl items-center justify-between border-b border-border bg-background/30 px-4 backdrop-blur-md sm:h-16 sm:rounded-md sm:border"
      >
        {/* Logo */}
        <Link href="/">
          <h1 className="w-fit text-2xl font-semibold tracking-widest duration-150 hover:text-emerald-500">Hermel</h1>
        </Link>
        <section className="hidden basis-1/2 items-center justify-center sm:flex">
          <Button variant="link" onClick={() => handleScrollToId('contact-me')}>
            {translate('contact', NAVBAR_LANGUAGES)}
          </Button>
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
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      handleScrollToId('contact-me');
                      setSheetOpen(false);
                    }}
                  >
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
