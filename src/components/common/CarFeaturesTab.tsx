"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SubHeading from "./SubHeading";

import BlackBtn from "./BlackBtn";
import { tabData, tabName } from "../helper/partner/Helper";
import { BlueTickIcon } from "../helper/partner/Icon";

function CarFeaturesTab() {
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});
  const [activeTab, setActiveTab] = useState("comfort");

  const toggleSelectBtn = (index: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mx-auto mb-[60px] max-w-[1720px] px-4 sm:px-6 md:mb-24 md:px-8 lg:px-10 xl:mb-[155px] xl:px-12">
      <div className="flex flex-col justify-center text-center">
        <SubHeading
          className="mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          title="Your Car Features"
        />

        <Tabs
          className="flex flex-col"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          {/* ul up */}
          <TabsList className="mb-8 hidden w-full flex-wrap sm:mb-14 md:mb-16 lg:mb-18 lg:flex lg:flex-nowrap">
            {tabName.map((item, index) => (
              <TabsTrigger
                key={index}
                className={`data-[state=active]:text-primary text-gray flex w-full border-0 text-xl leading-[144%] font-semibold !shadow-none md:text-2xl lg:text-[28px] ${
                  index === 3 ? "w-max" : ""
                }`}
                value={item.value}
              >
                <div className={`flex w-full items-center`}>
                  <span>{item.name}</span>
                  <div className={`flex w-full items-center ${item.className}`}>
                    <div className="ml-3 h-1 w-1 rounded-full bg-black p-0.5"></div>
                    <div className="mt-1 h-1 w-full border-t border-dashed border-black"></div>
                    <div className="h-1 w-1 rounded-full bg-black p-0.5"></div>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* sm */}
          <TabsList className="mb-8 flex w-full gap-3 overflow-auto [scrollbar-width:none] sm:mb-14 md:mb-16 lg:mb-18 lg:hidden lg:flex-nowrap">
            {tabName.map((item, index) => (
              <TabsTrigger
                key={index}
                className={`data-[state=active]:text-primary text-gray bg-sky mx-auto flex rounded border-0 px-4 py-2 text-sm leading-[144%] font-semibold !shadow-none sm:px-5 sm:py-3 sm:text-xl md:text-2xl lg:text-[28px]`}
                value={item.value}
              >
                <div className={`flex w-full items-center`}>
                  <span>{item.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-11">
            {tabData.map((item, index) => (
              <TabsContent
                onClick={() => toggleSelectBtn(index)}
                key={index}
                value={item.value}
              >
                <div className="flex h-full flex-col justify-between rounded bg-sky-600 pt-5 sm:rounded-[10px] md:pt-6 xl:rounded-[24px]">
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
                    <h3 className="mt-2 text-xs leading-[144%] font-normal text-black sm:mt-5 sm:text-sm md:mt-6 md:text-lg lg:text-xl xl:mt-9 xl:text-[25px]">
                      {item.heading}
                    </h3>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <BlackBtn
          onClick={() => {
            const currentIndex = tabName.findIndex(
              (tab) => tab.value === activeTab
            );
            if (currentIndex < tabName.length - 1) {
              setActiveTab(tabName[currentIndex + 1].value);
            } else {
              // Save logic here
              console.log("All tabs done, saving...");
            }
          }}
          className="mr-0 ml-auto !w-fit px-6 md:!px-20"
          title={
            tabName.findIndex((tab) => tab.value === activeTab) ===
            tabName.length - 1
              ? "Save"
              : "Save and Next"
          }
        />
      </div>
    </div>
  );
}

export default CarFeaturesTab;
