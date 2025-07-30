"use client";

import React from "react";
import SubHeading from "./SubHeading";
import CommonAccordian from "./CommonAccordian";

import Image from "next/image";
import Para from "./Para";
import { Accordion } from "../ui/accordion"; // aapka wrapper component
import { aksQuestionAccordianData } from "../helper/user/Helper";

function AskQuestion() {
  // Ye state rakhta hai kaunsa accordion open hai
  // const [openItem, setOpenItem] = useState<string | null>(null);
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);
  return (
    <div className="py-[60px] lg:py-24 xl:py-[155px]">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto max-w-[1455px]">
          <SubHeading
            title="Frequently Asked Questions"
            className="dark:!text-primary dark:!border-light-white mx-auto max-w-[200px] text-center sm:max-w-[800px]"
          />
          <div className="mt-10 flex items-center justify-between lg:mt-[60px]">
            <div className="flex w-full flex-col gap-5 lg:w-[59%] lg:gap-[25px]">
              <Accordion
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
                className="flex flex-col gap-[25px]"
              >
                {aksQuestionAccordianData.map((item, index) => (
                  <CommonAccordian
                    key={index}
                    value={String(item.Value)} // har item ka unique value
                    accordionTrigger={item.accordionTrigger}
                    accordionContent={item.accordionContent}
                  />
                ))}
              </Accordion>
            </div>
            <div className="hidden w-[39%] flex-col items-center lg:flex">
              <div>
                <Image
                  src={"/assets/svg/questionMarkYellowImg.svg"}
                  width={292}
                  height={266}
                  alt="img"
                  className="w-full"
                />
              </div>
              <div className="mt-12 xl:mt-[66px]">
                <h3 className="text-center text-[32px] leading-[150%] font-semibold">
                  Any Question?
                </h3>
                <Para
                  title="If you have a question that;s not listed here,feel free to contact us."
                  classNmae="!text-[15px] !text-gray xl:mt-[15px] mt-2 leading-[150%] font-semibold text-center dark:!text-light-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
