// components/Dropdown.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DropdownOption } from "@/components/helper/user/Helper";

interface Props {
  placeholder?: string;
  options: DropdownOption[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<Props> = ({
  placeholder = "Select an option",
  options,
  selected,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="select bg-gray dark:bg-gray relative flex min-h-[37px] w-full items-center justify-center gap-[15px] rounded-md border-none px-3 text-white outline-0 lg:min-h-[64px] lg:gap-[30px] lg:px-[25px]"
      >
        <span className="text-light-white">{selectedLabel || placeholder}</span>
        <div className="pointer-events-none inset-y-0 ml-auto flex items-center">
          <Image
            src="/assets/svg/dropDownIcon.svg"
            width={24}
            height={24}
            alt="Dropdown Icon"
          />
        </div>
      </button>

      {open && (
        <ul className="text-gray absolute right-0 left-0 z-10 mt-2 max-h-60 overflow-auto rounded-md bg-white text-xl font-semibold shadow-lg">
          {options.map((item) => (
            <li
              key={item.value}
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
