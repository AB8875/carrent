"use client";
import Heading from "@/components/common/Heading";

import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { driveType } from "@/components/helper/user/Helper";
import React, { useState } from "react";

function DriveType() {
  const [selectedDrive, setSelectedDrive] = useState<string>("");

  return (
    <div className="mx-auto hidden max-w-[1720px] px-4 pb-[150px] sm:px-6 md:px-8 lg:block lg:px-10 xl:px-12">
      <form action="#">
        {driveType.map((item, index) => (
          <div key={index}>
            <SubHeading title="Select Drive Type :" />
            <div className="mt-10 flex gap-[150px]">
              {item.driveTypeInput.map((items, indexs) => (
                <div key={indexs} className="flex items-center gap-5">
                  <label className="circle-checkbox">
                    <input
                      type={items.inputType}
                      name={items.name}
                      id={items.id}
                      value={items.id}
                      checked={selectedDrive === items.id}
                      onChange={() => setSelectedDrive(items.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label
                    htmlFor={items.id}
                    className="text-2xl leading-[144%] font-semibold"
                  >
                    {items.title}
                  </label>
                </div>
              ))}
            </div>

            <ul className="mt-10 flex list-decimal flex-col gap-5 ps-[28px]">
              {item.list.map((itm, idx) => (
                <li key={idx} className="text-2xl">
                  {itm.title}
                </li>
              ))}
            </ul>

            {/* Driver age */}
            {selectedDrive === item.driveTypeInput[1]?.id && (
              <div>
                <div className="mt-10 flex flex-col gap-2.5">
                  <Heading
                    title="Choose Driver age Preference :"
                    className="!text-gray dark:!text-light-white !text-2xl"
                  />
                  <Para
                    title="Preferred Driver Age Group"
                    classNmae="!text-gray !text-xl dark:!text-light-white"
                  />
                </div>
                <div className="mt-[30px] flex flex-col gap-6">
                  {item.age.map((items, indexs) => (
                    <div key={indexs} className="flex items-center gap-5">
                      <input
                        type={items.inputType}
                        name={items.name}
                        id={items.id}
                      />
                      <label
                        htmlFor={items.id}
                        className="text-2xl leading-[144%] font-semibold"
                      >
                        {items.title}
                      </label>
                    </div>
                  ))}
                </div>
                <ul className="mt-10 flex list-disc flex-col gap-5 ps-[28px]">
                  {item.list2.map((itm, idx) => (
                    <li key={idx} className="text-2xl">
                      {itm.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default DriveType;
