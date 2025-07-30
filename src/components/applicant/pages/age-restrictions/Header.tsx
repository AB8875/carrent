import React from "react";
import CommonHeader from "../../commen/CommonHeader";
import { ageRestrictionHeadrData } from "@/components/helper/user/Helper";

function Header() {
  return (
    <>
      {ageRestrictionHeadrData.map((item, index) => (
        <CommonHeader
          key={index}
          backgroundImage={item.bgImg}
          heading={item.heading}
          spanHeading={item.spanHeading}
          para={item.para}
        />
      ))}
    </>
  );
}

export default Header;
