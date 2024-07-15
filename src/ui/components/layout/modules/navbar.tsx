'use client';

// #region Imports

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { LanguageToggle } from '@/ui/components/language';
import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/ui/components/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '@/ui/components/ui/toggle-group';

import { NAVBAR_LANGUAGES } from '@/i18n/navbar.lng';
import { useWindowDimensions } from '@/lib/screen-dimensions';

// #endregion

/**
 * Renders a navbar component.
 *
 * @component
 * @returns {JSX.Element} The navbar component.
 */
export function Navbar(): JSX.Element {
  const { language, setLanguage, translate } = useLanguage();
  const { windowWidth } = useWindowDimensions();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'backInOut' }}
      viewport={{ once: true }}
      className="fixed z-50 flex w-full items-center justify-center sm:top-4"
    >
      <nav
        id="navbar"
        className="relative flex h-20 w-full max-w-3xl items-center justify-between border-b border-border bg-background/10 px-4 backdrop-blur-md sm:h-16 sm:justify-start sm:rounded-md sm:border"
      >
        {/* Logo */}
        <Link href="/">
          <h1 className="w-fit text-2xl font-semibold tracking-widest duration-150 hover:text-emerald-500">Hermel</h1>
        </Link>
        {windowWidth > 640 ? (
          // Desktop Version
          <>
            {/* Links */}
            <section className="flex basis-1/2 items-center justify-center"></section>
            {/* Options */}
            <section className="flex basis-1/2 items-center justify-end gap-4">
              <LanguageToggle />
            </section>
          </>
        ) : (
          // Mobile Version
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-3/4 flex-col justify-between">
              <SheetTitle>{translate('options', NAVBAR_LANGUAGES)}</SheetTitle>
              {/* Language */}
              <ToggleGroup
                type="single"
                defaultValue={language}
                onValueChange={(value) => setLanguage(value as Language)}
                className="w-fit"
              >
                <ToggleGroupItem value="pt-BR">
                  <Image src="/languages/pt-BR.png" alt={`Brasil's flag`} width={24} height={24} />
                </ToggleGroupItem>
                <ToggleGroupItem value="en-US">
                  <Image src="/languages/en-US.png" alt={`United States's flag`} width={24} height={24} />
                </ToggleGroupItem>
              </ToggleGroup>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </motion.header>
  );
}
