import React from "react";
import CarFeatures from "./CarFeatures";
import CarOnMap from "./CarOnMap";
import Reviews from "./Reviews";
import Link from "next/link";
import CarDetailCard from "./CarDetailCard";

import CarImg from "../my-car/CarImg";
import { datamain } from "@/components/helper/user/Helper";
import { partnerCarDetails } from "@/components/helper/ProfileHelper";

function CarDetails() {
  return (
    <>
      <div className="h-full overflow-hidden rounded-t-[20px] border-[#d9d9d9] py-5 lg:border-[1px] lg:bg-[#f9f9f9]">
        <div className="sticky top-0 flex items-center justify-between px-5 py-2.5 lg:bg-[#f9f9f9]">
          <h1 className="text-gray text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
            My Cars
          </h1>
          <Link
            className="text-primary bg-gray rounded-sm px-6 py-3 text-sm font-semibold sm:text-base md:text-lg lg:text-xl"
            href={"/partner/dashboard/my-car/edit-details"}
          >
            Edit Details
          </Link>
        </div>
        <div className="max-h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] overflow-y-auto px-5">
          <div>
            <CarImg />
          </div>
          {/*  */}
          {datamain.map((item, index) => (
            <CarDetailCard key={index} details={item.dataa} />
          ))}
          {/*  */}
          <div>
            <h1 className="border-primary inline-block border-b-[2px] text-2xl leading-[144%] font-semibold min-[1536px]:text-[40px] sm:text-3xl lg:text-[34px] 2xl:text-4xl">
              Car Details :
            </h1>
            <div className="mt-10 flex flex-col gap-8 sm:mt-12 sm:gap-10 md:mt-14 md:gap-12 lg:mt-16 lg:gap-16 xl:mt-[70px] xl:gap-[70px]">
              {partnerCarDetails.map((item, index) => (
                <div
                  key={index}
                  className="item-center # border-gray flex w-full justify-between gap-5 border-b-[1px] pb-4"
                >
                  <div className="item-center flex gap-2 sm:gap-4 md:gap-6">
                    <div className="mt-1">{item.icon}</div>
                    <p className="my-auto text-sm text-black/70 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="my-auto text-sm leading-[144%] font-semibold text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      {item.carDetail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
            <CarFeatures />
          </div>
          {/*  */}
          <div>
            <CarOnMap />
          </div>
          <div className="mb-80">
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
