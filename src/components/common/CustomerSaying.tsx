"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CustomerReviewCard from "./CustomerReviewCard";
import { CustomerReviewCardData } from "../helper/user/Helper";

interface IPROPS {
  spaTitle?: string;
}

const CustomerSaying: React.FC<IPROPS> = ({ spaTitle = "Customers" }) => {
  return (
    <div className="customerSaying bg-[url('/assets/png/customer-sying-bg-img.png')] bg-cover bg-center bg-no-repeat !py-[30px] md:!py-12 lg:!py-[60px] xl:!py-[80px]">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:mt-0 lg:px-10 xl:px-12">
        <h2
          className={`text-gray border-b-gray mx-auto w-fit border-b-[2px] text-center text-2xl leading-[144%] font-semibold sm:text-3xl md:text-4xl xl:text-5xl`}
        >
          What Our <span>{spaTitle}</span> Are Saying Us
        </h2>
        <div className="mt-10 lg:mt-[60px]">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
            className="mySwiper"
          >
            {CustomerReviewCardData.map((Item, index) => (
              <SwiperSlide key={index} className="pb-20">
                <CustomerReviewCard
                  customerName={Item.customerName}
                  customerImg={Item.customerImg}
                  cutomerReview={Item.customerReviewPara}
                  ratingData={Item.ratingData}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerSaying;
