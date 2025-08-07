"use client";
import React from "react";
import Heading from "@/components/common/Heading";

import dynamic from "next/dynamic";
import Form from "@/components/pages/partner/contact-us/Form";
import Map from "@/components/pages/partner/contact-us/Map";

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
function page() {
  return (
    <div>
      <div className="flex min-h-[calc(100vh-101px)] flex-col items-center justify-center bg-[url('/assets/png/about-us-hero-bg.png')] bg-cover bg-center px-4 py-20 text-center">
        <Heading title="Contact" spanTitle=" Informations" />
        <p className="mt-2 text-base leading-[144%] font-semibold text-white sm:mt-4 sm:text-lg md:text-xl">
          Your Satisfaction is Our Top Priority – Let Us Know How We Can Help
        </p>
      </div>
      <Form />
      <Map />
      <LeafletMap cars={carsData} />
    </div>
  );
}

export default page;
