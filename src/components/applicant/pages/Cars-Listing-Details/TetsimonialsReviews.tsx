"use client";
import BlackBtn from "@/components/common/BlackBtn";

import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { tetsimonialsReviewsData } from "@/components/helper/user/Helper";
import { StarIcon } from "@/components/helper/user/Icon";
import Image from "next/image";
import React, { useState } from "react";

function TetsimonialsReviews() {
  const [showAllList, setShowAllList] = useState<boolean[]>([]);

  return (
    <div
      id="review"
      className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:block md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]"
    >
      <SubHeading title="Tetsimonials & Reviews" className="mx-auto md:mx-0" />

      {tetsimonialsReviewsData.map((item, index) => {
        const showAll = showAllList[index] || false;
        const ratingPercent = (parseFloat(item.overalRating) / 5) * 100;

        return (
          <div key={index}>
            <div className="mt-10 flex flex-col gap-10 lg:mt-[60px] lg:flex-row lg:gap-12">
              <div className="mx-auto flex flex-col justify-between gap-6 lg:mx-0 lg:w-[20%]">
                <SubHeading
                  title={item.totalReviews}
                  className="lg:text-star mx-auto !border-none text-2xl !font-normal lg:mx-0 lg:!text-[32px]"
                  spanTitle=" Reviews"
                  spanClass="!font-medium !text-2xl lg:!text-3xl xl:!text-[31px] dark:!text-light-white !text-gray"
                />
                {/* chart */}
                <div className="bg-grayLight relative flex h-[193px] w-[193px] flex-col items-center justify-center rounded-full md:h-[231px] md:w-[231px]">
                  <div
                    style={{
                      background: `conic-gradient(#f9b701 ${ratingPercent}%, #0a1c2a ${ratingPercent}% 100%)`,
                    }}
                    className="absolute h-full w-full rounded-full"
                  ></div>
                  <div className="z-10 flex h-[180px] w-[180px] flex-col items-center justify-center gap-4 rounded-full bg-white md:h-[215px] md:w-[215px]">
                    <h3 className="lg:ext-[22px] text-lg leading-[156%] font-medium">
                      Overal Rating
                    </h3>
                    <h2 className="text-[37px] leading-[78%] font-medium lg:text-[43px]">
                      {item.overalRating}
                    </h2>
                    <h3 className="lg:ext-[22px] text-lg leading-[156%] font-medium">
                      Out of 5
                    </h3>
                  </div>
                </div>
                {/* <p className="text-sm font-semibold text-black">
                      Profile Completion
                    </p> */}
              </div>

              <div className="flex flex-wrap justify-between gap-[26px] md:gap-8 lg:w-[80%] lg:gap-10">
                {item.forRating.map((items, indexs) => (
                  <div key={indexs} className="w-full sm:w-[47%]">
                    <Para
                      title={items.title}
                      classNmae="!text-gray-700 md:!text-base !text-sm lg:!text-lg xl:!text-xl dark:!text-light-white"
                    />
                    <div className="border-gray dark:!border-light-white !text-gray flex w-full items-center justify-between border-b py-2 md:py-[13px]">
                      <Para
                        title={items.ratingPerformance}
                        classNmae="dark:!text-light-white !text-gray md:!text-base !text-sm lg:!text-lg xl:!text-xl"
                      />
                      <div className="flex items-center gap-2.5 text-xl leading-[148%] font-medium">
                        <StarIcon />
                        <span className="dark:!text-light-white">
                          {items.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Cards */}
            <div className="mt-[60px] flex max-h-[608px] flex-col gap-10 overflow-auto">
              {(showAll ? item.customer : item.customer.slice(0, 2)).map(
                (itm, idx) => (
                  <div
                    key={idx}
                    className="bg-light-white flex flex-col gap-3 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-5">
                      <Image
                        src={itm.img}
                        width={76}
                        height={76}
                        alt="customer img"
                        className="w-[50px] lg:w-[76px]"
                      />
                      <Para
                        title={itm.customerName}
                        classNmae="!text-gray dark:!text-light-white !text-xl dark:text-light-white font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2.5 text-xl leading-[148%] font-medium">
                      <StarIcon />
                      <span>{itm.ratting}</span>
                    </div>
                    <Para
                      title={itm.customerFeedback}
                      classNmae="sm:!text-sm dark:!text-light-white !text-xs md:!text-base font-medium leading-[195%] !text-gray"
                    />
                  </div>
                )
              )}
            </div>

            {/* View More / Show Less Buttons */}
            {item.customer.length > 2 && (
              <div className="mt-10">
                {!showAll ? (
                  <BlackBtn
                    title="View More"
                    className="w-max"
                    onClick={() => {
                      const updated = [...showAllList];
                      updated[index] = true;
                      setShowAllList(updated);
                    }}
                  />
                ) : (
                  <BlackBtn
                    title="Show Less"
                    className="w-max"
                    onClick={() => {
                      const updated = [...showAllList];
                      updated[index] = false;
                      setShowAllList(updated);
                    }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TetsimonialsReviews;
