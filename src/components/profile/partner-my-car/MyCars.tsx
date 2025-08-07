"use client";
import CarBikeCommonCard from "@/components/common/CarBikeCommonCard";
import { addCarDetails } from "@/components/helper/ProfileHelper";
import { LeftArrowIcon } from "@/components/helper/user/Icon";

import React, { useState } from "react";

function MyCars() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(addCarDetails.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const myCarsDashBoard = addCarDetails.slice(startIndex, endIndex);

  return (
    <>
      <div className="md:bg-light-white mb-2.5 h-full w-full overflow-hidden rounded-t-[20px] border-[#d9d9d9] px-5 sm:mr-4 md:border lg:mr-[30px]">
        <div className="flex items-center justify-between">
          <h1 className="text-gray py-[30px] text-2xl font-semibold">
            My Cars
          </h1>
          <button className="text-primary bg-gray rounded-md px-6 py-3 text-xl font-semibold">
            Add Car
          </button>
        </div>
        <div className="flex flex-col gap-10">
          {myCarsDashBoard.map((item, index) => (
            <CarBikeCommonCard key={index} details={item} />
          ))}
        </div>
        {/* paginatiom */}
        <div className="mt-6 flex justify-center gap-2 pb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-gray !coursor-pointer flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
          >
            <LeftArrowIcon className="h-[26px] w-[10px]" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`bg-primary coursor-pointer" h-[26px] w-[26px] rounded-full text-[17px] text-white ${
                currentPage === i + 1 ? "!bg-gray" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-gray coursor-pointer flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
          >
            <LeftArrowIcon className="h-[26px] w-[10px] -rotate-180" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyCars;
