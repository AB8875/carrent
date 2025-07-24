"use client";
import BlackBorderBtn from "@/components/common/BlackBorderBtn";
import BlackBtn from "@/components/common/BlackBtn";
import CommonMyBookingTable from "@/components/common/CommonMyBookingTable";

import SubHeading from "@/components/common/SubHeading";
import {
  paymentInputData,
  paymentTableData,
} from "@/components/helper/user/Helper";
import { BlackWalletIcon, CrosIcon } from "@/components/helper/user/Icon";
import { TabsList } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { WalletIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function MyPayment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen || isModalOpenSec) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const [isModalOpenSec, setIsModalOpenSec] = useState(false);
  useEffect(() => {
    if (isModalOpenSec) {
      setIsModalOpen(false);
    }
  }, [isModalOpenSec]);

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="lg:bg-light-white dark:!bg-gray h-full w-full rounded-t-[7px] border-[#D9D9D9] sm:rounded-[16px] lg:rounded-t-[21px] lg:border">
        <div className="overflow-hidden px-3 pt-[30px] md:px-4 xl:px-[30px]">
          <div className="sticky top-0 flex flex-col items-center justify-between gap-5 sm:flex-row lg:gap-0">
            <SubHeading
              title="My Payments"
              className="!border-none !text-[25px]"
            />
            <div className="flex gap-3 min-[790px]:!flex-nowrap md:flex-wrap lg:gap-8">
              <div className="flex items-center gap-2 lg:gap-5">
                <BlackWalletIcon
                  className="max-w-[20px] sm:max-w-[30px] md:max-w-[35px]"
                  pathClassName="dark:fill-white"
                />
                <span className="text-xl font-semibold lg:text-[25px]">
                  $200
                </span>
              </div>
              <BlackBtn
                title="Add Amount"
                onClick={() => setIsModalOpen(true)}
                className="dark:border-primary !px-5 !py-2.5 text-nowrap lg:!px-[25px] lg:!py-[13px] dark:border"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 w-full md:mt-[50px]">
          <div className="w-full">
            {paymentTableData.map((item, index) => (
              <Tabs key={index} defaultValue="all" className="w-full">
                <div className="scroll-w-none overflow-x-scroll pb-1.5">
                  <TabsList className="min-w-[500px]">
                    <div className="flex justify-between border-b px-5 text-xs font-medium sm:text-sm md:text-[17px]">
                      {item.tabTitleData.map((items, indexs) => (
                        <TabsTrigger
                          key={indexs}
                          value={items.tabValue}
                          className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                        >
                          {items.tabTitle}
                        </TabsTrigger>
                      ))}
                    </div>
                  </TabsList>
                </div>
                <div className="max-h-[calc(100vh-330px)] min-h-[calc(100vh-330px)] overflow-auto pb-28 max-md:px-5 sm:max-h-[calc(100vh-300px)] sm:min-h-[calc(100vh-300px)] md:max-h-[calc(100vh-250px)] md:min-h-[calc(100vh-250px)]">
                  <TabsContent
                    value="all"
                    className="mt-8 md:mt-10 md:ml-5 lg:mt-[60px]"
                  >
                    {item.tableData.map((item, index) => (
                      <CommonMyBookingTable
                        onRowClick={() => {
                          setIsModalOpenSec(true);
                        }}
                        key={index}
                        details={item}
                      />
                    ))}
                  </TabsContent>
                  <TabsContent
                    className="mt-8 md:mt-10 md:ml-5 lg:mt-[60px]"
                    value="pending"
                  >
                    {" "}
                    {item.tableData.map((item, index) => (
                      <CommonMyBookingTable
                        key={index}
                        details={item}
                        onRowClick={() => {
                          setIsModalOpenSec(true);
                        }}
                      />
                    ))}
                  </TabsContent>
                  <TabsContent
                    className="mt-8 md:mt-10 md:ml-5 lg:mt-[60px]"
                    value="confirmed"
                  >
                    {item.tableData.map((item, index) => (
                      <CommonMyBookingTable
                        key={index}
                        details={item}
                        onRowClick={() => {
                          setIsModalOpenSec(true);
                        }}
                      />
                    ))}
                  </TabsContent>
                  <TabsContent
                    className="mt-8 md:mt-10 md:ml-5 lg:mt-[60px]"
                    value="failed"
                  >
                    {item.tableData.map((item, index) => (
                      <CommonMyBookingTable
                        key={index}
                        details={item}
                        onRowClick={() => {
                          setIsModalOpenSec(true);
                        }}
                      />
                    ))}
                  </TabsContent>
                </div>
              </Tabs>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white dark:bg-gray scroll-w-none h-max w-full max-w-[935px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <BlackWalletIcon
                  className="max-w-[20px] sm:max-w-[30px] md:max-w-[35px]"
                  pathClassName="dark:fill-white"
                />
                <span className="text-sm font-semibold sm:text-base md:text-xl lg:text-2xl">
                  Add Money
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xl font-bold"
              >
                <CrosIcon pathClassName="dark:fill-white" />
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
                className="border-gray dark:placeholder:text-gray w-full rounded border-[0.2px] bg-white px-2.5 py-3 outline-none placeholder:font-medium sm:py-4 md:px-[15px] md:py-5 placeholder:md:text-lg lg:py-6 placeholder:lg:text-xl"
              />
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row md:mt-8 md:gap-5 lg:mt-10 lg:gap-[30px]">
              <BlackBtn
                title="Confirm"
                className="dark:border-primary dark:shadow-primary sm:max-w-max"
              />
              <div>
                <BlackBorderBtn
                  title="Cancel"
                  className="dark:border-primary dark:text-primary dark:hover:text-gray dark:border"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* second modal */}
      {isModalOpenSec && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white dark:bg-gray scroll-w-none h-[90%] max-h-max w-full max-w-[935px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px]">
            <div className="flex items-center justify-between">
              <SubHeading
                title="Transaction Detail"
                className="text-gray !border-none !text-2xl"
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsModalOpenSec(false);
                }}
              >
                <CrosIcon pathClassName="dark:fill-white" />
              </div>
            </div>
            {paymentInputData.map((items, index) => (
              <div key={index} className="mt-[44px]">
                <span className="dark:text-light-white text-sm text-gray-700">
                  Car
                </span>
                <div className="mt-[15px] flex flex-col items-start justify-between gap-[43px] sm:flex-row">
                  <div className="mx-auto sm:mx-0">
                    <Image
                      src={items.imgPath}
                      width={204}
                      height={150}
                      alt="white car"
                      className="border-gray rounded border-[0.2px]"
                    />
                  </div>
                  <div className="flex items-center gap-3 lg:gap-8">
                    <div className="flex items-center gap-2 lg:gap-5">
                      <BlackWalletIcon
                        className="max-w-[20px] sm:max-w-[30px] md:max-w-[35px]"
                        pathClassName="dark:fill-white"
                      />
                      <span className="text-xl font-semibold lg:text-[25px]">
                        $200
                      </span>
                    </div>
                    <BlackBtn
                      title="Add Amount"
                      onClick={() => {
                        {
                          setIsModalOpenSec(false);
                        }
                        {
                          setIsModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-between gap-4 sm:gap-6 md:gap-[35px] lg:mt-8">
                  {items.subInputData.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full flex-col gap-2.5 sm:w-[47%] md:gap-[15px]"
                    >
                      <span className="text-xs md:text-sm">{item.lable}</span>
                      <span className="border-gray w-full rounded border-[0.2px] bg-white px-[15px] py-[11px] text-sm outline-none sm:max-w-[406px] md:text-base">
                        {item.placeholder}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPayment;
