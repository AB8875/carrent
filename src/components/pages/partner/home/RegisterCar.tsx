import BlackBtn from "@/components/common/BlackBtn";
import LinkBlackBtn from "@/components/common/LinkBlackBtn";
import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import React from "react";

function RegisterCar() {
  return (
    <div className="mx-auto flex max-w-[1720px] flex-col-reverse items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-10 lg:px-10 xl:gap-16 xl:px-12 2xl:gap-24">
      <div>
        <div className="w-full max-w-[550px] xl:max-w-[650px] 2xl:max-w-[773px]">
          <Image
            src={"/assets/png/register-free-car.png"}
            alt="register-free-car"
            width={773}
            height={450}
          />
        </div>
        <BlackBtn
          title="List Your Car For Free"
          className="mx-auto mt-8 flex max-w-[454px] justify-center sm:mt-10 md:mt-14 lg:hidden"
        />
      </div>
      <div>
        <SubHeading
          title="Registered To List Your Car For"
          spanTitle=" Free"
          className="mx-auto mb-2 border-none text-center lg:max-w-[641px] lg:text-start xl:mb-4"
        />
        <Para
          title='"Reach a wide audience of buyers and renters with no listing fees – post your property in just a few easy steps."'
          classNmae="!text-black dark:!text-white lg:max-w-[638px] text-center lg:text-start"
        />
        <LinkBlackBtn
          path="/partner/upload-cars"
          title="List Your Car For Free"
          className="mt-8 hidden max-w-[454px] justify-center lg:flex xl:mt-10"
        />
      </div>
    </div>
  );
}

export default RegisterCar;
