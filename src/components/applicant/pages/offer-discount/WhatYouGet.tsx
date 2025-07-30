import SubHeading from "@/components/common/SubHeading";
import React from "react";
import WhatYouGetCommonCard from "../../commen/WhatYouGetCommonCard";

import Image from "next/image";
import { whatYouGetCardData } from "@/components/helper/user/Helper";

function WhatYouGet() {
  return (
    <div className="bg-light-white dark:bg-gray relative sm:bg-transparent">
      <div className="relative z-50 mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
        <SubHeading title="What You Get" className="mx-auto !border-none" />
        <div className="mt-[60px] flex flex-wrap justify-between gap-[60px] min-[1440px]:gap-[70px] sm:gap-8 lg:gap-12 xl:flex-nowrap">
          {whatYouGetCardData.map((item, index) => (
            <WhatYouGetCommonCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              para={item.para}
              className="w-full sm:w-[47%] xl:w-[25%]"
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-[170px] left-0 hidden lg:block">
        <Image
          src={"/assets/png/blue-car-half-img.png"}
          width={300}
          height={372}
          alt="blue car img"
        />
      </div>
    </div>
  );
}

export default WhatYouGet;
