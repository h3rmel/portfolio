import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

import { ShineBorder } from './magicui/shine-border';

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
        'border bg-card/30 backdrop-blur-xs rounded-md px-2 lg:px-4',
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
              'transition-all duration-300 group-hover:border-emerald-500',
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
              <Icons.ChevronRight
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
      <Badge
        variant="outline"
        className={cn(
          'absolute right-1 top-1 text-[10px] lg:text-sm text-muted-foreground',
        )}
      >
        {content.timestamp}
      </Badge>

      <div
        className={cn(
          'absolute inset-0',
          'group-hover:opacity-100 opacity-0',
          'rounded-md',
          'duration-300',
        )}
      >
        <ShineBorder
          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
          shineColor={['#10b981', '#059669', '#047857', '#065f46']}
        />
      </div>
    </article>
  );
}
