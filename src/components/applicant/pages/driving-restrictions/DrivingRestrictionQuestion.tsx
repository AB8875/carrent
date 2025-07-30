import React from "react";
import AboutUsCommonSection from "../../commen/AboutUsCommonSection";
import { drivingRestrictionData } from "@/components/helper/user/Helper";

function DrivingRestrictionQuestion() {
  return (
    <div>
      {drivingRestrictionData.map((item, index) => (
        <AboutUsCommonSection
          key={index}
          upper={item.upper}
          bottom={item.bottom}
        />
      ))}
    </div>
  );
}

export default DrivingRestrictionQuestion;
