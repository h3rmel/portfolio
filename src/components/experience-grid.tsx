import { Icons } from '@/components/icons';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

export function ExperienceGrid() {
  const { experienceStats } = DATA.sessions;

  function renderIcon(icon: keyof typeof Icons) {
    const IconComponent = Icons[icon];

    return <IconComponent className="size-6" />;
  }

  return (
    <section className={cn('grid grid-cols-1 sm:grid-cols-2 gap-2')}>
      {experienceStats.map((item, index) => (
        <Card
          key={index}
          className="relative border duration-300 transition-all shadow-sm dark:shadow-none group hover:border-transparent"
        >
          <ShineBorder
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            shineColor={['#10b981', '#059669', '#047857', '#065f46']}
          />
          <CardContent className="flex items-center gap-4 p-4">
            <div
              className={cn(
                'size-12',
                'text-foreground bg-accent',
                'rounded-full border',
                'flex items-center justify-center',
                'group-hover:scale-110 group-hover:bg-emerald-500/30 group-hover:text-emerald-500 transition-all duration-300',
                'group-hover:shadow-[0_0_16px_rgba(0,188,125,0.4)]',
              )}
            >
              {renderIcon(item.icon as keyof typeof Icons)}
            </div>
            <hgroup className="text-left flex-2/3">
              <h3 className="text-2xl font-bold">
                <NumberTicker value={Number(item.value)} className="text-2xl font-bold" />
                +
              </h3>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </hgroup>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
