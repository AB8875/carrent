"use client";
import BlackBorderBtn from "@/components/common/BlackBorderBtn";
import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";

import Para from "@/components/common/Para";
import YellowBorderCommonBtn from "@/components/common/YellowBorderCommonBtn";
import {
  BlackWalletIcon,
  CrosIcon,
  WalletIcon,
} from "@/components/helper/user/Icon";
import React, { useState } from "react";
import PaymentTable from "../common/PaymentTable";
import AccountDropDown from "../common/AccountDropDown";

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withDrawModal, setWithDraw] = useState(false);

  if (isModalOpen || withDrawModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="lg:bg-light-white relative h-full overflow-hidden rounded-[8px] border-[#D9D9D9] pt-6 pb-3 md:rounded-[15px] lg:border-[1.056px] lg:pt-[30px] xl:rounded-[21px]">
      <div className="sticky top-0 flex flex-col justify-between gap-5 px-3 sm:px-4 md:px-5 lg:flex-row lg:items-center lg:gap-0 lg:px-6 xl:px-7">
        <Heading
          title="Payment"
          className="!text-gray mx-auto text-center !text-xl sm:text-start md:!text-2xl lg:mx-0"
        />
        <div className="lg:items-normal flex flex-col justify-between gap-3 min-[1515px]:!gap-8 lg:flex-row lg:items-center lg:gap-1.5">
          <div className="flex items-center gap-1 min-[1500px]:gap-5">
            <BlackWalletIcon className="max-w-[20px] sm:max-w-[30px] md:max-w-[35px]" />
            <span className="dark:text-gray text-xl font-semibold lg:text-[25px]">
              $200
            </span>
          </div>
          <div className="flex gap-2 min-[1515px]:!gap-8 lg:gap-1.5">
            <BlackBtn
              title="Add Amount"
              className="border-primary w-max whitespace-nowrap dark:border"
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
            <div onClick={() => setWithDraw(true)}>
              <YellowBorderCommonBtn
                title="Withdraw amount"
                className="w-max"
              />
            </div>
          </div>
        </div>
      </div>
      <PaymentTable />
      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white dark:bg-gray scroll-w-none max-h-[90vh] w-full max-w-[935px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <WalletIcon
                  className="max-w-[20px] sm:max-w-[30px] md:max-w-[35px]"
                  pathClassName="dark:fill-light-white"
                />
                <span className="text-sm font-semibold sm:text-base md:text-xl lg:text-2xl">
                  Add Money
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-xl font-bold"
              >
                <CrosIcon pathClassName="dark:fill-light-white " />
              </button>
            </div>
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 md:mt-12 md:gap-[15px] lg:mt-[62px]">
              <label
                htmlFor="enterAmount"
                className="dark:text-light-white text-xs text-gray-700 md:text-sm"
              >
                Enter Amount
              </label>
              <input
                type="number"
                placeholder="Enter Amount"
                className="border-gray dark:text-gray w-full rounded border-[0.2px] bg-white px-2.5 py-3 outline-none placeholder:font-medium sm:py-4 md:px-[15px] md:py-5 placeholder:md:text-lg lg:py-6 placeholder:lg:text-xl"
              />
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row md:mt-8 md:gap-5 lg:mt-10 lg:gap-[30px]">
              <BlackBtn
                title="Confirm"
                className="dark:border-primary sm:max-w-max dark:border"
                onClick={() => {}}
              />
              <div
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <BlackBorderBtn
                  title="Cancel"
                  className="dark:bg-primary dark:text-gray"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* withdraw */}
      {withDrawModal && (
        <div className="bg-opacity-50 fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white dark:bg-gray scroll-w-none max-h-[90vh] w-full max-w-[935px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <span className="dark:text-light-white text-sm font-semibold sm:text-base md:text-xl lg:text-2xl">
                  Withdraw Amounts
                </span>
                <Para
                  title="Please review your withdraw details"
                  classNmae="!text-gray-700 dark:!text-light-white text-base"
                />
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setWithDraw(false)}
              >
                <CrosIcon pathClassName="dark:fill-light-white " />
              </button>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 md:mt-8 md:gap-[15px] lg:mt-10">
                <label
                  htmlFor="enterAmount"
                  className="dark:text-light-white text-xs text-gray-700 md:text-sm"
                >
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="border-gray dark:text-gray w-full rounded border-[0.2px] bg-white px-2.5 py-3 outline-none placeholder:font-medium sm:py-4 md:px-[15px] md:py-5 placeholder:md:text-lg lg:py-6 placeholder:lg:text-xl"
                />
              </div>
              <AccountDropDown />
            </div>
            <Para
              title="Withdrawing money from your account is an easy and convenient process that can be done through multiple methods. Be sure to understand the limits, fees, and safety precautions associated with each withdrawal method."
              classNmae="!text-gray-700 text-base dark:!text-light-white mt-5 lg:mt-[25px]"
            />
            <div className="mt-6 flex flex-col gap-4 sm:flex-row md:mt-8 md:gap-5 lg:mt-10 lg:gap-[30px]">
              <BlackBtn
                title="Withdraw"
                className="dark:bg-primary dark:text-gray sm:max-w-max"
                onClick={() => {}}
              />
              <div
                onClick={() => {
                  setWithDraw(false);
                }}
              >
                <BlackBorderBtn
                  title="Cancel"
                  className="dark:bg-primary dark:text-gray"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
