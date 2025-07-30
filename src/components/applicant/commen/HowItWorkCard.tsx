import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import React from "react";
interface IPROPS {
  className?: string;
  icon: React.ReactNode;
  heading: string;
  para: string;
}
const HowItWorkCard: React.FC<IPROPS> = ({
  className,
  icon,
  heading,
  para,
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-[url(/assets/png/gray-background-img.png)] bg-[length:100%_70%] bg-bottom bg-no-repeat px-4 pb-4 xl:px-[30px] xl:pb-5 ${className}`}
    >
      <div className="bg-light-white flex h-full flex-col items-center gap-[15px] rounded-[20px] px-5 py-6 md:py-8 xl:px-[30px] xl:py-[50px]">
        <div>{icon}</div>
        <SubHeading
          title={heading}
          className="dark:!text-gray mx-auto border-none text-center !text-xl md:mt-[5px] lg:!text-2xl"
        />
        <Para
          title={para}
          classNmae="!text-gray text-center sm:!text-sm !text-[13px] md:!text-base"
        />
      </div>
    </div>
  );
};

export default HowItWorkCard;
