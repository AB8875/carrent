import React from "react";
import CommonHeader from "../../commen/CommonHeader";
import { beforeBookingHeadrData } from "@/components/helper/user/Helper";

function Header() {
  return (
    <div>
      {beforeBookingHeadrData.map((item, index) => (
        <CommonHeader
          key={index}
          heading={item.heading}
          spanHeading={item.spanHeading}
          backgroundImage={item.bgImg}
          para={item.para}
        />
      ))}
    </div>
  );
}

export default Header;
