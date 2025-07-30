"use client";
import React, { useState } from "react";
import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";

import Para from "@/components/common/Para";
import Image from "next/image";
import {
  uploadBrandData,
  uploadBrandData2,
  uploadHeaderData,
} from "@/components/helper/partner/Helper";
import { ArrowIcon } from "@/components/helper/partner/Icon";
import { RightArrowIcon } from "@/components/helper/user/Icon";

function Hero() {
  const [showBrand, setShowBrand] = useState(false);
  return (
    <div className="bg-gray">
      <div className="mx-auto flex max-w-[1720px] flex-wrap items-end gap-14 px-4 pt-20 pb-7.5 sm:px-6 sm:pb-10 md:px-8 md:pt-24 md:pb-16 lg:flex-nowrap lg:px-10 lg:pt-28 lg:pb-20 xl:px-12 xl:pt-32 2xl:gap-16 2xl:pt-[180px]">
        <div>
          <Heading
            className="text-center xl:max-w-[600px] xl:text-start"
            title="Upload Your Car Today With "
            spanTitle="Carent"
          />
          <Para
            title='"List Your Car for Sale – Upload It and Start Receiving Offers!"'
            classNmae="mt-4 pb-8 2xl:pb-14 text-center sm:text-start !text-base"
          />
          <div className="flex flex-col gap-y-3 md:gap-y-7">
            {uploadHeaderData.map((item, index) => (
              <div className="flex items-center gap-2 md:gap-5" key={index}>
                <span>
                  <ArrowIcon />
                </span>
                <h2 className="sm:text-md text-base leading-[144%] font-semibold text-white md:text-2xl 2xl:text-[28px]">
                  {item.heading}
                </h2>
              </div>
            ))}
          </div>
          <Image
            className="hidden pt-16 lg:flex"
            src={"/assets/png/upload-header-car.png"}
            alt="header-car"
            width={733}
            height={343}
          />
        </div>
        <div className="w-full max-w-full rounded-[20px] bg-white px-4 py-6 sm:px-7 sm:py-9 lg:max-w-[700px] 2xl:max-w-[810px] 2xl:px-[50px] 2xl:py-12">
          <h3 className="pb-4 text-center text-xl leading-[144%] font-semibold sm:pb-8 md:text-3xl lg:text-[36px] 2xl:pb-[58px]">
            Enter Your Car No.
          </h3>
          <input
            type="text"
            placeholder="DL 01 AB 12xx"
            className="border-gray bg-light-white 2xl: mx-auto mb-5 flex w-full max-w-[700px] justify-center rounded-md border-[1px] p-2 text-center text-sm font-semibold text-gray-900 outline-none placeholder:text-gray-900 sm:mb-6 sm:p-6 sm:text-base md:text-2xl 2xl:mb-10"
          />
          <BlackBtn
            title="Next"
            className="mx-auto !flex !justify-center !text-base sm:!text-2xl md:!w-[400px] md:!text-lg lg:!text-xl xl:!w-full"
          />
          <div className="flex w-full items-center gap-2.5 pt-5 sm:gap-4 sm:pt-6 md:gap-5.5 md:pt-8 2xl:pt-10">
            <div className="h-[1px] w-1/2 bg-gray-800"></div>
            <h2 className="text-sm leading-[144%] font-normal text-gray-800 sm:text-base md:text-xl">
              Or
            </h2>
            <div className="h-[1px] w-1/2 bg-gray-800"></div>
          </div>
          <h3 className="text-gray mt-5 pb-4 text-center text-sm leading-[144%] font-normal sm:mt-8 sm:pb-6 sm:text-xl md:mt-10 md:pb-7 md:text-2xl 2xl:mt-12 2xl:pb-8">
            Start with your Car Brand
          </h3>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 md:grid-cols-4 md:gap-5.5 lg:grid-cols-3 xl:grid-cols-4">
            {uploadBrandData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-[10px] bg-sky-500 p-2 sm:p-3 2xl:p-5.5"
              >
                <Image
                  className="max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[116px]"
                  src={item.brand}
                  alt="brand"
                  width={116}
                  height={58}
                />
              </div>
            ))}

            {uploadBrandData2.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center rounded-[10px] bg-sky-500 p-2 sm:p-3 2xl:p-5.5 ${
                  showBrand ? "" : "hidden"
                }`}
              >
                <Image
                  className="max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[116px]"
                  src={item.brand}
                  alt="brand"
                  width={116}
                  height={58}
                />
              </div>
            ))}
          </div>
          <h3
            onClick={() => setShowBrand(true)}
            className={`text-primary flex cursor-pointer items-center justify-center pt-5 text-sm leading-[144%] font-semibold sm:pt-7 sm:text-base md:pt-9 md:text-xl lg:pt-10 ${
              showBrand ? "hidden" : ""
            }`}
          >
            View All
            <span>
              <RightArrowIcon />
            </span>
          </h3>
        </div>
        <Image
          className="mx-auto flex pt-2 sm:pt-5 md:pt-7 lg:hidden lg:pt-16"
          src={"/assets/png/upload-header-car.png"}
          alt="header-car"
          width={733}
          height={343}
        />
      </div>
    </div>
  );
}
{
  /* <Select
            placeholder="Select Car Brand"
            id="brand"
            options={optionData}
          /> */
}

export default Hero;
