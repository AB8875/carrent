"use client";
import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";

import SubHeading from "@/components/common/SubHeading";
import { idData } from "@/components/helper/user/Helper";
import DetailsTable from "@/components/profile/documents-vefification/DetailsTable";
import DocumentAddCard from "@/components/profile/documents-vefification/DocumentAddCard";
import Image from "next/image";

import React from "react";

function DocumentVerification() {
  const handleUpload = (files: { url: string; type: string }[]) => {
    console.log("Uploaded Files:", files);
    // Tum yahan backend API me bhej sakte ho, state me rakh sakte ho, etc.
  };
  return (
    <div className="bg-light-white relative h-full rounded-t-[8px] border-[1.056px] border-[#D9D9D9] px-3 pt-6 pb-3 sm:px-4 md:rounded-t-[15px] md:px-6 lg:px-[30px] lg:pt-[30px] xl:rounded-t-[21px]">
      <div className="absolute -top-[30px] right-0 hidden sm:block md:-right-[30px]">
        <Image
          src={"/assets/svg/small-car-img.svg"}
          width={145}
          height={68}
          alt="car img"
        />
      </div>
      <Heading
        title="Document Verifications"
        className="!text-gray text-center !text-xl sm:text-start md:!text-2xl"
      />
      <div>
        <DetailsTable />
      </div>
      <div>
        <div className="mt-[50px] flex items-center justify-between">
          <SubHeading
            title="Verification :"
            className="mx-auto !border-none !text-[25px] md:mx-0"
          />
          <BlackBtn title="Upload" className="hidden w-max lg:block" />
        </div>
        <div className="mt-10 flex flex-col justify-between gap-[30px] lg:flex-row lg:gap-5">
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
  );
}

export default DocumentVerification;
