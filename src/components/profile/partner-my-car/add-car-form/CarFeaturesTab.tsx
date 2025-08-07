"use client";
import BlackBtn from "@/components/common/BlackBtn";

import SubHeading from "@/components/common/SubHeading";
import { tabData, tabName } from "@/components/helper/partner/Helper";
import { BlueTickIcon } from "@/components/helper/partner/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
export type FeaturesType = {
  comfort?: string[];
  entertainment?: string[];
  safety?: string[];
  seating?: string[];
};

interface CarFeaturesTabProps {
  features: FeaturesType;
  setFeatures: Dispatch<SetStateAction<FeaturesType>>;
}
const CarFeaturesTab: React.FC<CarFeaturesTabProps> = ({
  features,
  setFeatures,
}) => {
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});
  const [activeTab, setActiveTab] = useState("comfort");
  useEffect(() => {
    const selected: { [key: number]: boolean } = {};
    tabData.forEach((item, index) => {
      const currentTab = item.value as keyof FeaturesType;
      const values = features[currentTab] || [];
      if (values.includes(item.heading)) {
        selected[index] = true;
      }
    });
    setSelectedItems(selected);
  }, [features]);

  const toggleSelectBtn = (index: number) => {
    const isSelected = selectedItems[index];
    const newSelectedItems = {
      ...selectedItems,
      [index]: !isSelected,
    };
    setSelectedItems(newSelectedItems);

    const item = tabData[index];
    const currentTab = activeTab as keyof FeaturesType;

    const existing = features[currentTab] || [];

    const updatedCategory = isSelected
      ? existing.filter((f) => f !== item.heading)
      : [...existing, item.heading];

    setFeatures({
      ...features,
      [currentTab]: updatedCategory,
    });
  };

  return (
    <div className="mx-auto mt-[60px] max-w-[1720px]">
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
          {/* large screen */}
          <TabsList className="mb-8 hidden w-full flex-wrap sm:mb-14 md:mb-16 lg:mb-18 lg:flex lg:flex-nowrap">
            {tabName.map((item, index) => (
              <TabsTrigger
                key={index}
                className={`data-[state=active]:text-primary text-gray flex w-full border-0 text-xl leading-[144%] font-semibold !shadow-none md:text-2xl lg:text-[28px] ${
                  index === 3 ? "w-max" : ""
                }`}
                value={item.value}
              >
                <div className="flex w-full items-center justify-center">
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
          {/* sm screeen */}
          <TabsList className="mb-8 flex w-full justify-between gap-3 overflow-scroll [scrollbar-width:none] sm:mb-14 md:mb-16 lg:mb-18 lg:hidden">
            {tabName.map((item, index) => (
              <TabsTrigger
                key={index}
                className={`data-[state=active]:text-primary text-gray bg-sky flex w-max border-0 px-4 py-1 text-sm leading-[144%] font-semibold !shadow-none sm:px-5 sm:py-3 sm:text-base md:text-xl lg:text-2xl ${
                  index === 3 ? "w-max" : ""
                }`}
                value={item.value}
              >
                <span>{item.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-10 grid grid-cols-1 gap-5 min-[1550px]:!grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-11">
            {tabData.map((item, index) => (
              <TabsContent
                onClick={() => toggleSelectBtn(index)}
                key={index}
                value={item.value}
              >
                <div className="flex h-full flex-col justify-between rounded bg-sky-600 pt-5 md:rounded-[10px] md:pt-6 lg:rounded-[24px]">
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
            }
          }}
          className="mr-0 ml-auto !w-fit !px-10"
          title="Next"
        />
      </div>
    </div>
  );
};

export default CarFeaturesTab;
