import { Header } from '@/components/layout/header';

import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main
        className={cn('relative', 'w-full max-w-screen-lg mx-auto', 'px-4 py-8 lg:py-12')}
      >
        {children}
      </main>
    </>
  );
}
