"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent bg-clip-padding font-mono text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-100 ease-linear outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground hover:translate-y-[-2px] hover:shadow-[0_4px_0_0_oklch(0.46_0.21_29)] active:translate-y-0 active:shadow-none",
        outline:
          "border-border bg-transparent text-foreground hover:translate-y-[-2px] hover:border-foreground hover:shadow-[0_4px_0_0_oklch(0.87_0.006_264)] active:translate-y-0 active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:translate-y-[-2px] hover:shadow-[0_4px_0_0_oklch(0.55_0.25_29)] active:translate-y-0 active:shadow-none",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
