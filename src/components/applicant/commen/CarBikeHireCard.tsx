import Heading from "@/components/common/Heading";
import Image from "next/image";
import React from "react";
interface IPROPS {
  heading: string;
  img: string;
  listItem: { item: string }[];
  className?: string;
}
const CarBikeHireCard: React.FC<IPROPS> = ({
  listItem,
  heading,
  img,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-[30px] lg:flex-row lg:items-center xl:!gap-10 ${className}`}
    >
      <div>
        <Heading
          title={heading}
          className="!text-gray dark:!text-light-white !text-xl lg:!text-2xl xl:!text-[32px]"
        />
        <ul className="mt-2.5 flex list-disc flex-col gap-2.5 ps-5 md:ps-12 lg:mt-[15px] lg:gap-3.5 xl:ps-[72px]">
          {listItem.map((items, indexx) => (
            <li
              key={indexx}
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              {items.item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto h-max w-max pt-10 sm:px-0 lg:mx-0">
        <Image
          src={"/assets/svg/triangleYellowSvg.svg"}
          width={147}
          height={158}
          alt="desining img"
          className="absolute top-[28px] -left-2 w-[100px] rotate-90 sm:top-6 sm:-left-4 md:top-5 md:-left-3.5 md:w-[147px]"
        />
        <Image
          src={img}
          width={512}
          height={341}
          alt="texi car img"
          className="sm:max-w-auto relative z-10 max-w-[280px] rounded min-[350px]:max-w-[300px] min-[1550px]:!max-w-full sm:rounded-[10px] md:max-w-full md:rounded-[20px] lg:max-w-[500px]"
        />
        <Image
          src={"/assets/svg/triangleYellowSvg.svg"}
          width={147}
          height={158}
          alt="desining img"
          className="absolute -right-2 -bottom-3 w-[100px] -rotate-90 sm:-right-3 sm:-bottom-4 md:w-[147px]"
        />
      </div>
    </div>
  );
};

export default CarBikeHireCard;
