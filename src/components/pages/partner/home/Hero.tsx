import Heading from "@/components/common/Heading";
import { headerData } from "@/components/helper/partner/Helper";

import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="bg-gray relative flex h-full flex-row-reverse flex-wrap py-20 md:min-h-[calc(100vh-100px)] xl:flex-nowrap">
      <div className="absolute bottom-5 z-0 hidden md:flex">
        <Image
          className="max-w-[450px] min-[1850px]:!max-w-[1230px] md:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px]"
          src={"/assets/png/hero-header-car.png"}
          alt="hero-car"
          width={1230}
          height={710}
        />
      </div>

      <div className="relative flex w-full max-w-[1720px] flex-col justify-center gap-y-14 px-4 py-8 text-center sm:gap-y-18 sm:px-6 md:m-auto md:justify-start md:px-8 md:text-start lg:px-10 xl:px-12">
        <div>
          <Heading
            className="mb-3 max-w-[790px] sm:mb-5"
            title="Upload Your Car Today"
            spanTitle="Fast , Simple & Secure"
          />
          <p className="max-w-[660px] text-base leading-[144%] font-semibold text-white sm:text-lg md:text-xl">
            {`"Get top offers from trusted buyers and sell your car quickly and
            securely."`}
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-5 sm:flex-nowrap md:m-auto md:mt-14 md:justify-start md:gap-10 lg:gap-[63px] xl:mt-16 2xl:mt-20">
            {headerData.map((item, index) => (
              <div key={index} className="w-[100px] text-center sm:w-[135px]">
                <span className="mb-2.5 flex justify-center">{item.icon}</span>
                <h3 className="text-sm leading-[144%] font-normal text-white sm:text-lg xl:text-xl">
                  {item.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-[400px] sm:max-w-[600px] md:hidden">
          <Image
            src={"/assets/png/hero-small-car.png"}
            alt="hero-img-small"
            width={600}
            height={155}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
