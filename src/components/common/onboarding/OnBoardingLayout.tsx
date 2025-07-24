import React, { FC } from "react";
import MainHeading from "../MainHeading";
import Para from "../Para";

interface OnBoardingLayoutProops {
  children?: React.ReactNode;
  title?: string;
  para?: string;
}
const OnBoardingLayout: FC<OnBoardingLayoutProops> = ({
  children,
  title,
  para,
}) => {
  return (
    <>
      <div className="after:bg-secondary relative flex min-h-[calc(100vh-120px)] w-full flex-col items-center justify-center bg-[url(/assets/png/login-bg.png)] bg-cover bg-center bg-no-repeat px-4 py-20 after:absolute after:z-10 after:h-full after:w-full">
        <div className="dark:border-primary relative z-20 flex w-full flex-col rounded-2xl border border-white bg-white/20 sm:max-w-[500px] md:max-w-[700px] lg:rounded-3xl xl:max-w-[1000px] dark:bg-black/30">
          <div className="dark:border-primary flex flex-col items-center justify-center border-b border-white px-4 py-4 md:py-6 lg:px-6 xl:py-7">
            {title && (
              <MainHeading
                title={title || "title"}
                classNmae="text-white dark:text-primary"
              />
            )}
            {para && (
              <Para
                title={para || "para"}
                classNmae="mt-2.5 lg:mt-4 text-white dark:text-primary text-center"
              />
            )}
          </div>
          <div className="px-4 py-4 md:py-6 lg:px-6 xl:py-7">{children}</div>
        </div>
      </div>
    </>
  );
};

export default OnBoardingLayout;
