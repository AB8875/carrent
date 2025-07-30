import SubHeading from "@/components/common/SubHeading";
import React from "react";
// import PerfectRideSliderCard from "../../commen/PerfectRideSliderCard";

import PerfectRide from "../home/PerfectRide";
import { similarListings } from "@/components/helper/user/Helper";

function SimilarListings() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:px-8 lg:px-10 lg:pb-24 xl:px-12 xl:pb-[155px]">
      <SubHeading title="Similar Listings" />
      <div>
        {similarListings.map((item, index) => (
          <PerfectRide
            key={index}
            map={item.data}
            title=""
            className="!hidden"
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarListings;
