import { memo } from 'react';

import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from '@/components/ui/avatar';
import { USER_PROFILE } from '@/constants';

/**
 * Avatar component displaying the user's profile picture.
 * Shows a GitHub profile image with fallback to initials.
 * Memoized for performance as it never changes.
 *
 * @returns A styled avatar component with image and fallback
 */
export const Avatar = memo(function Avatar() {
  return (
    <AvatarPrimitive className="size-16 border border-border p-0.5">
      <AvatarImage
        className="rounded-full"
        src={USER_PROFILE.avatarUrl}
        alt={USER_PROFILE.name}
      />
      <AvatarFallback className="rounded-full">{USER_PROFILE.initials}</AvatarFallback>
    </AvatarPrimitive>
  );
});
