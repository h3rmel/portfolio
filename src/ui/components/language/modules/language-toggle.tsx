'use client';

// #region Imports

import Image from 'next/image';

import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/ui/dropdown-menu';

// #endregion

/**
 * The available languages options.
 */
const LANGUAGES_OPTIONS: { [key: string]: { flag: string; name: string } } = {
  'pt-BR': {
    flag: '/languages/pt-BR.png',
    name: 'BR',
  },
  'en-US': {
    flag: '/languages/en-US.png',
    name: 'EN',
  },
};

/**
 * Renders a language toggle component.
 *
 * @component
 * @returns {JSX.Element} The language toggle component.
 */
export function LanguageToggle(): JSX.Element {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <Image
            src={LANGUAGES_OPTIONS[language].flag}
            alt={`${LANGUAGES_OPTIONS[language].name}'s flag`}
            width={24}
            height={20}
          />
          {LANGUAGES_OPTIONS[language].name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background/60 backdrop-blur-md">
        {/* Doesn't render the current language */}
        {Object.entries(LANGUAGES_OPTIONS).map(
          ([key, value]) =>
            value.name !== LANGUAGES_OPTIONS[language].name && (
              <DropdownMenuItem key={key} className="flex gap-2" onClick={() => setLanguage(key as Language)}>
                <Image src={value.flag} alt={`${value.name}'s flag`} width={24} height={20} /> {value.name}
              </DropdownMenuItem>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
