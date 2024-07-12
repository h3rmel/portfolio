// #region Imports

import Image from 'next/image';

import { ABOUT_ME_LANGUAGES } from '@/app/_languages/about-me.lng';

import { useLanguage } from '@/ui/components/language';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

// #endregion

export function AboutMe(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <section className="relative h-[100vh] w-full bg-dots">
      <div className="background-animate absolute left-[50%] top-[50%] h-[320px] w-[520px] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-tr from-emerald-500 to-green-500 blur-md" />
      <Card className="absolute left-[50%] top-[50%] w-[560px] translate-x-[-50%] translate-y-[-50%] rounded-none border-dashed">
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
        <CardContent className="border-t border-dashed border-border">
          <p className="text-justify">{translate('description', ABOUT_ME_LANGUAGES)}</p>
        </CardContent>
      </Card>
    </section>
  );
}
