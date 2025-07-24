import {
  CustmoreCareIcon,
  EarlyReturnIcon,
  RiseIssueIcon,
} from "@/components/helper/ProfileIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EarlyReturnModal from "./early-return-modal/EarlyReturnModal";
import ApprovelReqstModal from "./early-return-modal/ApprovelReqstModal";
import { bookedCarData } from "@/components/helper/ProfileHelper";

function BookedCar() {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds
  const [isEarlyModalOpen, setIsEarlyModalOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);

  const openEarlyModal = () => {
    setIsEarlyModalOpen(true);
  };

  const closeEarlyModal = () => {
    setIsEarlyModalOpen(false);
  };

  const openApprovalModal = () => {
    setIsEarlyModalOpen(false); // Close EarlyReturnModal
    setIsApprovalModalOpen(true); // Then open Approval modal
  };

  const closeApprovalModal = () => setIsApprovalModalOpen(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000); // decrement every 1 sec

    return () => clearInterval(interval); // cleanup
  }, [timeLeft]);

  useEffect(() => {
    if (isEarlyModalOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isEarlyModalOpen]);

  useEffect(() => {
    if (isApprovalModalOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isApprovalModalOpen]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="mt-[30px] mb-10 sm:mx-5 2xl:mx-[30px]">
        <div className="rounded-[20px] bg-white p-5 2xl:p-[30px]">
          <h2 className="text-gray mb-[25px] text-2xl font-semibold">
            Booked Car
          </h2>
          <div className="flex gap-x-5 max-[1050px]:flex-wrap">
            <div className="flex w-full max-w-[303px] flex-col gap-y-8">
              <Image
                className="max-w-[400px] max-sm:w-full"
                src={"/assets/png/booked-car-img.png"}
                alt="booked-car-img"
                width={303}
                height={214}
              />
              <div className="flex items-center gap-3 max-md:hidden">
                <p className="text-[10px] font-semibold">
                  Time Left for return car :
                </p>
                <div className="border-primary flex w-full max-w-[172px] items-center gap-x-[7.15px] rounded-[4px] border p-2">
                  <p className="text-xs font-semibold">
                    <span>{hours}</span>
                    <span className="text-[10px] font-normal">h.</span>
                  </p>
                  <p className="text-primary -mt-1 leading-none">:</p>
                  <p className="text-xs font-semibold">
                    <span>{minutes}</span>
                    <span className="text-[10px] font-normal">min.</span>
                  </p>
                  <p className="text-primary -mt-1 leading-none">:</p>
                  <p className="text-xs font-semibold">
                    <span>{seconds}</span>
                    <span className="ml-1 text-[10px] font-normal">Sec.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full max-[1050px]:mt-[30px] md:max-w-[716px]">
              <div className="grid-col-1 grid w-full gap-x-5 gap-y-5 sm:grid-cols-2 2xl:gap-x-10">
                {bookedCarData.map((item, index) => (
                  <div key={index} className="flex w-full flex-col gap-[10px]">
                    <label
                      className="w-full text-sm text-[rgba(10,28,42,0.70)]"
                      htmlFor={item.htmlFor}
                    >
                      {item.labelTitle}
                    </label>
                    <input
                      type={item.inputType}
                      name={item.name}
                      id={item.inputId}
                      placeholder={item.placeholder}
                      className="text-gray rounded-[4px] border-[0.2px] border-[#0A1C2A] px-3.5 py-2.5 text-base font-medium outline-0"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full items-center gap-3 max-md:mt-[30px] md:hidden">
              <p className="text-[10px] font-semibold">
                Time Left for return car :
              </p>
              <div className="border-primary flex w-full max-w-[172px] items-center gap-x-[7.15px] rounded-[4px] border p-2">
                <p className="text-xs font-semibold">
                  <span>{hours}</span>
                  <span className="text-[10px] font-normal">h.</span>
                </p>
                <p className="text-primary -mt-1 leading-none">:</p>
                <p className="text-xs font-semibold">
                  <span>{minutes}</span>
                  <span className="text-[10px] font-normal">min.</span>
                </p>
                <p className="text-primary -mt-1 leading-none">:</p>
                <p className="text-xs font-semibold">
                  <span>{seconds}</span>
                  <span className="ml-1 text-[10px] font-normal">Sec.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-around gap-x-5 gap-y-4 max-[1600px]:flex-wrap md:mt-[46px]">
            <button
              onClick={openEarlyModal}
              className="bg-gray flex items-center gap-2 rounded-[4px] px-[9px] py-3 max-md:w-full max-md:justify-center 2xl:px-5"
            >
              <span>
                <EarlyReturnIcon />
              </span>
              <span className="text-primary text-sm font-semibold md:text-base lg:text-lg">
                Early Return
              </span>
            </button>
            <Link
              href={"/dashboard/my-booking/rise-an-issue"}
              className="bg-gray flex items-center gap-2 rounded-[4px] px-[9px] py-3 max-md:w-full max-md:justify-center 2xl:px-5"
            >
              <span>
                <RiseIssueIcon />
              </span>
              <span className="text-primary text-sm font-semibold md:text-base lg:text-lg">
                Rise an issue
              </span>
            </Link>
            <Link
              href={"/dashboard/my-booking/customer-care"}
              className="bg-gray flex items-center gap-2 rounded-[4px] px-[9px] py-3 max-md:w-full max-md:justify-center 2xl:px-5"
            >
              <span>
                <CustmoreCareIcon />
              </span>
              <span className="text-primary text-sm font-semibold md:text-base lg:text-lg">
                Contact Custmore Care
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* EarlyReturnModal Component */}
      {isEarlyModalOpen && (
        <EarlyReturnModal
          closeEarlyModal={closeEarlyModal}
          openApprovalModal={openApprovalModal}
        />
      )}

      {isApprovalModalOpen && (
        <ApprovelReqstModal closeApprovalModal={closeApprovalModal} />
      )}
    </>
  );
}

export default BookedCar;
