import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "tw-:file:text-slate-950 tw-:placeholder:text-slate-500 tw-:selection:bg-slate-900 tw-:selection:text-slate-50 tw-:dark:bg-slate-200/30 tw-:border-slate-200 tw-:flex tw-:h-9 tw-:w-full tw-:min-w-0 tw-:rounded-md tw-:border tw-:bg-transparent tw-:px-3 tw-:py-1 tw-:text-base tw-:shadow-xs tw-:transition-[color,box-shadow] tw-:outline-none tw-:file:inline-flex tw-:file:h-7 tw-:file:border-0 tw-:file:bg-transparent tw-:file:text-sm tw-:file:font-medium tw-:disabled:pointer-events-none tw-:disabled:cursor-not-allowed tw-:disabled:opacity-50 tw-:md:text-sm tw-:dark:file:text-slate-50 tw-:dark:placeholder:text-slate-400 tw-:dark:selection:bg-slate-50 tw-:dark:selection:text-slate-900 tw-:dark:dark:bg-slate-800/30 tw-:dark:border-slate-800",
        "tw-:focus-visible:border-slate-950 tw-:focus-visible:ring-slate-950/50 tw-:focus-visible:ring-[3px] tw-:dark:focus-visible:border-slate-300 tw-:dark:focus-visible:ring-slate-300/50",
        "tw-:aria-invalid:ring-red-500/20 tw-:dark:aria-invalid:ring-red-500/40 tw-:aria-invalid:border-red-500 tw-:dark:aria-invalid:ring-red-900/20 tw-:dark:dark:aria-invalid:ring-red-900/40 tw-:dark:aria-invalid:border-red-900",
        className
      )}
      {...props}
    />
  )
}

export { Input }
