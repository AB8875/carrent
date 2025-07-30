import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import React from "react";

function LimitedOffer() {
  return (
    <div className="bg-light-white dark:!bg-gray relative sm:bg-white">
      <div className="relative z-50 mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 py-[60px] sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
        <div>
          <SubHeading
            title="Limited-Time Offer :  Exclusive Discount for Early Birds!"
            className="dark:text- mx-auto !border-none text-center !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-[40px]"
          />
          <Para
            title="We're excited to offer an exclusive discount to the first 100 customers who book a car rental with us! Whether you're planning a weekend getaway, a business trip, or a road trip adventure, this is the perfect opportunity to get the best deal on your next rental."
            classNmae="text-center !text-gray !text-xs sm:!text-sm md:!text-base lg:!text-xl xl:!text-2xl sm:font-medium max-w-[1541px] mt-[15px] md:mt-[30px] dark:!text-light-white"
          />
        </div>
      </div>
      <div className="absolute right-0 -bottom-[200px] z-50 hidden lg:block">
        <Image
          src={"/assets/png/blue-gini-img.png"}
          width={396}
          height={372}
          alt="blue car img"
        />
      </div>
    </div>
  );
}

export default LimitedOffer;
