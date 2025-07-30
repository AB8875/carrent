import SubHeading from "@/components/common/SubHeading";
import React from "react";

function About() {
  return (
    <div>
      <div className="mx-auto mb-16 max-w-[1720px] px-4 pt-16 pb-10 sm:px-6 md:px-8 md:pt-24 md:pb-24 lg:mb-28 lg:px-10 lg:pt-28 xl:mb-32 xl:px-12 xl:pt-32 2xl:mb-[155px]">
        <SubHeading title="About Us" className="mx-auto" />
        <p className="mt-4 text-center text-lg leading-[155%] font-normal text-gray-700 sm:mt-5 sm:text-xl md:mt-6 md:text-2xl lg:text-[28px] xl:text-3xl 2xl:text-[32px] dark:text-white">
          At That sit we simplify the car-selling process by offering a quick,
          secure, and hassle-free platform to help you sell your vehicle with
          ease. Whether you’re looking to upgrade or just want to sell your car,
          we ensure that the entire process—from listing to payment—is smooth
          and efficient.We pride ourselves on offering a transparent,
          no-hidden-fee experience with features like free home pickup, instant
          online valuations, and professional car inspection services. Our
          mission is to connect sellers with serious buyers, giving them the
          best value for their cars, all while saving time and effort.
        </p>
      </div>
    </div>
  );
}

export default About;
