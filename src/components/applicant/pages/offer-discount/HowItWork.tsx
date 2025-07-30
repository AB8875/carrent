import SubHeading from "@/components/common/SubHeading";
import React from "react";
import HowItWorkCard from "../../commen/HowItWorkCard";
import { HowItWorkCardData } from "@/components/helper/user/Helper";

function HowItWork() {
  return (
    <div className="bg-light-white dark:bg-gray sm:bg-transparent">
      <div className="relative z-50 mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
        <SubHeading title="How It Works" className="mx-auto !border-none" />
        <div className="mt-[60px] flex flex-wrap justify-center gap-[30px] lg:flex-nowrap lg:justify-between lg:gap-0">
          {HowItWorkCardData.map((item, index) => (
            <HowItWorkCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              para={item.para}
              className="w-full min-[1500px]:!w-[25%] sm:w-[47%] lg:w-[32%] xl:w-[30%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
