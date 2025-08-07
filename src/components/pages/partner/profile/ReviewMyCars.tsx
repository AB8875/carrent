"use client";
import React, { useState } from "react";
import CustomerReviewCard from "@/components/common/CustomerReviewCard";
import Heading from "@/components/common/Heading";

import Image from "next/image";
import { reviewMyCarData } from "@/components/helper/user/Helper";
import { LeftArrowIcon } from "@/components/helper/user/Icon";

const CARDS_PER_PAGE = 9;

function ReviewMyCars() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviewMyCarData.length / CARDS_PER_PAGE);

  const paginatedData = reviewMyCarData.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="lg:bg-light-white relative h-full overflow-hidden rounded-[8px] border-[#D9D9D9] pb-3 md:rounded-[15px] lg:border-[1.056px] xl:rounded-[21px]">
      <div className="absolute -top-[0px] right-0 z-[9] hidden md:-right-[20px] lg:block">
        <Image
          src={"/assets/svg/small-car-img.svg"}
          width={145}
          height={68}
          alt="car img"
        />
      </div>
      <div className="sticky top-0 px-3 pt-6 pb-5 sm:px-4 md:px-6 lg:px-[30px] lg:pt-[30px]">
        <Heading
          title="Review of my car"
          className="!text-gray text-center !text-xl sm:text-start md:!text-2xl"
        />
      </div>
      <div className="max-h-[calc(100vh-208px)] min-h-[calc(100vh-208px)] overflow-y-auto px-3 pb-24 sm:px-4 md:px-6 lg:max-h-[calc(100vh-255px)] lg:min-h-[calc(100vh-255px)] lg:px-[30px]">
        <div className="grid-row-3 mt-10 grid grid-flow-row grid-cols-1 gap-5 min-[1610px]:!grid-cols-3 sm:grid-cols-2">
          {paginatedData.map((item, index) => (
            <CustomerReviewCard
              key={index}
              customerImg={item.customerImg}
              customerName={item.customerName}
              cutomerReview={item.customerReviewPara}
              ratingData={item.ratingData}
              className="col-span-1 bg-white"
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-gray !coursor-pointer flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
          >
            <LeftArrowIcon className="h-[26px] w-[10px]" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`bg-primary coursor-pointer h-[26px] w-[26px] rounded-full text-[17px] text-white ${
                currentPage === i + 1 ? "!bg-gray" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-gray coursor-pointer flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
          >
            <LeftArrowIcon className="h-[26px] w-[10px] -rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewMyCars;
