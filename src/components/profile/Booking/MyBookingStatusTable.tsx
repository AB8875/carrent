"use client";
import BlackBtn from "@/components/common/BlackBtn";
import CommonMyBookingTable from "@/components/common/CommonMyBookingTable";
import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";
import {
  myBookingCarDetailInputData,
  tableData,
} from "@/components/helper/user/Helper";
import { CrosIcon } from "@/components/helper/user/Icon";
import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { TabsList } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookedCar from "./BookedCar";

function MyBookingStatusTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <div className="h-full w-full px-0">
      <div className="lg:bg-light-white relative h-full w-full overflow-hidden rounded-[7px] sm:rounded-t-[16px] lg:rounded-[21px] lg:border lg:border-[#D9D9D9]">
        <div className="max-h-[calc(100vh-90px)] min-h-[calc(100vh-90px)] overflow-auto pb-10 lg:max-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-200px)]">
          <div className="absolute -right-10 hidden lg:block">
            <Image
              className="h-auto w-full"
              src={"/assets/png/pass-setting-car-img.png"}
              alt="car-img"
              width={247}
              height={116}
            />
          </div>
          <BookedCar />
          <div className="pt-[30px] sm:px-[30px]">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row lg:gap-0">
              <SubHeading
                title="My Bookings"
                className="!border-none !text-[25px] text-nowrap"
              />
              <div className="flex flex-wrap gap-3 min-[950px]:flex-nowrap lg:gap-8">
                <BlackBtn
                  title="Current Booking"
                  className="!px-4 !py-2 text-nowrap sm:!px-[25px] sm:!py-[13px]"
                />
                <CommonTransperentBtn
                  title="Past Booking"
                  link="#"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 w-full md:mt-[50px]">
            <div className="w-full">
              <Tabs defaultValue="all" className="w-full">
                <div className="scroll-w-none overflow-x-scroll pb-1.5">
                  <TabsList className="min-w-[500px] max-sm:mx-5">
                    <div className="flex justify-between border-b text-xs font-medium sm:text-sm md:text-[17px]">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="pending"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        Pending
                      </TabsTrigger>
                      <TabsTrigger
                        value="confirmed"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        Confirmed
                      </TabsTrigger>
                      <TabsTrigger
                        value="cancelled"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        Cancelled
                      </TabsTrigger>
                    </div>
                  </TabsList>
                </div>
                <TabsContent
                  value="all"
                  className="mt-8 ml-5 md:mt-10 lg:mt-[60px]"
                >
                  {tableData.map((item, index) => (
                    <CommonMyBookingTable
                      key={index}
                      details={item}
                      onRowClick={() => setIsModalOpen(true)}
                    />
                  ))}
                </TabsContent>
                <TabsContent
                  className="mt-8 ml-5 md:mt-10 lg:mt-[60px]"
                  value="pending"
                >
                  {tableData.map((item, index) => (
                    <CommonMyBookingTable
                      key={index}
                      details={item}
                      onRowClick={() => setIsModalOpen(true)}
                    />
                  ))}
                </TabsContent>
                <TabsContent
                  className="mt-8 ml-5 md:mt-10 lg:mt-[60px]"
                  value="confirmed"
                >
                  {tableData.map((item, index) => (
                    <CommonMyBookingTable
                      key={index}
                      details={item}
                      onRowClick={() => setIsModalOpen(true)}
                    />
                  ))}
                </TabsContent>
                <TabsContent
                  className="mt-8 ml-5 md:mt-10 lg:mt-[60px]"
                  value="cancelled"
                >
                  {tableData.map((item, index) => (
                    <CommonMyBookingTable
                      key={index}
                      details={item}
                      onRowClick={() => setIsModalOpen(true)}
                    />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(10,28,42,0.88)] px-4">
          <div className="bg-light-white scroll-w-none h-[90%] w-full max-w-[935px] overflow-scroll rounded-[7px] p-4 shadow-lg md:rounded-[16px] md:p-6 lg:rounded-[20px] lg:p-[30px]">
            <div className="flex items-center justify-between">
              <SubHeading
                title="My Booking"
                className="text-gray !border-none !text-lg"
              />
              <button onClick={() => setIsModalOpen(false)}>
                <CrosIcon />
              </button>
            </div>
            {myBookingCarDetailInputData.map((items, indexs) => (
              <div key={indexs} className="mt-8 md:mt-10 lg:mt-12">
                <Para title="Car" classNmae="text md:!text-sm !text-gray-700" />
                <div className="mt-[15px] flex flex-col gap-[43px] sm:flex-row">
                  <div className="mx-auto sm:mx-0">
                    <Image
                      src={"/assets/png/mahindra-scorpio-small-img.png"}
                      width={204}
                      height={150}
                      alt="white car"
                      className="border-gray rounded border-[0.2px]"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2.5 md:gap-[15px]">
                    <label htmlFor={items.id} className="text-xs md:text-sm">
                      {items.lable}
                    </label>
                    <span
                      id={items.id}
                      className="placeholder:text-gray border-gray w-full rounded border-[0.2px] bg-white px-2.5 py-2 !text-sm outline-none placeholder:font-medium sm:max-w-[406px] md:px-[15px] md:py-[11px] md:text-base"
                    >
                      {items.placeholder}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-between gap-4 sm:mt-6 sm:gap-6 md:gap-[35px] lg:mt-8">
                  {items.subInputData.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full flex-col gap-2.5 sm:w-[47%] md:gap-[15px]"
                    >
                      <label htmlFor={item.id} className="text-xs md:text-sm">
                        {item.lable}
                      </label>
                      <span
                        id={item.id}
                        className="border-gray placeholder:text-gray w-full rounded border-[0.2px] bg-white px-[15px] py-[11px] text-sm outline-none placeholder:font-medium sm:max-w-[406px] md:text-base"
                      >
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

export default MyBookingStatusTable;
