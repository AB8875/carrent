"use client";

import Heading from "@/components/common/Heading";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { carsListingCarImg } from "@/components/helper/user/Helper";
import { EyeIcon, SaveIcon, ShareIcon } from "@/components/helper/user/Icon";

function CarImages() {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? carsListingCarImg
    : carsListingCarImg.slice(0, 6);

  const remainingCount = carsListingCarImg.length - 6;

  return (
    <div className="mx-auto max-w-[1720px] px-4 pt-[60px] sm:px-6 md:px-8 lg:px-10 lg:pt-24 xl:px-12 xl:pt-[155px]">
      <div className="hidden grid-flow-row grid-cols-3 gap-4 md:grid lg:gap-6 xl:gap-[30px]">
        {visibleImages.map((item, index) => {
          const isFirst = index === 0;
          const isLast = !showAll && index === 5;

          return (
            <div
              key={index}
              className={`group relative w-full overflow-hidden rounded-[20px] ${
                isFirst
                  ? "bg-gray col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
              onClick={() => isLast && setShowAll(true)}
            >
              <Image
                src={item.src}
                alt={`car-image-${index}`}
                width={item.width}
                height={item.height}
                className="h-full w-full rounded-[20px] object-cover transition-all duration-500 group-hover:scale-[1.1]"
              />

              {isFirst && (
                <div className="absolute top-5 left-6 flex w-[90%] justify-between lg:top-[30px] lg:right-10 lg:left-10">
                  <div className="lg:mt-3">
                    <Heading
                      title={item.title}
                      className="!text-primary !text-2xl"
                    />
                    <Heading
                      title={item.title2}
                      className="!text-light-white !text-4xl"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-light-white h-max cursor-pointer rounded p-2">
                      <EyeIcon />
                    </div>
                    <div className="bg-light-white flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded p-2">
                      <SaveIcon />
                    </div>
                    <div
                      className="bg-light-white h-max cursor-pointer rounded p-2"
                      onClick={() => {
                        if (navigator.share) {
                          navigator
                            .share({
                              title: "Check out this car!",
                              text: "Found this awesome car on PerfectRide.",
                              url: window.location.href, // Or a specific car URL
                            })
                            .then(() => console.log("Shared successfully"))
                            .catch((err) =>
                              console.error("Share failed:", err)
                            );
                        } else {
                          alert("Sharing not supported on this browser.");
                        }
                      }}
                    >
                      <ShareIcon />
                    </div>
                  </div>
                </div>
              )}

              {isLast && remainingCount > 0 && (
                <>
                  <div className="absolute inset-0 z-10 cursor-pointer bg-[#FFFFFFD9]" />
                  <span className="text-gray absolute top-[32%] left-[37%] z-20 cursor-pointer text-[40px] font-semibold lg:top-[36%] lg:text-[50px] xl:text-[79px]">
                    +{remainingCount}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Show Less button */}
      {showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(false)}
            className="bg-primary text-gray cursore-pointer ${className} mt-4 w-full cursor-pointer rounded px-[25px] py-[13px] text-sm font-semibold hover:shadow-[4px_4px_4px_0px_rgba(10,28,42,0.70)] sm:text-base md:max-w-[294px] md:text-lg lg:text-xl"
          >
            Show Less
          </button>
        </div>
      )}

      <div className="block md:mt-12 md:hidden">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
          className="mySwiper carImg"
        >
          {carsListingCarImg.map((item, index) => {
            const first = index === 0;
            return (
              <SwiperSlide key={index}>
                <div
                  className={`${first ? "bg-gray rounded-[6px]" : ""} relative`}
                >
                  <Image
                    src={item.src}
                    alt={`car-image-${index}`}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full rounded-[6px] object-cover transition-all duration-500 group-hover:scale-[1.1]"
                  />
                  {first && (
                    <div className="absolute top-[14px] left-[14px] w-full">
                      <Heading
                        title={item.title}
                        className="!text-primary md:text-lg: text-xs sm:text-base lg:!text-2xl"
                      />
                      <Heading
                        title={item.title2}
                        className="!text-light-white text-[14px] sm:text-xl md:text-2xl lg:!text-4xl"
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CarImages;
