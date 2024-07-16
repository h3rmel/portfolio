'use client';

import { useWindowDimensions } from '@/lib/screen-dimensions';
import { cn } from '@/lib/utils';

/**
 * Renders a cursor component.
 *
 * @component
 * @returns {JSX.Element} The cursor component.
 */
export function Cursor(): JSX.Element {
  const { windowWidth } = useWindowDimensions();
  return windowWidth > 640 ? (
    <div
      id="cursor-dot"
      className={cn(
        'pointer-events-none fixed z-[999] hidden h-4 w-4 rounded-full bg-emerald-500 opacity-80 sm:block',
        'before:absolute before:h-8 before:w-8 before:translate-x-[-24%] before:translate-y-[-24%] before:rounded-full before:bg-emerald-500 before:opacity-20',
      )}
    ></div>
  ) : (
    <></>
  );
}
