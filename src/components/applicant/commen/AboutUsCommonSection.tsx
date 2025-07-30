import Heading from "@/components/common/Heading";
import SubPara from "@/components/common/SubPara";
import React from "react";
interface IPROPS {
  upper: {
    heading: string;
    para: string;
  }[];
  bottom: {
    // heading: string;
    qus: {
      heading: string;
      para: string;
    }[];
  }[];
}

const AboutUsCommonSection: React.FC<IPROPS> = ({ upper, bottom }) => {
  return (
    <div className="bg-light-white md:bg-white">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 py-10 sm:px-6 md:px-8 md:py-[60px] lg:px-10 lg:py-24 xl:px-12 xl:py-[155px]">
        <div className="bg-light-white md:px-4 md:py-6 lg:px-[30px] lg:py-10">
          <div className="flex flex-col gap-[30px] lg:gap-12 xl:gap-[93px]">
            {upper.map((item, index) => (
              <div key={index}>
                <Heading
                  title={item.heading}
                  className="!text-gray !text-sm sm:!text-base md:!text-xl lg:!text-3xl xl:!text-[40px]"
                />
                <SubPara
                  title={item.para}
                  className="mt-2.5 max-w-[1487px] !text-xs !text-gray-700 md:mt-[15px] md:!text-base lg:!text-xl"
                />
              </div>
            ))}
          </div>
          {bottom.map((item, index) => (
            <div key={index}>
              <div className="bg-gray mt-10 rounded-t-[10px] px-[5px] py-2 sm:px-3 sm:py-[14px] md:mt-[60px] md:rounded-t-[20px] md:px-6 md:py-4 lg:mt-24 lg:px-[30px] lg:py-5 xl:mt-[120px]">
                <Heading
                  title="Important :"
                  className="!text-sm sm:!text-base md:!text-xl lg:!text-3xl xl:!text-[40px]"
                />
              </div>
              {item.qus.map((item, index) => (
                <div
                  key={index}
                  className="rounded-b-[10px] bg-white px-[5px] py-2 sm:px-3 sm:py-[14px] md:rounded-b-[20px] md:px-6 md:py-4 lg:px-[30px] lg:py-5"
                >
                  <Heading
                    title={item.heading}
                    className="!text-primary !text-xs underline md:!text-base lg:!text-xl xl:!text-[40px]"
                  />
                  <SubPara
                    title={item.para}
                    className="mt-[5px] max-w-[1487px] !text-xs !text-gray-700 sm:mt-2 md:mt-3 md:!text-base lg:!text-xl xl:mt-5"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCommonSection;
