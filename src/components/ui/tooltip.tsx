"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "tw-:bg-slate-900 tw-:text-slate-50 tw-:animate-in tw-:fade-in-0 tw-:zoom-in-95 tw-:data-[state=closed]:animate-out tw-:data-[state=closed]:fade-out-0 tw-:data-[state=closed]:zoom-out-95 tw-:data-[side=bottom]:slide-in-from-top-2 tw-:data-[side=left]:slide-in-from-right-2 tw-:data-[side=right]:slide-in-from-left-2 tw-:data-[side=top]:slide-in-from-bottom-2 tw-:z-50 tw-:w-fit tw-:origin-(--radix-tooltip-content-transform-origin) tw-:rounded-md tw-:px-3 tw-:py-1.5 tw-:text-xs tw-:text-balance tw-:dark:bg-slate-50 tw-:dark:text-slate-900",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="tw-:bg-slate-900 tw-:fill-primary tw-:z-50 tw-:size-2.5 tw-:translate-y-[calc(-50%_-_2px)] tw-:rotate-45 tw-:rounded-[2px] tw-:dark:bg-slate-50" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
