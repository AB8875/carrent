import Heading from "@/components/common/Heading";
import Discounts from "@/components/pages/partner/discount/Discounts";

import React from "react";

function page() {
  return (
    <div>
      <div className="flex h-[calc(100vh-101px)] items-center justify-center bg-[url('/assets/png/about-us-hero-bg.png')] bg-cover py-8">
        <div className="max-w-[1000px] px-4 text-center">
          <Heading
            title="Exclusive"
            spanTitle="  Offers & Discounts"
            title2="Just For You"
          />
          <p className="mt-2 text-base leading-[144%] font-semibold text-white sm:mt-4 sm:text-lg md:text-xl">
            Discover Amazing Discounts, Exclusive Promotions, and Special Deals
            That Make Your Dream Car More Affordable Than Ever!
          </p>
        </div>
      </div>
      <Discounts />
    </div>
  );
}

export default page;
