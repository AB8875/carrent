"use client";
import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";
import {
  certificates,
  myCertificatesAndachievements,
} from "@/components/helper/user/Helper";

import DocumentAddCard from "@/components/profile/documents-vefification/DocumentAddCard";
import Image from "next/image";
import { useState } from "react";

function CertefecatesAchievments() {
  const handleUpload = (files: { url: string; type: string }[]) => {
    console.log("Uploaded Files:", files);
    // Tum yahan backend API me bhej sakte ho, state me rakh sakte ho, etc.
  };

  const [first, setfirst] = useState(false);
  const forOpen = () => {
    setfirst(true);
  };

  return (
    <div className="lg:bg-light-white h-full overflow-hidden rounded-t-[8px] border-[#D9D9D9] pb-3 md:rounded-t-[15px] lg:border-[1.056px] xl:rounded-[21px]">
      <div className="sticky top-0 px-3 py-6 sm:px-4 md:px-6 lg:px-[30px] lg:py-8">
        <Heading
          title="My Certificates & Achievments"
          className="!text-gray text-center !text-xl sm:text-start md:!text-2xl"
        />
      </div>
      <div className="overflow-y-auto px-3 pb-10 sm:px-4 md:px-6 lg:max-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-150px)] lg:px-[30px] lg:pb-40">
        <div className="grid grid-flow-row grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-[30px]">
          {myCertificatesAndachievements.map((item, index) => (
            <div
              key={index}
              className={`bg-gray col-span-1 row-span-1 flex w-full items-center justify-center gap-5 rounded-[8px] p-2 sm:p-3 md:rounded-[15px] lg:p-4 xl:rounded-[23px] xl:p-5 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image src={item.imgPath} width={724} height={100} alt="img" />
            </div>
          ))}

          {first &&
            certificates.map((item, index) => (
              <DocumentAddCard
                key={index}
                label={item.label}
                onFilesSelect={handleUpload}
                className="bg-gray col-span-1 row-span-1 flex w-full items-center justify-center gap-5 rounded-[8px] md:rounded-[15px] xl:rounded-[23px]"
              />
            ))}
        </div>
        <BlackBtn
          title="Add More"
          className="xL:mt-[50px] mt-8 sm:w-max lg:mt-10"
          onClick={forOpen}
        />
      </div>
    </div>
  );
}

export default CertefecatesAchievments;
