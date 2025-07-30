import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";
import { CornerLineIcon } from "../helper/user/Icon";

interface IPROPS {
  customerImg?: string;
  customerName?: string;
  cutomerReview?: string;
  ratingData?: { icon: string }[];
  className?: string;
}

const CustomerReviewCard: React.FC<IPROPS> = ({
  customerImg,
  customerName,
  cutomerReview,
  ratingData,
  className,
}) => {
  return (
    <article
      className={`bg-light-white relative rounded-[20px] px-4 py-[22px] md:px-5 md:py-[25px] ${className}`}
    >
      <div className="absolute top-[13px] right-[13px] md:top-4 md:right-4">
        <CornerLineIcon />
      </div>
      <div className="flex items-center gap-1.5 md:gap-[15px]">
        <div className="max-w-[59px] md:max-w-[67px]">
          <Image
            src={customerImg || "/"}
            width={67}
            height={67}
            alt="customer image"
          />
        </div>
        <SubHeading
          title={customerName || ""}
          className="dark:!text-gray !border-none !text-xl"
        />
      </div>
      <Para
        classNmae="!text-gray-700 md:mt-5 mt-4"
        title={cutomerReview || ""}
      />
      <div className="mt-[22px] flex md:mt-[25px]">
        {ratingData?.map((items, indexs) => (
          <Image
            key={indexs}
            src={items.icon}
            width={21}
            height={21}
            alt="star icon"
          />
        ))}
      </div>
    </article>
  );
};

export default CustomerReviewCard;
