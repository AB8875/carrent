import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";
import CommonYellowBtn from "@/components/common/CommonYellowBtn";
import Heading from "@/components/common/Heading";
import SubPara from "@/components/common/SubPara";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="bg-gray relative pt-[80px] pb-[60px] md:pt-[190px] md:pb-[130px]">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="relative z-10">
            <Heading
              title="Step-By-Step Guide to Rent a Car & Bike "
              spanTitle=" in Australia"
              className="!text-light-white mx-auto max-w-[810px] !border-none text-center !leading-[144%] md:mx-0 md:text-start xl:!text-[64px]"
            />
            <SubPara
              title="Your Journey Begins Here: Follow These Easy Steps to Book Your Rental Car & Bike Today"
              className="!text-light-white mt-[15px] max-w-[713px] text-center md:mt-5 md:text-start"
            />
            <div className="mt-10 flex flex-col gap-5 md:flex-row lg:mt-[50px] lg:gap-[30px]">
              <CommonYellowBtn title="Book Now" link="#" />
              <CommonTransperentBtn
                title="Contact Us"
                link="#"
                className="block md:hidden xl:block"
              />
              <CommonYellowBtn
                title="Contact Us"
                link="#"
                className="hidden md:block xl:hidden"
              />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 hidden md:block">
            <Image
              src={"/assets/png/how-to-book-car-img.png"}
              width={1000}
              height={500}
              alt="yellow camaro car img"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={"/assets/png/how-to-book-car-img-small.png"}
              width={1000}
              height={500}
              alt="yellow camaro car img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
