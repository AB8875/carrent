"use client";
import React from "react";

import SubHeading from "@/components/common/SubHeading";
import SubPara from "@/components/common/SubPara";
import { StarIcon } from "@/components/helper/partner/Icon";
interface cardData {
  id: string;
  carName: string;
  rattings: {
    star: string;
    users: string;
  };
  assest: {
    icon: React.ReactNode;
    name: string;
  }[];
  pekupLocation: string;
  features: string;
  avableDate: {
    start: string;
    end: string;
  };
  price: {
    price: string;
    offerPrice: string;
  };
}

interface IPROPS {
  className?: string;
  details: cardData;
}
const CarDetailCard: React.FC<IPROPS> = ({ className, details }) => {
  return (
    <div
      className={`my-8 rounded-[10px] bg-white px-0 py-5 sm:my-10 sm:py-7 md:my-12 md:rounded-[20px] md:px-5 lg:my-14 lg:py-8 xl:my-[70px] xl:px-8.5 xl:py-11.5 ${className}`}
    >
      <div className="flex h-full flex-col md:gap-8 lg:flex-row lg:gap-[50px]">
        <div className="w-full">
          <div className="flex justify-between">
            <SubHeading
              title={details.carName}
              className="dark:!text-gray !border-none !text-xl md:!text-2xl xl:!text-[32px]"
            />
            <div className="flex flex-col items-end justify-end text-xs md:text-base">
              <div className="flex gap-2.5">
                <div className="flex"></div>
                <span className="dark:!text-gray whitespace-nowrap">
                  ({details.rattings.star})
                </span>
              </div>
              <span className="dark:!text-gray">
                <span>{details.rattings.users} </span>
                ratings
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:gap-x-[30px] md:mt-4 md:text-base xl:mt-6">
            {details.assest.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="dark:!text-gray flex items-center gap-2.5"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="dark:!text-gray mt-[14px] flex flex-col justify-between gap-3 md:mt-6 md:flex-row md:gap-0 xl:mt-[42px]">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex gap-[3px]">
                <SubHeading
                  title="Available On : "
                  className="dark:!text-gray !border-none !text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                />
                <SubPara
                  title={
                    details.avableDate.start + "-" + details.avableDate.end
                  }
                  className="!text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-[28px] flex flex-col justify-between !gap-10 md:flex-row md:items-center md:gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
