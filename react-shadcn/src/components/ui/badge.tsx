import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium", className)}
      {...props}
    />
  );
});

Badge.displayName = "Badge";
export { Badge };
