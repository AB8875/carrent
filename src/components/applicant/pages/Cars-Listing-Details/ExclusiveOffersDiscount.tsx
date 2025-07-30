import SubHeading from "@/components/common/SubHeading";
import React from "react";
import CommonExclusiveOffersDiscount from "../../commen/CommonExclusiveOffersDiscount";
import { exclusiveOffersCardData } from "@/components/helper/user/Helper";

function ExclusiveOffersDiscount() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
      <SubHeading
        title="Exclusive Offers & Discounts For You"
        className="!text-[30px] xl:!text-[40px]"
      />
      <div className="mt-10 lg:mt-[63px]">
        {exclusiveOffersCardData.map((item, index) => (
          <CommonExclusiveOffersDiscount
            key={index}
            details={item}
            className={`${index === 1 ? "flex-col lg:flex-row-reverse" : ""} ${
              index === 0 ? "!ms-0 !mt-0" : ""
            } ${index === 2 ? "!ms-0" : ""} ${
              index === 3 ? "flex-col lg:flex-row-reverse" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ExclusiveOffersDiscount;
