"use client";
import React, { useRef } from "react";
import SubHeading from "@/components/common/SubHeading";
import ExploreOurCard from "../../commen/ExploreOurCard";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SwiperCore from "swiper";
import { RightSmallArrowIcon } from "@/components/helper/user/Icon";

// Adjusted interface to match your data structure
interface IPROPS {
  title: string;
  maps: {
    cardHeading: string;
    cardPara: string;
    link: string;
    className: string;
  }[];
}

const ExploreOur: React.FC<IPROPS> = ({ title, maps }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <>
      <div className="mx-auto max-w-[1720px] px-4 pt-[60px] sm:px-6 md:px-8 lg:px-10 lg:pt-12 xl:px-12 xl:pt-[155px]">
        <SubHeading
          title={title}
          className="dark:!text-primary dark:!border-light-white mx-auto text-center"
        />

        {/* For large screen */}
        <div className="mt-[60px] hidden gap-3 lg:block xl:gap-[30px]">
          <div className="grid min-h-[500px] w-full grid-flow-row grid-cols-4 grid-rows-2 gap-4 xl:min-h-[700px]">
            {maps.map((mapItem, mapIndex) => (
              <div
                key={mapIndex}
                className={`col-span-1 ${mapIndex === 0 ? "!row-span-2" : ""} ${
                  mapIndex === 4 ? "!col-span-2" : ""
                }`}
              >
                <ExploreOurCard
                  cardHeading={mapItem.cardHeading}
                  cardPara={mapItem.cardPara}
                  link={mapItem.link}
                  className={mapItem.className}
                />
              </div>
            ))}
          </div>
        </div>

        {/* For small screen with Swiper */}
        <div className="mt-10 block lg:hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={15}
            navigation={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              400: { slidesPerView: 1.5, spaceBetween: 15 },
              500: { slidesPerView: 2, spaceBetween: 15 },
              800: { slidesPerView: 3, spaceBetween: 15 },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {maps.map((mapItem, mapIndex) => (
              <SwiperSlide key={mapIndex}>
                <ExploreOurCard
                  cardHeading={mapItem.cardHeading}
                  cardPara={mapItem.cardPara}
                  link={mapItem.link}
                  className={mapItem.className}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-[27px] flex justify-center gap-3 md:mt-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group border-primary hover:bg-gray flex h-[31px] w-[31px] rotate-[180deg] cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ease-linear md:h-[60px] md:w-[60px]"
            >
              <RightSmallArrowIcon />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group border-primary hover:bg-gray flex h-[31px] w-[31px] rotate-[360deg] cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ease-linear md:h-[60px] md:w-[60px]"
            >
              <RightSmallArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreOur;
