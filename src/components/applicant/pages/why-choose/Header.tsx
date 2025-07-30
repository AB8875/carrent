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
              title="Why We’re the Best Choice for Your Rental Needs"
              spanTitle=" in Australia"
              className="!text-light-white mx-auto max-w-[800px] !border-none text-center md:mx-0 md:text-start xl:!text-[64px]"
            />
            <SubPara
              title="Rent a car with ease, choose from a wide variety of models, and enjoy flexible rental periods tailored to your needs."
              className="!text-light-white mt-[15px] max-w-[713px] text-center md:mt-5 md:text-start"
            />
          </div>
          <div className="absolute right-0 bottom-0 hidden md:block">
            <Image
              src={"/assets/png/camaro-ZL1-car-img .png"}
              width={1000}
              height={500}
              alt="yellow camaro car img"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={"/assets/png/camaro-ZL1-small-car.png"}
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
