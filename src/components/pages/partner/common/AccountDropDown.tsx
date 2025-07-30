import { accountDrowpDownData } from "@/components/common/helper/ApplicantHelper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function AccountDropDown() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-[15px]">
      <label
        htmlFor="enterAmount"
        className="dark:text-light-white text-xs text-gray-700 md:text-sm"
      >
        Account
      </label>
      <div>
        <Select defaultValue="defualte">
          <SelectTrigger className="border-gray w-full rounded border-[0.2px] !bg-white px-2.5 py-3 !text-gray-700 outline-none placeholder:font-medium sm:py-4 md:px-[15px] md:py-5 placeholder:md:text-lg lg:py-6 placeholder:lg:text-xl">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="z-[9999999]">
            <SelectItem value="defualte">Choose Bank Account</SelectItem>
            {accountDrowpDownData.map((item, index) => (
              <SelectItem value={item.value} key={index}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default AccountDropDown;
