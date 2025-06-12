"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "tw-:bg-slate-200 tw-:shrink-0 tw-:data-[orientation=horizontal]:h-px tw-:data-[orientation=horizontal]:w-full tw-:data-[orientation=vertical]:h-full tw-:data-[orientation=vertical]:w-px tw-:dark:bg-slate-800",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
