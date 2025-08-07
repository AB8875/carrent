import Map from "@/components/common/Map";
import React from "react";

function CarOnMap() {
  return (
    <>
      <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <h1 className="border-primary inline-block border-b-[2px] text-2xl leading-[144%] font-semibold min-[1536px]:text-[40px] sm:text-3xl lg:text-[34px] 2xl:text-4xl">
          Car On Map :
        </h1>
        <Map className="mt-6 max-lg:!h-[40vh] sm:mt-8 md:mt-10" />
      </div>
    </>
  );
}

export default CarOnMap;
