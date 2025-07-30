import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
import Image from "next/image";
import React from "react";
interface IPROPS {
  heading: string;
  icon: React.ReactNode;
  para: string;
  className?: string;
}

const WhatYouGetCommonCard: React.FC<IPROPS> = ({
  heading,
  icon,
  para,
  className,
}) => {
  return (
    <div className={`${className} relative`}>
      <Image
        src={"/assets/svg/dashad-corner-line.svg"}
        width={313}
        height={275}
        alt="dashed line"
        className="absolute -top-1.5 -left-1.5 w-[40%] sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 xl:w-auto"
      />
      <Image
        src={"/assets/svg/yellow-curve-line.svg"}
        width={178}
        height={140}
        alt="yellow line"
        className="absolute -top-[6.5px] -left-[7px] z-[200] w-[20%] sm:-top-[13px] sm:-left-[11.5px] sm:z-20 md:-top-[17px] md:-left-[17px] xl:w-auto"
      />
      <div
        className={`bg-light-white relative z-[100] h-full rounded-[20px] px-3 py-6 min-[1400px]:!px-[30px] min-[1400px]:!py-[50px] md:px-5 md:py-8`}
      >
        <div className="flex flex-col items-center gap-[15px]">
          <div>{icon}</div>
          <Heading
            title={heading}
            className="!text-gray mt-1 text-center !text-[22px] md:mt-0 lg:!text-2xl"
          />
          <Para title={para} classNmae="!text-gray md:mt-[5px] text-center" />
        </div>
      </div>
    </div>
  );
};

export default WhatYouGetCommonCard;
