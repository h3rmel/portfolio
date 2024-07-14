'use client';

// #region Imports

import Image from 'next/image';

import { useLanguage } from '@/ui/components/language';
import { ToggleGroup, ToggleGroupItem } from '@/ui/components/ui/toggle-group';

// #endregion

/**
 * Renders a footer component.
 *
 * @component
 * @returns {JSX.Element} The footer component.
 */
export function Footer(): JSX.Element {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="w-full">
      <section className="container flex items-center justify-between p-4">
        <hgroup>
          <h3 className="text-xl">Isaac "Hermel" Reginato.</h3>
          <p className="text-sm text-muted-foreground">&copy; 2024</p>
        </hgroup>
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
