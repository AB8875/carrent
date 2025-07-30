import React from "react";

import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { experienceData } from "@/components/helper/partner/Helper";

function ListExperience() {
  return (
    <div>
      <div className="mx-auto my-16 max-w-[1720px] px-4 sm:px-6 md:my-24 md:px-8 lg:my-28 lg:px-10 xl:my-32 xl:px-12 2xl:my-[155px]">
        <SubHeading
          className="mx-auto mb-20 max-w-[957px] border-none text-center"
          title="List Your Car to That sit For a Fast  Easy & Secure Experience"
        />
        <div className="mx-auto grid grid-cols-1 justify-around gap-x-8 gap-y-14 text-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-11">
          {experienceData.map((item, index) => (
            <article className="mt-5 w-full" key={index}>
              <div className="bg-light-white flex h-full flex-col justify-between rounded-[20px] px-3 pb-7 duration-300 hover:shadow-lg xl:w-full">
                <div className="bg-primary -mt-5 -ml-3 w-fit rounded-[7.7px] px-5 py-4 text-2xl leading-[144%] font-semibold shadow-[7px_7px_4px_0px_rgba(249,183,1,0.33)] sm:-ml-5 sm:px-9 sm:py-6 md:-ml-7 2xl:text-[36px]">
                  {item.number}
                </div>
                <span className="flex justify-center pt-2 pr-7 pb-6 sm:pt-8 2xl:pt-12 2xl:pb-10">
                  {item.svg}
                </span>
                <h2
                  className={`text-gray mx-auto mb-2 max-w-[220px] text-xl leading-[144%] font-semibold 2xl:mb-4 2xl:text-2xl ${item.className}`}
                >
                  {item.heading}
                </h2>
                <Para
                  title={item.para}
                  classNmae="!text-gray !text-sm 2xl:!text-base"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListExperience;
