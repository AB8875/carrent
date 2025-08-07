import LinkBlackBtn from "@/components/common/LinkBlackBtn";
import { discountData } from "@/components/helper/partner/Helper";
import React from "react";
interface discountData {
  para: string;
}

function Discounts() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 xl:py-32 2xl:py-[155px]">
      <div className="flex flex-col gap-9 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20">
        {discountData.map((item, index) => (
          <div key={index}>
            <h2 className="text-gray mb-4 text-xl font-semibold sm:mb-5 sm:text-2xl md:mb-6 dark:text-white">
              {item.heading}
            </h2>
            <div className="flex flex-col gap-3">
              {item.aboutDiscData.map((items, idx) => (
                <ul key={idx} className="ml-5 flex list-disc">
                  <li
                    className="text-xs leading-[144%] font-medium text-gray-700 sm:text-base dark:text-sky-600"
                    key={idx}
                  >
                    {items.para}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-9 sm:w-fit lg:mt-10">
        <LinkBlackBtn
          path="/partner/upload-cars"
          className="!text-lg"
          title="List Your Property Now"
        />
      </div>
    </div>
  );
}

export default Discounts;
