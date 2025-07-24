"use client";

import React, { FC } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { profileSettingData } from "../helper/ProfileHelper";

// Define the shape of form values
interface FormValues {
  [key: string]: string;
}

// Define props for the component
interface ProfileSettingProps {
  isEditable: boolean;
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const ProfileSetting: FC<ProfileSettingProps> = ({
  isEditable,
  formValues,
  setFormValues,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="h-full px-5 pt-8 pb-[47px] min-[1440px]:!px-[30px]">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-5 max-md:mb-10 sm:gap-y-8">
        {profileSettingData.map((item, index) => (
          <div
            key={index}
            className={`flex w-full flex-col gap-2 sm:gap-3 md:w-[47%] md:gap-[18px] ${item.className}`}
          >
            <Label
              className="text-xs font-normal text-[rgba(10,28,42,0.70)] sm:text-sm md:text-base"
              htmlFor={item.htmlFor}
            >
              {item.labelTitle}
            </Label>
            <Input
              type={item.type}
              className="rounded-sm border-[1px] border-[#0a1c2a4b] bg-white px-2.5 py-1.5 text-sm font-medium text-[rgba(10,28,42,0.70)] sm:px-3.5 sm:py-2 sm:text-base md:px-[18px] md:py-3 md:text-lg lg:text-xl"
              id={item.id}
              placeholder={item.placeholder}
              value={formValues[item.id] ?? ""}
              onChange={handleInputChange}
              readOnly={!isEditable}
            />
          </div>
        ))}

        <div className="flex w-full flex-col gap-2 sm:gap-3 md:gap-[18px]">
          <Label
            htmlFor="bio"
            className="text-xs font-normal text-[rgba(10,28,42,0.70)] sm:text-sm md:text-base"
          >
            Bio
          </Label>
          <textarea
            className="rounded-sm border-[1px] border-[#0a1c2a4b] bg-white px-[18px] py-3 text-sm font-medium text-[rgba(10,28,42,0.70)] sm:text-base md:text-lg lg:text-xl"
            rows={5}
            placeholder="add Bio"
            id="bio"
            value={formValues.bio}
            onChange={handleInputChange}
            readOnly={!isEditable}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
