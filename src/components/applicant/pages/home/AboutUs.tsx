"use client";

import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { aboutUsPara } from "@/components/helper/user/Helper";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AboutUs() {
  const pathName = usePathname();
  return (
    <div className="py-[60px] lg:pt-[83px] lg:pb-[155px]">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-[34px] lg:flex-row xl:gap-14">
          <div>
            <div className="relative">
              <Image
                src={"/assets/png/aboutCarImg.png"}
                width={713}
                height={413}
                alt="Car Img"
                className="rounded-2xl min-[1440px]:min-w-[713px] md:min-w-[500px]"
              />
              <div className="absolute -bottom-2 -left-2 -z-10 max-w-[100px] min-[375px]:max-w-[150px] min-[1440px]:max-w-[266px] md:-left-3 md:max-w-[200px] lg:-bottom-[18px] lg:-left-[30px]">
                <Image
                  src={"/assets/svg/triangleYellowSvg.svg"}
                  width={266}
                  height={277}
                  alt="img"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-[813px] flex-col text-center lg:text-start">
            <SubHeading
              title="About us"
              className="!text-gray dark:!text-primary dark:!border-light-white mx-auto lg:!mx-0"
            />
            <div className="mt-4 lg:mt-2.5 xl:mt-[20px]">
              {aboutUsPara.map((item, index) => (
                <Para
                  key={index}
                  title={item.title}
                  classNmae="leading-[155%] xl:mt-2.5 lg:mt-1 !text-gray-700 dark:!text-light-white"
                />
              ))}
            </div>
            <div
              className={`mt-[17px] ${
                pathName === "/applicant/about-us" ? "hidden" : ""
              }`}
            >
              <Link
                href={"/applicant/about-us"}
                className="text-primary border-primary pb-1 text-xl leading-[144%] font-medium hover:border-b"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
