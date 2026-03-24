"use client";

import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  index: string;
  title: string;
  className?: string;
}

export function Section({ children, index, title, className }: SectionProps) {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24">
      <SectionHeader index={index} title={title} className={className} />
      <SectionContent>{children}</SectionContent>
    </section>
  );
}

interface SectionHeaderProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionHeader({ index, title, className }: SectionHeaderProps) {
  const text = `[ ${index} / ${title} ]`;

  return (
    <div className={cn("absolute top-6 right-6", className)}>
      <div className="font-mono text-xs tracking-widest text-muted-foreground">
        <TypingAnimation
          as="span"
          className="uppercase"
          showCursor
          cursorStyle="underscore"
          duration={55}
        >
          {text}
        </TypingAnimation>
      </div>
    </div>
  );
}

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContent({ children, className }: SectionContentProps) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}
