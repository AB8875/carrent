import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { stepData } from "@/components/helper/partner/Helper";
import React from "react";

function StepCard() {
  return (
    <div className="bg-light-white mt-16 pb-16 md:mt-24 md:pb-20 lg:mt-28 xl:mt-32 2xl:mt-[155px] dark:bg-black">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SubHeading
          title="List Your Car In Few Simple Steps"
          className="mx-auto mb-[60px] max-w-[616px] border-none pt-10 text-center md:pt-20"
        />
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-y-10 xl:grid-cols-3">
          {stepData.map((item, index) => (
            <div key={index} className="group">
              <article className="h-full w-full">
                <div className="bg-primary max-[1440px:w-[245px] relative z-5 h-[245px] w-[190px] duration-300 ease-in-out group-hover:translate-[10%] sm:w-[210px]"></div>
                <div className="relative z-10 -mt-[225px] ml-4 w-[240px] bg-white px-4.5 py-3 duration-300 hover:shadow-lg max-[1440px]:h-[290px] min-[370px]:mt-[-210px] min-[370px]:ml-8 min-[1440px]:!w-[350px] sm:w-[294px]">
                  <h2 className="text-primary text-base leading-[144%] font-semibold min-[1440px]:text-xl">
                    {item.number}
                  </h2>
                  <div className="text-center">
                    <span className="flex justify-center py-2 min-[1440px]:py-5">
                      {item.icon}
                    </span>
                    <h2 className="text-gray mb-2 text-lg leading-[144%] font-semibold min-[1440px]:mb-4 min-[1440px]:text-2xl">
                      {item.heading}
                    </h2>
                    <Para
                      classNmae="!text-gray !text-sm min-[1440px]:!text-base"
                      title={item.para}
                    />
                  </div>
                </div>
                <div className="border-primary relative z-0 mt-[-220px] mr-0 ml-18 flex h-[245px] w-[245px] justify-end border-[5px] bg-white pb-10 duration-300 ease-in-out group-hover:-translate-[12%] max-[1440px]:w-[210px] min-[370px]:-mt-[200px] min-[370px]:ml-24 min-[1440px]:ml-[170px] sm:ml-[158px]"></div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default StepCard;
