"use client";
import React, { FC, JSX, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import Para from "../Para";
interface Sidedata {
  value: string;
  icon: JSX.Element;
  title: string;
}
interface Content {
  value: string;
  content: JSX.Element | string;
}
interface ProfileSidebarProps {
  sidebarTabData1: Sidedata[];
  sidebarTabData2: Sidedata[];
  tabContentPartner: Content[];
}

const ProfileSidebar: FC<ProfileSidebarProps> = ({
  sidebarTabData1,
  sidebarTabData2,
  tabContentPartner,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(true)}
          className="z-50 m-4 rounded-md bg-[#F9B701] px-4 py-2 font-semibold text-black md:hidden"
        >
          Open Menu
        </button>
      )}
      <Tabs defaultValue="setting" className="!flex flex-row gap-4 lg:gap-6">
        {showSidebar && (
          <TabsList className="absolute h-[100vh] w-full flex-col items-start justify-start gap-4 rounded-[0px] bg-[#0A1C2A] p-0">
            <div className="mt-[51px] mb-14 ml-[30px] flex items-center gap-1">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/assets/png/profil-pic-2.png"}
                  alt="profile-pic"
                  width={62}
                  height={62}
                />
                <div className="flex flex-col gap-1 text-white">
                  <h2 className="text-xl font-semibold">Jenny Wilson</h2>
                  <p className="text-sm">Businessmen</p>
                </div>
              </div>
            </div>
            {sidebarTabData1.map((item, index) => (
              <>
                <TabsTrigger
                  onClick={() => setShowSidebar(false)}
                  key={index}
                  className="group flex w-full max-w-[256px] items-center justify-start gap-3.5 rounded-l-[0px] rounded-r-[30px] py-2 pl-[35px] data-[state=active]:bg-[#F9B701]"
                  value={item.value}
                >
                  <span>{item.icon}</span>
                  <Para
                    title={item.title}
                    classNmae="!text-white group-data-[state=active]:text-[#0A1C2A] !font-light"
                  />
                </TabsTrigger>
              </>
            ))}
            <div className="my-0.5 h-[1px] w-full bg-white"></div>
            <p className="mt-4 mb-2 ml-[30px] text-sm text-white">Report</p>
            {sidebarTabData2.map((item, index) => (
              <>
                <TabsTrigger
                  onClick={() => setShowSidebar(false)}
                  key={index}
                  className="group flex w-full max-w-[256px] items-center justify-start gap-3.5 rounded-l-[0px] rounded-r-[30px] py-2 pl-[35px] data-[state=active]:bg-[#F9B701]"
                  value={item.value}
                >
                  <span>{item.icon}</span>
                  <Para
                    title={item.title}
                    classNmae="!text-white group-data-[state=active]:text-[#0A1C2A] !font-light"
                  />
                </TabsTrigger>
              </>
            ))}
          </TabsList>
        )}
        {/* Sidebar tab list */}
        <TabsList className="hidden h-[full] min-w-[290px] flex-col items-start justify-start gap-4 rounded-[0px] bg-[#0A1C2A] p-0 md:flex">
          <div className="mt-[51px] mb-14 ml-[30px] flex items-center gap-1">
            <div className="hidden h-[30px] w-[30px] rounded-full bg-[#F9B701] min-[1440px]:block"></div>
            <h2 className="hidden pt-1 text-2xl leading-normal font-semibold text-white min-[1440]:block">
              Carent
            </h2>
            <div className="hidden max-[1440px]:block">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/assets/png/profil-pic-2.png"}
                  alt="profile-pic"
                  width={62}
                  height={62}
                />
                <div className="flex flex-col gap-1 text-white">
                  <h2 className="text-xl font-semibold">Jenny Wilson</h2>
                  <p className="text-sm">Businessmen</p>
                </div>
              </div>
            </div>
          </div>
          {sidebarTabData1.map((item, index) => (
            <>
              <TabsTrigger
                key={index}
                className="group flex w-full max-w-[256px] items-center justify-start gap-3.5 rounded-l-[0px] rounded-r-[30px] py-2 pl-[35px] data-[state=active]:bg-[#F9B701]"
                value={item.value}
              >
                <span>{item.icon}</span>
                <Para
                  title={item.title}
                  classNmae="!text-white group-data-[state=active]:text-[#0A1C2A] !font-light"
                />
              </TabsTrigger>
            </>
          ))}
          <div className="my-0.5 h-[1px] w-full bg-white"></div>
          <p className="mt-4 mb-2 ml-[30px] text-sm text-white">Report</p>
          {sidebarTabData2.map((item, index) => (
            <>
              <TabsTrigger
                key={index}
                className="group flex w-full max-w-[256px] items-center justify-start gap-3.5 rounded-l-[0px] rounded-r-[30px] py-2 pl-[35px] data-[state=active]:bg-[#F9B701]"
                value={item.value}
              >
                <span>{item.icon}</span>

                <Para
                  title={item.title}
                  classNmae="!text-white group-data-[state=active]:text-[#0A1C2A] !font-light"
                />
              </TabsTrigger>
            </>
          ))}
        </TabsList>
        {/* Tab content on the right */}
        <div className="w-full">
          {tabContentPartner.map((item, index) => (
            <TabsContent key={index} value={item.value}>
              {item.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProfileSidebar;
