'use client';

// #region Imports

import Image from 'next/image';

import { ABOUT_ME_LANGUAGES } from '@/app/_languages/about-me.lng';
import { useLanguage } from '@/ui/components/language';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

// #endregion

export function AboutMe(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <section className="relative flex h-[100vh] items-center justify-center">
      <Card className="w-[560px] rounded-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <CardDescription>{translate('hi', ABOUT_ME_LANGUAGES)}</CardDescription>
            <CardTitle>Isaac "Hermel" Reginato</CardTitle>
          </div>
          <Image
            src="/profile.webp"
            alt="Isaac Hermel's profile picture"
            width={72}
            height={72}
            className="rounded-full"
          />
        </CardHeader>
        <CardContent className="border-t border-border">
          <p className="text-justify">{translate('description', ABOUT_ME_LANGUAGES)}</p>
        </CardContent>
      </Card>
    </section>
  );
}
