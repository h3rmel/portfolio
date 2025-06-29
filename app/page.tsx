import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Spotlight } from '@/components/acertinityui/spotlight';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { renderIcon } from '@/components/ui/icons';

import { cn } from '@/lib/utils';

import { cvLinks, navigationLinks, socialLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export default function Page() {
  const links = navigationLinks.filter((link) => link.href !== '/');

  return (
    <main
      className={cn(
        'relative min-h-dvh w-full flex items-center justify-center overflow-hidden',
      )}
    >
      <Spotlight className="md:-top-60 -top-32 left-0 md:left-60" fill="white" />
      <section
        className={cn('z-10', 'lg:max-w-md', 'w-full flex flex-col space-y-10 p-4')}
      >
        {/* First Impression */}
        <div className={cn('z-10', 'space-y-4 flex flex-col items-center')}>
          <BlurFade direction="up" delay={0.1}>
            <Avatar className="size-12 lg:size-16">
              <AvatarImage src="https://github.com/h3rmel.png" alt={siteConfig.name} />
              <AvatarFallback>IH</AvatarFallback>
            </Avatar>
          </BlurFade>
          <h1
            className={cn(
              'text-center lg:text-justify',
              'font-medium text-base text-muted-foreground',
              'space-y-2',
            )}
          >
            <BlurFade direction="up" delay={0.2}>
              <span className={cn('block', 'italic font-bold text-foreground')}>
                Hi — I&apos;m Isaac Hermel Reginato, a Software Engineer based in Brazil.
              </span>{' '}
            </BlurFade>
            <BlurFade direction="up" delay={0.3}>
              <span className={cn('block')}>
                Front-end specialist and open-source contributor. Currently creating and
                learning new things. You can find more about me below.
              </span>
            </BlurFade>
          </h1>
        </div>
        {/* Navigation */}
        <ul className={cn('flex flex-col space-y-2', 'group')}>
          {links.map((linkItem, index) => (
            <li key={linkItem.label}>
              <BlurFade direction="up" delay={index * 0.1 + 0.4}>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'w-full justify-between text-base group',
                    'group-hover:hover:opacity-100 group-hover:opacity-60',
                    'hover:[&_svg]:translate-x-1 [&_svg]:transition-transform',
                  )}
                  href={linkItem.href}
                >
                  {linkItem.label}
                  <ChevronRight className={cn('size-4')} />
                </Link>
              </BlurFade>
            </li>
          ))}
        </ul>
        {/* CV */}
        <div className={cn('flex flex-col space-y-2')}>
          <h2 className={cn('text-center text-base font-medium')}>See my CV on...</h2>
          <div className={cn('flex flex-col items-center space-y-2')}>
            {cvLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'max-w-1/2 lg:max-w-1/3 w-full')}
              >
                {renderIcon(link.icon)}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Social Links */}
        <BlurFade
          direction="up"
          delay={0.5}
          className={cn(
            'w-full flex flex-col items-center space-y-4',
            'lg:flex-row lg:space-y-0 lg:justify-between',
          )}
        >
          <p className={cn('text-sm text-muted-foreground')}>
            Copyright © {new Date().getFullYear()}
          </p>
          <ul className={cn('flex space-x-2', 'text-sm text-muted-foreground')}>
            {socialLinks
              .filter((link) => link.label !== 'LinkedIn')
              .map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'underline underline-offset-1',
                      'transition-all hover:underline-offset-4',
                    )}
                  >
                    {link.label}
                  </Link>
                  {index !== socialLinks.length - 2 && <span className="ml-2">::</span>}
                </li>
              ))}
          </ul>
        </BlurFade>
      </section>
    </main>
  );
}
