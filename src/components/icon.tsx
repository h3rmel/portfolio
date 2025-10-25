import { icons } from '@tabler/icons-react';
import type { Icon as TablerIcon } from '@tabler/icons-react';

/**
 * Props for the Icon component
 */
interface IconProps
  extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke' | 'size' | 'color'> {
  /** The name of the Tabler icon to render */
  icon: keyof typeof icons;
  /** Icon size (width and height) */
  size?: string | number;
  /** Stroke width */
  stroke?: string | number;
  /** Icon color (defaults to 'currentColor') */
  color?: string;
}

/**
 * Dynamically renders a Tabler icon based on the icon name.
 *
 * @example
 * ```tsx
 * <Icon icon="IconBrandGithub" size={24} stroke={2} />
 * ```
 */
export function Icon({
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
}
