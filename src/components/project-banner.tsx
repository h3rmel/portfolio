import Image from 'next/image';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

type ProjectBannerProps = {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
};

export function ProjectBanner({
  title,
  description,
  imageLink,
  videoLink,
}: ProjectBannerProps) {
  function renderBannerContent(isDialog: boolean = false) {
    if (imageLink) {
      return (
        <Image
          src={imageLink}
          aria-label={`${title} image`}
          alt={title}
          width={1920}
          height={1080}
          className={cn(
            'rounded-[8px] border',
            'size-full object-cover',
            isDialog ? 'h-[403px]' : 'h-[149px]',
          )}
        />
      );
    }

    if (videoLink) {
      return (
        <video
          src={videoLink}
          aria-label={`${title} video`}
          autoPlay
          muted
          loop
          className={cn(
            'rounded-[8px] border',
            'size-full object-cover',
            isDialog ? 'max-h-[403px] h-max' : 'h-[149px]',
          )}
        />
      );
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild className={cn('cursor-pointer')}>
        {renderBannerContent()}
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {renderBannerContent(true)}
        <DialogClose asChild>
          <Button variant="ghost" size="icon" className="absolute top-2 right-2">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
