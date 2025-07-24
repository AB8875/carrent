"use client";
import BlackBtn from "@/components/common/BlackBtn";

import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import React from "react";
import DocumentAddCard from "./DocumentAddCard";
import DetailsTable from "./DetailsTable";
import { idData } from "@/components/helper/user/Helper";

function DocumentDetailsVerification() {
  const handleUpload = (files: { url: string; type: string }[]) => {
    console.log("Uploaded Files:", files);
  };
  return (
    <div className="h-full w-full">
      <div className="lg:bg-light-white dark:bg-gray relative h-full w-full overflow-hidden rounded-[7px] border-[#D9D9D9] pb-[70px] sm:rounded-[16px] md:rounded-t-[21px] lg:border">
        <div className="absolute top-[14px] right-0 hidden md:block">
          <Image
            src={"/assets/svg/small-car-img.svg"}
            width={145}
            height={68}
            alt="car img"
          />
        </div>
        <div className="sticky top-0 px-3 py-[30px] sm:px-[30px]">
          <SubHeading
            title="Documents Required"
            className="mx-auto !border-none !text-[25px] md:mx-0"
          />
        </div>
        <div className="max-h-[calc(100vh-210px)] min-h-[calc(100vh-210px)] overflow-y-auto px-3 pb-30 sm:px-[30px]">
          <DetailsTable />
          <div>
            <div className="mt-[50px] flex items-center justify-between">
              <SubHeading
                title="Verification"
                className="mx-auto !border-none !text-[25px] md:mx-0"
              />
              <BlackBtn title="Upload" className="hidden w-max lg:block" />
            </div>
            <div className="mt-10 flex flex-col justify-between gap-6 sm:gap-[30px] lg:flex-row lg:gap-5">
              {idData.map((item, index) => (
                <DocumentAddCard
                  key={index}
                  label={item.label}
                  onFilesSelect={handleUpload}
                  className="lg:w-[33%] lg:max-w-[295px]"
                />
              ))}
              <BlackBtn
                title="Upload"
                className="mt-2.5 block lg:hidden lg:w-max"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentDetailsVerification;
