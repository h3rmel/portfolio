'use client';

// #region Imports

import Image from 'next/image';

import { HARD_SKILLS_LANGUAGES } from '@/app/_languages/hard-skills.lng';
import { HARD_SKILLS_DATA } from '@/data/hard-skills';
import { useLanguage } from '@/ui/components/language';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/components/ui/tooltip';

// #endregion

// TODO: Novos icones para: Tailwind, SASS, Bash e Docker (e dar um jeito de tornar o Next e o Flaks visiveis)

export function HardSkills(): JSX.Element {
  const { translate } = useLanguage();
  return (
    <section className="border-y border-dashed border-border">
      <section className="container flex flex-col gap-8 border-x border-dashed border-border p-16">
        <hgroup className="flex flex-col gap-1">
          <h2 className="text-2xl">{translate('hard-skills', HARD_SKILLS_LANGUAGES)}</h2>
          <p className="text-muted-foreground">{translate('tech-list', HARD_SKILLS_LANGUAGES)}</p>
        </hgroup>
        {/* Tech Grid */}
        <TooltipProvider>
          <section className="grid grid-cols-5 gap-16">
            {HARD_SKILLS_DATA.map((skill) => (
              <Tooltip>
                <TooltipTrigger className="relative h-48 w-48">
                  {skill.css && (
                    <div
                      className={`absolute left-[50%] top-[50%] h-52 w-52 translate-x-[-50%] translate-y-[-50%] ${skill.css} hover:blur-xl`}
                    />
                  )}
                  <article
                    key={skill.name}
                    className="absolute left-[50%] top-[50%] h-48 w-48 translate-x-[-50%] translate-y-[-50%] border border-dashed border-border bg-background duration-200 hover:border-gray-700"
                  >
                    <Image
                      src={skill.image}
                      alt={`${skill.name}'s icon`}
                      width={128}
                      height={128}
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                  </article>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </section>
        </TooltipProvider>
      </section>
    </section>
  );
}
