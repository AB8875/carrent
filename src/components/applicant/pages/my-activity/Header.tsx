import React from "react";
import CommonHeader from "../../commen/CommonHeader";
import { myActivityHeaderData } from "@/components/helper/user/Helper";

function Header() {
  return (
    <div>
      {myActivityHeaderData.map((item, index) => (
        <CommonHeader
          key={index}
          backgroundImage={item.bgImg}
          heading={item.heading}
          spanHeading={item.spanTitle}
        />
      ))}
    </div>
  );
}

export default Header;
