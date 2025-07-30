import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import React from "react";

import OurCoreCommonCard from "../applicant/commen/OurCoreCommonCard";
import { ourCoreData } from "../helper/user/Helper";

function OurCore() {
  return (
    <div className="mx-auto mb-10 flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {ourCoreData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col pb-[60px] min-[1150px]:flex-row lg:py-[160px]"
        >
          <div className="border-gray -ms-[22%] hidden h-[687px] w-[687px] items-center justify-self-center overflow-hidden rounded-full border-[30px] p-[25px] outline-[100px] outline-white min-[1150px]:flex min-[1450px]:!-ms-[20%] xl:-ms-[25%] xl:h-[800px] xl:w-[800px] dark:!outline-[transparent]">
            <div className="border-primary flex h-full items-center justify-end rounded-full border-[30px] py-[50px] pe-[50px] min-[1450px]:py-[200px] min-[1450px]:pe-[100px] xl:pe-[100px]">
              <div className="w-[50%]">
                <SubHeading
                  title={item.heading}
                  className="border-none !text-[36px] min-[1600px]:!text-[64px]"
                  spanTitle={item.spanHeading}
                />
                <Para
                  title={item.para}
                  classNmae="!text-gray dark:!text-light-white  !text-sm min-[1450px]:!text-base mt-4"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto block min-[1150px]:hidden">
            <SubHeading
              title={item.heading}
              className="mx-auto border-none text-center min-[1450px]:!text-[64px]"
              spanTitle={item.spanHeading}
            />
            <Para
              title={item.para}
              classNmae="!text-gray !text-sm min-[1450px]:!text-base mt-4 text-center"
            />
          </div>
          <div className="relative mt-10 flex flex-col gap-[25px] min-[1150px]:mt-0 min-[1150px]:w-[64%]">
            {item.cardData.map((item, index) => (
              <div
                key={index}
                className={`min-[1150px]:absolute ${
                  index == 0
                    ? "-top-[20%] -left-[10%]"
                    : index == 1
                    ? "top-[10%] left-[5%]"
                    : index == 2
                    ? "top-[38%] left-[15%] xl:top-[42%]"
                    : index == 3
                    ? "bottom-[10%] left-[5%]"
                    : index == 4
                    ? "-bottom-[20%] -left-[10%]"
                    : ""
                }`}
              >
                <OurCoreCommonCard
                  icon={item.icon}
                  heading={item.heading}
                  para={item.para}
                  className={`${
                    index == 1
                      ? "clip-arrow-sm min-[1150px]-!ps-3 flex-row-reverse !ps-12 !pe-3 text-end min-[1150px]:flex-row min-[1150px]:!pe-10 min-[1150px]:text-start md:!pe-6"
                      : index == 3
                      ? "clip-arrow-sm min-[1150px]-!ps-3 flex-row-reverse !ps-12 !pe-3 text-end min-[1150px]:flex-row min-[1150px]:!pe-10 min-[1150px]:text-start md:!pe-6"
                      : ""
                  }`}
                />
                <div
                  className={`border-gray absolute hidden h-[2px] w-full border-t-[3px] border-dashed min-[1150px]:block ${
                    index == 0
                      ? "top-[136px] -left-[135px] max-w-[185px] -rotate-[50deg]"
                      : index == 1
                      ? "top-[109px] -left-[100px] max-w-[116px] -rotate-[34deg]"
                      : index == 2
                      ? "top-[80px] -left-[130px] max-w-[144px] min-[1450px]:-left-[150px] min-[1450px]:max-w-[155px]"
                      : index == 3
                      ? "top-[45px] -left-[110px] max-w-[120px] rotate-[34deg]"
                      : index == 4
                      ? "-top-[10px] -left-[130px] max-w-[182px] rotate-[50deg]"
                      : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurCore;
