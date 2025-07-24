"use client";
import React from "react";
import MyCarForm from "./MyCarForm";

function CarDetailsToFeatures() {
  return (
    <div className="mb-60">
      <div className="mt-20 flex items-center justify-center gap-3 md:gap-4">
        <span className="text-gray w-max text-lg leading-[144%] font-semibold text-nowrap md:text-xl lg:text-2xl xl:text-[32px] dark:text-white">
          Car Details
        </span>
        <span className="relative w-[60%] max-w-[498px] border-t border-dashed border-[#000] dark:border-white">
          <span className="absolute -top-2 left-0 h-[12px] w-[12px] rounded-full bg-[#000] lg:h-[16px] lg:w-[16px] dark:bg-white"></span>
          <span className="absolute -top-2 right-0 h-[12px] w-[12px] rounded-full bg-[#000] lg:h-[16px] lg:w-[16px] dark:bg-white"></span>
        </span>
        <span className="text-gray w-max text-lg leading-[144%] font-semibold text-nowrap md:text-xl lg:text-2xl xl:text-[32px] dark:text-white">
          Car Features
        </span>
      </div>
      <div className="mt-6 pb-10 lg:mt-8 xl:mt-[50px]">
        <MyCarForm />
      </div>
    </div>
  );
}

export default CarDetailsToFeatures;
