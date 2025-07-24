"use client";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import { EyeIcon, SaveIcon, StarIcon } from "../icon/ApplicantIcon";
import SubHeading from "../SubHeading";
import SubPara from "../SubPara";
import CommonTransperentBtn from "../CommonTransperentBtn";
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
}

interface IPROPS {
  className?: string;
  details: cardData;
}
const ProfileCarCard: React.FC<IPROPS> = ({ className, details }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <div
      className={`rounded bg-white py-7 pr-3 pl-4 md:rounded-[20px] ${className}`}
    >
      <div className="flex h-full flex-col gap-4 2xl:flex-row 2xl:gap-8">
        <div className="relative flex justify-center rounded-[10px] bg-white md:p-4 2xl:w-[31%]">
          <div className="flex min-h-[293px] items-center justify-center lg:min-h-auto">
            <Image
              src={details.carImg}
              width={270}
              height={292}
              alt="Hyundai car img"
            />
          </div>
          <div className="absolute top-[15px] right-[15px] flex items-center gap-6">
            <div className="flex h-[25px] w-[25px] items-center justify-center gap-[5px] rounded border md:h-[35px] md:w-[70px]">
              <EyeIcon />
              <span className="text-gray hidden text-[10px] md:block">
                {formatNumber(details.views)}
              </span>
            </div>
            <div
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center gap-[5px] rounded border md:h-[35px] md:w-[70px]"
            >
              <SaveIcon isActive={isBookmarked} />
              <span className="text-gray hidden text-[10px] md:block">
                {formatNumber(details.bookMark)}
              </span>
            </div>
          </div>
        </div>
        <div className="2xl:w-[77%]">
          <div className="flex justify-between">
            <SubHeading
              title={details.carName}
              className="!border-none !text-xl"
            />
            <div className="flex flex-col items-end justify-end text-xs md:text-base">
              <div className="flex gap-2.5">
                <div className="flex">
                  {Array.from(details.rattings.star).map((_, i) => {
                    return <StarIcon key={i} />;
                  })}
                </div>
                <span className="text-sm whitespace-nowrap">
                  ({details.rattings.star})
                </span>
              </div>
              <span>
                <span className="text-sm">{details.rattings.users} </span>
                ratings
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-4 text-xs sm:gap-[30px] md:mt-4 md:text-base xl:mt-6">
            {details.assest.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-2.5">
                  {item.icon}
                  <span className="text-[10px]">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-[14px] flex flex-col justify-between gap-3 sm:flex-row md:mt-6 md:gap-6 xl:mt-[42px]">
            <div className="flex flex-col gap-3 sm:w-1/2 md:gap-4">
              <div className="flex gap-[3px]">
                <SubHeading
                  title="Pick Up Location :"
                  className="px !border-none !text-[13px] md:text-sm"
                />
                <SubPara
                  title={details.pekupLocation}
                  className="!text-[13px] md:text-sm"
                />
              </div>
              <div className="flex gap-[3px]">
                <SubHeading
                  title="Available On : "
                  className="!border-none !text-[13px] whitespace-nowrap md:text-sm"
                />
                <SubPara
                  title={
                    details.avableDate.start + "-" + details.avableDate.end
                  }
                  className="!text-[13px] md:text-sm"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap justify-between gap-3 max-[1700px]:w-[38%]">
              <div className="flex gap-[3px]">
                <SubHeading
                  title="Feature : "
                  className="!border-none !text-[13px] whitespace-nowrap md:text-sm"
                />
                <SubPara
                  title={details.features}
                  className="!text-[13px] whitespace-nowrap md:text-sm"
                />
              </div>
              <div className="hidden gap-[3px] md:flex">
                <SubHeading
                  title="Distance : "
                  className="!border-none !text-[13px] md:text-sm"
                />
                <SubPara
                  title={details.distance}
                  className="!text-[13px] whitespace-nowrap md:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[28px] flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-2 2xl:!gap-10">
            <div className="min-[1070px]:max-w-auto flex max-w-[100px] flex-wrap items-center gap-1.5 min-[1070px]:!flex-row min-[1320px]:gap-13 md:justify-between lg:flex-col">
              {/* If offerPrice > 0, show offer + original price */}
              {details.price.offerPrice > "0" ? (
                <>
                  <h2 className="text-gray flex items-center gap-1.5 leading-[144%] font-semibold whitespace-nowrap">
                    $ <span>{details.price.offerPrice}</span> / day
                  </h2>
                  <del className="flex text-base whitespace-nowrap text-gray-700 md:text-lg xl:text-xl">
                    $ <span>{details.price.price}</span> / day
                  </del>
                </>
              ) : (
                // Else only show original price
                <h2 className="text-gray flex items-center gap-1.5 text-base leading-[144%] font-semibold whitespace-nowrap min-[1600px]:text-xl">
                  $ <span>{details.price.price}</span> / day
                </h2>
              )}
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-2 min-[1480x]:gap-10">
              <CommonTransperentBtn
                link="#"
                title="Book Now"
                className="bg-primary md:!text-primary !text-gray -mx-[12px] !px-4 !py-2 text-xs min-[1600px]:!text-sm sm:-mx-5 md:mx-0 md:bg-transparent"
              />
              <CommonTransperentBtn
                link="#"
                title="View Details"
                className="-mx-[12px] !px-4 !py-2 text-xs min-[1600px]:!text-sm sm:-mx-5 md:mx-0"
              />
              <Link
                href={"#"}
                className={`border-primary text-primary hover:bg-gray rounded border px-4 py-2 text-xl font-semibold transition-all duration-700 ${className} xl-!px-4 -mx-[12px] hidden gap-1 !py-2 text-center text-xs min-[1600px]:!text-sm sm:-mx-5 md:mx-0 md:!flex lg:block`}
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
    </div>
  );
};

export default ProfileCarCard;
