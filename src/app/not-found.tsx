import Link from 'next/link';
import type { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

/**
 * 404 page with industrial / terminal tone aligned with the rest of the site.
 */
export default function NotFound(): ReactElement {
  return (
    <div className='relative z-10 flex min-h-[70vh] flex-col justify-center px-6 py-20 md:px-12 lg:px-24'>
      <div className='max-w-xl border border-border bg-background p-8 md:p-10'>
        <p className='mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase'>err.route — 404</p>
        <h1 className='mb-3 font-sans text-2xl font-bold tracking-tight text-foreground md:text-3xl'>Signal lost</h1>
        <p className='mb-8 font-mono text-sm leading-relaxed text-muted-foreground'>
          The requested path is not mapped in this deployment. Check the URL or return to the main interface.
        </p>
        <Link href='/' className='inline-flex'>
          <Button variant='outline' size='lg'>
            {`← Back to ${siteConfig.name.split(' ')[0] ?? 'home'}`}
          </Button>
        </Link>
      </div>
    </div>
  );
}
