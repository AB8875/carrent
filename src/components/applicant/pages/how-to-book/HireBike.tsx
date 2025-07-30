import SubHeading from "@/components/common/SubHeading";
import React from "react";
import CarBikeHireCard from "../../commen/CarBikeHireCard";
import { carBikeHireCardData } from "@/components/helper/user/Helper";

function HireBike() {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
      <SubHeading
        title="Quick Guide To Hire Bike & Car "
        spanTitle="in Australia"
        className="mx-auto text-center lg:mx-0"
      />
      <div className="mt-10 flex flex-col gap-10 lg:mt-[35px] lg:gap-[60px] xl:gap-24">
        {carBikeHireCardData.map((item, index) => (
          <CarBikeHireCard
            key={index}
            img={item.imgPath}
            heading={item.heading}
            listItem={item.listItem}
            className={`${
              index === 1 ? "lg:!flex-row-reverse lg:ps-12 xl:ps-[72px]" : ""
            } ${
              index === 3 ? "lg:!flex-row-reverse lg:ps-12 xl:ps-[72px]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HireBike;
