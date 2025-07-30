"use client";
import React, { useEffect, useRef, useState } from "react";

import SubHeading from "@/components/common/SubHeading";
import SubPara from "@/components/common/SubPara";
import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";

import { usePathname } from "next/navigation";

import BookNow from "../book-now/BookNow";

import Link from "next/link";
import { StarIcon } from "@/components/helper/user/Icon";
import YellowBtn from "@/components/common/YellowBtn";
import { ourServices } from "@/components/helper/user/Helper";
interface cardData {
  id: string;
  carName: string;
  reviewPath: string;
  rattings: {
    star: string;
    users: string;
  };
  assest: {
    icon: React.ReactNode;
    name: string;
  }[];
  pekupLocation: string;
  features: string;
  avableDate: {
    start: string;
    end: string;
  };
  price: {
    price: string;
    offerPrice: string;
  };
}

interface IPROPS {
  className?: string;
  details: cardData;
}
const CarDetailes: React.FC<IPROPS> = ({ className, details }) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pt-5 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <div
        className={`bg-light-white rounded px-3 pt-3 sm:rounded-[10px] sm:px-5 md:rounded-[20px] md:p-6 lg:p-8 xl:p-10 ${className}`}
      >
        <div className="flex h-full flex-col md:gap-8 lg:flex-row lg:gap-[50px]">
          <div className="w-full">
            <div className="flex justify-between">
              <SubHeading
                title={details.carName}
                className="dark:!text-gray !border-none !text-xl md:!text-2xl xl:!text-[32px]"
              />
              <div
                className={`flex flex-col items-end justify-end text-xs md:text-base ${
                  pathname === "/applicant/cars-listing-details" ? "hidden" : ""
                }`}
              >
                <div className="flex gap-2.5">
                  <div className="flex">
                    {Array.from(details.rattings.star).map((_, i) => {
                      return <StarIcon key={i} />;
                    })}
                  </div>
                  <span className="dark:!text-gray whitespace-nowrap">
                    ({details.rattings.star})
                  </span>
                </div>
                <span className="dark:!text-gray">
                  <span>{details.rattings.users} </span>
                  ratings
                </span>
              </div>
              <Link
                href={details.reviewPath}
                className={`flex-col items-end justify-end text-xs md:text-base ${
                  pathname === "/applicant/cars-listing-details"
                    ? "flex"
                    : "hidden"
                }`}
              >
                <div className="flex gap-2.5">
                  <div className="flex">
                    {Array.from(details.rattings.star).map((_, i) => {
                      return <StarIcon key={i} />;
                    })}
                  </div>
                  <span className="dark:!text-gray whitespace-nowrap">
                    ({details.rattings.star})
                  </span>
                </div>
                <span className="dark:!text-gray">
                  <span>{details.rattings.users} </span>
                  ratings
                </span>
              </Link>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-4 text-xs sm:gap-[30px] md:mt-4 md:text-base xl:mt-6">
              {details.assest.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="dark:!text-gray flex items-center gap-2.5"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="dark:!text-gray mt-[14px] flex flex-col justify-between gap-3 md:mt-6 md:flex-row md:gap-0 xl:mt-[42px]">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex gap-[3px]">
                  <SubHeading
                    title="Pick Up Location :"
                    className="px dark:!text-gray !border-none !text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                  />
                  <SubPara
                    title={details.pekupLocation}
                    className="!text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                  />
                </div>
                <div className="flex gap-[3px]">
                  <SubHeading
                    title="Available On : "
                    className="dark:!text-gray !border-none !text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                  />
                  <SubPara
                    title={
                      details.avableDate.start + "-" + details.avableDate.end
                    }
                    className="!text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                  />
                </div>
              </div>
              <div className="flex w-[38%] flex-wrap justify-between gap-3 min-[1535px]:w-[60%]">
                <div className="flex gap-[3px]">
                  <SubHeading
                    title="Feature : "
                    className="dark:!text-gray !border-none !text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                  />
                  <SubPara
                    title={details.features}
                    className="!text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[28px] flex flex-col justify-between !gap-10 md:flex-row md:items-center md:gap-2">
              <div className="min-[1070px]:max-w-auto flex-wra flex items-center gap-1.5 min-[1070px]:!flex-row min-[1320px]:gap-13 md:justify-between lg:flex-col">
                {/* If offerPrice > 0, show offer + original price */}
                {details.price.offerPrice > "0" ? (
                  <>
                    <h2 className="text-gray flex items-center gap-1.5 text-2xl leading-[144%] font-semibold whitespace-nowrap xl:text-[32px]">
                      $ <span>{details.price.offerPrice}</span> / day
                    </h2>
                    <del className="flex text-base whitespace-nowrap text-gray-700 md:text-lg xl:text-xl">
                      $ <span>{details.price.price}</span> / day
                    </del>
                  </>
                ) : (
                  // Else only show original price
                  <h2 className="text-gray flex items-center gap-1.5 text-2xl leading-[144%] font-semibold whitespace-nowrap xl:text-[32px]">
                    $ <span>{details.price.price}</span> / day
                  </h2>
                )}
              </div>
              {pathname.includes("/applicant") && (
                <div
                  className={`flex flex-col justify-end gap-5 md:w-[50%] md:flex-row md:items-center md:gap-2 min-[1480x]:gap-10`}
                >
                  <YellowBtn
                    title="Book Now"
                    onClick={openModal}
                    className="-mx-3 sm:-mx-5 md:mx-0"
                  />

                  <CommonTransperentBtn
                    link="/applicant/contact-us"
                    title="Contact Us"
                    className="xl-!px-[25px] -mx-[12px] !p-[13px] sm:-mx-5 md:mx-0 md:w-[159px] lg:!text-base xl:!py-[13px] xl:!text-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50">
          <div
            ref={modalRef}
            className="max-h-[90vh] w-full overflow-y-auto rounded"
          >
            {ourServices.map((item, index) => (
              <BookNow key={index} secData={item} closeModal={closeModal} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailes;
