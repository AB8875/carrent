import React from "react";
import ProfilePic from "../ProfilePic";
import MyActivityTabs from "./MyActivityTabs";

function MyActivity() {
  return (
    <div className="mt-[60px] flex w-full gap-[30px]">
      <ProfilePic />
      <div className="h-full w-full px-4 md:ps-0 md:pe-5">
        <div className="bg-light-white h-full w-full rounded-t-[7px] border border-[#D9D9D9] sm:rounded-t-[16px] md:rounded-t-[21px]">
          <MyActivityTabs />
        </div>
      </div>
    </div>
  );
}

export default MyActivity;
