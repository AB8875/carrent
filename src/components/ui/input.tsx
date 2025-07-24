import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-0 border-b bg-transparent px-2 py-1.5 shadow-none ring-0 outline-none focus:outline-0 md:px-3 md:py-2",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
