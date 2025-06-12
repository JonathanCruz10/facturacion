import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="tw-:relative tw-:w-full tw-:overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("tw-:w-full tw-:caption-bottom tw-:text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("tw-:[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("tw-:[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "tw-:bg-slate-100/50 tw-:border-t tw-:font-medium tw-:[&>tr]:last:border-b-0 tw-:dark:bg-slate-800/50",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "tw-:hover:bg-slate-100/50 tw-:data-[state=selected]:bg-slate-100 tw-:border-b tw-:transition-colors tw-:dark:hover:bg-slate-800/50 tw-:dark:data-[state=selected]:bg-slate-800",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "tw-:text-slate-950 tw-:h-10 tw-:px-2 tw-:text-left tw-:align-middle tw-:font-medium tw-:whitespace-nowrap tw-:[&:has([role=checkbox])]:pr-0 tw-:[&>[role=checkbox]]:translate-y-[2px] tw-:dark:text-slate-50",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "tw-:p-2 tw-:align-middle tw-:whitespace-nowrap tw-:[&:has([role=checkbox])]:pr-0 tw-:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("tw-:text-slate-500 tw-:mt-4 tw-:text-sm tw-:dark:text-slate-400", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
