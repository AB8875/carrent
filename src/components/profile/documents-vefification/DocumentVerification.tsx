import React from "react";
import ProfilePic from "../ProfilePic";
import DocumentDetailsVerification from "./DocumentDetailsVerification";

function DocumentVerification() {
  return (
    <div className="mt-[60px] flex w-full gap-[30px]">
      <ProfilePic />
      <DocumentDetailsVerification />
    </div>
  );
}

export default DocumentVerification;
