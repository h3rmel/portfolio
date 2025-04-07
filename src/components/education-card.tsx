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
        'h-14 lg:h-[72px]',
        'border rounded-2xl px-2 lg:px-4',
      )}
    >
      <Link href={content.institutionLink} target="_blank" className={cn('group', 'h-full', 'cursor-pointer')}>
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
            <h3 className={cn('text-xs lg:text-sm font-semibold tracking-wide')}>
              {content.title}
            </h3>
            <p className={cn('text-[10px] lg:text-xs text-muted-foreground max-w-[34ch] lg:max-w-full line-clamp-1 text-ellipsis overflow-hidden')}>{content.subtitle}</p>
          </div>
          <ChevronRightIcon
            className={cn(
              'size-4 -translate-x-1 translate-y-2.5 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-80',
            )}
          />
        </div>
      </Link>
      <span className={cn('text-[10px] lg:text-sm text-muted-foreground')}>{content.timestamp}</span>
      <div
        className={cn('absolute inset-0', 'group-hover:opacity-100 opacity-0', 'rounded-2xl', 'duration-300')}
      >
        <BorderBeam size={128} colorFrom='#312c85' colorTo='#615fff' />
      </div>
    </article>
  );
}
