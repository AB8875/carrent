"use client";

import React, { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import SubHeading from "./SubHeading";
import Para from "./Para";
import Link from "next/link";

import CommonInput from "./CommonInput";
import BlackBtn from "./BlackBtn";
import { contactData } from "../helper/user/Helper";

// 🧠 Define strict field keys for type-safe form
type ContactFormFields =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "message";

// 🧾 Typed version of your input config
const contactInputData: {
  lableFor: string;
  lable: string;
  inputType: string;
  inputId: ContactFormFields;
  Placeholder: string;
}[] = [
  {
    lableFor: "firstName",
    lable: "First Name",
    inputType: "text",
    inputId: "firstName",
    Placeholder: "Enter First Name",
  },
  {
    lableFor: "lastName",
    lable: "Last Name",
    inputType: "text",
    inputId: "lastName",
    Placeholder: "Enter Last Name",
  },
  {
    lableFor: "email",
    lable: "Email",
    inputType: "email",
    inputId: "email",
    Placeholder: "Enter Your Email",
  },
  {
    lableFor: "phone",
    lable: "Phone",
    inputType: "tel",
    inputId: "phone",
    Placeholder: "Enter Phone Number",
  },
];

function ContactInformation() {
  const [formData, setFormData] = useState<Record<ContactFormFields, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a 10-digit phone number.");
      return;
    }

    try {
      const res = await axiosInstance.post("/contact-information", formData);
      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="overflow-hidden pb-[60px] md:py-[59px]">
      <div className="mx-auto max-w-[1720px] px-4 sm:mt-[60px] sm:px-6 md:px-8 lg:mt-0 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row xl:gap-[60px]">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="bg-primary -mx-[32px] w-full rounded-[9px] px-[26px] py-[30px] sm:px-12 md:rounded-[20px] md:p-8 lg:mx-0 lg:block lg:max-w-[520px] lg:p-10 xl:max-w-[692px]">
            <SubHeading
              title="Contact Information"
              className="border-b-secondary"
            />
            <Para
              title="We’d love to hear from you! Whether you have questions about our car rental services, need assistance with your booking, or want to learn more about our fleet, our team is here to help."
              classNmae="!text-gray mt-5 leading-[144%]"
            />
            <div className="lg:mt-[60px]">
              {contactData.map((item, index) => (
                <div key={index} className="mt-5 flex gap-5 md:mt-8 lg:mt-10">
                  {item.icon}
                  <div className="flex flex-col gap-[5px] md:gap-2.5 lg:gap-[15px]">
                    <h3 className="text-lg leading-[144%] font-semibold">
                      {item.title}
                    </h3>
                    <Link href={item.path}>
                      <Para
                        title={item.contactMedium}
                        classNmae="!text-gray dark:!text-light-white"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mt-10 flex w-full flex-col flex-wrap justify-between gap-6 sm:flex-row lg:mt-0 xl:gap-8">
              {contactInputData.map((item, index) => (
                <CommonInput
                  key={index}
                  lableFor={item.lableFor}
                  lable={item.lable}
                  inputType={item.inputType}
                  inputId={item.inputId}
                  Placeholder={item.Placeholder}
                  className="sm:!w-[47%] lg:!w-[46%]"
                  value={formData[item.inputId]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [item.inputId]: e.target.value,
                    })
                  }
                />
              ))}
            </div>

            {/* TEXTAREA */}
            <div className="mt-6 flex flex-col gap-2.5 lg:mt-6 xl:mt-[69px]">
              <label
                htmlFor="textArea"
                className="dark:text-light-white text-gray text-xs leading-[144%] font-semibold sm:text-sm md:text-base"
              >
                Message
              </label>
              <textarea
                id="textArea"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="dark:!text-gray sm:dark:placeholder:!text-light-white border-gray !bg-sky dark:border-light-white min-h-[160px] !w-full overflow-auto rounded py-2.5 ps-2.5 text-sm leading-[144%] font-semibold outline-none sm:border-b sm:!bg-transparent sm:text-base md:text-lg lg:rounded-[0px] lg:text-xl"
                placeholder="Enter Message"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="mt-10 sm:max-w-[119px]">
              <BlackBtn title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
