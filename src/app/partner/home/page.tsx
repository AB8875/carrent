import AskQuestion from "@/components/common/AskQuestion";
import CompnyLogo from "@/components/common/BrandLogo";
import ContactInformation from "@/components/common/ContactInformation";
import SpecialOffer from "@/components/common/SpecialOffer";
import React from "react";
import CustomerSaying from "@/components/common/CustomerSaying";
import About from "@/components/pages/partner/common/About";
import ListExperience from "@/components/pages/partner/common/ListExperience";
import RegisterCar from "@/components/pages/partner/home/RegisterCar";
import StepCard from "@/components/pages/partner/home/StepCard";
import Hero from "@/components/pages/partner/home/Hero";

function page() {
  return (
    <>
      <Hero />
      <CompnyLogo />
      <About />
      <RegisterCar />
      <StepCard />
      <SpecialOffer title="Partners!”" />
      <ListExperience />
      <CustomerSaying spaTitle="Partners" />
      <AskQuestion />
      <ContactInformation />
    </>
  );
}

export default page;
