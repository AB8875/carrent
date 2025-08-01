"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import SubHeading from "./SubHeading";
import SubPara from "./SubPara";
import CommonTransperentBtn from "./CommonTransperentBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BookNow from "../applicant/pages/book-now/BookNow";
import YellowBorderCommonBtn from "./YellowBorderCommonBtn";
import { EyeIcon, SaveIcon, StarIcon } from "../helper/user/Icon";
import { ourServices } from "../helper/user/Helper";

interface cardData {
  id: string;
  carImg: string;
  views: number;
  bookMark: number;
  carName: string;
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
  distance: string;
  avableDate: {
    start: string;
    end: string;
  };
  price: {
    price: string;
    offerPrice: string;
  };
  bookNow: string;
}

interface IPROPS {
  className?: string;
  details: cardData;
}

const CarBikeCommonCard: React.FC<IPROPS> = ({ className, details }) => {
  const pathname = usePathname();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "!hidden";
    } else {
      document.body.style.overflow = "!auto";
    }

    return () => {
      document.body.style.overflow = "!auto";
    };
  }, [isModalOpen]);

  return (
    <div
      className={`md:bg-light-white rounded bg-white px-3 pt-3 sm:px-5 md:rounded-[20px] md:p-6 lg:p-8 xl:p-10 ${className}`}
    >
      <div className="flex h-full flex-col gap-4 md:gap-8 lg:flex-row lg:gap-[50px]">
        <div className="relative flex justify-center rounded-[10px] bg-white md:p-4 lg:w-[33%]">
          <div className="flex min-h-[293px] items-center justify-center lg:min-h-auto">
            <Image
              src={details.carImg}
              width={399}
              height={292}
              alt="Hyundai car img"
            />
          </div>
          <div className="absolute top-[15px] right-[15px] flex items-center gap-6">
            <div className="flex h-[25px] w-[25px] items-center justify-center gap-[5px] rounded border md:h-[35px] md:w-[70px]">
              <EyeIcon />
              <span className="text-gray hidden text-sm md:block">
                {formatNumber(details.views)}
              </span>
            </div>
            <div
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center gap-[5px] rounded border md:h-[35px] md:w-[70px]"
            >
              <SaveIcon isActive={isBookmarked} />
              <span className="text-gray hidden text-sm md:block">
                {formatNumber(details.bookMark)}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[77%]">
          <div className="flex justify-between gap-1">
            <SubHeading
              title={details.carName}
              className="dark:!text-gray !border-none !text-xl md:!text-2xl xl:!text-[32px]"
            />
            <div className="flex flex-col items-end justify-end text-xs md:text-base">
              <div className="flex gap-2.5">
                <div className="flex">
                  {Array.from(details.rattings.star).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="dark:!text-gray whitespace-nowrap">
                  ({details.rattings.star})
                </span>
              </div>
              <span className="dark:!text-gray">
                <span>{details.rattings.users}</span> ratings
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs sm:gap-[30px] md:mt-4 md:text-base xl:mt-6">
            {details.assest.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                {item.icon}
                <span className="dark:!text-gray">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-[14px] flex flex-col justify-between gap-3 md:mt-6 md:flex-row md:gap-0 xl:mt-[42px]">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex gap-[3px]">
                <SubHeading
                  title="Pick Up Location :"
                  className="dark:!text-gray !border-none !text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                />
                <SubPara
                  title={details.pekupLocation}
                  className="dark:!text-gray !text-[13px] md:text-base lg:!text-lg xl:!text-xl"
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
                  className="dark:!text-gray !text-[13px] md:text-base lg:!text-lg xl:!text-xl"
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
                  className="dark:!text-gray !text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                />
              </div>
              {pathname.startsWith("/applicant/cars-listnin") && (
                <div className="hidden gap-[3px] md:flex">
                  <SubHeading
                    title="Distance : "
                    className="!border-none !text-[13px] md:text-base lg:!text-lg xl:!text-xl"
                  />
                  <SubPara
                    title={details.distance}
                    className="!text-[13px] whitespace-nowrap md:text-base lg:!text-lg xl:!text-xl"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-[28px] flex flex-col justify-between !gap-10 md:flex-row md:items-center md:gap-2">
            <div className="min-[1070px]:max-w-auto flex-wra flex max-w-[100px] items-center gap-1.5 min-[1070px]:!flex-row min-[1320px]:gap-13 md:justify-between lg:flex-col">
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
                <h2 className="text-gray flex items-center gap-1.5 text-2xl leading-[144%] font-semibold whitespace-nowrap xl:text-[32px]">
                  $ <span>{details.price.price}</span> / day
                </h2>
              )}
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-2 min-[1480x]:gap-10">
              <YellowBorderCommonBtn
                title="Book Now"
                onClick={openModal}
                className="bg-primary xl-!px-[25px] md:!text-primary hover:!text-primary !text-gray -mx-[12px] !p-[13px] sm:-mx-5 md:mx-0 md:bg-transparent lg:!text-base xl:!py-[13px] xl:!text-xl"
              />

              <CommonTransperentBtn
                link="/applicant/cars-listing-details"
                title="View Details"
                className="xl-!px-[25px] -mx-[12px] !p-[13px] sm:-mx-5 md:mx-0 lg:!text-base xl:!py-[13px] xl:!text-xl"
              />
              <Link
                href={"#"}
                className={`border-primary text-primary hover:!bg-gray rounded border px-[25px] py-[13px] text-xl font-semibold transition-all duration-700 ${className} xl-!px-[25px] -mx-[12px] hidden gap-1 !p-[13px] text-center sm:-mx-5 md:mx-0 md:!flex lg:block lg:!text-base xl:!py-[13px] xl:!text-xl`}
              >
                <Image
                  src={"/assets/svg/small-car-icon.svg"}
                  width={27}
                  height={12}
                  alt="small car img"
                />
                <span> Direction</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
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

export default CarBikeCommonCard;
