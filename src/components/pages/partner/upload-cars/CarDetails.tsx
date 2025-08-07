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
  const [formData, setFormData] = React.useState<{ carNumber?: string }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
          <div>
            <Label
              className="text-base md:text-lg lg:text-xl"
              title="Car Number"
            />
            <input
              className="mt-2 w-full rounded-[10px] bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder:text-white"
              type="text"
              name="carNumber"
              value={formData.carNumber ?? ""}
              onChange={handleInputChange}
              placeholder="Enter Car Number"
            />
          </div>
          {selectData.map((field) => (
            <New key={field.name} field={field} />
          ))}
        </div>

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

          <New field={typeData} />
        </div>
      </form>
    </div>
  );
}

export default CarDetails;
