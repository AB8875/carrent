import CarFeaturesTab from "@/components/common/CarFeaturesTab";
import ContactInformation from "@/components/common/ContactInformation";
import ListExperience from "@/components/pages/partner/common/ListExperience";
import UploadCars from "@/components/pages/partner/common/UploadCars";
import CarDetails from "@/components/pages/partner/upload-cars/CarDetails";
// import CarDetails from "@/components/pages/partner/upload-cars/CarDetails";
import Hero from "@/components/pages/partner/upload-cars/Hero";

import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <CarDetails />
      <CarFeaturesTab />
      <UploadCars />
      <ListExperience />
      <ContactInformation />
    </div>
  );
}

export default page;
