import type { Icon as TablerIcon } from '@tabler/icons-react';

import { icons } from '@tabler/icons-react';
import { memo } from 'react';

import type { IconProps } from '@/types';

/**
 * Dynamically renders a Tabler icon based on the icon name.
 * Memoized for performance since icons rarely change.
 *
 * @example
 * ```tsx
 * <Icon icon="IconBrandGithub" size={24} stroke={2} />
 * ```
 */
export const Icon = memo(function Icon({
  icon,
  size = 24,
  stroke = 2,
  color = 'currentColor',
  ...props
}: IconProps) {
  const TablerIcon = icons[icon] as TablerIcon;

  if (!TablerIcon) {
    console.warn(`Icon "${icon}" not found in @tabler/icons-react`);
    return null;
  }

  return <TablerIcon size={size} stroke={stroke} color={color} {...props} />;
});
