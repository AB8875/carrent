"use client";
import React, { useState } from "react";
import Para from "./Para";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import api from "@/utils/axiosInstance";
import { FBIcon } from "../helper/user/Icon";
import { InstaIcon, UTubeIcon } from "../helper/partner/Icon";
import { footerData } from "../helper/partner/Helper";
import { footerDataApplicant } from "../helper/user/Helper";

function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/subscribe", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (error: any) {
      alert(error?.response?.data?.message || "Subscription failed.");
    }
  };
  return (
    <>
      {!pathname.includes("/profile") && !pathname.includes("/auth") && (
        <div className="bg-gray">
          <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-7 pt-7 pb-14 sm:pt-10 sm:pb-10 md:pt-16 lg:pt-18 lg:pb-18 xl:flex-nowrap xl:justify-between xl:pb-22 2xl:pt-21">
              <h2 className="text-center text-xl font-semibold text-white sm:text-3xl md:text-4xl xl:text-[40px]">
                Join our newsletter to follow our news
              </h2>
              <form onSubmit={handleSubscribe}>
                <div className="flex w-full max-w-[400px] justify-between gap-4 rounded-sm bg-white p-1.5 pl-4 min-[1440px]:max-w-[500px] sm:rounded-md sm:pl-5 md:pl-6">
                  <input
                    className="placeholder:text-gray w-full outline-none placeholder:text-sm md:placeholder:text-base"
                    placeholder="Enter Your Email"
                    type="email"
                    value={email}
                    onChange={(v) => setEmail(v.target.value)}
                  />
                  <button className="bg-primary text-gray cursor-pointer rounded-md px-4 py-2 text-base font-semibold sm:text-lg md:px-6 md:py-3 md:text-xl">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div
              className={`flex flex-wrap justify-between gap-x-10 gap-y-10 pb-6 sm:gap-y-9 sm:pb-14 md:gap-y-14 md:pb-16 lg:pb-[72px] xl:flex-nowrap ${
                pathname.startsWith("/partner") ? "lg:flex-nowrap" : ""
              }`}
            >
              <div className="lg:w-[40%] lg:max-w-[488px] xl:w-[34%]">
                <Link href={"#"} className="mb-4 flex items-center gap-1">
                  <Image
                    className="h-auto w-[100px] sm:w-[130px] md:w-[150px] xl:w-[170px]"
                    src={"/assets/png/footer-logo.png"}
                    alt="logo"
                    width={221}
                    height={78}
                  />
                </Link>
                <Para
                  classNmae="opacity-70"
                  title="Welcome to That sit, your trusted car rental service in [Location/Country]. Whether you’re here for a short trip or an extended adventure, we’re committed to providing you with reliable, affordable, and convenient car rental options that allow you to explore at your own pace."
                />
                <div className="mt-6 flex gap-8 sm:mt-8 md:mt-9 lg:mt-10">
                  <Link
                    className="shadow-primary rounded-full duration-300 hover:shadow-[0px_5px_30px_0px_primary]"
                    target="blank"
                    href={"https://www.facebook.com/"}
                  >
                    <FBIcon />
                  </Link>
                  <Link
                    className="shadow-primary rounded-full duration-300 hover:shadow-[0px_5px_30px_0px_primary]"
                    target="blank"
                    href={"https://www.instagram.com/"}
                  >
                    <InstaIcon />
                  </Link>
                  <Link
                    className="shadow-primary rounded-full duration-300 hover:shadow-[0px_5px_30px_0px_primary]"
                    target="blank"
                    href={"https://www.youtube.com/"}
                  >
                    <UTubeIcon />
                  </Link>
                </div>
              </div>
              {pathname.startsWith("/partner") && (
                <div
                  className={`flex w-full flex-wrap justify-between gap-8 sm:flex-nowrap lg:w-[48%]`}
                >
                  {footerData.map((item, index) => (
                    <div key={index}>
                      <h3 className="mb-4 text-base font-semibold text-white sm:text-lg md:text-xl">
                        {item.heading}
                      </h3>
                      {item.linkData.map((items, idx) => (
                        <div key={idx}>
                          <Link
                            href={items.url}
                            className="hover:text-primary text-xs leading-[300%] font-normal text-white/[0.9] duration-300 sm:text-sm"
                          >
                            {items.link}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {(pathname.startsWith("/applicant") ||
                pathname.startsWith("/privacy-term")) && (
                <div
                  className={`flex w-full flex-wrap justify-between gap-8 md:flex-nowrap xl:w-[58%] 2xl:w-[50%]`}
                >
                  {footerDataApplicant.map((item, index) => (
                    <div key={index}>
                      <h3 className="mb-4 text-base font-semibold text-white sm:text-lg md:text-xl">
                        {item.heading}
                      </h3>
                      {item.linkData.map((items, idx) => (
                        <div key={idx}>
                          <Link
                            href={items.url}
                            className="hover:text-primary text-xs leading-[300%] font-normal text-white/[0.9] duration-300 sm:text-sm"
                          >
                            {items.link}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Para
            classNmae="text-center border-t opacity-70 pb-5 md:pb-7 pt-5"
            title="@2025 Thatsit.All rights reserved"
          />
        </div>
      )}
    </>
  );
}

export default Footer;
