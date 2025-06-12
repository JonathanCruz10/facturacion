import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("tw-:bg-slate-100 tw-:animate-pulse tw-:rounded-md tw-:dark:bg-slate-800", className)}
      {...props}
    />
  )
}

export { Skeleton }
