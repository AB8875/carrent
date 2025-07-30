import BlackBtn from "@/components/common/BlackBtn";
import Heading from "@/components/common/Heading";

// import LinkBlackBtn from "@/components/common/LinkBlackBtn";
import Para from "@/components/common/Para";
import { myBookingInputData } from "@/components/helper/user/Helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-gray relative py-[70px] lg:pt-16 lg:pb-10">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col justify-between lg:flex-row">
          <form
            action=""
            className="relative z-10 mx-auto w-full max-w-[746px] rounded-[10px] bg-white px-3 py-[15px] md:rounded-[20px] md:px-5 md:py-6 lg:mx-0 lg:px-[30px] lg:pt-[30px] lg:pb-[50px]"
          >
            <Para
              title="My Booking"
              classNmae="!text-xs md:!text-base lg:!text-xl !text-gray"
            />
            <Heading
              title="Review / Cancel Booking"
              className="!text-gray mx-auto mt-5 text-center !text-xl md:!text-2xl lg:mt-8 lg:!text-3xl"
            />
            <div className="mt-[30px] flex flex-col gap-[30px] lg:mt-[50px]">
              {myBookingInputData.map((item, index) => (
                <div key={index} className="flex w-full flex-col gap-2.5">
                  <label
                    htmlFor={item.htmlFor}
                    className="dark:text-gray text-xs sm:text-sm md:text-base"
                  >
                    {item.label}
                  </label>
                  <input
                    type={item.inputype}
                    placeholder={item.placeholder}
                    id={item.htmlFor}
                    className="border-gray dark:placeholder:text-gray dark:text-gray w-full rounded border-[0.2px] px-2.5 py-2.5 outline-none placeholder:!text-sm sm:px-3 sm:py-[15px] md:px-5 md:py-4 md:placeholder:text-base lg:px-[30px] lg:py-5"
                  />
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex justify-end pb-10 lg:mt-[15px]">
              <Link
                href={"/applicant/forgot-booking-no"}
                className="text-primary !text-xs md:!text-base lg:!text-xl"
              >
                Forgot your booking no. ?
              </Link>
            </div>
            {/* <BlackBtn title="Retreive My Booking" /> */}
            {/* <LinkBlackBtn
              title="Retreive My Booking"
              path="#"
              className="block md:inline md:w-max"
            /> */}
            <BlackBtn
              title="Retreive My Booking"
              className="block md:inline md:w-max"
            />
          </form>
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
