import React from "react";
import ProfilePic from "../ProfilePic";
import MyPayment from "./MyPayment";

function Payment() {
  return (
    <div className="mt-[60px] flex w-full gap-[30px]">
      <ProfilePic />
      <MyPayment />
    </div>
  );
}

export default Payment;
