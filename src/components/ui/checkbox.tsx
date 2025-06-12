import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "tw-:peer tw-:border-slate-200 tw-:dark:bg-slate-200/30 tw-:data-[state=checked]:bg-slate-900 tw-:data-[state=checked]:text-slate-50 tw-:dark:data-[state=checked]:bg-slate-900 tw-:data-[state=checked]:border-slate-900 tw-:focus-visible:border-slate-950 tw-:focus-visible:ring-slate-950/50 tw-:aria-invalid:ring-red-500/20 tw-:dark:aria-invalid:ring-red-500/40 tw-:aria-invalid:border-red-500 tw-:size-4 tw-:shrink-0 tw-:rounded-[4px] tw-:border tw-:shadow-xs tw-:transition-shadow tw-:outline-none tw-:focus-visible:ring-[3px] tw-:disabled:cursor-not-allowed tw-:disabled:opacity-50 tw-:dark:border-slate-800 tw-:dark:dark:bg-slate-800/30 tw-:dark:data-[state=checked]:bg-slate-50 tw-:dark:data-[state=checked]:text-slate-900 tw-:dark:dark:data-[state=checked]:bg-slate-50 tw-:dark:data-[state=checked]:border-slate-50 tw-:dark:focus-visible:border-slate-300 tw-:dark:focus-visible:ring-slate-300/50 tw-:dark:aria-invalid:ring-red-900/20 tw-:dark:dark:aria-invalid:ring-red-900/40 tw-:dark:aria-invalid:border-red-900",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="tw-:flex tw-:items-center tw-:justify-center tw-:text-current tw-:transition-none"
      >
        <CheckIcon className="tw-:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
