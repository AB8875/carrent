"use client";
import React, { FC, useState } from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { passwordSettings } from "../helper/ProfileHelper";

interface PasswordSettingsProps {
  isEditable: boolean;
  formValues: { [key: string]: string };
  setFormValues: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
  isChangingPassword: boolean;
  setIsChangingPassword: (val: boolean) => void;
}

const PasswordSettings: FC<PasswordSettingsProps> = ({
  isEditable,
  formValues,
  setFormValues,
  isChangingPassword,
  setIsChangingPassword,
}) => {
  const [showPasswords, setShowPasswords] = useState<{
    [key: number]: boolean;
  }>({});
  const [confirmError, setConfirmError] = useState(false);

  const togglePasswordVisibility = (index: number) => {
    setShowPasswords((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "confirmPassword") {
      setConfirmError(value !== formValues.newPassword);
    }

    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="relative h-full w-full px-5 pt-8 pb-[47px] lg:px-[30px]">
      <div className="flex w-full flex-col gap-10 sm:gap-14 md:gap-10">
        {passwordSettings.map((item, index) => {
          // if (
          //   index === 0 ||
          //   (isChangingPassword && (index === 1 || index === 2))
          // ) {
          //   const isReadonlyField = index === 0;

          return (
            <div
              key={index}
              className="relative flex w-full flex-col gap-2 sm:gap-3 md:gap-5"
            >
              <Label
                className="text-xs font-normal text-[rgba(10,28,42,0.70)] sm:text-sm md:text-base"
                htmlFor={item.htmlFor}
              >
                {item.title}
              </Label>

              <div className="relative w-full">
                <Input
                  id={item.id}
                  placeholder={item.placeholder}
                  type={
                    item.type === "password" && showPasswords[index]
                      ? "text"
                      : item.type
                  }
                  readOnly={!isEditable}
                  value={formValues[item.id] || ""}
                  onChange={handleInputChange}
                  className="w-full rounded-sm border-[1px] border-[#0a1c2a4b] bg-white px-2.5 py-1.5 pr-10 text-sm font-medium text-[rgba(10,28,42,0.70)] sm:px-3.5 sm:py-2.5 sm:text-base md:px-[18px] md:py-3 md:text-lg lg:text-xl"
                />

                {item.type === "password" && (
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(index)}
                    className="absolute top-2.5 right-4 size-2.5 cursor-pointer text-[rgba(10,28,42,0.70)] hover:text-black sm:top-3.5 sm:right-5 md:top-4.5 md:right-6"
                  >
                    {showPasswords[index] ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </button>
                )}
              </div>

              {/* "Change password?" link under index 0 */}
              {index === 0 && (
                <button
                  type="button"
                  onClick={() => setIsChangingPassword(true)}
                  className="text-primary -mt-2 cursor-pointer text-start text-sm"
                >
                  You Want to change password?
                </button>
              )}

              {/* Password mismatch error under index 2 */}
              {index === 2 && confirmError && (
                <p className="-mt-1 text-xs text-red-500">
                  &#10006; Passwords do not match
                </p>
              )}

              <p
                className={`${item.characterClass} -mt-2 text-end text-[8px] font-normal text-[rgba(10,28,42,0.70)] sm:text-xs md:text-sm`}
              >
                {item.morethanCharacter}
              </p>
            </div>
          );
          // }
          // return null;
        })}
      </div>

      <div className="fixed right-10 bottom-0 hidden md:block">
        <Image
          src={"/assets/png/pass-setting-car-img.png"}
          alt="car-img"
          width={200}
          height={100.121}
        />
      </div>
    </div>
  );
};

export default PasswordSettings;
