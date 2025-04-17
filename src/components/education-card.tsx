import Image from 'next/image';
import Link from 'next/link';

import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { BorderBeam } from './magicui/border-beam';

type EducationCardProps = {
  content: {
    title: string;
    subtitle: string;
    institutionLogo: string;
    institutionLink: string;
    timestamp: string;
  };
};

export function EducationCard({ content }: EducationCardProps) {
  return (
    <article
      className={cn(
        'relative',
        'group',
        'flex items-center justify-between',
        'h-[72px]',
        'border bg-card/30 backdrop-blur-xs rounded-2xl px-2 lg:px-4',
      )}
    >
      <Link
        href={content.institutionLink}
        target="_blank"
        className={cn('group', 'h-full', 'cursor-pointer z-10')}
      >
        <div className={cn('inline-flex justify-center items-center gap-2', 'h-full')}>
          <Image
            src={content.institutionLogo}
            alt={content.title}
            width={40}
            height={40}
            className={cn(
              'rounded-full p-1 border',
              'transition-all duration-300 group-hover:border-indigo-500',
            )}
          />
          <div className={cn('flex flex-col')}>
            <h3
              className={cn(
                'inline-flex items-center gap-1',
                'text-xs lg:text-sm font-semibold tracking-wide',
              )}
            >
              {content.title}
              <ChevronRightIcon
                className={cn(
                  'size-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-80',
                )}
              />
            </h3>
            <p
              className={cn(
                'text-[10px] lg:text-xs text-muted-foreground text-ellipsis overflow-hidden',
              )}
            >
              {content.subtitle}
            </p>
          </div>
        </div>
      </Link>
      <span
        className={cn(
          'absolute right-4 top-[15%] lg:top-auto text-[10px] lg:text-sm w-1/3 text-end text-muted-foreground',
        )}
      >
        {content.timestamp}
      </span>
      <div
        className={cn(
          'absolute inset-0',
          'group-hover:opacity-100 opacity-0',
          'rounded-2xl',
          'duration-300',
        )}
      >
        <BorderBeam
          size={64}
          delay={Math.random() * 8 + 1}
          colorFrom="#312c85"
          colorTo="#615fff"
        />
      </div>
    </article>
  );
}
