"use client";
import CommonCarBikeBtnSection from "@/components/common/CommonCarBikeBtn";
import ContactForm from "@/components/common/ContactForm";

import Heading from "@/components/common/Heading";

import Para from "@/components/common/Para";
import { heroCommunBtn } from "@/components/helper/user/Helper";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  return (
    <div>
      <div
        className={`h- bg-[url('/assets/png/hero-bg-car-img.png')] bg-cover bg-center ${
          pathname.includes("/applicant/cars-listing-details") ||
          pathname.includes("applicant/cars-listing-details#review")
            ? "py-30 lg:py-24 xl:py-[150px]"
            : "py-8 pt-[60px] lg:pt-24 xl:pt-[150px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col items-center justify-center">
            <Heading
              title="Browse Cars For Rent"
              spanTitle="in Australia"
              className="max-w-[650px] text-center"
            />
            <Para
              title=" Find Your Ideal Vehicle for Exploring Australia’s Beautiful
            Landscapes"
              classNmae="text-center"
            />
          </div>
          <div
            className={`${
              pathname.includes("/applicant/cars-listing-details") ||
              pathname.includes("applicant/cars-listing-details#review")
                ? "hidden"
                : ""
            }`}
          >
            {heroCommunBtn.map((item, index) => (
              <CommonCarBikeBtnSection
                key={index}
                className="mt-[74px] hidden lg:block"
                data={item.data}
              />
            ))}
            <ContactForm className="mt-10 lg:-mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
