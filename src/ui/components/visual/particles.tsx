'use client';

import { motion } from 'framer-motion';

import { useWindowDimensions } from '@/lib/screen-dimensions';
import { cn } from '@/lib/utils';

/**
 * Render the Particles component
 *
 * The particles component is used as a animated background for the website.
 *
 * @component
 * @returns The Particles component
 */
export function Particles() {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      {Array.from({ length: windowWidth > 640 ? 64 : 32 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0, scale: 0.95 }}
          animate={{ x: 0, translateY: -1000, scale: 2 }}
          transition={{ duration: 125 / (Math.random() * 30 + 15), repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute bottom-4 h-2 w-2 rounded-full bg-emerald-500 opacity-50 shadow-lg shadow-emerald-600',
            'before:absolute before:left-[50%] before:top-[50%] before:h-4 before:w-4 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-emerald-400 before:opacity-50 before:blur-sm',
          )}
          style={{
            left: `${Math.random() * 98 + 2}%`,
          }}
        />
      ))}
    </>
  );
}
