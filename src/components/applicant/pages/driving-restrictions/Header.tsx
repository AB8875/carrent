import React from "react";
import CommonHeader from "../../commen/CommonHeader";
import { drivingRestrictionHeadrData } from "@/components/helper/user/Helper";

function Header() {
  return (
    <div>
      {drivingRestrictionHeadrData.map((item, index) => (
        <CommonHeader
          key={index}
          backgroundImage={item.bgImg}
          heading={item.heading}
          spanHeading={item.spanHeading}
          para={item.para}
        />
      ))}
    </div>
  );
}

export default Header;
