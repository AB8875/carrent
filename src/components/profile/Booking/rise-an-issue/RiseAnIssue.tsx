import React from "react";
import IssueCategory from "./IssueCategory";
import ReservationDetail from "./ReservationDetail";
import UploadImage from "./UploadImage";
import UrgencyLevel from "./UrgencyLevel";

function RiseAnIssue() {
  return (
    <>
      <div className="relative h-full overflow-hidden border-[#d9d9d9] lg:rounded-[21px] lg:border lg:bg-[#f9f9f9]">
        <div className="max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-auto px-5 pt-[60px] pb-10 sm:pt-14 sm:pb-11 md:py-[50px] lg:max-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-150px)] lg:px-[30px]">
          <div className="mb-10 flex flex-col gap-3.5">
            <h1 className="text-gray text-xl font-semibold sm:text-2xl">
              Report an issue with your Rental
            </h1>
            <p className="text-gray md::text-base text-xs sm:text-sm">{`"We’re here to help! Let us know what’s wrong, and we’ll take care of it as soon as possible."`}</p>
          </div>
          <IssueCategory />
          <ReservationDetail />
          <UploadImage />
          <UrgencyLevel />
          <div className="mt-10 flex items-center gap-x-10 gap-y-7 max-[450px]:flex-wrap lg:gap-[60px]">
            <button className="bg-gray text-primary border-gray hover:text-gray cursor-pointer rounded-md border px-6 py-3.5 text-xl font-semibold duration-200 hover:bg-transparent max-[800px]:px-5 max-[450px]:w-full">
              Submit Your Issue
            </button>

            <button className="bg-tranparent text-gray border-gray hover:text-primary hover:bg-gray cursor-pointer rounded-md border px-6 py-3.5 text-xl font-semibold duration-200 max-[450px]:w-full">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RiseAnIssue;
