'use client';

// #region Imports

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/ui/components/ui/card';
import { ScrollIndicator } from '@/ui/components/visual/scroll-indicator';

import { ABOUT_ME_LANGUAGES } from './language';

// #endregion

/**
 * Render the AboutMe component
 *
 * @component
 * @returns {JSX.Element} The AboutMe component
 */
export function AboutMe(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden border-b border-dashed border-border">
      {/* Content */}
      {/* <Particles /> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-background/30 shadow-sm backdrop-blur-md"
      >
        <Card className="w-full bg-none backdrop-blur-none sm:w-[560px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <hgroup className="flex flex-col">
              <CardDescription>{translate('hi', ABOUT_ME_LANGUAGES)}</CardDescription>
              <h2 className="text-2xl font-medium leading-none tracking-tight">Isaac "Hermel" Reginato</h2>
            </hgroup>
            <Image
              src="/profile.webp"
              alt="Isaac Hermel's profile picture"
              width={72}
              height={72}
              className="rounded-full"
            />
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('description', ABOUT_ME_LANGUAGES)}</p>
          </CardContent>
          <CardFooter className="inline-flex w-full gap-4">
            <Button variant="secondary" className="inline-flex basis-1/2 gap-2" asChild>
              <Link
                href="https://drive.google.com/file/d/12W2b0A431CJ1_yP3oAPTRmvVreB3wt57/view?usp=sharing"
                target="_blank"
              >
                Curriculo <Image src="/languages/pt-BR.png" alt="Brasil's flag" width={24} height={20} />
              </Link>
            </Button>
            <Button variant="secondary" className="inline-flex basis-1/2 gap-2" asChild>
              <Link
                href="https://drive.google.com/file/d/1Uay3sXrBHcm872eGvcyhvnn-UtFsPi0m/view?usp=sharing"
                target="_blank"
              >
                Curriculum <Image src="/languages/en-US.png" alt="USA's flag" width={24} height={20} />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <ScrollIndicator className="absolute bottom-4 left-[50%] translate-x-[-50%]" />
    </section>
  );
}
