import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "tw-:inline-flex tw-:items-center tw-:justify-center tw-:rounded-md tw-:border tw-:border-slate-200 tw-:px-2 tw-:py-0.5 tw-:text-xs tw-:font-medium tw-:w-fit tw-:whitespace-nowrap tw-:shrink-0 tw-:[&>svg]:size-3 tw-:gap-1 tw-:[&>svg]:pointer-events-none tw-:focus-visible:border-slate-950 tw-:focus-visible:ring-slate-950/50 tw-:focus-visible:ring-[3px] tw-:aria-invalid:ring-red-500/20 tw-:dark:aria-invalid:ring-red-500/40 tw-:aria-invalid:border-red-500 tw-:transition-[color,box-shadow] tw-:overflow-hidden tw-:dark:border-slate-800 tw-:dark:focus-visible:border-slate-300 tw-:dark:focus-visible:ring-slate-300/50 tw-:dark:aria-invalid:ring-red-900/20 tw-:dark:dark:aria-invalid:ring-red-900/40 tw-:dark:aria-invalid:border-red-900",
  {
    variants: {
      variant: {
        default:
          "tw-:border-transparent tw-:bg-slate-900 tw-:text-slate-50 tw-:[a&]:hover:bg-slate-900/90 tw-:dark:bg-slate-50 tw-:dark:text-slate-900 tw-:dark:[a&]:hover:bg-slate-50/90",
        secondary:
          "tw-:border-transparent tw-:bg-slate-100 tw-:text-slate-900 tw-:[a&]:hover:bg-slate-100/90 tw-:dark:bg-slate-800 tw-:dark:text-slate-50 tw-:dark:[a&]:hover:bg-slate-800/90",
        destructive:
          "tw-:border-transparent tw-:bg-red-500 tw-:text-white tw-:[a&]:hover:bg-red-500/90 tw-:focus-visible:ring-red-500/20 tw-:dark:focus-visible:ring-red-500/40 tw-:dark:bg-red-500/60 tw-:dark:bg-red-900 tw-:dark:[a&]:hover:bg-red-900/90 tw-:dark:focus-visible:ring-red-900/20 tw-:dark:dark:focus-visible:ring-red-900/40 tw-:dark:dark:bg-red-900/60",
        outline:
          "tw-:text-slate-950 tw-:[a&]:hover:bg-slate-100 tw-:[a&]:hover:text-slate-900 tw-:dark:text-slate-50 tw-:dark:[a&]:hover:bg-slate-800 tw-:dark:[a&]:hover:text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
