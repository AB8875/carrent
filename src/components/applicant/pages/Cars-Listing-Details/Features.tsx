import SubHeading from "@/components/common/SubHeading";
import { features } from "@/components/helper/user/Helper";
import { RightInCircleIcon } from "@/components/helper/user/Icon";
import React from "react";

function Features() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]">
      <SubHeading
        title="Features :"
        className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-[40px]"
      />
      <div className="mt-[30px] flex flex-wrap justify-between gap-x-10 gap-y-8 md:mt-12 lg:mt-[60px] lg:gap-x-0">
        {features.map((item, index) => (
          <div
            key={index}
            className="w-full min-[450px]:!w-[40%] min-md:!w-[30%] min-lg:!w-[23%]"
          >
            {item.data.map((items, indexs) => (
              <div key={indexs}>
                <SubHeading
                  title={items.heading}
                  className="!border-none !text-lg sm:!text-xl md:!text-2xl lg:!text-[32px]"
                />

                <ul className="mt-3 flex flex-col gap-3 sm:mt-4 md:mt-5 md:gap-4 lg:gap-5">
                  {items.innerData.map((itm, idx) => (
                    <li key={idx} className="flex items-center gap-3.5">
                      <RightInCircleIcon />
                      <span className="text-sm leading-[144%] font-medium sm:text-base md:text-lg lg:text-xl">
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

export default Features;
