import React from "react";
import Form from "./Form";
import Image from "next/image";

function CustomerCare() {
  return (
    <>
      <div className="relative h-full overflow-hidden border-[#d9d9d9] lg:rounded-[21px] lg:border lg:bg-[#f9f9f9]">
        <div className="absolute top-2 -right-7 hidden max-w-[150px] lg:block">
          <Image
            className="h-auto w-full"
            src={"/assets/png/pass-setting-car-img.png"}
            alt="car-img"
            width={247}
            height={116}
          />
        </div>
        <div className="max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-auto px-5 pt-[60px] pb-16 sm:pt-14 md:pt-[50px] lg:max-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-160px)] lg:px-[30px]">
          <div>
            <h1 className="text-gray text-xl font-semibold md:text-2xl">
              Contact Customer Care
            </h1>
            <p className="text-gray mt-3.5 text-sm md:text-base">{`"We’re here to help! Choose the best way to reach us for any questions or assistance you need."`}</p>
          </div>
          <div className="mt-10 sm:mt-11 md:mt-12 lg:mt-[50px]">
            <h1 className="text-gray text-xl font-semibold sm:text-2xl md:text-3xl">
              Phone Support:
            </h1>
            <div className="mt-5 ml-2.5 sm:mt-[30px] md:ml-[40px]">
              <div className="flex items-center gap-3">
                <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                <p className="text-gray text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="font-semibold">Phone Number: </span>
                  1-800-123-4567
                </p>
              </div>
              <div className="mt-5 sm:mt-6 md:mt-[30px]">
                <div className="flex items-center gap-3">
                  <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                  <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                    Operating Hours:
                  </p>
                </div>
                <div className="mt-3.5 ml-4 flex flex-col gap-5 sm:ml-10 md:gap-3.5">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                    <p className="text-gray text-xs sm:text-sm md:text-base">
                      <span className="font-medium">Monday to Friday: </span>
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                    <p className="text-gray text-xs sm:text-sm md:text-base">
                      <span className="font-medium">Saturday: </span>
                      10:00 AM - 4:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                    <p className="text-gray text-xs sm:text-sm md:text-base">
                      <span className="font-medium">Sunday: </span>
                      Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 md:mt-[30px]">
                <div className="flex items-center gap-3">
                  <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                  <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                    After-Hours Emergency Support:
                  </p>
                </div>
                <div className="mt-3.5 ml-4 flex flex-col gap-5 sm:ml-10 md:gap-3.5">
                  <div className="flex gap-3">
                    <div className="bg-gray mt-1.5 h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                    <p className="text-gray text-xs sm:text-sm md:text-base">
                      For urgent matters outside of business hours, please
                      contact
                      <span className="mx-1 font-medium">
                        Emergency Support at 1-800-999-1234
                      </span>
                      for assistance. (If you offer 24/7 emergency support or a
                      dedicated after-hours number.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-gray text-xl font-semibold sm:text-2xl md:text-3xl">
              Call Us For :
            </h1>
            <div className="mt-3.5 ml-2 flex flex-col gap-2.5 sm:ml-[40px] sm:gap-3.5 md:gap-5">
              <div className="flex items-center gap-3">
                <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                  Reservation Assistance
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                  Billing Questions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                  Vehicle Issues
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray h-1 max-h-1 min-h-1 w-1 max-w-1 min-w-1 rounded-full sm:h-[5.36px] sm:max-h-[5.36px] sm:min-h-[5.36px] sm:w-1.5 sm:max-w-1.5 sm:min-w-1.5"></div>
                <p className="text-gray text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                  Customer Service Concerns
                </p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default CustomerCare;
