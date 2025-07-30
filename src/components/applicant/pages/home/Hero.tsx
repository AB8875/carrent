"use client";
import React from "react";
import Image from "next/image";

import Para from "@/components/common/Para";
import CommonForm from "@/components/common/ContactForm";
import Heading from "@/components/common/Heading";
import CommonCarBikeBtnSection from "@/components/common/CommonCarBikeBtn";
import SubPara from "@/components/common/SubPara";
import {
  carBrandClientCounting,
  heroCommunBtn2,
} from "@/components/helper/user/Helper";
function Hero() {
  return (
    <div className="bg-gray relative bottom-0 overflow-hidden pb-[30px] lg:pb-12 xl:pb-24">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex pt-10 md:pt-12 lg:pt-24 xl:pt-[179px]">
          <div className="mx-auto mt-9 flex flex-col items-center lg:mx-0 lg:items-start">
            <Heading
              title="Explore The Road With Our Cars & Bikes "
              spanTitle="in Australia"
              className="max-w-[856px] text-center lg:text-start"
            />

            <SubPara
              title="From city streets to scenic routes, discover the world on your terms with our rental cars & Bikes."
              className="!text-light-white mt-[15px] max-w-[659px] text-center lg:mt-5 lg:text-start lg:font-semibold"
            />
            <div className="mt-10 flex md:mt-12 lg:mt-[80px]">
              {carBrandClientCounting.map((item, index) => (
                <div key={index} className={item.className}>
                  <Heading
                    title={item.coutner}
                    className="!text-primary !text-[32px] lg:text-[40px]"
                  />
                  <Para title={item.counterName} classNmae="!text-base" />
                </div>
              ))}
            </div>
          </div>
          <div className="right-0 -mr-12 hidden min-[1700px]:absolute min-[1700px]:-mr-0 lg:block">
            <Image
              src={"/assets/png/heroCarImg.png"}
              width={1059}
              height={711}
              alt="img"
            />
          </div>
        </div>
        {heroCommunBtn2.map((item, index) => (
          <CommonCarBikeBtnSection
            key={index}
            data={item.data}
            className="mt-24 hidden lg:block xl:mt-[155px]"
          />
        ))}
        <CommonForm className="mt-10 lg:!-mt-6" />
      </div>
      <div className="mt-10 block lg:hidden">
        <Image
          src={"/assets/png/hero-small-car.png"}
          width={1000}
          height={500}
          alt="car img"
        />
      </div>
    </div>
  );
}

export default Hero;
