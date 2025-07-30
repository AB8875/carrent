import React from "react";
interface IPROPS {
  icon: React.ReactNode;
  heading: string;
  para: string;
  className?: string;
}
const OurCoreCommonCard: React.FC<IPROPS> = ({
  icon,
  heading,
  para,
  className,
}) => {
  return (
    <div
      className={`bg-gray clip-arrow flex h-full w-full items-center gap-2 rounded-[10px] py-2 ps-3 pe-10 min-[1150px]:rounded-l-[100px] min-[1150px]:py-3 min-[1150px]:ps-4 sm:gap-3 sm:py-5 sm:ps-5 xl:gap-5 xl:py-5 xl:ps-6 ${className}`}
    >
      <div className="flex items-center justify-center rounded-full bg-white p-2.5 min-[1450px]:p-6 sm:p-4">
        {icon}
      </div>
      <div className="flex flex-col gap-2 xl:gap-2.5">
        <h3 className="text-primary text-xs leading-[144%] font-semibold min-[1450px]:text-2xl sm:text-sm md:text-xl">
          {heading}
        </h3>
        <p className="text-[10px] leading-[144%] text-white min-[1150px]:max-w-[520px] min-[1450px]:text-base sm:text-sm">
          {para}
        </p>
      </div>
    </div>
  );
};

export default OurCoreCommonCard;
