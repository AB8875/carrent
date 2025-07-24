"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-gray data-[state=unchecked]:bg-tranparent inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full border border-[#F9B701] shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#F9B701] data-[state=unchecked]:border-[2px]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-2.5 rounded-full bg-[#F9B701] ring-0 transition-transform data-[state=checked]:translate-x-[calc(210%-0px)] data-[state=checked]:bg-[#fff] data-[state=unchecked]:translate-x-[10%] dark:data-[state=unchecked]:bg-[#111]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
