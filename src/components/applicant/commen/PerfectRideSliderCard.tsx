import Para from "@/components/common/Para";
import { RightArrowIcon } from "@/components/helper/user/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPROPS {
  vehicleIcon: React.ReactNode;
  carCompany: string;
  carModel: string;

  accesoris: {
    accesoriesoryTitle: string;
    accesoriesoryIcon: React.ReactNode;
  }[];
  path: string;
  imgPath: string;
  className?: string;
  classNamePerent?: string;
}

const PerfectRideSliderCard: React.FC<IPROPS> = ({
  vehicleIcon,
  carCompany,
  carModel,

  accesoris,
  path,
  imgPath,
  className,
  classNamePerent,
}) => {
  return (
    <aside>
      <div
        className={`border-gray ${classNamePerent} flex flex-col rounded-[10px] border md:rounded-[20px] dark:bg-white`}
      >
        <div className={`${className} mx-auto max-w-[359px]`}>
          <Image
            src={imgPath}
            width={359}
            height={262}
            alt="mahindra car image"
            className="rounded-[20px] object-contain min-[600px]:min-h-[273px]"
          />
        </div>
        <div className="bg-sky rounded-b-[10px] border-t px-2 pt-[14px] pb-[17px] md:rounded-b-[20px] md:px-3 lg:px-[26px] lg:pt-[17px] lg:pb-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 md:gap-[13px] lg:gap-4">
              {vehicleIcon}
              <Para title={carCompany} classNmae="!text-gray" />
            </div>
            <Para title={carModel} classNmae="font-semibold !text-gray" />
          </div>
          <div className="mt-[18px] flex items-center justify-between gap-1">
            <div className="flex items-center gap-1 min-[1650px]:gap-[30px] md:gap-3 lg:gap-5">
              {/* <div className="flex items-center gap-[5px]">
                <div>
                  <SeatIcon />
                </div>
                <div className="flex items-center gap-[4px]">
                  <Para
                    title="Seats :"
                    classNmae="!text-[10px] whitespace-nowrap !text-gray-700"
                  />
                  <Para
                    title={seatNo}
                    classNmae="!text-[10px] !text-gray-700"
                  />
                </div>
              </div> */}
              {accesoris.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div>{item.accesoriesoryIcon}</div>
                  <div className="flex items-center gap-[2px]">
                    {/* <Para
                    title="Doors :"
                    classNmae="!text-[10px] whitespace-nowrap !text-gray-700"
                  /> */}
                    <Para
                      title={item.accesoriesoryTitle}
                      classNmae="!text-xs text-nowrap !text-gray-700 "
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={path}
              className="text-primary flex items-center gap-1 text-[12px] whitespace-nowrap md:text-base lg:gap-2.5"
            >
              View Details
              <RightArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PerfectRideSliderCard;
