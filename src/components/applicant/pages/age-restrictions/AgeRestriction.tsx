import React from "react";
import AboutUsCommonSection from "../../commen/AboutUsCommonSection";
import { ageRestrictionData } from "@/components/helper/user/Helper";

function AgeRestriction() {
  return (
    <div>
      {ageRestrictionData.map((item, index) => (
        <AboutUsCommonSection
          key={index}
          upper={item.upper}
          bottom={item.bottom}
        />
      ))}
    </div>
  );
}

export default AgeRestriction;
