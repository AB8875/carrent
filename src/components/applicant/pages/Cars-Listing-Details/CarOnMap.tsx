"use client";
import SubHeading from "@/components/common/SubHeading";
import dynamic from "next/dynamic";
import React from "react";

function CarOnMap() {
  const LeafletMap = dynamic(() => import("@/components/map/LeafletMap"), {
    ssr: false,
  });
  const carsData = [
    {
      id: "1",
      name: "Toyota Prius",
      lat: 29,
      lng: 75,
      imageUrl: "/assets/png/secure.png",
      logoUrl: "/assets/png/secure.png",
      available: true,
    },
    {
      id: "2",
      name: "Tesla Model 3",
      lat: 29,
      lng: 76,
      imageUrl: "/assets/png/secure.png",
      logoUrl: "/assets/png/secure.png",
      available: true,
    },
  ];
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:block md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]">
      <SubHeading title="Car On Map :" className="text-3xl xl:text-[40px]" />
      <div
        style={{
          cursor:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22><circle cx=%2210%22 cy=%2210%22 r=%225%22 fill=%22black%22/></svg>') 10 10, auto",
        }}
        className="mt-8 sm:mt-10 md:mt-12 lg:mt-15"
      >
        <LeafletMap cars={carsData} />
      </div>
    </div>
  );
}

export default CarOnMap;
