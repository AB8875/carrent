import Heading from "@/components/common/Heading";
import SubPara from "@/components/common/SubPara";
import React from "react";
interface IPROPS {
  heading: string;
  spanHeading?: string;
  para?: string;
  backgroundImage?: string;
}

const CommonHeader: React.FC<IPROPS> = ({
  heading,
  para,
  backgroundImage,
  spanHeading,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex !items-center justify-center bg-[url('/assets/png/hero-bg-car-img.png')] bg-cover bg-center py-[78px] lg:h-screen lg:py-[120px] xl:py-[218px]"
    >
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="m-auto">
          <Heading
            title={heading}
            spanTitle={spanHeading}
            className="max-w-[850px] text-center !leading-[144%] xl:!text-[64px]"
          />
          <SubPara
            title={para || ""}
            className="!text-light-white mt-[15px] text-center !text-base md:!text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
