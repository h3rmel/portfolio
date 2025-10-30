import type { HTMLAttributeAnchorTarget } from 'react';
import type { icons } from '@tabler/icons-react';

/**
 * Supported locales in the application
 */
export type Locale = 'en' | 'pt';

/**
 * Professional experience entry
 */
export interface Experience {
  employer: string;
  position: string;
  year: string;
}

/**
 * Education/curriculum entry
 */
export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

/**
 * Navigation link configuration
 */
export interface NavigationLink {
  href: string;
  label: string;
}

/**
 * Avatar component props
 */
export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
}

/**
 * Icon component props
 */
export interface IconProps
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
 * Links list props
 */
export interface LinksListProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Links list item props
 */
export interface LinksListItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkClassName?: string;
  icon?: keyof typeof icons;
  target?: HTMLAttributeAnchorTarget;
  ariaLabel?: string;
}

/**
 * Theme values
 */
export type Theme = 'theme-light' | 'dark' | 'system';

/**
 * Button variant type
 */
export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

/**
 * Theme toggle props
 */
export interface ThemeToggleProps {
  className?: string;
  variant?: ButtonVariant;
}

/**
 * Locale toggle props
 */
export interface LocaleToggleProps {
  className?: string;
  variant?: ButtonVariant;
}

/**
 * Navigation bar props
 */
export interface NavigationBarProps {
  currentLocale: string;
  navigationLinks: NavigationLink[];
  currentPath: string;
}

/**
 * Project data structure from configuration
 */
export interface ProjectData {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  url: string;
  links?: {
    source?: string;
    website?: string;
  };
}

/**
 * Complete project with translations
 */
export interface Project extends ProjectData {
  title: string;
  description: string;
}
