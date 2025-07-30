import Image from "next/image";
import React from "react";

import CommonYellowBtn from "./CommonYellowBtn";
import { CurveYellowLineIcon, CurveYellowLineIcon2 } from "../helper/user/Icon";
import SubPara from "./SubPara";

interface IPROPS {
  className?: string;
  title: string;
  btnPath?: string;
}

const SpecialOffer: React.FC<IPROPS> = ({ className, title }) => {
  return (
    <div className="bg-gray relative clear-both py-8 min-[1330px]:py-0">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="my-auto flex flex-col items-center pt-5 min-[1330px]:items-start min-[1330px]:pb-[70px] md:pt-8 lg:pt-12 xl:pt-24">
          <h3
            className={`text-primary flex w-fit justify-center text-2xl leading-[144%] font-semibold min-[1330px]:justify-start min-[1650px]:items-center min-[1650px]:gap-[35px] sm:text-3xl md:text-4xl lg:text-5xl ${className} flex-wrap text-center min-[1330px]:max-w-[700px] min-[1650px]:max-w-[1100px]`}
          >
            <span>“Special Offer For The First</span>
            <span className="relative px-1.5 xl:text-[64px]">
              100
              <span className="absolute right-0 -bottom-3 sm:bottom-0 xl:-bottom-3 xl:left-0">
                <CurveYellowLineIcon />
              </span>
              <span className="absolute right-0 -bottom-4 sm:-bottom-1 xl:-bottom-4">
                <CurveYellowLineIcon2 />
              </span>
            </span>
            <span>{title}</span>
          </h3>
          <SubPara
            title=" “Get up to 30% off your first rental! Hurry, limited availability.”"
            className="text-primary min-[1330px]: mt-[33px] text-center !text-xl min-[1330px]:mt-[43px]"
          />
          <CommonYellowBtn
            link={"/partner/discount"}
            title=" Claim Your Discount Now"
            className="mt-10 lg:mt-12 xl:mt-[70px]"
          />
        </div>
        <div className="right-0 bottom-0 min-[1330px]:absolute">
          <Image
            src={"/assets/png/specialOfferCarImg.png"}
            width={750}
            height={402}
            alt="car Img"
            className="mx-auto mt-10 hidden min-[1330px]:m-0 min-[1330px]:block"
          />
          <Image
            src={"/assets/png/sm-full-car-img.png"}
            width={750}
            height={402}
            alt="car Img"
            className="mx-auto mt-10 block min-[1330px]:m-0 min-[1330px]:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
