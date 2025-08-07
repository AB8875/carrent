"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import CommonTransperentBtn from "@/components/common/CommonTransperentBtn";
import RemoveListModal from "./RemoveListModal";
import {
  AutomaticIcon,
  ColdAirIcon,
  CrosIcon,
  DoorIcon,
  EyeIcon,
  FuelIcon,
  SaveIcon,
  SecSeatIcon,
  StarIcon,
} from "@/components/helper/user/Icon";
import {
  PartnerMilageIcon,
  PartnerYearIcon,
} from "@/components/helper/ProfileIcon";

interface cardData {
  id: string;
  photos: string[];
  views: number;
  bookMark: number;
  carModel: string;
  year: number;
  rattings: {
    star: string;
    users: string;
  };
  assest: {
    icon: React.ReactNode;
    name: string;
  }[];

  features: {
    comfort: string[];
    safety: string[];
    entertainment: string[];
    seating: string[];
    [key: string]: string[];
  };
  distance: string;
  avableDate: {
    start: string;
    end: string;
  };
  seats: number; // e.g., 5
  doors: number; // e.g., 4
  hasAirConditioning: boolean; // true if "Air Conditioning" is present in features
  transmission: "Manual" | "Automatic"; // or string, if dynamic
  carVariants: "Petrol" | "Diesel";
}

