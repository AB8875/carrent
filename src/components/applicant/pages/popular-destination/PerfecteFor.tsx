import SubHeading from "@/components/common/SubHeading";
import { perfecteFor } from "@/components/helper/user/Helper";
import React from "react";

function PerfecteFor() {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 py-10 sm:px-6 md:px-8 md:py-[60px] lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <SubHeading
        title="Perfect For :  "
        spanTitle="Culture lovers, art enthusiasts, and architecture admirers"
        className="text mx-auto !border-none text-center !text-xl md:!text-3xl lg:!text-[35px] xl:!text-[40px]"
        spanClass="!text-gray dark:!text-light-white !font-normal xl:!text-4xl lg:text-3xl md:!text-xl !text-base"
      />
      {perfecteFor.map((item, index) => (
        <div key={index} className="mt-10 lg:mt-[60px] xl:mt-[100px]">
          <SubHeading
            title={item.heading}
            className="text !border-none !text-3xl xl:!text-[40px]"
          />
          <ul className="mt-[30px] list-disc ps-4 md:ps-5 lg:ps-12 xl:ps-[70px]">
            {item.subData.map((listItem, index) => (
              <li
                key={index}
                className="text-gray dark:!text-light-white mt-[15px] !text-sm leading-[144%] md:!text-base lg:mt-5 lg:!text-xl xl:text-2xl"
              >
                {listItem.listItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PerfecteFor;
