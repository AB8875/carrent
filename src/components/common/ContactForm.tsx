import React from "react";
// import { Switch } from "../ui/switch";
// import Para from "./Para";
import BlackBtn from "./BlackBtn";
import HeroPickOnCard from "./HeroPickOnCard";
import HeroDropOnCard from "./HeroDropOnCard";
import HeroPickFromCard from "./HeroPickFromCard";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import Para from "./Para";

interface IPROPS {
  className?: string;
}

const ContactForm: React.FC<IPROPS> = ({ className }) => {
  return (
    <div
      className={`bg-light-white w-full items-end gap-4 rounded-[10px] border px-2.5 py-6 sm:rounded-[20px] sm:px-6 lg:flex lg:!rounded-tl-[0px] xl:gap-[30px] xl:px-10 ${className} relative z-40`}
    >
      <div className="w-full">
        <div className="flex max-w-[1305px] items-center justify-between">
          <div className="flex gap-2">
            <div className="flex items-center space-x-2">
              <Switch id="ReturnSameLocation" className="!bg-gray" />
              <Label htmlFor="ReturnSameLocation">
                <Para
                  title="Return to the same location"
                  classNmae="!text-gray sm:text-sm md:text-base text-xs"
                />
              </Label>
            </div>
          </div>

          {/* <HeroFormAgeSection /> */}
        </div>
        <div className="mt-[22px] flex flex-col justify-between gap-4 lg:flex-row xl:gap-[26px]">
          <HeroPickFromCard />
          <HeroPickOnCard />
          <HeroDropOnCard />
          <BlackBtn
            title="Search"
            className="mx-auto md:max-w-[211px] lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
