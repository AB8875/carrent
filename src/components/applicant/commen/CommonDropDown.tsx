import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
interface SelectData {
  value: string;
  item: string;
}
interface IPROPS {
  placeholder?: string;
  selectItem?: SelectData[];
}

const CommonDropDown: React.FC<IPROPS> = ({ placeholder, selectItem }) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="select bg-gray dark:bg-gray relative flex min-h-[37px] !w-full gap-[15px] border-none px-3 !text-white outline-0 outline-none lg:!min-h-[64px] lg:gap-[30px] lg:px-[25px] [&>svg]:hidden">
          <SelectValue
            placeholder={placeholder}
            className="!text-light-white !overflow-visible"
          />
          <div className="pointer-events-none inset-y-0 flex min-w-[20px] items-center">
            <Image
              src="/assets/svg/dropDownIcon.svg"
              width={24}
              height={24}
              alt="Dropdown Icon"
            />
          </div>
        </SelectTrigger>
        <SelectContent className="text-gray w-full border-none text-base font-semibold md:text-lg lg:text-xl">
          {(selectItem ?? []).map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CommonDropDown;
