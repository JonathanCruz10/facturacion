"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "tw-:inline-flex tw-:items-center tw-:justify-center tw-:gap-2 tw-:rounded-md tw-:text-sm tw-:font-medium tw-:hover:bg-slate-100 tw-:hover:text-slate-500 tw-:disabled:pointer-events-none tw-:disabled:opacity-50 tw-:data-[state=on]:bg-slate-100 tw-:data-[state=on]:text-slate-900 tw-:[&_svg]:pointer-events-none tw-:[&_svg:not([class*=size-])]:size-4 tw-:[&_svg]:shrink-0 tw-:focus-visible:border-slate-950 tw-:focus-visible:ring-slate-950/50 tw-:focus-visible:ring-[3px] tw-:outline-none tw-:transition-[color,box-shadow] tw-:aria-invalid:ring-red-500/20 tw-:dark:aria-invalid:ring-red-500/40 tw-:aria-invalid:border-red-500 tw-:whitespace-nowrap tw-:dark:hover:bg-slate-800 tw-:dark:hover:text-slate-400 tw-:dark:data-[state=on]:bg-slate-800 tw-:dark:data-[state=on]:text-slate-50 tw-:dark:focus-visible:border-slate-300 tw-:dark:focus-visible:ring-slate-300/50 tw-:dark:aria-invalid:ring-red-900/20 tw-:dark:dark:aria-invalid:ring-red-900/40 tw-:dark:aria-invalid:border-red-900",
  {
    variants: {
      variant: {
        default: "tw-:bg-transparent",
        outline:
          "tw-:border tw-:border-slate-200 tw-:bg-transparent tw-:shadow-xs tw-:hover:bg-slate-100 tw-:hover:text-slate-900 tw-:dark:border-slate-800 tw-:dark:hover:bg-slate-800 tw-:dark:hover:text-slate-50",
      },
      size: {
        default: "tw-:h-9 tw-:px-2 tw-:min-w-9",
        sm: "tw-:h-8 tw-:px-1.5 tw-:min-w-8",
        lg: "tw-:h-10 tw-:px-2.5 tw-:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
