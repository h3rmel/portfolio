import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "active" | "stable" | "archived";
  className?: string;
}

const statusStyles = {
  active: "bg-primary shadow-[0_0_6px_oklch(0.55_0.25_29)]",
  stable: "bg-foreground shadow-[0_0_6px_oklch(0.87_0.006_264_/_0.4)]",
  archived: "bg-muted-foreground",
} as const;

/** Hardware-style LED status indicator. */
export function StatusIndicator({ status, className }: StatusIndicatorProps) {
  return (
    <span
      aria-label={`Status: ${status}`}
      className={cn(
        "inline-block h-2 w-2 rounded-full",
        statusStyles[status],
        className
      )}
    />
  );
}
