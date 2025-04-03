import Link from 'next/link';

import { Linkedin, Mail } from 'lucide-react';

import { cn } from '@/lib/utils';

import { DATA } from '@/constants/data';

import { buttonVariants } from '../ui/button';

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
      <div className={cn('flex gap-4 items-center justify-center')}>
        <Link
          href={contact.links.linkedin}
          className={buttonVariants({ variant: 'outline' })}
          target="_blank"
        >
          <Linkedin className={cn('size-4')} /> LinkedIn
        </Link>
        <Link
          href={contact.links.email}
          className={buttonVariants({ variant: 'outline' })}
          target="_blank"
        >
          <Mail className={cn('size-4')} /> Email
        </Link>
      </div>
    </section>
  );
}
