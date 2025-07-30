import CommonMyBookingTable from "@/components/common/CommonMyBookingTable";
import { partnerPaymentTableData } from "@/components/common/helper/ApplicantHelper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function PaymentTable() {
  return (
    <>
      <Tabs
        defaultValue="today"
        className="flex flex-col px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7"
      >
        <TabsList>
          <div className="mt-5 sm:mt-6 md:mt-7">
            <div className="mx-auto flex max-w-[593px] justify-between gap-3 bg-white px-2 py-2 lg:px-5 lg:py-2.5">
              <TabsTrigger
                value="today"
                className="data-[state=active]:bg-gray text-primary border-gray w-max cursor-pointer rounded border p-0 px-4 py-2 text-sm leading-[144%] font-semibold transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl"
              >
                Today
              </TabsTrigger>
              <TabsTrigger
                value="weekly"
                className="data-[state=active]:bg-gray text-primary border-gray w-max cursor-pointer rounded border p-0 px-4 py-2 text-sm leading-[144%] font-semibold transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-gray text-primary border-gray w-max cursor-pointer rounded border p-0 px-4 py-2 text-sm leading-[144%] font-semibold transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl"
              >
                Monthly
              </TabsTrigger>
            </div>
          </div>
        </TabsList>
        <div className="max-h-[calc(100vh-350px)] min-h-[calc(100vh-350px)] overflow-y-auto pb-0">
          <TabsContent value="today">
            <div className="mt-10 lg:mt-[60px]">
              {partnerPaymentTableData.map((item, index) => (
                <CommonMyBookingTable key={index} details={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="weekly">
            <div className="mt-10 lg:mt-[60px]">
              {partnerPaymentTableData.map((item, index) => (
                <CommonMyBookingTable key={index} details={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="monthly">
            <div className="mt-10 lg:mt-[60px]">
              {partnerPaymentTableData.map((item, index) => (
                <CommonMyBookingTable key={index} details={item} />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}

export default PaymentTable;
