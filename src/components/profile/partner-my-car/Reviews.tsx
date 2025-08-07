"use client";
import CustomerReviewCard from "@/components/common/CustomerReviewCard";
import { reviewMyCarData } from "@/components/helper/user/Helper";

import React, { useEffect, useState } from "react";

function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const [isThreeColLayout, setIsThreeColLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1600;
      setIsThreeColLayout(isLargeScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleReviews = () => {
    if (showAll) return reviewMyCarData;
    if (isThreeColLayout) return reviewMyCarData.slice(0, 3);
    return reviewMyCarData.slice(0, 4);
  };

  return (
    <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
      <h1 className="border-primary inline-block border-b-[2px] text-2xl leading-[144%] font-semibold min-[1536px]:text-[40px] sm:text-3xl lg:text-[34px] 2xl:text-4xl">
        Testimonials & Reviews
      </h1>

      {/* card section */}
      <div className="mt-[30px] grid gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1 min-[1024px]:grid-cols-2 min-[1600px]:grid-cols-3 sm:mt-10 md:mt-12">
        {getVisibleReviews().map((item, index) => (
          <CustomerReviewCard
            className="bg-white"
            key={index}
            customerName={item.customerName}
            customerImg={item.customerImg}
            cutomerReview={item.customerReviewPara}
            ratingData={item.ratingData}
          />
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <button
            className="bg-primary text-gray px-6 py-3 text-lg font-semibold"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Reviews;
