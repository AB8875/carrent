import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";
import CommonYellowBtn from "@/components/common/CommonYellowBtn";
import Heading from "@/components/common/Heading";
import SubPara from "@/components/common/SubPara";
import React from "react";

function Header() {
  return (
    <div className="flex !items-center justify-center bg-[url('/assets/png/hero-bg-car-img.png')] bg-cover bg-center py-[78px] lg:h-screen lg:py-[120px] xl:py-[218px]">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="m-auto">
          <Heading
            title="Explore Sydney Opera House With a Reliable "
            spanTitle=" Car Rental"
            className="max-w-[1200px] text-center xl:!text-[64px]"
          />
          <SubPara
            title="One of the most iconic landmarks in the world, offering tours and performances"
            className="!text-light-white mt-[15px] text-center !text-sm"
          />
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row md:gap-6 lg:gap-8 xl:gap-[45px]">
            <CommonYellowBtn title="Book Now" link="/applicant/cars-listning" />
            <CommonTransperentBtn title="Contact Us" link="tel:+999999999999" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
