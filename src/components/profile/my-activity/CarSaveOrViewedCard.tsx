import { CarIcon, DoorIcon, SeatIcon } from "@/components/helper/user/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IPROPS {
  imgPath: string;
  carCompany: string;
  carModel: string;
  seatNo: string;
  doorNo: string;
  path: string;
  className?: string;
  icon: React.ReactNode;
}

const CarSaveOrViewedCard: React.FC<IPROPS> = ({
  imgPath,
  carCompany,
  carModel,
  seatNo,
  doorNo,
  className,
  path,
  icon,
}) => {
  return (
    <div
      className={`border-gray rounded-[13.5px] border-[0.6px] ${className} overflow-hidden`}
    >
      <div className="relative rounded-t-[13.5px] bg-white md:py-3 xl:py-6">
        <Image
          src={imgPath}
          width={259}
          height={190}
          alt="car img"
          className="mx-auto rounded-[13.5px]"
        />
        <div className="absolute top-1.5 right-1.5 xl:top-[18px] xl:right-[18px]">
          {icon}
        </div>
      </div>
      <div className="bg-sky h-full rounded-b-[13.5px] border-t px-2 py-2 min-[1650px]:px-5 sm:px-3 xl:py-[11px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-2.5">
            <CarIcon className="max-h-[16px] max-w-[16px]" />
            <span className="text-gray text-[13px]">{carCompany}</span>
          </div>
          <span className="dark:text-gray text-[13px] font-semibold">
            {carModel}
          </span>
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-2 min-[1650px]:gap-5">
            <div className="flex items-center gap-[3px]">
              <SeatIcon className="max-h-[8px] max-w-[8px]" />
              <span className="dark:text-gray text-xs whitespace-nowrap">
                <span>Seats : </span>
                <span>{seatNo}</span>
              </span>
            </div>
            <div className="flex items-center gap-[3px]">
              <DoorIcon className="max-h-[8px] max-w-[8px]" />
              <span className="dark:text-gray text-xs whitespace-nowrap">
                <span>Door : </span>
                <span>{doorNo}</span>
              </span>
            </div>
          </div>
          <div>
            <Link
              href={path}
              className="text-primary text-xs whitespace-nowrap"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSaveOrViewedCard;
