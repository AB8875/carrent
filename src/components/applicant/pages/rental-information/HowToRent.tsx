import Heading from "@/components/common/Heading";

import SubHeading from "@/components/common/SubHeading";
import { howToRentData } from "@/components/helper/user/Helper";
import React from "react";

function HowToRent() {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[200px]">
      <SubHeading
        title="How to rent a Car & Bike in Australia"
        className="text-3xl lg:!text-4xl xl:!text-5xl"
      />
      <div className="mt-10 flex flex-col gap-10 min-[1500px]:!ps-[150px] md:ps-10 lg:mt-12">
        {howToRentData.map((item, index) => (
          <div key={index}>
            <Heading
              title={item.heading}
              className="!text-gray dark:!text-light-white !text-xl lg:!text-2xl xl:!text-[32px]"
            />
            <ul className="mt-[15px] flex list-disc flex-col gap-[15px] ps-5 md:ps-8 lg:mt-5 lg:gap-5 xl:ps-[50px]">
              {item.subData.map((items, indexs) => (
                <li
                  key={indexs}
                  className="text-gray dark:!text-light-white text-sm leading-[144%] md:text-base lg:text-lg xl:text-xl"
                >
                  <span className="font-semibold">{items.spanHeading}</span>
                  <span>{items.para}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToRent;
