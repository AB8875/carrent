import React, { useState } from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { FC } from "react";
import { Eye, EyeOff } from "lucide-react";
import { addAccountModalForm } from "../helper/ProfileHelper";

interface AddAccounModalProps {
  closeModal: () => void;
}

const AddAccounModal: FC<AddAccounModalProps> = ({ closeModal }) => {
  const [showPasswords, setShowPasswords] = useState<{
    [key: number]: boolean;
  }>({});

  const togglePasswordVisibility = (index: number) => {
    setShowPasswords((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="fixed top-0 left-0 z-[999] h-full w-full overflow-y-auto">
      <div className="z-[999] flex h-[100vh] w-full items-center justify-center overflow-y-auto bg-black/70 p-5">
        <div className="z-[9999] max-h-[550px] w-full max-w-[935px] overflow-auto rounded-[8px] bg-[#f9f9f9] sm:rounded-[20px]">
          <div className="flex items-center justify-between border-b-[1px] border-black px-3 py-2.5 sm:px-4 sm:py-4 md:p-[30px]">
            <h1 className="text-gray text-sm font-semibold sm:text-base md:text-xl lg:text-2xl">
              Add Account
            </h1>
            {/* Close icon */}
            <button
              onClick={closeModal}
              className="rotate-45 cursor-pointer text-2xl font-semibold"
            >
              +
            </button>
          </div>
          <div className="my-8 px-[30px] sm:my-[50px]">
            <div className="grid grid-cols-1 gap-6 gap-x-14 sm:grid-cols-2 sm:gap-y-[34px]">
              {addAccountModalForm.map((item, index) => (
                <div
                  key={index}
                  className="gap- flex flex-col gap-2 sm:gap-3.5"
                >
                  <Label
                    className="text-xs text-[rgba(10,28,42,0.70)] sm:text-sm"
                    htmlFor={item.htmlFor}
                  >
                    {item.labelTitle}
                  </Label>
                  <div className="relative w-full">
                    <Input
                      type={
                        item.type === "password" && showPasswords[index]
                          ? "text"
                          : item.type
                      }
                      className="text-gray w-full rounded-sm border-[1px] border-[#0a1c2a4b] bg-white px-2 py-1.5 text-sm font-medium sm:px-3 sm:py-2.5 sm:text-base md:px-[15px]"
                      id={item.id}
                      placeholder={item.placeholder}
                    />
                    {item.type === "password" && (
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility(index)}
                        className="absolute top-2.5 right-4 size-2.5 cursor-pointer text-[rgba(10,28,42,0.70)] hover:text-black sm:top-3.5 sm:right-5"
                      >
                        {showPasswords[index] ? (
                          <Eye size={16} />
                        ) : (
                          <EyeOff size={16} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="text-primary hover:bg-primary hover:text-gray mt-10 rounded-sm bg-[#0B1D29] px-5 py-2.5 text-xl font-medium duration-200 max-sm:w-full lg:px-[26px] lg:py-3.5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccounModal;
