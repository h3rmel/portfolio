'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

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
      className={cn('border', 'px-2 lg:px-4 rounded-2xl')}
      onClick={handleClick}
    >
      <AccordionTrigger
        className={cn('group', 'flex items-center justify-between gap-2', 'cursor-pointer')}
      >
        <div className={cn('inline-flex justify-center items-center gap-2')}>
          <Link href={content.companyLink} target="_blank">
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
          <h3 className={cn('text-base lg:text-lg font-semibold tracking-wide')}>{content.title}</h3>
          <ChevronRightIcon
            className={cn(
              'size-4 -translate-x-1 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-80',
              isExpanded ? 'rotate-90' : 'rotate-0',
            )}
          />
        </div>
        <span className={cn('text-xs lg:text-sm text-muted-foreground')}>{content.timestamp}</span>
      </AccordionTrigger>
      <AccordionContent>
        <p className={cn('text-sm font-light text-justify')}>
          {content.description}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
