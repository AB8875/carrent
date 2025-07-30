"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { companyLogoData } from "../helper/user/Helper";

function BrandLogo() {
  return (
    <div className="bg-primary py-6 md:py-8 lg:py-[40px] xl:py-[50px]">
      <div className="brandLogo">
        <Swiper
          loop={true}
          slidesPerView={9}
          speed={1500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            375: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
          }}
        >
          {companyLogoData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-[80px] items-center">{item.icon}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BrandLogo;
