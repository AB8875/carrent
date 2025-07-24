"use client";

import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { YellowDotIcon } from "@/components/helper/user/Icon";
import { LogOutIcon } from "@/components/helper/ProfileIcon";
import { sideBarData, sideBardata } from "@/components/helper/ProfileHelper";
import LogOutModal from "@/components/profile/logout-modal/LogoutModal";

function SideBar() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    router.push("/");
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setImageUrl(localUrl);
    }
  };

  return (
    <>
      <div className="flex h-full justify-between gap-[30px]">
        {/* Sidebar links */}
        <div className="bg-gray fixed hidden h-full w-full max-w-[290px] overflow-y-auto md:block">
          <div className="ps-[30px] pt-[51px]">
            <div className="hidden items-center gap-3.5 max-xl:flex">
              <div className="relative h-[62px] w-[62px]">
                <div className="h-[62px] w-[62px] overflow-hidden rounded-full">
                  <Image
                    className="h-full w-full object-cover"
                    src={imageUrl || "/assets/png/profile-pic.png"}
                    alt="profile-pic"
                    width={62}
                    height={62}
                  />
                </div>
                <div className="absolute right-0 bottom-0">
                  <Label className="cursor-pointer text-center text-base font-medium text-[#F9B701]">
                    <Image
                      src={"/assets/png/camera-upload-img.png"}
                      alt="camera-img"
                      width={20}
                      height={20}
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </Label>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <h2 className="text-xl font-semibold">Jenny Wilson</h2>
                <p className="text-sm">Businessmen</p>
              </div>
            </div>
            <Link
              href={"#"}
              className="hidden items-center gap-[5px] min-xl:flex"
            >
              <YellowDotIcon />
              <span className="text-2xl font-semibold text-white">
                That sit
              </span>
            </Link>
          </div>
          <div className="mt-[85px] flex flex-col gap-[26px]">
            {sideBarData
              .filter((item, index) => {
                const restrictedIndexes = [0, 1, 2, 3, 4];
                const restrictedIndexesdashboard = [5, 6, 7];

                if (restrictedIndexes.includes(index)) {
                  return pathname.startsWith("/partner");
                }

                if (restrictedIndexesdashboard.includes(index)) {
                  return pathname.startsWith("/dashboard");
                }

                return true;
              })
              .map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.path);

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={`group flex max-w-[256px] items-center gap-[15px] rounded-r-[30px] py-2 ps-[35px] transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-gray"
                        : "hover:bg-primary hover:text-gray text-white"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 transition-all duration-500 ${
                        isActive ? "fill-gray" : "group-hover:fill-gray"
                      }`}
                    />
                    <span className="text-base">{item.title}</span>
                  </Link>
                );
              })}
          </div>

          <div className="mt-[37px] border-t border-white pt-[25px]">
            <p className="px-[30px] text-sm text-white">Report</p>
            <div className="mt-[25px] flex flex-col gap-[26px]">
              {sideBardata
                .filter((item, index) => {
                  const restrictedIndexes = [0, 1, 2, 3];
                  const restrictedIndexesdashboard = [4, 5, 6];

                  if (restrictedIndexes.includes(index)) {
                    return pathname.startsWith("/partner");
                  }

                  if (restrictedIndexesdashboard.includes(index)) {
                    return pathname.startsWith("/dashboard");
                  }

                  return true;
                })
                .map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname.startsWith(item.path);

                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className={`group flex max-w-[256px] items-center gap-[15px] rounded-r-[30px] py-2 ps-[35px] transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-gray"
                          : "hover:bg-primary hover:text-gray text-white"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 transition-all duration-500 ${
                          isActive ? "fill-gray" : "group-hover:fill-gray"
                        }`}
                      />
                      <span className="text-base">{item.title}</span>
                    </Link>
                  );
                })}

              <button
                onClick={() => setIsModalOpen(true)}
                className="group hover:bg-primary hover:text-gray mb-14 flex w-full max-w-[256px] cursor-pointer items-center gap-[15px] rounded-r-[30px] py-2 ps-[35px] text-white transition-all duration-500"
              >
                <span>
                  <LogOutIcon className="group-hover:!fill-gray transition-all duration-500" />
                </span>
                <span className="text-base">Log Out</span>
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <LogOutModal closeModal={closeModal} handleLogout={handleLogOut} />
        )}
      </div>
    </>
  );
}

export default SideBar;
