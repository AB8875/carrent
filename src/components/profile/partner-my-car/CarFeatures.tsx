import SubHeading from "@/components/common/SubHeading";
import { features } from "@/components/helper/user/Helper";
import { RightInCircleIcon } from "@/components/helper/user/Icon";
import React from "react";

function CarFeatures() {
  return (
    <div>
      <SubHeading title="Features :" className="!text-[30px] xl:!text-[40px]" />
      <div className="mt-[30px] flex flex-wrap justify-between gap-x-5 gap-y-7 sm:mt-10 sm:gap-y-8 md:mt-12 md:gap-y-10 lg:mt-[60px] lg:gap-y-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="3xl:w-[24%] max-w-[220px] min-[500px]:w-[50%] 2xl:w-[30%]"
          >
            {item.data.map((items, i) => (
              <div key={i} className="">
                <h1 className="text-base leading-[144%] font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                  {items.heading}
                </h1>
                <ul className="mt-4 flex flex-col gap-6 sm:mt-6">
                  {items.innerData.map((itm, idx) => (
                    <li key={idx} className="flex items-center gap-[15px]">
                      <RightInCircleIcon />
                      <span className="text-sm leading-[144%] font-medium md:text-base lg:text-lg xl:text-xl">
                        {itm.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarFeatures;
