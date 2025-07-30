"use client";
import React, { useRef } from "react";
import PerfectRideSliderCard from "../../commen/PerfectRideSliderCard";
import SubHeading from "@/components/common/SubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper/types";

import { Pagination } from "swiper/modules";
import { RightSmallArrowIcon } from "@/components/helper/user/Icon";
interface IPROPS {
  map: {
    vehicleIcon: React.ReactNode;
    carCompany: string;
    carModel: string;

    accesoris: {
      accesoriesoryTitle: string;
      accesoriesoryIcon: React.ReactNode;
    }[];
    path: string;
    imgPath: string;
    imgPerentClass?: string;
  }[];
  title: string;
  className?: string;
}

const PerfectRide: React.FC<IPROPS> = ({ map, title, className }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <SubHeading
        title={title}
        className={`dark:!text-primary dark:!border-light-white mx-auto`}
      />
      <div className="perfectRide mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={4}
          loop={true}
          spaceBetween={22}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {(map ?? []).map((itee, indxx) => (
            <SwiperSlide key={indxx} className="pb-20">
              <PerfectRideSliderCard
                accesoris={itee.accesoris}
                vehicleIcon={itee.vehicleIcon}
                carCompany={itee.carCompany}
                carModel={itee.carModel}
                path={itee.path}
                imgPath={itee.imgPath}
                className={itee.imgPerentClass}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination !bottom-0"></div>
        <div
          className={`swiper-custom-nav mt-3 hidden justify-center gap-5 lg:flex ${className}`}
        >
          <button
            className="swiper-button-prev-custom group border-primary hover:bg-gray top-[45%] left-5 z-50 flex h-[60px] w-[60px] rotate-[180deg] cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ease-linear min-[1780px]:-left-5 lg:absolute"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <RightSmallArrowIcon />
          </button>
          <button
            className="swiper-button-next-custom group border-primary hover:bg-gray top-[45%] right-5 z-50 flex h-[60px] w-[60px] rotate-[360deg] cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ease-linear min-[1780px]:-right-5 lg:absolute"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightSmallArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfectRide;
