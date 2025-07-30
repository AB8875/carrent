import React from "react";
import PerfectRideSection from "./PerfectRide";
import { RecentlyViewedSectionData } from "@/components/helper/user/Helper";

function RecentlyViewed() {
  return (
    <div className="py-10 pt-8 md:pb-[60px] lg:pt-[60px] lg:pb-24 xl:pt-[100px] xl:pb-[155px]">
      {RecentlyViewedSectionData.map((item, index) => (
        <PerfectRideSection
          key={index}
          title={item.title}
          map={item.RecentlyViewedCardData}
        />
      ))}
    </div>
  );
}

export default RecentlyViewed;
