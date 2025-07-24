"use client";

import React, { useState } from "react";
import { carDeteilsCardData } from "@/components/common/helper/ApplicantHelper";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { LeftArrowIcon } from "@/components/common/icon/ApplicantIcon";
import ProfileCarCard from "./ProfileCarCard";
import BlackBtn from "../BlackBtn";

function MyCarPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(carDeteilsCardData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = carDeteilsCardData.slice(startIndex, endIndex);

  return (
    <div className="mx-auto flex h-full w-full max-w-[1050px] flex-col justify-between px-5 md:mr-4 2xl:mr-8 2xl:px-8">
      <div className="flex items-center justify-between pb-12">
        <h3 className="text-2xl font-semibold">My Cars</h3>
        <BlackBtn className="!w-fit" title="Add Car" />
      </div>
      <div className="flex flex-col gap-10">
        {paginatedData.map((item, index) => (
          <ProfileCarCard key={index} details={item} />
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

export default MyCarPagination;
