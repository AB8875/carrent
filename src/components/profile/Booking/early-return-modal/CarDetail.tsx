import { earlyReturnModalData } from "@/components/helper/ProfileHelper";
import Image from "next/image";
import React from "react";

function CarDetail() {
  return (
    <>
      <div className="md:sml-1.5 flex gap-x-5 gap-y-[50px] max-[600px]:flex-col md:gap-x-7">
        <Image
          className="h-full max-h-[164px] min-h-[164px] rounded-lg object-cover max-[600px]:w-full max-[600px]:max-w-[310px]"
          src={"/assets/png/booked-car-img.png"}
          alt="car-img"
          width={176}
          height={164}
        />
        <div className="flex w-full flex-col gap-x-8 gap-y-5 min-[600px]:grid min-[600px]:grid-cols-2 md:gap-x-[77px] md:gap-y-7">
          {earlyReturnModalData.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-2 min-[600px]:max-w-[234px]"
            >
              <label
                className="text-gray/70 text-xs min-[700px]:text-sm"
                htmlFor={item.htmlFor}
              >
                {item.labelTitle}
              </label>
              <input
                className="border-gray/50 text-gray rounded-md border-[0.2px] bg-white px-3.5 py-2 text-sm leading-normal font-medium outline-0 md:text-base"
                placeholder={item.placeholder}
                type={item.inputType}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarDetail;
