// #region Imports

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { useLanguage } from '@/ui/components/language';
import { Button } from '@/ui/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { ABOUT_ME_LANGUAGES } from '@/i18n/about-me.lng';

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
    <section className="relative flex h-[100vh] w-full items-center justify-center border-b border-dashed border-border">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Card className="w-full sm:w-[560px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <hgroup className="flex flex-col">
              <CardDescription>{translate('hi', ABOUT_ME_LANGUAGES)}</CardDescription>
              <CardTitle className="text-2xl">Isaac "Hermel" Reginato</CardTitle>
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
                href="https://docs.google.com/document/d/1o8XjcSInC8zKHd211-MRR6ObYG9IjmrkIfag9BTY3GA/edit?usp=sharing"
                target="_blank"
              >
                Curriculo <Image src="/languages/pt-BR.png" alt="Brasil's flag" width={24} height={20} />
              </Link>
            </Button>
            <Button variant="secondary" className="inline-flex basis-1/2 gap-2" asChild>
              <Link
                href="https://docs.google.com/document/d/1I-ZKI6TaovKdojuvWrd-zEa6LJbMCDUqULz5MuPFhgQ/edit?usp=sharing"
                target="_blank"
              >
                Curriculum <Image src="/languages/en-US.png" alt="USA's flag" width={24} height={20} />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}
