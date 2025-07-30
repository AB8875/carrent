import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";
import CommonYellowBtn from "@/components/common/CommonYellowBtn";
import Heading from "@/components/common/Heading";
import SubPara from "@/components/common/SubPara";
import React from "react";

function Header() {
  return (
    <div className="flex !items-center justify-center bg-[url('/assets/png/hero-bg-car-img.png')] bg-cover bg-center py-[120px] pb-12 lg:h-screen xl:pt-[150px]">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="m-auto">
          <SubPara
            title="Drive More, Pay Less !"
            className="!text-primary lg hidden text-center !text-base sm:block md:!text-lg lg:!text-xl lg:font-semibold"
          />
          <Heading
            title="Your Perfect Ride at an  "
            spanTitle="Unbeatable Price"
            className="text-center"
          />
          <SubPara
            title="Find Your Ideal Vehicle for Exploring Australia’s Beautiful Landscapes"
            className="!text-light-white mt-[15px] text-center !text-base md:!text-lg lg:mt-5 lg:!text-xl lg:font-semibold"
          />
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row md:gap-6 lg:gap-8 xl:gap-[45px]">
            <CommonYellowBtn title="Book Now" link="#" />
            <CommonTransperentBtn title="Contact Us" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
