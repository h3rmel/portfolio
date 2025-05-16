import Markdown from 'react-markdown';

import { BorderBeam } from '@/components/magicui/border-beam';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

export function Hero() {
  const { name } = DATA;
  const { hero } = DATA.sessions;

  return (
    <section id="hero-session" className={cn('flex flex-col gap-12')}>
      <div
        id="hero-header"
        className={cn(
          'flex lg:flex-row flex-col-reverse gap-4 lg:gap-0 items-center justify-between',
        )}
      >
        <hgroup className={cn('space-y-1 lg:text-left text-center')}>
          <h1 className={cn('text-3xl lg:text-4xl font-bold')}>
            {hero.title} <span className="block">{name}</span>
          </h1>
          <p className={cn('text-base text-muted-foreground max-w-[52ch]')}>
            {hero.subtitle}
          </p>
        </hgroup>
        <Avatar className={cn('relative', 'size-32', 'border p-1')}>
          <AvatarImage
            src={DATA.avatarUrl}
            alt={DATA.name}
            className={cn('rounded-full')}
            aria-label="Avatar image"
          />
          <AvatarFallback aria-label="Avatar fallback">{DATA.initials}</AvatarFallback>
          <BorderBeam
            initialOffset={0}
            duration={4}
            colorFrom="#f43f5e"
            colorTo="#10b981"
          />
          <BorderBeam
            initialOffset={25}
            duration={4}
            colorFrom="#f43f5e"
            colorTo="#10b981"
          />
          <BorderBeam
            initialOffset={50}
            duration={4}
            colorFrom="#f43f5e"
            colorTo="#10b981"
          />
          <BorderBeam
            initialOffset={75}
            duration={4}
            colorFrom="#f43f5e"
            colorTo="#10b981"
          />
        </Avatar>
      </div>
      <div id="hero-content" className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-bold')}>{hero.about.title}</h2>
        <span
          className={cn(
            'text-sm text-muted-foreground text-justify',
            'prose max-w-full text-pretty dark:prose-invert',
            'prose-a:hover:text-emerald-500 prose-a:transition-all prose-a:duration-300 prose-a:ease-out',
          )}
        >
          <Markdown>{hero.about.content}</Markdown>
        </span>
      </div>
    </section>
  );
}
