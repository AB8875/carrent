"use client";
import CommonYellowBtn from "@/components/common/CommonYellowBtn";

import SubHeading from "@/components/common/SubHeading";
import { OwnerDetailsData } from "@/components/helper/user/Helper";
import { StarIcon } from "@/components/helper/user/Icon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function OwnerDetails() {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="mx-auto hidden max-w-[1720px] px-4 pb-[60px] sm:px-6 md:block md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]">
      <SubHeading
        title="Owner Details :"
        className="!text-[30px] xl:!text-[40px]"
      />
      {OwnerDetailsData.map((item, index) => (
        <div key={index} className="mt-8 flex border-t border-b">
          <div className="relative flex w-1/2 items-center justify-center border-r pe-5 lg:w-[40%] xl:w-[30%]">
            <div className="bg-primary text-light-white absolute top-0 left-0 rounded-b-[8px] px-12 py-2 text-[22px] font-semibold">
              {item.tag}
            </div>
            <Link
              href={"/applicant/details-partner"}
              className="flex flex-col items-center justify-center gap-2.5 text-center"
            >
              <Image
                src={item.imgPath}
                width={241}
                height={241}
                alt="car owner img"
                className="rounded-[10]"
              />
              <h2 className="text-[34px] font-semibold">Rajeev</h2>
              <p className="text-[22px]">{item.ownerShip}</p>
              <div className="flex items-center gap-2">
                <span className="text-[17px] leading-[155%]">
                  {item.rating}
                </span>
                <StarIcon />
              </div>
              <div>
                <span className="text-[22px] font-semibold">Localities : </span>
                <span className="text-[22px]"> {item.localities}</span>
              </div>
              <div>
                <span className="text-[22px] font-semibold">Experience : </span>
                <span className="text-[22px]"> {item.experinece}</span>
              </div>
            </Link>
          </div>
          <form action="#" className="lg:w-full">
            <div className="w-full py-10 ps-6 xl:ps-[60px] xl:pe-5">
              <div className="w-full">
                <SubHeading
                  title={item.heading}
                  className="!text-gray dark:!text-light-white !border-none !text-[34px]"
                />
                <div className="mt-12 flex w-full flex-col justify-between gap-[30px] lg:flex-row lg:gap-0">
                  <div className="flex flex-col gap-[30px] lg:w-[45%] xl:w-[40%]">
                    {item.input.map((items, indexs) => (
                      <div key={indexs} className="flex flex-col gap-3">
                        <label
                          htmlFor={items.id}
                          className="text-[17px] font-semibold"
                        >
                          {items.title}
                        </label>
                        <input
                          type={items.inputType}
                          name={items.id}
                          placeholder={items.placeholder}
                          className="bg-light-white dark:!text-gray rounded-[6px] p-[15px] outline-none"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 lg:w-1/2">
                    <label
                      htmlFor="textArea"
                      className="text-gray dark:!text-light-white text-[17px] font-semibold"
                    >
                      I am intrested in this Car
                    </label>
                    <div className="h-full">
                      <textarea
                        name="textArea"
                        maxLength={200}
                        placeholder="Message"
                        className="bg-light-white dark:!text-gray h-full w-full rounded-[8px] p-[15px] outline-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      ></textarea>
                      <p className="mt-1 text-end text-sm text-gray-500">
                        {wordCount}/200
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-[22px] flex gap-[14px]">
                  <input type="checkbox" id="iAgree" />
                  <p className="text-sm font-semibold">
                    <label htmlFor="iAgree"> I agreed to the </label>
                    <Link
                      href={"/privacy-term/term-condition"}
                      className="text-primary"
                    >
                      Terms & Conditions
                    </Link>
                    <span> and </span>
                    <Link
                      href={"/privacy-term/privacy"}
                      className="text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div className="mt-10 flex gap-[30px]">
                  <CommonYellowBtn
                    title="Submit"
                    link="#"
                    className="!text-xl"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

export default OwnerDetails;
