'use client';

import Link from 'next/link';

import { LanguageToggle } from '@/ui/components/language';

export function Navbar(): JSX.Element {
  return (
    <header className="fixed top-4 z-50 flex w-full items-center justify-center">
      <nav className="relative flex h-16 w-full max-w-3xl items-center rounded-md border border-border bg-background/60 px-4 backdrop-blur-md">
        {/* Logo */}
        <Link href="/">
          <h1 className="w-fit text-2xl font-semibold tracking-widest duration-150 hover:text-emerald-500">Hermel</h1>
        </Link>
        {/* Links */}
        <section className="flex basis-1/2 items-center justify-center"></section>
        {/* Options */}
        <section className="flex basis-1/2 items-center justify-end gap-4">
          <LanguageToggle />
          {/* <ThemeToggle /> */}
        </section>
      </nav>
    </header>
  );
}
