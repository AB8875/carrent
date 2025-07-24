import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Switch } from "../ui/switch";
import AddAccounModal from "./AddAccounModal";
import { accountSettingsAccount } from "../helper/ProfileHelper";

function AccountSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First switch ON by default

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="relative h-[100vh] w-full">
        <div className="w-full pt-[60px] sm:pt-[70px] md:px-5 md:pt-[80px] lg:px-[30px] lg:pt-[100px]">
          <div className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-[60px]">
            <h2 className="text-gray mb-3.5 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Your Existing Account
            </h2>
            <p className="md:test-base text-gray text-xs sm:text-sm">
              Add another account - So you can switch them easily
            </p>
          </div>
        </div>

        <div>
          {accountSettingsAccount.map((item, index) => (
            <div
              key={index}
              className="account-card border-[0.179px] border-transparent py-2 duration-200 sm:py-[15px] md:border-y-[0.604px] md:px-5 lg:px-[30px]"
            >
              <div className="px-2 sm:px-3.5">
                <label className="w-full cursor-pointer">
                  <div className="mx-auto flex w-full max-w-[878px] items-center justify-between">
                    <div className="flex items-center gap-[13px] sm:gap-6 md:gap-[30px]">
                      <Image
                        className="max-sm:max-h-10 max-sm:max-w-10"
                        src={item.img}
                        alt="profile-pic"
                        width={70}
                        height={70}
                      />
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <h3 className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base">
                          {item.email}
                        </p>
                      </div>
                    </div>

                    <Switch
                      checked={activeIndex === index}
                      onCheckedChange={() => handleSwitchChange(index)}
                    />
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && <AddAccounModal closeModal={closeModal} />}
    </>
  );
}

export default AccountSettings;
