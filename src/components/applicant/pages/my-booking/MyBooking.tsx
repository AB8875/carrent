import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import React from "react";
interface IPROS {
  img: string;
  formData: {
    htmlFor: string;
    label: string;
    inputType: string;
    placeholder: string;
  }[];
  checkBoxData: {
    htmlFor: string;
    label: string;
    inputType: string;
  }[];
}
const MyBooking: React.FC<IPROS> = ({ formData, img, checkBoxData }) => {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
      <SubHeading title="My Booking" className="mx-auto" />

      <form action="">
        <div className="mt-10 lg:mt-[60px]">
          <Image
            src={img}
            width={1620}
            height={1000}
            alt="white car imt"
            className="mx-auto rounded md:rounded-[10px] lg:rounded-[20px]"
          />
        </div>
        <div className="mt-[30px] flex flex-wrap justify-between gap-[30px] md:mt-10 lg:mt-[60px]">
          {formData.map((items, indexs) => (
            <div
              key={indexs}
              className="flex w-full flex-col gap-2.5 sm:w-[47%] xl:w-[42%]"
            >
              <label
                htmlFor={items.htmlFor}
                className="!text-gray dark:!text-light-white !text-xs md:!text-base lg:!text-xl"
              >
                {items.label}
              </label>
              <span
                id={items.htmlFor}
                className="sm:bg-light-white dark:border-light-white border-gray sm:dark:!text-gray rounded border-[0.2px] p-2 outline-none sm:px-3.5 sm:py-3.5 md:px-4 md:py-4 lg:px-5 lg:py-[18px] dark:!text-white"
              >
                {items.placeholder}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-[30px] flex flex-col gap-[15px] sm:flex-row md:mt-10 md:gap-10 lg:mt-[60px] lg:gap-[60px] xl:gap-[84px]">
          {checkBoxData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 md:gap-[15px]"
            >
              <input type={item.inputType} name="" id={item.htmlFor} />
              <label
                htmlFor={item.htmlFor}
                className="text-sm font-semibold md:text-base lg:text-xl xl:text-2xl"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default MyBooking;
