"use client";

import CommonYellowBtn from "@/components/common/CommonYellowBtn";
import YellowBorderCommonBtn from "@/components/common/YellowBorderCommonBtn";
import { SearchIcon } from "@/components/helper/user/Icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

import { useState } from "react";

const driveOptions = [
  {
    value: "fwdFrontWheel",
    label: "FWD ( Front -wheel drive )",
  },
  {
    value: "rwdRearWheel",
    label: "RWD (Rear wheel Drive )",
  },
  {
    value: "awdAllWheel",
    label: "AWD ( All Wheel Drive )",
  },
  {
    value: "4wdFourWheel",
    label: "4WD ( Four Wheel Drive )",
  },
];

function MyCarForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = driveOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form action="">
        <div className="bg-sky dark:bg-gray rounded px-6 py-5 md:rounded-[11px] md:py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-[58px]">
          <div className="grid w-full grid-flow-row grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-x-[80px] xl:gap-y-[58px]">
            <div>
              <p className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl">
                Car Model
              </p>
              <Select>
                <SelectTrigger className="mt-2 w-full !rounded bg-white !text-sm leading-[144%] !font-normal !text-[#000000B2] sm:mt-3 md:mt-4 md:px-5 md:py-[26px] md:!text-xl md:text-[27px] lg:!rounded-[11px] xl:mt-5 xl:px-[38px] xl:py-[38px] dark:!bg-white">
                  <SelectValue
                    placeholder="Select Car model"
                    className="text-center"
                  />
                </SelectTrigger>
                <SelectContent className="dark:!bg-gray w-full max-w-fit !bg-white">
                  <div className="px-2 py-3 md:px-3 md:py-5 lg:px-4 lg:py-6 xl:px-[30px] xl:py-[50px]">
                    <div className="border-gray dark:text-gray mb-6 flex max-w-[640px] items-center gap-1 rounded border-[0.2px] px-3 py-2 lg:mb-8 lg:gap-3 lg:rounded-[10px] lg:px-5 lg:py-3 xl:mb-[50px] xl:gap-5 xl:px-10 xl:py-5 dark:bg-white">
                      <SearchIcon className="h-[25px] w-[25px] md:h-[34px] md:w-[34px]" />
                      <input
                        type="text"
                        placeholder="Select Car Model"
                        className="placeholder:text-gray w-full text-sm outline-none md:text-base xl:text-xl xl:placeholder:text-xl"
                      />
                    </div>
                    <span className="text-sm leading-[144%] font-semibold md:text-base">
                      Select Car Model
                    </span>
                    <SelectItem
                      value="economy"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Economy</span>
                    </SelectItem>
                    <SelectItem
                      value="sedans"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Sedans</span>
                    </SelectItem>
                    <SelectItem
                      value="suv"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">SUV</span>
                    </SelectItem>
                    <SelectItem
                      value="sports-cars"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Sports Cars</span>
                    </SelectItem>
                    <SelectItem
                      value="convertible"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Convertible</span>
                    </SelectItem>
                    <SelectItem
                      value="minivan"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Minivan</span>
                    </SelectItem>
                    <SelectItem
                      value="hatchback"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Hatchback</span>
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl">
                Seats
              </p>
              <Select>
                <SelectTrigger className="mt-2 w-full !rounded bg-white !text-sm leading-[144%] !font-normal !text-[#000000B2] sm:mt-3 md:mt-4 md:px-5 md:py-[26px] md:!text-xl md:text-[27px] lg:!rounded-[11px] xl:mt-5 xl:px-[38px] xl:py-[38px] dark:!bg-white">
                  <SelectValue placeholder="Seats" className="text-center" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray w-full max-w-fit bg-white">
                  <div className="px-2 py-3 md:px-3 md:py-5 lg:px-4 lg:py-6 xl:px-[30px] xl:py-[50px]">
                    <div className="border-gray mb-6 flex max-w-[640px] items-center gap-1 rounded border-[0.2px] px-3 py-2 lg:mb-8 lg:gap-3 lg:rounded-[10px] lg:px-5 lg:py-3 xl:mb-[50px] xl:gap-5 xl:px-10 xl:py-5 dark:bg-white">
                      <SearchIcon className="h-[25px] w-[25px] md:h-[34px] md:w-[34px]" />
                      <input
                        type="text"
                        placeholder="Seats"
                        className="placeholder:text-gray dark:text-gray w-full text-sm outline-none md:text-base xl:text-xl xl:placeholder:text-xl"
                      />
                    </div>
                    <span className="text-sm leading-[144%] font-semibold md:text-base">
                      Select Seats
                    </span>
                    <SelectItem
                      value="2seat"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      2 Seats
                    </SelectItem>
                    <SelectItem
                      value="5seat"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      5 Seats
                    </SelectItem>
                    <SelectItem
                      value="7seat"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      7 Seats
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl">
                Transmission
              </p>
              <Select>
                <SelectTrigger className="mt-2 w-full !rounded !bg-white !text-sm leading-[144%] !font-normal !text-[#000000B2] sm:mt-3 md:mt-4 md:px-5 md:py-[26px] md:!text-xl md:text-[27px] lg:!rounded-[11px] xl:mt-5 xl:px-[38px] xl:py-[38px]">
                  <SelectValue
                    placeholder="Automatic"
                    className="text-center"
                  />
                </SelectTrigger>
                <SelectContent className="max-w-fitt dark:bg-gray w-full bg-white">
                  <div className="px-2 py-3 md:px-3 md:py-5 lg:px-4 lg:py-6 xl:px-[30px] xl:py-[50px]">
                    <div className="border-gray mb-6 flex max-w-[640px] items-center gap-1 rounded border-[0.2px] px-3 py-2 lg:mb-8 lg:gap-3 lg:rounded-[10px] lg:px-5 lg:py-3 xl:mb-[50px] xl:gap-5 xl:px-10 xl:py-5 dark:bg-white">
                      <SearchIcon className="h-[25px] w-[25px] md:h-[34px] md:w-[34px]" />
                      <input
                        type="text"
                        placeholder="Select Car Model"
                        className="placeholder:text-gray dark:text-gray w-full text-sm outline-none md:text-base xl:text-xl xl:placeholder:text-xl"
                      />
                    </div>
                    <span className="text-sm leading-[144%] font-semibold md:text-base">
                      Select Car Type
                    </span>
                    <SelectItem
                      value="automatic"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Automatic</span>
                    </SelectItem>
                    <SelectItem
                      value="mannual"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">Mannual</span>
                    </SelectItem>
                    <SelectItem
                      value="semiAutomatic"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">
                        Semi - Automatic
                      </span>
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label
                htmlFor="mileage"
                className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl"
              >
                Mileage
              </label>
              <input
                type="text"
                id="mileage"
                placeholder="10ML"
                className="mt-2 w-full rounded bg-white px-3 py-1.5 text-sm leading-[144%] !font-normal !text-[rgba(0,0,0,0.70)] outline-none placeholder:text-[#000000B2] sm:mt-3 sm:py-2 md:mt-4 md:px-5 md:py-3 md:text-xl lg:rounded-[10px] xl:mt-5 xl:px-[38px] xl:py-[19px] xl:text-[27px]"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="stockId"
                className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl"
              >
                Stock ID
              </label>
              <input
                type="text"
                id="stockId"
                placeholder="23456"
                className="mt-2 w-full rounded bg-white px-3 py-1.5 text-sm leading-[144%] !font-normal !text-[rgba(0,0,0,0.70)] outline-none placeholder:text-[#000000B2] sm:mt-3 sm:py-2 md:mt-4 md:px-5 md:py-3 md:text-xl lg:rounded-[10px] xl:mt-5 xl:px-[38px] xl:py-[19px] xl:text-[27px]"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="engine"
                className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl"
              >
                Engine
              </label>
              <input
                type="text"
                id="engine"
                placeholder="2500cc"
                className="mt-2 w-full rounded bg-white px-3 py-1.5 text-sm leading-[144%] !font-normal !text-[rgba(0,0,0,0.70)] outline-none placeholder:text-[#000000B2] sm:mt-3 sm:py-2 md:mt-4 md:px-5 md:py-3 md:text-xl lg:rounded-[10px] xl:mt-5 xl:px-[38px] xl:py-[19px] xl:text-[27px]"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="horsepower"
                className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl"
              >
                Horsepower
              </label>
              <input
                type="text"
                id="horsepower"
                placeholder="295  hp"
                className="mt-2 w-full rounded bg-white px-3 py-1.5 text-sm leading-[144%] !font-normal !text-[rgba(0,0,0,0.70)] outline-none placeholder:text-[#000000B2] sm:mt-3 sm:py-2 md:mt-4 md:px-5 md:py-3 md:text-xl lg:rounded-[10px] xl:mt-5 xl:px-[38px] xl:py-[19px] xl:text-[27px]"
              />
            </div>

            <div className="w-full">
              <p className="text-sm leading-[144%] font-semibold md:text-lg xl:text-2xl">
                Drive
              </p>
              <Select>
                <SelectTrigger className="mt-2 w-full !rounded !bg-white !text-sm leading-[144%] !font-normal !text-[#000000B2] sm:mt-3 md:mt-4 md:px-5 md:py-[26px] md:!text-xl md:text-[27px] lg:!rounded-[11px] xl:mt-5 xl:px-[38px] xl:py-[38px]">
                  <SelectValue placeholder="AWD" className="text-center" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray w-full max-w-fit bg-white">
                  <div className="px-2 py-3 md:px-3 md:py-5 lg:px-4 lg:py-6 xl:px-[30px] xl:py-[50px]">
                    <div className="border-gray mb-6 flex max-w-[640px] items-center gap-1 rounded border-[0.2px] px-3 py-2 lg:mb-8 lg:gap-3 lg:rounded-[10px] lg:px-5 lg:py-3 xl:mb-[50px] xl:gap-5 xl:px-10 xl:py-5 dark:bg-white">
                      <SearchIcon className="h-[25px] w-[25px] md:h-[34px] md:w-[34px]" />
                      <input
                        type="text"
                        placeholder="Select Car Model"
                        className="placeholder:text-gray dark:text-gray w-full text-sm outline-none md:text-base xl:text-xl xl:placeholder:text-xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <span className="text-sm leading-[144%] font-semibold md:text-base">
                      Select Car Model
                    </span>

                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                        >
                          <span className="mx-auto text-center">
                            {option.label}
                          </span>
                        </SelectItem>
                      ))
                    ) : (
                      <div className="mt-4 text-center text-gray-400">
                        No results found
                      </div>
                    )}

                    <SelectItem
                      value="fwdFrontWheel"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">
                        FWD ( Front -wheel drive )
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="rwdRearWheel"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">
                        RWD (Rear wheel Drive )
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="awdAllWheel"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">
                        AWD ( All Wheel Drive )
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="4wdFourWheel"
                      className="mt-2 max-w-[640px] !rounded border-[0.2px] p-3 text-center lg:mt-4 lg:!rounded-[10px] lg:p-4 xl:mt-5 xl:p-[22px]"
                    >
                      <span className="mx-auto text-center">
                        4WD ( Four Wheel Drive )
                      </span>
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:gap-5">
          <CommonYellowBtn
            title="Save Changes"
            link="/partner/dashboard/my-car/edit-details/features"
            className="md:w-max"
          />
          <YellowBorderCommonBtn title="Cancel" />
        </div>
      </form>
    </div>
  );
}

export default MyCarForm;
