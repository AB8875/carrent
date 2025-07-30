"use client";

import React, { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import CarBikeCommonCard from "@/components/common/CarBikeCommonCard";
import { LeftArrowIcon } from "@/components/helper/user/Icon";
import { bikeDetails } from "@/components/helper/user/Helper";

function CarDeteils() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(bikeDetails.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = bikeDetails.slice(startIndex, endIndex);

  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pt-[52px] pb-[60px] sm:px-6 md:px-8 md:py-[70px] lg:px-10 lg:py-24 xl:px-12 xl:pt-[116px] xl:pb-[155px]">
      <div className="flex flex-col gap-[60px]">
        {paginatedData.map((item, index) => (
          <CarBikeCommonCard key={index} details={item} />
        ))}
      </div>
      <div className="mt-10 lg:mt-[60px]">
        <Pagination>
          <PaginationContent className="flex gap-4 md:gap-6">
            <PaginationItem>
              <div
                onClick={() => handlePageChange(currentPage - 1)}
                className={`border-gray text-light-white hidden h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full border text-sm sm:flex md:h-[41px] md:w-[41px] md:text-[26px] ${
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <LeftArrowIcon />
              </div>
            </PaginationItem>
            <PaginationItem className="flex gap-4 md:gap-6">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`${
                    currentPage === i + 1 ? "bg-gray" : "bg-primary"
                  } text-light-white flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full text-sm md:h-[41px] md:w-[41px]`}
                >
                  {i + 1}
                </div>
              ))}
            </PaginationItem>
            <PaginationItem>
              <div
                onClick={() => handlePageChange(currentPage + 1)}
                className={`border-gray text-light-white hidden h-[20px] w-[20px] rotate-180 cursor-pointer items-center justify-center rounded-full border text-sm sm:flex md:h-[41px] md:w-[41px] md:text-[26px] ${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <LeftArrowIcon />
              </div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default CarDeteils;
