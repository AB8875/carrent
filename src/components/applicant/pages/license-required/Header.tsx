import React from "react";
import CommonHeader from "../../commen/CommonHeader";
import { licenseRequiredHeadrData } from "@/components/helper/user/Helper";

function Header() {
  return (
    <div>
      {licenseRequiredHeadrData.map((item, index) => (
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
