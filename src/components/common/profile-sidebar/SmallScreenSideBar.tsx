"use client";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideBardata, sideBarData } from "@/components/helper/ProfileHelper";
import { LogOutIcon } from "lucide-react";
import LogOutModal from "@/components/profile/logout-modal/LogoutModal";

type Props = {
  closeSidebar: () => void;
};

function SmallScreenSideBar({ closeSidebar }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateSidebar, setAnimateSidebar] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Slide-in animation trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => setAnimateSidebar(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Close sidebar with animation
  const handleClose = () => {
    setAnimateSidebar(false);
    setTimeout(() => {
      closeSidebar();
    }, 300); // match transition duration
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleLogOut = () => {
    // Clear localStorage only if you're using custom keys
    localStorage.clear();

    // Close modal
    setIsModalOpen(false);

    // 🔒 Sign out from NextAuth and redirect to homepage
    signOut({ callbackUrl: "/" });
  };

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

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
      <div className="fixed inset-0 z-[99999] flex bg-black/70 transition-opacity duration-300 ease-in-out">
        <div
          ref={sidebarRef}
          className={`bg-gray h-full w-full max-w-[290px] transform overflow-y-auto py-10 transition-transform duration-300 ease-in-out ${
            animateSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Profile Section */}
          <div className="mb-10 flex items-center gap-3 px-5">
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
                <Label className="cursor-pointer">
                  <Image
                    src="/assets/png/camera-upload-img.png"
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
            <div className="text-white">
              <h2 className="text-lg font-semibold">Jenny Wilson</h2>
              <p className="text-sm">Businessmen</p>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-6">
            {sideBarData
              .filter((item, index) => {
                const restrictedIndexes = [0, 1, 2, 3, 4];
                const restrictedIndexesdashboard = [5, 6, 7];

                if (restrictedIndexes.includes(index)) {
                  return pathname.startsWith("/partner");
                }

                if (restrictedIndexesdashboard.includes(index)) {
                  return (
                    pathname.startsWith("/dashboard") ||
                    pathname.startsWith("/applicant")
                  );
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

          <div className="mt-10 border-t border-white pt-5">
            <p className="px-5 text-sm text-white">Report</p>
            <div className="mt-5 flex flex-col gap-6">
              {sideBardata
                .filter((item, index) => {
                  const restrictedIndexes = [0, 1, 2, 3];
                  const restrictedIndexesdashboard = [4, 5, 6];

                  if (restrictedIndexes.includes(index)) {
                    return pathname.startsWith("/partner");
                  }

                  if (restrictedIndexesdashboard.includes(index)) {
                    return (
                      pathname.startsWith("/dashboard") ||
                      pathname.startsWith("/applicant")
                    );
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
                className="hover:text-gray hover:bg-primary group flex max-w-[256px] items-center gap-4 rounded-r-[30px] py-2 ps-[35px] text-white transition-all duration-500"
              >
                <LogOutIcon className="group-hover:fill-gray h-6 w-6 transition-all duration-500" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <LogOutModal closeModal={closeModal} handleLogout={handleLogOut} />
      )}
    </>
  );
}

export default SmallScreenSideBar;
