"use client";
import React, { useState } from "react";
import SubHeading from "@/components/common/SubHeading";
import CarBikeCommonCard from "@/components/common/CarBikeCommonCard";
import { myCarsData } from "@/components/helper/user/Helper";
import { LeftArrowIcon } from "@/components/helper/user/Icon";

function MyCars() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(myCarsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-[1720px] px-4 py-[60px] sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <SubHeading
        title="My Cars"
        className="mx-auto text-[30px] lg:text-4xl xl:text-5xl"
      />
      <div className="mt-10 flex flex-col gap-6 md:gap-[30px] lg:mt-[60px] lg:gap-[60px]">
        {myCarsData.slice(startIndex, endIndex).map((item, index) => (
          <CarBikeCommonCard
            key={index}
            details={item}
            className="!bg-light-white"
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-4 lg:mt-[60px] lg:gap-[25px]">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-[41px] w-[41px] cursor-pointer items-center justify-center rounded-full border disabled:opacity-50"
        >
          <LeftArrowIcon />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`text-light-white h-[41px] w-[41px] cursor-pointer rounded-full border text-sm font-medium ${
              currentPage === page ? "bg-gray" : "bg-primary"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="flex h-[41px] w-[41px] rotate-180 cursor-pointer items-center justify-center rounded-full border disabled:opacity-50"
        >
          <LeftArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default MyCars;
