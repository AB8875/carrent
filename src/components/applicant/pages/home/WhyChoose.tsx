"use client";
import React from "react";
import WhyChooseUsCard from "../../commen/WhyChooseUsCard";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Heading from "@/components/common/Heading";
import { whyChooseCardData } from "@/components/helper/user/Helper";
interface IPROPS {
  yellowImgClass?: string;
}

const WhyChoose: React.FC<IPROPS> = ({ yellowImgClass }) => {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-[60px] sm:px-6 md:px-8 lg:mt-0 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      {whyChooseCardData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            pathname === "/applicant/about-us-why-choose-us"
              ? "lg:flex-row-reverse"
              : ""
          } justify-between !gap-10 lg:flex-row lg:items-center lg:!gap-5`}
        >
          <div className="flex flex-col gap-[30px] xl:gap-[60px]">
            <Heading
              title="Why Choose Us"
              className={`border-primary dark:!text-light-white !text-gray w-max border-b-[2px] pb-1 ${
                pathname === "/applicant/about-us-why-choose-us"
                  ? "mx-auto w-max text-center lg:mx-0"
                  : ""
              }`}
            />

            {item.subData.map((subItem, subIndex) => (
              <WhyChooseUsCard
                key={subIndex}
                icon={subItem.icon}
                heading={subItem.heading}
                para={subItem.para}
              />
            ))}
          </div>

          <div className="relative mx-auto my-auto w-max lg:mx-0">
            <div className="max-w-[300px] md:max-w-[712px]">
              <Image
                src={item.img}
                width={713}
                height={413}
                alt="Car Img"
                className="w-full rounded-2xl md:w-[713px]"
              />
            </div>
            <div
              className={`absolute -right-1 -bottom-2 -z-10 max-w-[119px] rotate-[270deg] min-[350px]:-right-3 min-[350px]:-bottom-4 md:max-w-[200px] lg:!-right-[20px] lg:!-bottom-[28px] xl:max-w-[266px] ${yellowImgClass}`}
            >
              <Image
                src={"/assets/svg/triangleYellowSvg.svg"}
                width={266}
                height={277}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
