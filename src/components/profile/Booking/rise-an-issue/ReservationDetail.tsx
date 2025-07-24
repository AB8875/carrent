import {
  reservationDetailData,
  reservationIssueData,
} from "@/components/common/helper/ProfileHelper";
import Image from "next/image";
import React from "react";

function ReservationDetail() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-gray mb-[30px] text-base font-semibold sm:text-lg md:text-xl">
          Issue Description & Reservation Details :
        </h1>
        <div className="flex gap-x-5 max-lg:flex-col lg:gap-x-8 xl:gap-x-10 2xl:gap-x-[50px]">
          <Image
            className="max-w-[400px] max-sm:w-full"
            src={"/assets/png/booked-car-img.png"}
            alt="booked-car-img"
            width={303}
            height={214}
          />
          <div className="grid w-full max-w-[740px] grid-cols-1 gap-x-8 gap-y-5 max-lg:mt-10 md:grid-cols-2 lg:gap-y-[30px] xl:gap-x-12 2xl:gap-x-[60px]">
            {reservationDetailData.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-3.5">
                <label
                  className="w-full text-xs text-[rgba(10,28,42,0.70)] sm:text-sm"
                  htmlFor={item.htmlFor}
                >
                  {item.labelTitle}
                </label>
                <input
                  type={item.inputType}
                  id={item.inputId}
                  placeholder={item.placeholder}
                  className="text-gray w-full rounded-[4px] border-[0.2px] border-[#0a1c2a62] bg-white px-3.5 py-2.5 text-sm font-medium outline-0 sm:text-base"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-[30px]">
          <div className="flex flex-col gap-y-5 lg:gap-[30px]">
            {reservationIssueData.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-3.5">
                <label
                  className="w-full text-xs text-[rgba(10,28,42,0.70)] sm:text-sm"
                  htmlFor={item.htmlFor}
                >
                  {item.labelTitle}
                </label>
                <input
                  type={item.inputType}
                  id={item.inputId}
                  placeholder={item.placeholder}
                  className="text-gray w-full rounded-[4px] border-[0.2px] border-[#0a1c2a62] bg-white px-3.5 py-2.5 text-sm font-medium outline-0 sm:text-base"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2 md:gap-3.5">
              <label
                className="w-full text-xs text-[rgba(10,28,42,0.70)] sm:text-sm"
                htmlFor="discription"
              >
                Issue Description
              </label>
              <textarea
                rows={3}
                id="discription"
                placeholder="Issue Description"
                className="text-gray w-full rounded-[4px] border-[0.2px] border-[#0a1c2a62] bg-white px-3.5 py-2.5 text-sm font-medium outline-0 sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationDetail;
