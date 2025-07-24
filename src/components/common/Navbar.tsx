"use client";
import React, { useEffect, useState } from "react";
import { ThemeToggler } from "./ThemeToggler";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { navData } from "../helper/partner/Helper";
import { navApplicantData } from "../helper/Helper";
import { SidebarMenuAction } from "../ui/sidebar";
import { MenuIcon } from "../helper/partner/Icon";
import Sidebarmain from "./SidebarMain";
import LinkBlackBtn from "./LinkBlackBtn";
import SmallScreenSideBar from "./profile-sidebar/SmallScreenSideBar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("/profile") && (
        <nav className="bg-primary border-b border-black">
          <div className="mx-auto flex w-full max-w-[1720px] items-center justify-between px-4 py-5 sm:px-5 sm:py-8 md:px-7 lg:px-8 xl:px-10 2xl:px-12">
            <Link href={"/partner/home"} className="flex gap-1">
              <Image
                className="h-auto w-[100px] sm:w-[130px] md:w-[150px] xl:w-[170px]"
                src={"/assets/png/navbar-logo.png"}
                alt="logo"
                width={197.93}
                height={69.86}
              />
            </Link>
            {!pathname.includes("/auth") && (
              <div className="hidden gap-12 lg:flex">
                <>
                  {pathname.includes("/partner") && (
                    <>
                      {navData.map((item, index) => {
                        const isActive = pathname === item.url;
                        return (
                          <div className="bg-transparent" key={index}>
                            <Link
                              href={item.url}
                              className={`relative text-sm font-normal duration-300 sm:text-base ${
                                isActive
                                  ? "border-b-[1px] pb-0.5 text-white"
                                  : "text-gray hover:text-white"
                              }`}
                            >
                              {item.link}
                            </Link>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {pathname.includes("/applicant") && (
                    <>
                      {navApplicantData.map((item, index) => {
                        const isActive = pathname === item.url;
                        return (
                          <div key={index}>
                            <Link
                              href={item.url}
                              className={`relative text-sm font-normal duration-300 sm:text-base ${
                                isActive
                                  ? "border-b-[1px] pb-0.5 text-white"
                                  : "text-gray hover:text-white"
                              }`}
                            >
                              {item.link}
                            </Link>
                          </div>
                        );
                      })}
                    </>
                  )}
                </>
              </div>
            )}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {!pathname.includes("/auth") && (
                <Sidebarmain
                  button={
                    <button
                      onClick={openSidebar}
                      className="w-10 cursor-pointer"
                    >
                      <MenuIcon />
                    </button>
                  }
                />
              )}
              {!pathname.includes("/auth") && (
                <LinkBlackBtn
                  path="/auth/login/partner"
                  className="hidden md:flex"
                  title="Log In"
                />
              )}
              {pathname.includes("/auth") && (
                <div className="hidden gap-6 sm:flex md:gap-10">
                  <LinkBlackBtn
                    path="/auth/login/partner"
                    className="Flex"
                    title="Log In"
                  />
                  {/* <BlackBtn title="Log In " className="flex" /> */}
                  <LinkBlackBtn
                    path="/auth/signup/partner"
                    className="!max-w-[126px] !text-nowrap"
                    title="Sign Up"
                  />
                </div>
              )}

              <ThemeToggler />
            </div>
          </div>
          {isSidebarOpen && <SmallScreenSideBar closeSidebar={closeSidebar} />}
        </nav>
      )}
    </>
  );
}

export default Navbar;
