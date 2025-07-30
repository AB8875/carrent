import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { StarIcon } from "@/components/helper/user/Icon";
import React from "react";

function AboutMe() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-[60px] sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <div className="dm:gap-4 flex flex-col items-center gap-3 lg:gap-5">
        <SubHeading
          title="About Me"
          className="mx-auto text-[30px] lg:text-4xl xl:text-5xl"
        />
        <Para
          title="Hi, I’m John Deo, and I’ve been passionate about Bikes and the automotive industry for as long as I can remember. With over 10 years of experience in the Bike sales business, I’ve had the privilege of helping countless customers find the perfect vehicle for their needs, whether it's a new model, a reliable pre-owned car, or something more specialized."
          classNmae="font-medium text-center md:!text-xl !text-sm sm:!text-base lg:!text-2xl xl:!text-[32px] !text-gray-700 dark:!text-light-white"
        />
        <div className="flex items-center gap-2.5 md:gap-[15px]">
          <span className="text-gray dark:text-light-white text-sm leading-[155%] font-semibold sm:text-base md:text-xl lg:text-2xl">
            4.5
          </span>
          <StarIcon />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
