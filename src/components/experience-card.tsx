'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { BorderBeam } from './magicui/border-beam';
import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

type ExperienceCardProps = {
  content: {
    title: string;
    companyLogo: string;
    companyLink: string;
    role: string;
    timestamp: string;
    description: string;
  };
  index: string;
};

export function ExperienceCard({ content, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <AccordionItem
      value={index}
      className={cn('relative', 'border bg-card/30', 'px-2 lg:px-4 rounded-2xl', 'group')}
      onClick={handleClick}
    >
      <AccordionTrigger
        className={cn(
          'group',
          'relative',
          'flex items-center justify-between gap-2',
          'cursor-pointer',
        )}
      >
        <div className={cn('inline-flex justify-center items-center gap-2')}>
          <Link
            href={content.companyLink}
            className={cn('cursor-pointer')}
            target="_blank"
          >
            <Image
              src={content.companyLogo}
              alt={content.title}
              width={40}
              height={40}
              className={cn(
                'rounded-full p-1 border',
                'transition-all duration-300 hover:border-indigo-500',
              )}
            />
          </Link>
          <div className={cn('flex flex-col')}>
            <h3
              className={cn(
                'inline-flex items-center gap-1',
                'text-sm lg:text-base font-semibold tracking-wide',
              )}
            >
              {content.title}
              <ChevronRightIcon
                className={cn(
                  'size-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-80',
                  isExpanded ? 'rotate-90' : 'rotate-0',
                )}
              />
            </h3>
            <p className={cn('text-[10px] lg:text-xs text-muted-foreground')}>
              {content.role}
            </p>
          </div>
        </div>
        <span
          className={cn(
            'absolute right-1.5 lg:right-0 top-[25%] lg:top-auto text-[10px] lg:text-sm text-muted-foreground',
          )}
        >
          {content.timestamp}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <p className={cn('text-xs lg:text-sm font-light text-justify')}>
          {content.description}
        </p>
      </AccordionContent>
      <div
        className={cn('group-hover:opacity-100 opacity-0', 'rounded-2xl', 'duration-300')}
      >
        <BorderBeam
          size={64}
          delay={Math.random() * 8 + 1}
          colorFrom="#312c85"
          colorTo="#615fff"
        />
      </div>
    </AccordionItem>
  );
}
