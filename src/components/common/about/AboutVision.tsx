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

interface AboutVisionProps {
  missionData: MissionItem[];
  mapClassName?: string;
}

const AboutVision: FC<AboutVisionProps> = ({ missionData, mapClassName }) => {
  return (
    <div className="bg-light-white mb-16 flex w-full items-center justify-between gap-24 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-[158px] dark:bg-black">
      <div className="bg-half-blue-white-2 w-full dark:bg-black">
        <div className="mx-auto flex w-full max-w-[1720px] flex-col-reverse min-[1440px]:flex-row">
          <div className="bg-light-white flex w-full flex-col gap-5 pt-2 pr-4 pb-6 pl-4 sm:pt-16 sm:pr-6 sm:pb-8 sm:pl-6 md:gap-7 md:pr-8 md:pb-10 md:pl-8 lg:pr-10 lg:pl-10 xl:pr-12 xl:pl-12 2xl:py-10 2xl:pr-0 2xl:pl-12 dark:bg-black">
            {missionData.map((item, index) => (
              <div
                key={index}
                className={`dark:bg-gray flex rounded-2xl px-2.5 py-2.5 min-[1440px]:rounded-r-[20px] sm:px-6 sm:py-6 md:px-8 md:py-[30px] 2xl:justify-start ${item.mapClassName ?? mapClassName ?? ""}`}
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
          <div className="relative w-full rounded-r-[20px] pt-14 pr-4 pb-16 pl-4 text-center min-[1440px]:w-[87%] min-[1440px]:py-14 min-[1440px]:pr-0 min-[1440px]:text-end sm:pr-6 sm:pb-20 sm:pl-6 md:pr-8 md:pb-28 md:pl-8 lg:pr-10 lg:pb-26 lg:pl-10 xl:pr-12 xl:pb-36 xl:pl-12 2xl:pb-14">
            <div className="absolute top-[85%] right-[30%] left-[30%] mx-auto max-w-[90px] min-[1440px]:!top-[38%] min-[1440px]:!right-[0%] min-[1440px]:!left-[-105%] min-[1440px]:h-full min-[1535px]:!top-[35%] min-[1535px]:!left-[-100%] min-[1600px]:!top-[30%] min-[1700px]:max-w-[309px] sm:top-[83%] sm:-bottom-20 sm:max-w-[150px] md:top-[78%] md:max-w-[200px] xl:max-w-[240px] 2xl:max-w-[299px]">
              <Image
                src={"/assets/png/left-arrow-with-circle.png"}
                alt="arrow"
                width={309}
                height={299}
              />
            </div>
            <Heading title="About Our" spanTitle="Vision" />
            <div className="mt-3.5 mr-0 ml-auto flex w-full flex-col gap-2.5 text-center min-[1440px]:max-w-[495px] min-[1440px]:text-end min-[1600px]:max-w-[548px]">
              <SubPara
                title="At [Your Website Name], our vision is to become the leading global platform for buying and selling cars, creating an innovative, user-centric marketplace that redefines how people connect with their vehicles. We aim to empower individuals by providing them with the tools, resources, and support they need to make confident, informed decisions — whether they are purchasing their first car or selling their current vehicle."
                className="text-white"
              />
              <SubPara
                title="At That sit our vision is to redefine the car rental experience and set a new standard in the industry. We are committed to providing not just a vehicle for your journey, but a seamless, and enjoyable experience that empowers your travels. Our ultimate goal is to be recognized as a global ."
                className="hidden text-white sm:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
