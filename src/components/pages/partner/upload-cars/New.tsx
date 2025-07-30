// New.tsx
import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FrameOption {
  label: string;
  value: string;
}

interface SelectField {
  name: string;
  labelName: string;
  placeholder: string;
  options: FrameOption[];
}

interface NewProps {
  field: SelectField;
}

export function New({ field }: NewProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const triggerRef = React.useRef<HTMLButtonElement>(null); // Step 1

  return (
    <div className="w-full">
      <label
        className="text-base font-semibold md:text-lg lg:text-xl"
        onClick={() => triggerRef.current?.click()} // Step 2
      >
        {field.labelName}
      </label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={triggerRef} // Step 3
            role="combobox"
            aria-expanded={open}
            className="mt-2 flex w-full items-center justify-between bg-white px-4 py-5.5 text-left text-sm text-gray-800 dark:!bg-black dark:text-white"
          >
            <p className="truncate dark:bg-black">
              {value
                ? field.options.find((option) => option.value === value)?.label
                : field.placeholder}
            </p>
            <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full overflow-hidden p-0">
          <Command className="bg-white dark:bg-black">
            <CommandInput
              placeholder={field.placeholder}
              className="placeholder:!truncate"
            />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup className="bg-white dark:bg-black">
                {field.options.map((option) => (
                  <CommandItem
                    className="hover:!bg-sky mt-2"
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
