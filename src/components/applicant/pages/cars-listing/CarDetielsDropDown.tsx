"use client";
import {
  commonDropDownData,
  dropdownOptions,
} from "@/components/helper/user/Helper";
import CommonDropDown from "../../commen/CommonDropDown";

import Dropdown from "../../commen/Dropdown";
import { useState } from "react";

function CarDetielsDropDown() {
  const [selectedValues, setSelectedValues] = useState({
    carBrand: "",
    fuelType: "",
    transmission: "",
    color: "",
    year: "",
    seatType: "",
    bodyType: "",
  });

  const handleChange = (key: keyof typeof selectedValues, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="bg-primary scroll-w-none -mx-4 mt-10 flex justify-between gap-[15px] overflow-auto px-5 py-[18px] sm:mx-0 sm:rounded-[10px] md:px-[30px] lg:gap-8 lg:px-9 xl:gap-10">
        {commonDropDownData.map((item, index) => (
          <CommonDropDown
            key={index}
            placeholder={item.placeholder}
            selectItem={item.subData}
          />
        ))}
      </div>
      <div className="flex gap-10 space-y-6 p-6">
        <Dropdown
          placeholder="Select Car Brand"
          options={dropdownOptions.carBrands}
          selected={selectedValues.carBrand}
          onChange={(val) => handleChange("carBrand", val)}
        />
        <Dropdown
          placeholder="Select Fuel Type"
          options={dropdownOptions.fuelTypes}
          selected={selectedValues.fuelType}
          onChange={(val) => handleChange("fuelType", val)}
        />
        <Dropdown
          placeholder="Select Transmission"
          options={dropdownOptions.transmissions}
          selected={selectedValues.transmission}
          onChange={(val) => handleChange("transmission", val)}
        />
        <Dropdown
          placeholder="Select Color"
          options={dropdownOptions.colors}
          selected={selectedValues.color}
          onChange={(val) => handleChange("color", val)}
        />
        <Dropdown
          placeholder="Select Year"
          options={dropdownOptions.years}
          selected={selectedValues.year}
          onChange={(val) => handleChange("year", val)}
        />
        <Dropdown
          placeholder="Select Seat Type"
          options={dropdownOptions.seatTypes}
          selected={selectedValues.seatType}
          onChange={(val) => handleChange("seatType", val)}
        />
        <Dropdown
          placeholder="Select Body Type"
          options={dropdownOptions.bodyTypes}
          selected={selectedValues.bodyType}
          onChange={(val) => handleChange("bodyType", val)}
        />
      </div>{" "}
    </div>
  );
}

export default CarDetielsDropDown;
