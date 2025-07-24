import React from "react";
import ProfilePic from "../ProfilePic";
import MyBookingStatusTable from "./MyBookingStatusTable";

function MyBooking() {
  return (
    <div className="mt-[60px] flex w-full gap-[30px]">
      <ProfilePic />
      <MyBookingStatusTable />
    </div>
  );
}

export default MyBooking;
