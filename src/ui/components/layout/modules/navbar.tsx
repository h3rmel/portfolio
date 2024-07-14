'use client';

// #region Imports

import Link from 'next/link';

import { LanguageToggle } from '@/ui/components/language';

// #endregion

/**
 * Renders a navbar component.
 *
 * @component
 * @returns {JSX.Element} The navbar component.
 */
export function Navbar(): JSX.Element {
  return (
    <header className="fixed z-50 flex w-full items-center justify-center sm:top-4">
      <nav className="relative flex h-20 w-full max-w-3xl items-center border-b border-border bg-background/10 px-4 backdrop-blur-md sm:h-16 sm:rounded-md sm:border">
        {/* Logo */}
        <Link href="/">
          <h1 className="w-fit text-2xl font-semibold tracking-widest duration-150 hover:text-emerald-500">Hermel</h1>
        </Link>
        {/* Links */}
        <section className="flex basis-1/2 items-center justify-center"></section>
        {/* Options */}
        {/* TODO: Adicionar drawer */}
        <section className="flex basis-1/2 items-center justify-end gap-4">
          <LanguageToggle />
          {/* <ThemeToggle /> */}
        </section>
      </nav>
    </header>
  );
}
