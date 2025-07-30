import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import React, { ReactNode } from "react";
interface IPROPS {
  icon: ReactNode;
  heading: string;
  para: string;
}

const WhyChooseUsCard: React.FC<IPROPS> = ({ icon, heading, para }) => {
  return (
    <div className="flex gap-2.5 md:gap-6 lg:items-center">
      <div className="bg-primary h-max rounded p-[7px] md:p-[14px]">{icon}</div>
      <div>
        <SubHeading
          title={heading}
          className="dark:text-light-white !border-none !text-xl"
        />
        <Para
          title={para}
          classNmae="!text-gray-700 lg:mt-2 max-w-[660px] dark:!text-light-white"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
