import React from "react";
import JourneyCard from "../../commen/JourneyCard";
import SubHeading from "@/components/common/SubHeading";
import { journeyCardData } from "@/components/helper/user/Helper";

function Journey() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pt-[60px] pb-0 sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:pt-[155px]">
      <SubHeading
        title="Start Your Journey In Just a Few Steps"
        className="dark:!text-primary dark:!border-light-white mx-auto text-center"
      />
      <div className="mt-5 flex flex-wrap justify-center gap-5 min-[1500px]:flex-nowrap lg:mt-[100px] xl:gap-[70px]">
        {journeyCardData.map((item, index) => {
          return (
            <JourneyCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              para={item.para}
              LineClass={`${
                index === 0
                  ? "min-[1045px]:flex hidden"
                  : index === 1
                  ? "min-[1500px]:flex hidden"
                  : index === 2
                  ? "!hidden"
                  : ""
              }`}
              LineClass2={`${
                index === 0
                  ? "min-[1043px]:hidden flex"
                  : index === 1
                  ? "min-[1043px]:hidden flex"
                  : index === 2
                  ? "!hidden"
                  : ""
              }`}
              carClass={`${item.carClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Journey;
