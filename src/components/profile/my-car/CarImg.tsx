"use client";

import Heading from "@/components/common/Heading";
import {
  DeleteIcon,
  EditPenIcon,
} from "@/components/common/icon/ApplicantIcon";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { myCarsImg } from "@/components/common/helper/ApplicantHelper";
import { usePathname } from "next/navigation";

function CarImg() {
  const pathName = usePathname();

  const [showAll, setShowAll] = useState(false);

  const [images, setImages] = useState(myCarsImg);

  const visibleImages = showAll ? images : images.slice(0, 6);
  const remainingCount = images.length - 6;

  const handleDelete = (indexToDelete: number) => {
    setImages((prevImages) =>
      prevImages.filter((_, idx) => idx !== indexToDelete),
    );
  };

  return (
    <div>
      <div className="hidden grid-flow-row grid-cols-3 gap-4 md:grid lg:gap-6 xl:gap-[30px]">
        {visibleImages.map((item, index) => {
          const isFirst = index === 0;
          const isLast = !showAll && index === 5;

          return (
            <div
              key={index}
              className={`group relative w-full overflow-hidden rounded-[10px] xl:rounded-[20px] ${
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
                className="h-full w-full rounded-[10px] object-cover transition-all duration-500 group-hover:scale-[1.1] xl:rounded-[20px]"
              />

              <div className="absolute top-3 right-3 left-6 flex justify-between lg:top-3 lg:right-3 lg:left-10">
                <div className="lg:mt-3">
                  <Heading
                    title={item.title}
                    className="!text-primary !text-sm lg:!text-lg"
                  />
                  <Heading
                    title={item.title2}
                    className="!text-light-white mt-2.5 !text-xl lg:!text-2xl"
                  />
                </div>
                <div className={`flex gap-2 lg:gap-5 xl:gap-[30px]`}>
                  {/* profile */}
                  {index === 0 &&
                    pathName === "/partner/dashboard/my-car/car-details" && (
                      <div className="h-[40px] w-[40px]">
                        <Image
                          alt="profile-img"
                          src={"/assets/png/profile-pic.png"}
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  <div
                    className={`bg-primary flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full p-2 xl:h-[40px] xl:w-[40px] ${pathName === "/partner/dashboard/my-car/car-details" ? "hidden" : ""}`}
                  >
                    <EditPenIcon className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
                  </div>
                  <div
                    onClick={() => handleDelete(index)}
                    className={`bg-primary flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full p-2 lg:h-[20px] lg:w-[20px] xl:h-[40px] xl:w-[40px] ${pathName === "/partner/dashboard/my-car/car-details" || "/partner/dashboard/my-car/edit-details/features" ? "hidden" : ""} `}
                  >
                    <DeleteIcon className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
                  </div>
                </div>
              </div>

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
          {myCarsImg.map((item, index) => {
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

export default CarImg;
