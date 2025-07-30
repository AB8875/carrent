"use client";
import React from "react";
import SubHeading from "@/components/common/SubHeading";
import Label from "@/components/common/Label";
import {
  labelData,
  selectData,
  typeData,
} from "@/components/helper/partner/Helper";
import { New } from "./New";

function CarDetails() {
  return (
    <div className="relative mx-auto max-w-[1720px] px-0 py-[60px] sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <SubHeading
        title="Provide Your Car Details"
        className="mx-auto mb-10 sm:mb-16 md:mb-18 lg:mb-20"
      />
      <form
        className="dark:bg-gray bg-sky-600 px-5 py-10 sm:rounded-[12px] sm:px-7 md:px-8 lg:px-12.5 lg:py-[60px]"
        action="details"
      >
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:gap-x-20">
          {selectData.map((field) => (
            <New key={field.name} field={field} />
          ))}
          <div>
            <Label
              className="text-base md:text-lg lg:text-xl"
              title="Exterior Body of Car"
              htmlfor="exteriorBodyCar"
            />
            <input
              className="mt-2 w-full rounded-[10px] bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-800 md:px-4 md:py-3 dark:bg-gray-800 dark:text-white dark:placeholder:text-white"
              type="text"
              placeholder="Exterior Color of Car"
              id="exteriorBodyCar"
            />
          </div>
        </div>
        {/* Other Inputs */}
        <div className="mt-8 grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-8 lg:gap-x-16 xl:gap-x-20">
          {labelData.map((item, index) => (
            <div key={index}>
              <Label
                htmlfor={item.htmlFor}
                className="text-base md:text-lg lg:text-xl"
                title={item.label}
              />
              <input
                className="mt-2 w-full rounded-[10px] bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder:text-white"
                type={item.type}
                id={item.htmlFor}
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 w-full md:mt-8 md:w-[48%] lg:w-[47%] xl:w-[46.8%] 2xl:w-[47.4%]">
          <New field={typeData} />
        </div>
      </form>
    </div>
  );
}

export default CarDetails;
