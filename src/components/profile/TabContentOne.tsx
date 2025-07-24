import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileInformation from "./ProfileInformation";

function TabContentOne() {
  return (
    <>
      <div className="mt-[60px] flex w-full gap-[30px]">
        <ProfilePic />
        <ProfileInformation />
      </div>
    </>
  );
}

export default TabContentOne;
