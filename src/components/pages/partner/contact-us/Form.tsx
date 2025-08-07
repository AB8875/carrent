import BlackBtn from "@/components/common/BlackBtn";
import CommonInput from "@/components/common/CommonInput";

import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import { contactInputData2 } from "@/components/helper/partner/Helper";
import { contactInputData } from "@/components/helper/user/Helper";
import Link from "next/link";
import React from "react";

function Form() {
  return (
    <div className="bg-light-white mb-16 py-8 sm:py-10 md:mb-18 md:py-16 lg:mb-20 lg:py-20 xl:mb-24 xl:py-24 2xl:mb-[155px] dark:bg-black">
      <div className="block rounded-[9px] px-5 md:rounded-[20px] md:px-8 lg:hidden lg:px-10">
        <SubHeading title="Send Message" className="mx-auto" />
        <Para
          title="We’d love to hear from you! Whether you have questions about our car list services, our team is here to help."
          classNmae="!text-gray dark:!text-white  mt-5 leading-[144%] text-center"
        />
        <div className="my-10 lg:mt-[60px]">
          {contactInputData2.map((item, index) => (
            <div
              key={index}
              className="mt-5 flex gap-[15px] md:mt-8 md:gap-5 lg:mt-10"
            >
              {item.icon}
              <div className="flex flex-col gap-[5px] md:gap-2.5 lg:gap-[15px]">
                <h3 className="text-lg leading-[144%] font-semibold">
                  {item.title}
                </h3>
                <Link href={item.path}>
                  <Para title={item.contactMedium} classNmae="!text-gray" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-2 max-w-[1720px] px-4 sm:px-6 md:px-8 lg:mt-14 lg:px-10 xl:mt-[60px] xl:px-12">
        <div className="flex items-center gap-6 xl:gap-[30px]">
          <div className="hidden w-1/2 rounded-[9px] md:rounded-[20px] lg:block 2xl:w-[42%]">
            <SubHeading title="Send Message" />
            <Para
              title="We’d love to hear from you! Whether you have questions about our car list services, our team is here to help."
              classNmae="!text-gray dark:!text-white mt-4 leading-[144%]"
            />
            <div className="lg:mt-[60px]">
              {contactInputData2.map((item, index) => (
                <div
                  key={index}
                  className="dark:bg-gray mt-8 flex items-center gap-5 rounded-[10px] bg-white p-6 xl:mt-10 xl:p-[30px]"
                >
                  {item.icon}
                  <div className="flex flex-col gap-[5px] md:gap-2 lg:gap-2.5">
                    <h3 className="text-gray text-xl leading-[144%] font-semibold dark:text-white">
                      {item.title}
                    </h3>
                    <Link href={item.path}>
                      <Para
                        title={item.contactMedium}
                        classNmae="!text-gray dark:!text-white"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            action="#"
            className=":px-12 xl dark:bg-gray w-full rounded-[20px] bg-white px-4 py-10 sm:px-6 md:px-8 lg:w-1/2 lg:px-9 lg:py-16 xl:py-20 2xl:w-full 2xl:max-w-[905px]"
          >
            <div className="flex w-full flex-col flex-wrap justify-between gap-6 sm:flex-row xl:gap-8">
              {contactInputData.map((item, index) => (
                <CommonInput
                  key={index}
                  lableFor={item.lableFor}
                  lable={item.lable}
                  inputType={item.inputType}
                  inputId={item.inputId}
                  Placeholder={item.Placeholder}
                  className="sm:!w-[47%] lg:!w-[46%]"
                />
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-12 xl:mt-[69px]">
              <label
                htmlFor="textArea"
                className="text-gray text-xs leading-[144%] font-semibold sm:text-sm md:text-base dark:text-white"
              >
                Message
              </label>
              <textarea
                name="#"
                id="textArea"
                className="border-gray !w-full py-2.5 text-sm leading-[144%] font-semibold outline-none sm:border-b sm:text-base md:text-lg lg:text-xl"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className="mt-10 sm:max-w-[119px]">
              <BlackBtn
                title="Submit"
                className="dark:bg-primary dark:text-gray"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
