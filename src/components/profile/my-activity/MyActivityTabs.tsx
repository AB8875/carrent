"use client";
import SubHeading from "@/components/common/SubHeading";
import React from "react";
import { TabsList } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";

import ViewTabData from "./ViewTabData";
import SavedTabData from "./SavedTabData";
import { usePathname } from "next/navigation";

function MyActivityTabs() {
  const pathname = usePathname();
  return (
    <div
      className={`${pathname === "/dashboard/my-activity" ? "h-full w-full px-0" : ""}`}
    >
      <div
        className={` ${pathname === "/dashboard/my-activity" ? "lg:bg-light-white h-full w-full overflow-hidden rounded-[7px] border-[#D9D9D9] sm:rounded-[16px] lg:rounded-t-[21px] lg:border" : ""}`}
      >
        <div className="">
          <div
            className={`pb-8 md:pb-[50px] ${pathname === "/applicant/my-activity" ? "hidden" : "sticky top-0 px-3 pt-[30px] sm:px-[30px]"}`}
          >
            <SubHeading
              title="My Activitys"
              className="mx-auto !border-none !text-[25px] md:mx-0"
            />
          </div>
          <div className="w-full">
            <div className="w-full">
              <Tabs defaultValue="saved" className="w-full">
                <div className="scroll-w-none overflow-x-scroll pb-1.5">
                  <TabsList className="min-w- sticky top-0">
                    <div className="flex justify-around border-b text-xs font-medium sm:text-sm md:text-[17px]">
                      <TabsTrigger
                        value="saved"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        Saved
                      </TabsTrigger>
                      <TabsTrigger
                        value="viewed"
                        className="data-[state=active]:before:bg-primary data-[state=active]:after:bg-primary relative -mb-[1px] cursor-pointer border-b-[3px] border-transparent px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2"
                      >
                        Viewed
                      </TabsTrigger>
                    </div>
                  </TabsList>
                </div>
                <div className="max-h-[calc(100vh-270px)] min-h-[calc(100vh-270px)] overflow-auto px-3 pb-40 sm:px-[30px] md:max-h-[calc(100vh-200px)] md:min-h-[calc(100vh-200px)]">
                  <TabsContent
                    value="saved"
                    className="mt-8 flex h-full flex-col justify-between md:mt-10 lg:mt-[60px]"
                  >
                    <SavedTabData />
                  </TabsContent>

                  <TabsContent
                    value="viewed"
                    className="mt-8 flex h-full flex-col justify-between md:mt-10 lg:mt-[60px]"
                  >
                    <ViewTabData />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyActivityTabs;
