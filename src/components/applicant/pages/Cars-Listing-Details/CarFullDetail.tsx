import SubHeading from "@/components/common/SubHeading";
import { carFullDetail } from "@/components/helper/user/Helper";
import React from "react";

function CarFullDetail() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]">
      <SubHeading title="Car Details :" className="xl:!text-[40px]" />
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-[63px] lg:flex-row lg:gap-[63px] xl:grid-cols-3">
        {carFullDetail.map((item, index) => (
          <div key={index} className={`flex flex-col gap-10 lg:gap-[63px]`}>
            {item.colFirst.map((items, indexs) => (
              <div
                key={indexs}
                className="flex justify-between border-b pb-2 sm:pb-[17px]"
              >
                <div className="flex gap-3 lg:gap-5">
                  {items.icon}
                  <span className="leadig-[144%] dark:!text-light-white text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
                    {items.iconName}
                  </span>
                </div>
                <span className="text-gray dark:!text-light-white text-sm leading-[144%] font-semibold sm:text-base md:text-lg lg:text-xl">
                  {items.title}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarFullDetail;
