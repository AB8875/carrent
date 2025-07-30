import JourneyIconCard from "./JourneyIconCard";
import SubHeading from "@/components/common/SubHeading";
import Para from "@/components/common/Para";
import Image from "next/image";
import {
  BlackDotIcon,
  SmallCarIcon,
  SmallCarOnTopIcon,
} from "@/components/helper/user/Icon";

interface IPROPS {
  icon: React.ReactNode;
  heading: string;
  para: string;
  className?: string;
  LineClass?: string;
  LineClass2?: string;
  carClass: React.ReactNode;
}

const JourneyCard: React.FC<IPROPS> = ({
  icon,
  heading,
  para,
  className,
  LineClass,
  LineClass2,
  carClass,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center px-6 py-10 ${className}`}
    >
      <JourneyIconCard icon={icon} />
      <SubHeading
        title={heading}
        className="!text-gray dark:!text-light-white mt-[15px] !border-none !text-xl lg:mt-6 lg:!text-2xl"
      />
      <Para
        title={para}
        classNmae="!text-gray-700 max-w-[424px] text-center lg:mt-[14px] mt-2.5 dark:!text-light-white"
      />
      <div
        className={`absolute top-[27%] -right-[190px] flex items-center gap-[18px] min-[1620px]:-right-[210px] ${LineClass} !-mt-10`}
      >
        <BlackDotIcon />
        <div className="relative">
          <Image
            src="/assets/svg/deshad-line.svg"
            width={274}
            height={1}
            alt="deshad line"
            className="w-full max-w-[250px] min-[1620px]:max-w-[274px]"
          />

          <div
            className={`animate-car-move absolute -top-8 left-0 ${carClass}`}
          >
            <SmallCarIcon />
          </div>
        </div>

        <BlackDotIcon />
      </div>

      <div className="mt-[120px] pb-5">
        <div className={`flex rotate-90 items-center gap-[18px] ${LineClass2}`}>
          <BlackDotIcon />
          <div className="relative">
            <Image
              src={"/assets/svg/deshad-line.svg"}
              width={274}
              height={1}
              alt="deshad line"
              className="w-full max-w-[152px]"
            />
            <div
              className={`animate-car-move absolute -top-8 left-0 -rotate-90 ${carClass}`}
            >
              <SmallCarOnTopIcon />
            </div>
          </div>
          <BlackDotIcon />
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
