import Markdown from 'react-markdown';

import { cn } from '@/lib/utils';

import { DATA } from '@/constants/data';

import { BorderBeam } from '../magicui/border-beam';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Hero() {
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
          <h1 className={cn('text-3xl lg:text-4xl font-bold')}>{hero.title}</h1>
          <p className={cn('text-base text-muted-foreground max-w-[52ch]')}>
            {hero.subtitle}
          </p>
        </hgroup>
        <Avatar className={cn('relative', 'size-32', 'border p-1')}>
          <AvatarImage src={DATA.avatarUrl} className={cn('rounded-full')} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
          <BorderBeam duration={4} colorFrom="#312c85" colorTo="#615fff" />
          <BorderBeam reverse duration={5} colorFrom="#312c85" colorTo="#615fff" />
          <BorderBeam duration={4.5} colorFrom="#312c85" colorTo="#615fff" />
          <BorderBeam reverse duration={3} colorFrom="#312c85" colorTo="#615fff" />
        </Avatar>
      </div>
      <div id="hero-content" className={cn('space-y-1')}>
        <h2 className={cn('text-xl font-bold')}>{hero.about.title}</h2>
        <span
          className={cn(
            'text-sm text-muted-foreground',
            'prose max-w-full text-pretty text-sm lg:text-base text-muted-foreground dark:prose-invert',
            'text-justify',
            'hover:prose-a:text-emerald-500 prose-a:transition-all prose-a:duration-300 prose-a:ease-out',
          )}
        >
          <Markdown>{hero.about.content}</Markdown>
        </span>
      </div>
    </section>
  );
}
