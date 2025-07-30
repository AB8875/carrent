import { partnerDatailsInputData } from "@/components/helper/user/Helper";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="bg-gray relative py-12 pb-[60px] md:py-24 lg:pt-[120px] lg:pb-[70px]">
      <div className="z absolute right-0 bottom-0">
        <Image
          src={"/assets/png/HeroCarImgSec.png"}
          width={1150}
          height={600}
          alt="yellow car img"
        />
      </div>
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="text-light-white border-light-white relative z-10 mx-auto max-w-[513px] rounded-[10px] border bg-[rgba(10,28,42,0.88)] px-3 py-6 min-[1600px]:border-transparent min-[1600px]:bg-[rgba(255,255,255,0.19)] sm:px-6 md:rounded-[20px] md:px-[60px] md:py-[30px] lg:mx-0 lg:py-[50px]">
          <div className="flex flex-col items-center gap-3 md:gap-5">
            <Image
              src={"/assets/png/profile-pic.png"}
              width={150}
              height={152}
              alt="profile pic"
              className="max-w-[100px] md:max-w-[150px]"
            />
            <span className="text-wite text-lg font-semibold md:text-xl lg:text-2xl">
              John Deo
            </span>
          </div>
          <form
            action="#"
            className="mt-8 flex flex-col gap-6 sm:mt-10 md:mt-[60px] md:gap-10 lg:mt-[80px]"
          >
            {partnerDatailsInputData.map((item, index) => (
              <div key={index}>
                <span
                  id={item.id}
                  className="block w-full border-b py-1.5 outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-white md:py-2.5 md:placeholder:text-base"
                >
                  {item.title}
                </span>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
