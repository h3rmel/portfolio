import Link from 'next/link';

import { Icons } from '@/components/icons';
import { BorderBeam } from '@/components/magicui/border-beam';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

export function Contact() {
  const { contact } = DATA.sessions;

  return (
    <section id="contact-session" className={cn('space-y-8')}>
      <hgroup className={cn('space-y-2')}>
        <h2 className={cn('text-2xl font-bold text-center')}>{contact.title}</h2>
        <p
          className={cn(
            'text-base text-muted-foreground text-center',
            'max-w-[60ch] mx-auto',
          )}
        >
          {contact.description}
        </p>
      </hgroup>
      <div
        className={cn(
          'max-w-60 lg:max-w-full mx-auto lg:mx-0',
          'flex flex-col lg:flex-row gap-4 lg:gap-4 items-center justify-center',
        )}
      >
        <Link
          href={contact.links.linkedin}
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'relative')}
          target="_blank"
        >
          <Icons.Linkedin className={cn('size-4')} /> LinkedIn
          <BorderBeam size={32} colorFrom="#0a66c2" colorTo="#074b8f" />
        </Link>
        <Link
          href={contact.links.email}
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'relative')}
          target="_blank"
        >
          <Icons.Mail className={cn('size-4')} /> Email
          <BorderBeam size={32} colorFrom="#ce3c30" colorTo="#ad201d" />
        </Link>
        <Link
          href={contact.links.twitter}
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'relative')}
          target="_blank"
        >
          <Icons.Twitter className={cn('size-4 fill-current')} /> Twitter
          <BorderBeam size={32} colorFrom="##71717a" colorTo="#fafafa" />
        </Link>
      </div>
    </section>
  );
}
