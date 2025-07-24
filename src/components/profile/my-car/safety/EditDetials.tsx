"use client";
import React, { useState } from "react";
import CarImg from "../CarImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabData, tabName } from "@/components/common/helper/PartnerHelper";
import { BlueTickIcon } from "@/components/common/icon/PartnerIcon";
import CommonYellowBtn from "@/components/common/CommonYellowBtn";
import YellowBorderCommonBtn from "@/components/common/YellowBorderCommonBtn";
import Heading from "@/components/common/Heading";

function EditDetails() {
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});
  const [activeTab, setActiveTab] = useState("safety");

  const toggleSelectBtn = (index: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <CarImg />
      <div className="mx-auto max-w-[1720px] px-4 pt-10 sm:px-6 md:px-8 lg:px-10 lg:pt-12 xl:px-12 xl:pt-[77px]">
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6">
          <span className="text-primary w-max text-lg leading-[144%] font-semibold text-nowrap md:text-xl lg:text-2xl xl:text-[32px] dark:text-white">
            Car Details
          </span>
          <span className="relative w-[60%] max-w-[498px] border-t border-dashed border-[#000] dark:border-white">
            <span className="absolute -top-2 left-0 h-[12px] w-[12px] rounded-full bg-[#000] lg:h-[16px] lg:w-[16px] dark:bg-white"></span>
            <span className="absolute -top-2 right-0 h-[12px] w-[12px] rounded-full bg-[#000] lg:h-[16px] lg:w-[16px] dark:bg-white"></span>
          </span>
          <span className="text-gray w-max text-lg leading-[144%] font-semibold text-nowrap md:text-xl lg:text-2xl xl:text-[32px] dark:text-white">
            Car Features
          </span>
        </div>
        <div className="bg-sky mt-8 rounded px-3 py-5 sm:px-4 md:rounded-[11px] md:px-6 md:py-8 lg:mt-10 lg:px-8 lg:py-12 xl:mt-[60px] xl:px-12 xl:py-[76px]">
          <Heading
            title="Car Features :"
            className="!text-gray mb-8 !text-2xl xl:mb-[54px] xl:!text-[34px]"
          />
          <Tabs
            className="flex flex-col"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-8 flex w-full flex-wrap justify-center sm:mb-14 md:mb-16 lg:mb-18 lg:flex-nowrap">
              {tabName.map((item, index) => (
                <TabsTrigger
                  key={index}
                  className={`data-[state=active]:text-primary text-gray flex w-full border-0 text-xl leading-[144%] font-semibold !shadow-none md:text-2xl lg:text-[28px] ${index === 0 ? "!text-primary" : index === 1 ? "!text-primary" : ""} ${index === 2 ? "!text-gray" : ""}`}
                  value={item.value}
                >
                  <div className="flex w-full items-center justify-center">
                    <span>{item.name}</span>
                    <div
                      className={`flex w-full items-center ${item.className}`}
                    >
                      <div className="ml-3 h-1 w-1 rounded-full bg-black p-0.5"></div>
                      <div className="mt-1 h-1 w-full border-t border-dashed border-black"></div>
                      <div className="h-1 w-1 rounded-full bg-black p-0.5"></div>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-11">
              {tabData.map((item, index) => (
                <TabsContent
                  onClick={() => toggleSelectBtn(index)}
                  key={index}
                  value={item.value}
                >
                  <div className="flex h-full flex-col justify-between rounded-[24px] bg-white pt-5 md:pt-6">
                    <div>
                      {selectedItems[index] ? (
                        <div className="ml-auto flex justify-end pr-4 md:pr-6">
                          <BlueTickIcon />
                        </div>
                      ) : (
                        <div className="mr-4 ml-auto h-5 w-5 rounded-sm border sm:mr-5 sm:h-[31.2px] sm:w-[31.2px] sm:rounded-md md:mr-6"></div>
                      )}
                    </div>

                    <div className="flex flex-col justify-center px-2 pt-0 pb-4 sm:pt-5 sm:pb-7 md:pt-7 md:pb-10 lg:pb-14 xl:pb-16 2xl:pb-21">
                      <span className="mx-auto">{item.svg}</span>
                      <h3 className="mt-2 text-center text-xs leading-[144%] font-normal text-black sm:mt-5 sm:text-sm md:mt-6 md:text-lg lg:text-xl xl:mt-9 xl:text-[25px]">
                        {item.heading}
                      </h3>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:gap-5">
          <CommonYellowBtn
            title="Save Changes"
            link="/applicant/my-car/safety"
            className="md:w-max"
          />
          <YellowBorderCommonBtn title="Cancel" />
        </div>
      </div>
    </div>
  );
}

export default EditDetails;
