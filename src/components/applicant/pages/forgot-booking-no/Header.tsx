import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";

import Para from "@/components/common/Para";
import { forgotBookingNoData } from "@/components/helper/user/Helper";
import { LeftArrowSmallICon } from "@/components/helper/user/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-gray relative py-[70px] lg:pt-16 lg:pb-10">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="relative z-10 mx-auto w-full max-w-[746px] rounded-[10px] bg-white px-3 py-[15px] md:rounded-[20px] md:px-5 md:py-6 lg:mx-0 lg:px-[30px] lg:pt-[30px] lg:pb-[50px]">
            <Link
              href={"/applicant/my-booking"}
              className="text-primary flex items-center gap-[5px] !text-xs md:gap-2.5 md:!text-base lg:!text-xl"
            >
              <LeftArrowSmallICon className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]" />
              Back
            </Link>

            <Heading
              title="Forgot Your Booking No."
              className="!text-gray mx-auto mt-5 text-center !text-xl md:!text-2xl lg:mt-8 lg:!text-3xl xl:mt-[70px]"
            />
            <Para
              title="Please enter the email address you used for your booking and we’ll send you your booking details."
              classNmae="text-center !text-xs md:!text-base  !text-gray !text-gray max-w-[500px] mt-2.5 md:mt-[15px] mx-auto"
            />
            <form action="">
              <div className="mt-[30px] flex flex-col gap-[30px] lg:mt-[70px]">
                {forgotBookingNoData.map((item, index) => (
                  <div key={index} className="flex w-full flex-col gap-2.5">
                    <label
                      htmlFor={item.htmlFor}
                      className="dark:text-gray text-xs md:text-base"
                    >
                      {item.label}
                    </label>
                    <input
                      type={item.inputype}
                      placeholder={item.placeholder}
                      id={item.htmlFor}
                      className="border-gray dark:placeholder:text-gray w-full rounded border-[0.2px] px-2.5 py-2.5 outline-none placeholder:text-sm sm:px-3 sm:py-[15px] md:px-5 md:py-4 md:placeholder:text-base lg:px-[30px] lg:py-5"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10">
                {/* <BlackBtn title="Retreive My Booking" /> */}
                {/* <LinkBlackBtn
                  title="Send Booking Details"
                  path="#"
                  className="block md:inline md:w-max"
                /> */}
                <BlackBtn
                  title="Send Booking Details"
                  className="block md:inline md:w-max"
                />
              </div>
            </form>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="absolute right-0 bottom-0 hidden lg:block">
              <Image
                src={"/assets/png/myBooking-hero-car-img.png"}
                width={1000}
                height={579}
                alt="yellow car img"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src={"/assets/png/myBooking-hero-car-img-small.png"}
                width={1000}
                height={579}
                alt="yellow car img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
