import { FC, ReactNode } from "react";

interface AboutDescProps {
  title1: ReactNode;
  para1: string;
  title2: ReactNode;
  para2: string;
  title3: ReactNode;
  para3: string;
  title4: ReactNode;
  para4: string;
}

const AboutDesc: FC<AboutDescProps> = ({
  title1,
  para1,
  title2,
  para2,
  title3,
  para3,
  title4,
  para4,
}) => {
  return (
    <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="bg-primary grid grid-cols-2 justify-around gap-6 rounded-[20px] px-5 py-6 shadow-[box-shadow:0px_17px_47.3px_0px_rgba(10,28,42,0.44)] min-[950px]:grid-cols-4 sm:px-9 sm:py-7 md:px-14 md:py-8 lg:px-20 lg:py-10 xl:px-24 2xl:px-[145px]">
        <div>
          <h2 className="text-gray text-2xl leading-[144%] font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            {title1}+
          </h2>
          <p className="text-gray text-lg leading-[144%] font-semibold sm:text-xl md:text-2xl">
            {para1}
          </p>
        </div>
        <div>
          <h2 className="text-gray text-2xl leading-[144%] font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            {title2}K+
          </h2>
          <p className="text-gray text-lg leading-[144%] font-semibold sm:text-xl md:text-2xl">
            {para2}
          </p>
        </div>
        <div>
          <h2 className="text-gray text-2xl leading-[144%] font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            {title3}
          </h2>
          <p className="text-gray text-lg leading-[144%] font-semibold sm:text-xl md:text-2xl">
            {para3}
          </p>
        </div>
        <div>
          <h2 className="text-gray text-2xl leading-[144%] font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            {title4}K
          </h2>
          <p className="text-gray text-lg leading-[144%] font-semibold sm:text-xl md:text-2xl">
            {para4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDesc;
