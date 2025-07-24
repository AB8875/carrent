"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import Image from "next/image";
import { CrosIcon } from "../helper/user/Icon";
import { transitionDetailsInputData } from "../helper/user/Helper";

interface data {
  thData: { item: string }[];
  tBodyRow: { td: { item: string }[] }[];
}

interface IPROPS {
  details: data;
  onRowClick?: (rowIndex: number, rowData: { td: { item: string }[] }) => void;
}

const CommonMyBookingTable: React.FC<IPROPS> = ({ details, onRowClick }) => {
  const [transactionDetails, setTransactionDetails] = useState(false);

  const pathName = usePathname();

  if (transactionDetails) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="scroll-w-none overflow-auto pb-8">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="text-sm font-bold md:text-[15.104px]">
            {details.thData.map((item, index) => (
              <td
                key={index}
                className={`dark:text-gray pb-3 md:pb-4 lg:pb-5 xl:pb-[36px] ${
                  index === 4 ? "pe-5 xl:pe-[35px]" : ""
                } ${
                  pathName === "/dashboard/payment"
                    ? "dark:!text-light-white"
                    : ""
                }`}
              >
                {item.item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {details.tBodyRow.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(rowIndex, item);
                } else {
                  setTransactionDetails(true);
                }
              }}
              className="cursor-pointer text-xs text-gray-700 hover:bg-white hover:shadow-[0px_4.315px_4.315px_0px_rgba(0,0,0,0.25)] sm:text-sm md:text-[15.104px]"
            >
              {item.td.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 capitalize lg:py-[11px] ${
                    colIndex === 4 ? "pe-5 xl:pe-[35px]" : ""
                  } ${colIndex === 0 ? "pl-1.5" : ""} ${
                    cell.item.toLowerCase() === "confirmed"
                      ? "text-[#0BD22B]"
                      : cell.item.toLowerCase() === "pending"
                      ? "text-[#F9B701]"
                      : ["cancelled", "failed"].includes(
                          cell.item.toLowerCase()
                        )
                      ? "text-[#E33629]"
                      : ""
                  }`}
                >
                  {cell.item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Transaction Details Modal (default behavior) */}
      {transactionDetails && !onRowClick && (
        <div className="bg-opacity-50 fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white dark:bg-gray dark:border-light-white scroll-w-none max-h-[90vh] w-full max-w-[1620px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px] dark:border">
            <div className="flex items-start justify-between">
              <h2 className="w-full text-center text-sm font-semibold sm:text-base md:text-xl lg:text-2xl">
                Transaction Details
              </h2>
              <button
                className="cursor-pointer"
                onClick={() => setTransactionDetails(false)}
              >
                <CrosIcon pathClassName="dark:fill-light-white" />
              </button>
            </div>
            <div className="grid-col-1 mt-8 grid grid-flow-row gap-4 sm:grid-cols-2 sm:gap-y-5 md:mt-[42] md:grid-cols-3 md:gap-y-8 lg:gap-y-[50px]">
              <div className="col-span-1 mx-auto sm:mx-0">
                <Image
                  src={"/assets/png/mahindra-tuv.png"}
                  width={243}
                  height={177}
                  alt="car img"
                />
              </div>
              {transitionDetailsInputData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col justify-end gap-2 lg:gap-2.5"
                >
                  <div className="tex-gray flex text-sm font-semibold sm:text-base md:text-lg lg:text-[21px]">
                    {item.title}
                  </div>
                  <div className="bg-sky dark:text-gray rounded-[8px] px-3 py-3 text-base outline-none sm:max-w-[411px] sm:px-4 sm:py-3.5 md:px-6 md:text-xl lg:px-[35px] lg:py-[17px] xl:text-2xl">
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonMyBookingTable;
