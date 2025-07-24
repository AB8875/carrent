import { contactUsFormData } from "@/components/common/helper/ProfileHelper";
import React from "react";

function Form() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-gray text-xl font-semibold sm:text-2xl md:text-3xl">
          Contact Us Form :
        </h1>
        <div className="mt-[30px] flex w-full flex-wrap gap-x-[10%] gap-y-[30px] sm:mt-10">
          {contactUsFormData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2.5 sm:gap-3.5 ${item.className}`}
            >
              <label className="text-gray/70 text-sm" htmlFor={item.htmlFor}>
                {item.labelTitle}
              </label>
              <input
                className={`text-gray border-gray/25 rounded-md border-[0.2px] bg-white px-3.5 py-2.5 text-base font-medium outline-0 ${item.inputClass}`}
                type={item.inputType}
                id={item.inputId}
                placeholder={item.placeholder}
              />
            </div>
          ))}
          <div className="flex w-full flex-col gap-2.5 sm:gap-3.5">
            <label className="text-gray/70 text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              rows={3}
              className={`text-gray border-gray/25 $ rounded-md border-[0.2px] bg-white px-3.5 py-2.5 text-base font-medium outline-0`}
              id="message"
              placeholder="Write Message Here"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-x-[70px] gap-y-5 max-lg:flex-col">
          <button
            className="text-primary bg-gray border-gray hover:text-gray rounded-md border px-[24px] py-3.5 text-xl font-semibold duration-200 hover:bg-transparent max-lg:w-full"
            type="submit"
          >
            Submit
          </button>
          <button className="text-gray hover:text-primary bg-primary hover:bg-gray rounded-md px-[24px] py-3.5 text-xl font-semibold duration-200 max-lg:w-full">
            Chat with Us
          </button>
          <button className="text-gray hover:text-primary border-gray hover:bg-gray rounded-md border px-[24px] py-3.5 text-xl font-semibold duration-200 max-lg:w-full">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
