import React from "react";
import AboutUsCommonSection from "../../commen/AboutUsCommonSection";
import { beforeBookingData } from "@/components/helper/user/Helper";

function BeforeBookingQuestion() {
  return (
    <div>
      {beforeBookingData.map((item, index) => (
        <AboutUsCommonSection
          key={index}
          upper={item.upper}
          bottom={item.bottom}
        />
      ))}
    </div>
  );
}

export default BeforeBookingQuestion;
