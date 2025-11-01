import { memo } from 'react';
import profileImage from '@/assets/profile.webp';
import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from '@/components/ui/avatar';

/**
 * Avatar component displaying the user's profile picture.
 * Shows a local profile image with fallback to initials.
 * Memoized for performance as it never changes.
 *
 * @returns A styled avatar component with image and fallback
 */
export const Avatar = memo(function Avatar() {
  return (
    <AvatarPrimitive className="border-border hover:border-accent-foreground size-16 border p-0.5 transition-all">
      <AvatarImage
        className="rounded-full"
        src={profileImage.src}
        alt="Isaac Hermel Reginato"
        fetchPriority="high"
      />
      <AvatarFallback className="rounded-full">IR</AvatarFallback>
    </AvatarPrimitive>
  );
});
