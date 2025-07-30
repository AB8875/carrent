import React from "react";
import LearnMoreCommonCard from "../../commen/LearnMoreCommonCard";

import Heading from "@/components/common/Heading";
import { learnMoreCardData } from "@/components/helper/user/Helper";
interface IPROPS {
  className?: string;
}
const LearnMore: React.FC<IPROPS> = ({ className }) => {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
      <Heading
        title="Learn More Before Booking"
        className={`border-primary dark:!text-light-white !text-gray mx-auto border-b-[2px] pb-1 text-center ${className}`}
      />
      <div className="mt-10 flex flex-wrap justify-between gap-[30px] lg:mt-[60px] lg:flex-nowrap lg:gap-5">
        {learnMoreCardData.map((item, index) => (
          <LearnMoreCommonCard
            key={index}
            icon={item.icon}
            title={item.title}
            path={item.path}
            className="w-full sm:w-[47%] lg:w-[24%] xl:w-[22%]"
          />
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
