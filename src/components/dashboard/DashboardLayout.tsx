"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "../common/profile-sidebar/SideBar";
import ProfilePic from "../profile/ProfilePic";
import { NotificationModalIcon, SideBaeOpenIcon } from "../helper/ProfileIcon";
import ModalNotification from "../profile/notifications/ModalNotification";
import SmallScreenSideBar from "../common/profile-sidebar/SmallScreenSideBar";
import { Logo } from "../helper/partner/Icon";
import { navData } from "../helper/partner/Helper";

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  // Handle modal scroll behavior
  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isSidebarOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const hideProfilePicOnPaths = [
    "/partner/dashboard/my-car/add-car",
    "/partner/dashboard/my-car/edit-details",
    "/partner/dashboard/my-car/edit-details/features",
  ];
  const shouldHideProfilePic = hideProfilePicOnPaths.includes(pathname);

  return (
    <>
      <div className="flex max-md:flex-col">
        <div className="z-[999] hidden h-full lg:block">
          <SideBar />
        </div>

        {/* Main Content */}
        <main className="h-auto w-full">
          {/* navbar*/}
          <div className="bg-primary fixed top-0 z-[99] w-full px-5 py-2 pl-[290px] max-md:pl-5 sm:px-6 sm:py-3.5 md:px-7 md:py-5">
            <div className="z-[99999] flex items-center justify-between gap-5">
              <Link
                href={"/"}
                className="flex h-auto w-30 items-center gap-1 lg:w-0.5"
              >
                <Logo />
              </Link>
              <div className="ml-36 hidden gap-10 lg:flex xl:ml-20 xl:gap-[50px]">
                {navData.map((item, index) => (
                  <Link
                    key={index}
                    className="text-sm text-black duration-200 hover:text-white xl:text-base"
                    href={item.url}
                  >
                    {item.link}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-5 sm:gap-6 md:gap-8 lg:gap-[40px] xl:gap-[60px]">
                {/* Small screen sidebar toggle */}
                <button
                  onClick={openSidebar}
                  className="cursor-pointer lg:hidden"
                >
                  <SideBaeOpenIcon />
                </button>
                <button onClick={openModal} className="cursor-pointer">
                  <NotificationModalIcon />
                </button>
                <Image
                  className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 xl:h-[60px] xl:w-[60px]"
                  src={"/assets/png/profile-img-icon.png"}
                  width={60}
                  height={60}
                  alt="profile-icon"
                />
              </div>
            </div>
          </div>
          <div className="sticky top-0 h-[110px]"></div>

          <div className="mt-5 flex h-full max-h-[calc(100vh-135px)] min-h-[calc(100vh-135px)] lg:mt-12 min-lg:ml-[290px] lg:max-h-[calc(100vh-165px)] lg:min-h-[calc(100vh-165px)] min-xl:ml-[305px]">
            {!shouldHideProfilePic && <ProfilePic />}
            <div
              className={`h-full w-full ${
                pathname === "/partner/dashboard/notification"
                  ? "max-[1500px]:!ml-[280px] max-xl:!ml-0"
                  : ""
              } ${
                !shouldHideProfilePic
                  ? "max-[1440px]:ml-[260px] max-xl:ml-0 min-[1440px]:ml-[380px]"
                  : "pl-0"
              } lg:px-5`}
            >
              {children}
            </div>
          </div>
        </main>

        {/* Modals */}
        {isModalOpen && <ModalNotification closeModal={closeModal} />}
        {isSidebarOpen && <SmallScreenSideBar closeSidebar={closeSidebar} />}
      </div>
    </>
  );
}

export default DashboardLayout;
