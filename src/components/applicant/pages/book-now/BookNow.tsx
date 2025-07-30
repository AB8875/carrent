"use client";
import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";
// import { ourServices } from "@/components/common/helper/ApplicantHelper";
import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import YellowBorderCommonBtn from "@/components/common/YellowBorderCommonBtn";
interface IPROPS {
  secData: data;
  closeModal: () => void;
}
interface data {
  title: string;
  inputData: {
    lable: string;
    id: string;
    inputType: string;
    placeholder: string;
  }[];
  img: {
    bgImg: string;
    imgData: {
      heading: string;
      para: string;
      itemData: { icon: ReactNode; title: string }[];
    }[];
  }[];
}

interface IPROPS {
  secData: data;
}

const BookNow: React.FC<IPROPS> = ({ secData, closeModal }) => {
  return (
    <div className="mx-auto flex h-[90vh] w-full max-w-[1720px] flex-col justify-between px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col-reverse gap-[30px] lg:flex-row">
        <div className="bg-light-white rounded-[10px] px-3 py-4 shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-5 sm:py-6 lg:w-[35%] lg:rounded-[20px] xl:px-[60px] xl:py-[50px]">
          <SubHeading
            title={secData.title}
            className="dark:!text-gray !border-none !text-2xl lg:!text-3xl"
          />
          <form action="">
            <div className="mt-6 flex w-full flex-col gap-4 sm:mt-8 md:mt-10 md:gap-6 lg:mt-[60px] lg:gap-[35px]">
              {secData.inputData.map((items, indexs) => (
                <div
                  key={indexs}
                  className="flex w-full flex-col gap-2 md:gap-[15px]"
                >
                  <label htmlFor={items.id} className="text-sm text-gray-700">
                    {items.lable}
                  </label>
                  <input
                    type={items.inputType}
                    id={items.id}
                    placeholder={items.placeholder}
                    className="placeholder:text-gray w-full rounded border border-gray-700 bg-white px-2 py-1.5 text-base outline-none placeholder:text-sm md:px-[15px] md:py-2.5 md:placeholder:text-base"
                  />
                </div>
              ))}
            </div>
          </form>
          <div className="mt-10 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <BlackBtn title="Submit" />
            <YellowBorderCommonBtn title="Cancel" onClick={closeModal} />
          </div>
        </div>
        <div className="w-full lg:w-[65%]">
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            speed={1500}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {secData.img.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                  className="flex h-full items-center justify-center rounded-[10px] bg-[url(/assets/png/our-services-bg-img.png)] bg-center bg-no-repeat p-3 min-[1547px]:min-h-[675px] lg:min-h-[710px] lg:rounded-[20px]"
                >
                  {item.imgData.map((itm, idx) => (
                    <div
                      key={idx}
                      className="border-light-white h-full rounded-[10px] border bg-[rgba(10,28,42,0.72)] sm:w-[70%] lg:h-auto lg:rounded-[20px]"
                    >
                      <div className="border-light-white flex flex-col gap-[15px] border-b py-5 ps-5 pe-2 min-[1350px]:ps-[100px] md:ps-8 lg:py-[30px] lg:ps-12">
                        <SubHeading
                          title={itm.heading}
                          className="!text-light-white !border-none text-3xl lg:text-4xl xl:text-5xl"
                        />
                        <Para
                          title={itm.para}
                          classNmae="text-gray-700 !text-xs md:!text-sm font-semibold"
                        />
                      </div>
                      <div className="flex flex-col gap-4 py-5 ps-5 pe-2 min-[1350px]:ps-[100px] sm:gap-5 md:ps-8 md:pt-[30px] md:pb-[30px] lg:gap-[30px] lg:ps-12 lg:pt-[60px]">
                        {itm.itemData.map((itms, inds) => (
                          <div
                            key={inds}
                            className="flex items-center gap-3 md:gap-5"
                          >
                            {itms.icon}
                            <Heading
                              title={itms.title}
                              className="!text-sm sm:!text-base md:!text-lg lg:!text-xl xl:!text-2xl"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BookNow;
