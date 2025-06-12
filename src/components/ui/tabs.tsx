import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("tw-:flex tw-:flex-col tw-:gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "tw-:bg-slate-100 tw-:text-slate-500 tw-:inline-flex tw-:h-9 tw-:w-fit tw-:items-center tw-:justify-center tw-:rounded-lg tw-:p-[3px] tw-:dark:bg-slate-800 tw-:dark:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "tw-:data-[state=active]:bg-white tw-:dark:data-[state=active]:text-slate-950 tw-:focus-visible:border-slate-950 tw-:focus-visible:ring-slate-950/50 tw-:focus-visible:outline-ring tw-:dark:data-[state=active]:border-slate-200 tw-:dark:data-[state=active]:bg-slate-200/30 tw-:text-slate-950 tw-:dark:text-slate-500 tw-:inline-flex tw-:h-[calc(100%-1px)] tw-:flex-1 tw-:items-center tw-:justify-center tw-:gap-1.5 tw-:rounded-md tw-:border tw-:border-slate-200 tw-:border-transparent tw-:px-2 tw-:py-1 tw-:text-sm tw-:font-medium tw-:whitespace-nowrap tw-:transition-[color,box-shadow] tw-:focus-visible:ring-[3px] tw-:focus-visible:outline-1 tw-:disabled:pointer-events-none tw-:disabled:opacity-50 tw-:data-[state=active]:shadow-sm tw-:[&_svg]:pointer-events-none tw-:[&_svg]:shrink-0 tw-:[&_svg:not([class*=size-])]:size-4 tw-:dark:data-[state=active]:bg-slate-950 tw-:dark:dark:data-[state=active]:text-slate-50 tw-:dark:focus-visible:border-slate-300 tw-:dark:focus-visible:ring-slate-300/50 tw-:dark:dark:data-[state=active]:border-slate-800 tw-:dark:dark:data-[state=active]:bg-slate-800/30 tw-:dark:text-slate-50 tw-:dark:dark:text-slate-400 tw-:dark:border-slate-800",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("tw-:flex-1 tw-:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
