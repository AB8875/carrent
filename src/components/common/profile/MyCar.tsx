import React from "react";
import ProfilePic from "@/components/profile/ProfilePic";
import MyCarPagination from "./MyCarPagination";

function MyCar() {
  return (
    <>
      <div className="mt-[60px] flex w-full gap-[30px]">
        <ProfilePic />
        {/* <ProfileInformation /> */}
        <MyCarPagination />
      </div>
    </>
  );
}

export default MyCar;
