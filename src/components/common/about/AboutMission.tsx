import { FC, JSX } from "react";
import Heading from "../Heading";
import SubPara from "../SubPara";
import Para from "../Para";
import Image from "next/image";

interface MissionItem {
  svg: JSX.Element;
  heading: string;
  para: string;
  mapClassName?: string;
}

interface AboutMissionProps {
  missionData: MissionItem[];
  mapClassName?: string;
}

const AboutMission: FC<AboutMissionProps> = ({ missionData, mapClassName }) => {
  return (
    <div className="bg-light-white mb-14 flex w-full items-center justify-between gap-24 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-[158px]">
      <div className="bg-half-blue-white w-full">
        <div className="mx-auto flex w-full max-w-[1720px] flex-wrap min-[1440px]:flex-nowrap">
          <div className="relative w-full rounded-r-[20px] pt-14 pr-4 pb-16 pl-4 text-center min-[1440px]:w-[76%] min-[1440px]:py-14 min-[1440px]:pr-0 min-[1440px]:text-start min-[1600px]:w-[82%] min-[1635px]:w-[87%] sm:pr-6 sm:pb-20 sm:pl-6 md:pr-8 md:pb-24 md:pl-8 lg:pr-10 lg:pb-28 lg:pl-10 xl:pr-12 xl:pb-32 xl:pl-12 2xl:pb-16">
            <div className="absolute right-[30%] -bottom-8 left-[30%] mx-auto max-w-[90px] min-[450px]:-bottom-10 min-[1440px]:top-[31%] min-[1440px]:-right-38 min-[1440px]:left-auto min-[1440px]:h-full min-[1700px]:max-w-[309px] sm:-bottom-20 sm:max-w-[150px] md:-bottom-30 md:max-w-[200px] xl:max-w-[240px] 2xl:top-[25%] 2xl:max-w-[299px]">
              <Image
                src={"/assets/png/arrow-with-circle.png"}
                alt="arrow"
                width={309}
                height={299}
              />
            </div>
            <Heading title="About Our" spanTitle="Mission" />
            <div className="mt-3.5 flex w-full flex-col gap-2.5 min-[1440px]:max-w-[495px] min-[1600px]:max-w-[548px]">
              <SubPara
                title="At That sit, our mission is simple: to revolutionize the car buying and selling experience for everyone. We aim to create a platform that fosters trust, transparency, and convenience for both buyers and sellers. Whether you’re purchasing your first car or upgrading to your dream vehicle, we are here to guide you through every step of the process."
                className="text-white"
              />
              <SubPara
                title="We believe that buying a car should be a seamless experience — no hidden fees, no surprises. By connecting buyers with a vast range of sellers from over 50+ trusted car brands, we provide a marketplace that ensures you get the best value, the most accurate information, and the highest level of service"
                className="hidden text-white sm:flex"
              />
            </div>
          </div>
          <div className="bg-light-white :pr-8 flex w-full flex-col gap-5 pt-2 pr-4 pb-6 pl-4 sm:pt-16 sm:pr-6 sm:pb-8 sm:pl-6 md:gap-7 md:pb-10 md:pl-8 lg:pr-10 lg:pl-10 xl:pr-12 xl:pl-12 2xl:py-10 2xl:pl-0 dark:bg-black">
            {missionData.map((item, index) => (
              <div
                key={index}
                className={`dark:bg-gray flex rounded-2xl px-2.5 py-2.5 min-[1440px]:rounded-r-[20px] sm:px-6 sm:py-6 md:px-8 md:py-[30px] 2xl:justify-end ${item.mapClassName ?? mapClassName ?? ""}`}
              >
                <div className="flex items-center gap-4 sm:gap-5 md:gap-8 lg:gap-10">
                  <span>{item.svg}</span>
                  <div>
                    <h4 className="text-gray mb-1 text-sm leading-[144%] font-semibold sm:mb-2 sm:text-base md:mb-3 md:text-xl lg:mb-4 lg:text-2xl dark:text-white">
                      {item.heading}
                    </h4>
                    <Para
                      classNmae="!text-black 2xl:max-w-[535px] dark:!text-white"
                      title={item.para}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
