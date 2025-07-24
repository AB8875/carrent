"use client";
import {
  damageCarOption,
  issueCategory,
} from "@/components/common/helper/ProfileHelper";
import {
  CheckedIcon,
  UncheckedIcon,
} from "@/components/common/icon/ProfileIcon";
import Image from "next/image";
import React, { useState } from "react";

function ExtraCharge() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedcarDamage, setSelectedcarDamage] = useState("");

  return (
    <div className="relative h-auto overflow-hidden rounded-[21px] border-[#d9d9d9] md:border md:bg-[#f9f9f9]">
      <div className="absolute top-[30%] -right-8 hidden min-[1750px]:top-[40%] lg:block">
        <Image
          src={"/assets/png/pass-setting-car-img.png"}
          alt="car-img"
          width={247}
          height={116}
        />
      </div>
      <div className="h-full px-5 py-[50px] sm:px-[30px]">
        <h1 className="mb-7 text-2xl font-semibold sm:mb-10">
          What Type Of Issue You Have
        </h1>
        <p className="mb-6 text-xl font-semibold">Issue Category</p>
        {/* Option List */}
        <div className="space-y-3.5">
          {issueCategory.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedOption(item.option)}
              className="flex cursor-pointer items-center gap-4"
            >
              {selectedOption === item.option ? (
                <CheckedIcon />
              ) : (
                <UncheckedIcon />
              )}
              <span className="text-base font-medium">{item.option}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[840px]">
          <div className="sm:12 mt-10 mb-7 sm:mb-10 md:mt-[60px]">
            <h1 className="text-gray mb-3.5 text-xl font-semibold">
              <span>1.</span> <span>Early Car Return :</span>
            </h1>
            <div className="flex lg:ml-10">
              <div className="mt-2.5 mr-2 h-1.5 min-h-1.5 w-1.5 min-w-1.5 rounded-full bg-black"></div>
              <p className="text-base leading-[155%]">
                Includes a breakdown of charges for returning the car earlier
                than planned, along with the base rental fee and extra early
                return fees.
              </p>
            </div>
          </div>
          <div className="mb-7 sm:mb-10">
            <h1 className="text-gray mb-3.5 text-xl font-semibold">
              <span>2.</span> <span>Damaged Car :</span>
            </h1>
            <div className="flex lg:ml-10">
              <div className="mt-2.5 mr-2 h-1.5 min-h-1.5 w-1.5 min-w-1.5 rounded-full bg-black"></div>
              <p className="mb-5 text-base leading-[155%]">
                Damaged Car charges based on different levels of damage (minor,
                major, extensive).
              </p>
            </div>
            <div className="space-y-3.5 lg:ml-8">
              {damageCarOption.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedcarDamage(item.carDamage)}
                  className="flex cursor-pointer items-center gap-4"
                >
                  {selectedcarDamage === item.carDamage ? (
                    <CheckedIcon />
                  ) : (
                    <UncheckedIcon />
                  )}
                  <span className="text-base font-medium">
                    {item.carDamage}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10 sm:mb-12 md:mb-[60px]">
            <h1 className="text-gray mb-3.5 text-xl font-semibold">
              <span>3.</span> <span>Fuel Issue :</span>
            </h1>
            <div className="flex lg:ml-10">
              <div className="mt-2.5 mr-2 h-1.5 min-h-1.5 w-1.5 min-w-1.5 rounded-full bg-black"></div>
              <p className="text-base leading-[155%]">
                A refuling charges will pay when the car is returned without a
                full tank of gas, along with the service fee.
              </p>
            </div>
          </div>
        </div>
        <div className="items-center gap-[50px] min-[400px]:flex">
          <button className="text-primary bg-gray hover:text-gray hover:border-gray max-[400px]: mb-4 rounded-[4px] border border-transparent px-6 py-3.5 text-xl font-semibold duration-200 hover:bg-transparent max-[400px]:w-full">
            Confirm
          </button>
          <button className="text-gray bg-transparnt hover:text-primary border-gray hover:bg-gray rounded-[4px] border px-6 py-3.5 text-xl font-semibold duration-200 hover:border-transparent max-[400px]:w-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraCharge;
