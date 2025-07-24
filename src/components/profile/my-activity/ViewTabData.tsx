"use client";
import React, { useState } from "react";

import CarSaveOrViewedCard from "./CarSaveOrViewedCard";
import { usePathname } from "next/navigation";
import { myActivityDataSec } from "@/components/helper/user/Helper";
import { LeftArrowIcon } from "@/components/helper/user/Icon";

function ViewTabData() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(myActivityDataSec.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pathname = usePathname();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = myActivityDataSec.slice(startIndex, endIndex);
  return (
    <div>
      <div
        className={`grid justify-between gap-3 md:gap-4 lg:gap-5 xl:gap-6 ${
          pathname === "/applicant/my-activity"
            ? "grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 min-[1024px]:grid-cols-2 min-[1570px]:grid-cols-3 min-[1870px]:grid-cols-4"
        } `}
      >
        {paginatedData.map((item, index) => (
          <CarSaveOrViewedCard
            key={index}
            carCompany={item.carCompany}
            carModel={item.carModel}
            seatNo={item.seatNo}
            doorNo={item.seatNo}
            path={item.path}
            imgPath={item.imgPath}
            icon={item.icon}
          />
        ))}
      </div>
      {/* Pagination */}
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
            className={`bg-primary !coursor-pointer h-[26px] w-[26px] rounded-full text-[17px] text-white ${
              currentPage === i + 1 ? "!bg-gray" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border-gray !coursor-pointer flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border disabled:opacity-50"
        >
          <LeftArrowIcon className="h-[26px] w-[10px] -rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default ViewTabData;
