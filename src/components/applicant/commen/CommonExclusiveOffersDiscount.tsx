import LinkBlackBtn from "@/components/common/LinkBlackBtn";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import React from "react";
interface cardData {
  heading: string;
  subHeading: { title: string; para: string }[];
  listItems: { title: string; para: string }[];
  imgPath: string;
  btnTitle: string;
  btnPath: string;
}

interface IPROPS {
  details: cardData;
  className?: string;
}

const CommonExclusiveOffersDiscount: React.FC<IPROPS> = ({
  details,
  className,
}) => {
  return (
    <>
      <div
        className={`flex flex-col justify-between lg:flex-row xl:mx-[43px] ${className} mt-[60px] gap-10 lg:mt-24 xl:mt-[120px]`}
      >
        <div>
          <SubHeading
            title={details.heading}
            className="text-gray border-none text-2xl md:text-3xl lg:!text-[32px]"
          />
          {details.subHeading.map((items, indexs) => (
            <h3
              key={indexs}
              className="md:text:xl mt-[15px] text-base leading-[144%] lg:text-2xl"
            >
              <span className="font-semibold">{items.title}</span>
              <span>{items.para}</span>
            </h3>
          ))}
          <h3 className="mt-[15px] text-base leading-[144%] font-semibold md:mt-5 lg:text-xl">
            Description:
          </h3>
          <ul className="mt-2.5 flex list-disc flex-col gap-[15px] ps-8">
            {details.listItems.map((items, indexs) => (
              <li key={indexs} className="text-base leading-[144%]">
                <span className="font-semibold">{items.title}</span>
                {items.para}
              </li>
            ))}
          </ul>
          <div className="mt-10 w-full">
            <LinkBlackBtn
              title={details.btnTitle}
              path={details.btnPath}
              className="block lg:w-max"
            />
          </div>
        </div>
        <div className="relative mx-auto h-max pt-6 min-[1500px]:pt-10 lg:mx-0">
          <Image
            src={"/assets/svg/triangleYellowSvg.svg"}
            width={196}
            height={210}
            alt="desining img"
            className="absolute top-3 -left-1.5 !max-w-[100px] rotate-90 min-[500px]:-left-4 min-[550px]:top-0 min-[1500px]:!-left-10 sm:!max-w-[150px] md:-left-4 md:!max-w-[196px]"
          />
          <Image
            src={details.imgPath}
            width={682}
            height={455}
            alt="texi car img"
            className="sm:max-w-auto lg:!max-w-[55 0px] relative z-10 !max-w-[300px] rounded-[20px] min-[440px]:!max-w-[400px] min-[1550px]:!max-w-full md:!max-w-full"
          />
          <Image
            src={"/assets/svg/triangleYellowSvg.svg"}
            width={196}
            height={210}
            alt="desining img"
            className="md:-!right-4 min-[550px]-right-2 absolute -right-1 -bottom-2 !max-w-[100px] -rotate-90 min-[500px]:-right-3 min-[500px]:-bottom-4 min-[550px]:-bottom-5 min-[1500px]:-right-10 min-[1500px]:!-bottom-10 sm:!max-w-[150px] md:-bottom-5 md:!max-w-[196px] lg:-bottom-6"
          />
        </div>
      </div>
    </>
  );
};

export default CommonExclusiveOffersDiscount;