interface IPROPS {
  className?: string;
  details: cardData;
}
const Card: React.FC<IPROPS> = ({ className, details }) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const openRemoveModal = () => setIsRemoveModalOpen(true);
  const closeRemoveModal = () => setIsRemoveModalOpen(false);
  const formatNumber = (value?: number | string) => {
    if (value === undefined || value === null) return "N/A"; // or fallback like "0"
    return parseFloat(value.toString()).toLocaleString("en-IN");
  };
  const imgURL =
    details?.photos && details.photos.length > 0
      ? `http://localhost:5002/${details?.photos[0].replace(/\\/g, "/")}`
      : "/uploads/cars/photos-1754474493506-202373898.png"; // fallback

  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <div
      className={`bg-light-white rounded px-3 pt-3 sm:px-5 md:rounded-[20px] md:p-6 lg:bg-white lg:p-7 ${className} relative`}
    >
      <button
        onClick={openRemoveModal}
        className="absolute top-9 z-[9] max-md:left-8 md:top-2 md:left-3"
      >
        <CrosIcon />
      </button>
      <div className="flex h-full flex-col gap-4 md:flex-row md:gap-8">
        <div className="relative flex min-w-[200px] justify-center rounded-[10px] bg-white md:p-2 lg:w-[33%]">
          <div className="flex min-h-[293px] items-center justify-center lg:min-h-auto">
            <Image
              src={imgURL}
              width={269}
              height={197}
              alt="Hyundai car img"
            />
          </div>
          <div className="absolute top-[15px] right-[15px] flex items-center gap-6">
            <div className="flex h-[23px] w-[43px] items-center justify-center gap-[3px] rounded border px-0.5 py-[3px]">
              <EyeIcon />
              <span className="text-gray hidden text-[8px] md:block">
                {formatNumber(details.views)}
              </span>
            </div>
            <div
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex h-[23px] w-[43px] items-center justify-center gap-[3px] rounded border px-0.5 py-[3px]"
            >
              <SaveIcon isActive={isBookmarked} />
              <span className="text-gray hidden text-[8px] md:block">
                {formatNumber(details.bookMark)}
              </span>
            </div>
          </div>
        </div>
        <div className="md:py-10 lg:w-[77%] lg:py-0">
          <div className="flex justify-between gap-1">
            <h1 className="dark:text-gray text-sm font-semibold sm:text-base md:text-lg xl:text-xl">
              {details.carModel}
            </h1>

            <div className="flex flex-col items-end justify-end text-[10px] md:text-xs">
              <div className="flex gap-1.5">
                <div className="flex">
                  {Array.from(details?.rattings?.star || "").map((_, i) => {
                    return <StarIcon key={i} />;
                  })}
                </div>
                <span className="dark:!text-gray whitespace-nowrap">
                  ({details?.rattings?.star || "0"})
                </span>
              </div>
              <span className="dark:!text-gray">
                <span>{details?.rattings?.users || "0"} </span>
                ratings
              </span>
            </div>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1.5 text-[10px]">
            {/* Seats */}
            {details?.seats && (
              <div className="flex items-center gap-1">
                <SecSeatIcon className="text-yellow-500 text-sm" />
                <span className="dark:!text-gray">{details.seats} Seats</span>
              </div>
            )}

            {/* Doors */}
            {details?.doors && (
              <div className="flex items-center gap-1">
                <DoorIcon className="text-yellow-500 text-2xl" />
                <span className="dark:!text-gray">{details.doors} Doors</span>
              </div>
            )}

            {/* Year */}
            {details?.year && (
              <div className="flex items-center gap-1">
                <PartnerYearIcon className="text-yellow-500 text-sm" />
                <span className="dark:!text-gray">{details.year}</span>
              </div>
            )}

            {/* Transmission */}
            {details?.transmission?.toLowerCase() === "automatic" && (
              <div className="flex items-center gap-1">
                <AutomaticIcon className="text-yellow-500 text-sm" />
                <span className="dark:!text-gray">Automatic</span>
              </div>
            )}

            {/* Fuel Type */}
            {details?.carVariants?.[0] && (
              <div className="flex items-center gap-1">
                <FuelIcon className="text-yellow-500 text-sm" />
                <span className="dark:!text-gray">
                  {details.carVariants[0]}
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-[70px] gap-y-2 md:mt-4">
            <div className="flex flex-col gap-1.5 md:gap-2">
              <div className="flex gap-[3px]">
                <h2 className="text-xs leading-[144%] font-semibold">
                  Available On :
                </h2>
                <p className="text-xs leading-[144%]">
                  {details.avableDate?.start + "-" + details.avableDate?.end}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex gap-[3px]">
                <h2 className="text-xs leading-[144%] font-semibold">
                  Feature :
                </h2>
                <p className="text-xs leading-[144%]">
                  {Array.isArray(details.features) &&
                    details.features.map((feature, index) => (
                      <span key={index} className="inline-block mr-2">
                        {feature}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col flex-wrap justify-between gap-x-10 gap-y-3 max-md:mb-4 md:mt-4 md:flex-row md:items-center md:gap-2 md:gap-y-4 lg:mt-5 lg:gap-y-5">
            <div className="flex items-center gap-8.5">
              {/* If offerPrice > 0, show offer + original price */}
              <>
                <h2 className="text-gray flex items-center gap-1.5 text-xl leading-[144%] font-semibold whitespace-nowrap">
                  $ 200 / day
                </h2>
                <del className="text-gray flex items-center gap-1.5 text-xs leading-[144%] whitespace-nowrap">
                  $ 250 / day
                </del>
              </>
            </div>

            <div className="flex flex-wrap gap-2 xl:flex-nowrap min-[1480x]:gap-10">
              <CommonTransperentBtn
                link="/partner/dashboard/my-car/car-details"
                title="View Details"
                className="border-primary rounded-[2px] border !px-2 !py-2 !text-xs font-semibold xl:!px-3 xl:!py-3"
              />
              <Link
                href={"#"}
                className="border-primary flex items-center gap-[7px] rounded-[2px] border !px-2 !py-2 text-xs font-semibold xl:!px-3 xl:!py-3"
              >
                <Image
                  src={"/assets/svg/small-car-icon.svg"}
                  width={27}
                  height={12}
                  alt="small car img"
                />
                <span className="text-primary text-xs font-semibold">
                  Direction
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isRemoveModalOpen && <RemoveListModal closeModal={closeRemoveModal} />}
    </div>
  );
};

export default Card;
