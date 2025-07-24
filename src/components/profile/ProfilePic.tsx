"use client";
import React from "react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { Switch } from "../ui/switch";
import { usePathname } from "next/navigation";
import { notificationsSwitch } from "../helper/ProfileHelper";

function ProfilePic() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const pathname = usePathname();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setImageUrl(localUrl);
    }
  };
  return (
    <>
      <div className="profile-pic fixed flex max-h-[calc(100vh-165px)] min-h-[calc(100vh-165px)] max-w-[381px] flex-col overflow-hidden rounded-[20px] border border-[#d9d9d9] bg-[#F9F9F9] pt-10 text-center max-xl:hidden">
        <div
          className={`sticky top-0 z-[99] bg-[#f9f9f9] ${
            pathname === "/partner/dashboard/notification"
              ? "max-[1500px]:px-14 min-[1500px]:px-20"
              : "max-[1440px]:px-14 min-[1440px]:px-20"
          } `}
        >
          <div>
            <div
              className={`h-[150px] w-[150px] overflow-hidden rounded-full ${
                pathname === "/partner/dashboard/notification"
                  ? "min-[1500px]:h-[216px] min-[1500px]:w-[216px]"
                  : "min-[1440px]:h-[216px] min-[1440px]:w-[216px]"
              }`}
            >
              <Image
                className="mb-[26px] h-full max-h-[216px] w-full max-w-[216px] object-cover"
                src={imageUrl || "/assets/png/profile-pic.png"}
                alt="profile-pic"
                width={216}
                height={216}
              />
            </div>
            <Label className="mt-4 cursor-pointer text-center text-base font-medium text-[#F9B701] max-[1440px]:ml-5 min-[1440px]:ml-[52px]">
              Update Picture
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </Label>

            <h3 className="mt-2 mb-1 text-2xl font-semibold text-[#0A1C2A]">
              John Deo
            </h3>
            <p className="text-black/70">Car Dealer</p>
          </div>
        </div>
        {pathname.includes("/dashboard/notification") && (
          <div className="mt-1 flex h-full flex-col overflow-hidden">
            {/* Sticky header */}
            <div className="sticky top-0 z-10 bg-[#f9f9f9]">
              <h3 className="text-gray w-full border-b border-black/70 p-4 text-start text-xl font-medium">
                Notifications
              </h3>
            </div>

            {/* Scrollable switch list - fill remaining height */}
            <div className="flex-1 overflow-y-auto px-3.5 pb-10">
              <div className="mt-[30px] flex flex-col gap-5">
                {notificationsSwitch.map((item, index) => (
                  <label key={index} className="w-full cursor-pointer">
                    <div className="flex items-center justify-between gap-5">
                      <p className="text-gray text-base font-medium">
                        {item.title}
                      </p>
                      <Switch className="cursor-pointer" />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilePic;
