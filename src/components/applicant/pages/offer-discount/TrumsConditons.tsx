import SubHeading from "@/components/common/SubHeading";
import { turmsConditonsData } from "@/components/helper/user/Helper";
import Image from "next/image";
import React from "react";

function TrumsConditons() {
  return (
    <div className="bg-light-white dark:bg-gray sm:bg-white">
      <div className="relative z-50 mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
        <SubHeading
          title="Terms & Conditions"
          className="mx-auto !border-none md:mx-0"
        />
        <div className="flex flex-col justify-between gap-10 md:mt-2 lg:flex-row lg:gap-5">
          <ul className="ms:mt-6 mt-5 max-w-[938px] list-disc space-y-5 ps-6 md:ps-10 lg:mt-8 lg:space-y-3 xl:space-y-5 xl:ps-[70px]">
            {turmsConditonsData.map((item, index) => (
              <li
                key={index}
                className="text-gray dark:!text-light-white text-sm leading-[144%] sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                {item.listItem}
              </li>
            ))}
          </ul>
          <div className="mx-auto lg:mx-0">
            <Image
              src={"/assets/png/yellow-car-turms.png"}
              width={550}
              height={485}
              alt="yellow car img"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrumsConditons;
