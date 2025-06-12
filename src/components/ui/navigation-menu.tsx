import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "tw-:group/navigation-menu tw-:relative tw-:flex tw-:max-w-max tw-:flex-1 tw-:items-center tw-:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "tw-:group tw-:flex tw-:flex-1 tw-:list-none tw-:items-center tw-:justify-center tw-:gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("tw-:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "tw-:group tw-:inline-flex tw-:h-9 tw-:w-max tw-:items-center tw-:justify-center tw-:rounded-md tw-:bg-white tw-:px-4 tw-:py-2 tw-:text-sm tw-:font-medium tw-:hover:bg-slate-100 tw-:hover:text-slate-900 tw-:focus:bg-slate-100 tw-:focus:text-slate-900 tw-:disabled:pointer-events-none tw-:disabled:opacity-50 tw-:data-[state=open]:hover:bg-slate-100 tw-:data-[state=open]:text-slate-900 tw-:data-[state=open]:focus:bg-slate-100 tw-:data-[state=open]:bg-slate-100/50 tw-:focus-visible:ring-slate-950/50 tw-:outline-none tw-:transition-[color,box-shadow] tw-:focus-visible:ring-[3px] tw-:focus-visible:outline-1 tw-:dark:bg-slate-950 tw-:dark:hover:bg-slate-800 tw-:dark:hover:text-slate-50 tw-:dark:focus:bg-slate-800 tw-:dark:focus:text-slate-50 tw-:dark:data-[state=open]:hover:bg-slate-800 tw-:dark:data-[state=open]:text-slate-50 tw-:dark:data-[state=open]:focus:bg-slate-800 tw-:dark:data-[state=open]:bg-slate-800/50 tw-:dark:focus-visible:ring-slate-300/50"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "tw-:group", className)}
      {...props}
    >
      {children}{""}
      <ChevronDownIcon
        className="tw-:relative tw-:top-[1px] tw-:ml-1 tw-:size-3 tw-:transition tw-:duration-300 tw-:group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "tw-:data-[motion^=from-]:animate-in tw-:data-[motion^=to-]:animate-out tw-:data-[motion^=from-]:fade-in tw-:data-[motion^=to-]:fade-out tw-:data-[motion=from-end]:slide-in-from-right-52 tw-:data-[motion=from-start]:slide-in-from-left-52 tw-:data-[motion=to-end]:slide-out-to-right-52 tw-:data-[motion=to-start]:slide-out-to-left-52 tw-:top-0 tw-:left-0 tw-:w-full tw-:p-2 tw-:pr-2.5 tw-:md:absolute tw-:md:w-auto",
        "tw-:group-data-[viewport=false]/navigation-menu:bg-popover tw-:group-data-[viewport=false]/navigation-menu:text-popover-foreground tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 tw-:group-data-[viewport=false]/navigation-menu:top-full tw-:group-data-[viewport=false]/navigation-menu:mt-1.5 tw-:group-data-[viewport=false]/navigation-menu:overflow-hidden tw-:group-data-[viewport=false]/navigation-menu:rounded-md tw-:group-data-[viewport=false]/navigation-menu:border tw-:group-data-[viewport=false]/navigation-menu:shadow tw-:group-data-[viewport=false]/navigation-menu:duration-200 tw-:**:data-[slot=navigation-menu-link]:focus:ring-0 tw-:**:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "tw-:absolute tw-:top-full tw-:left-0 tw-:isolate tw-:z-50 tw-:flex tw-:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "tw-:origin-top-center tw-:bg-white tw-:text-slate-950 tw-:data-[state=open]:animate-in tw-:data-[state=closed]:animate-out tw-:data-[state=closed]:zoom-out-95 tw-:data-[state=open]:zoom-in-90 tw-:relative tw-:mt-1.5 tw-:h-[var(--radix-navigation-menu-viewport-height)] tw-:w-full tw-:overflow-hidden tw-:rounded-md tw-:border tw-:border-slate-200 tw-:shadow tw-:md:w-[var(--radix-navigation-menu-viewport-width)] tw-:dark:bg-slate-950 tw-:dark:text-slate-50 tw-:dark:border-slate-800",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "tw-:data-[active=true]:focus:bg-slate-100 tw-:data-[active=true]:hover:bg-slate-100 tw-:data-[active=true]:bg-slate-100/50 tw-:data-[active=true]:text-slate-900 tw-:hover:bg-slate-100 tw-:hover:text-slate-900 tw-:focus:bg-slate-100 tw-:focus:text-slate-900 tw-:focus-visible:ring-slate-950/50 tw-:[&_svg:not([class*=text-])]:text-slate-500 tw-:flex tw-:flex-col tw-:gap-1 tw-:rounded-sm tw-:p-2 tw-:text-sm tw-:transition-all tw-:outline-none tw-:focus-visible:ring-[3px] tw-:focus-visible:outline-1 tw-:[&_svg:not([class*=size-])]:size-4 tw-:dark:data-[active=true]:focus:bg-slate-800 tw-:dark:data-[active=true]:hover:bg-slate-800 tw-:dark:data-[active=true]:bg-slate-800/50 tw-:dark:data-[active=true]:text-slate-50 tw-:dark:hover:bg-slate-800 tw-:dark:hover:text-slate-50 tw-:dark:focus:bg-slate-800 tw-:dark:focus:text-slate-50 tw-:dark:focus-visible:ring-slate-300/50 tw-:dark:[&_svg:not([class*=text-])]:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "tw-:data-[state=visible]:animate-in tw-:data-[state=hidden]:animate-out tw-:data-[state=hidden]:fade-out tw-:data-[state=visible]:fade-in tw-:top-full tw-:z-[1] tw-:flex tw-:h-1.5 tw-:items-end tw-:justify-center tw-:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="tw-:bg-slate-200 tw-:relative tw-:top-[60%] tw-:h-2 tw-:w-2 tw-:rotate-45 tw-:rounded-tl-sm tw-:shadow-md tw-:dark:bg-slate-800" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
