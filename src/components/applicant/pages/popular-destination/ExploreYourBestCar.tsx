import React from "react";
import PerfectRide from "../home/PerfectRide";
import { exploreYourBestCarBike } from "@/components/helper/user/Helper";

function ExploreYourBestCar() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {exploreYourBestCarBike.map((item, index) => (
        <PerfectRide
          key={index}
          map={item.PerfectRideCardsData}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default ExploreYourBestCar;
