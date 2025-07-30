import ContactForm from "@/components/common/ContactForm";
import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
import React from "react";

function Header() {
  return (
    <div className="bg-[url('/assets/png/hero-bg-car-img.png')] bg-cover bg-center py-8 pt-[60px] pb-12 lg:h-screen lg:pt-24 xl:pt-[150px]">
      <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center justify-center">
          <Heading
            title="Browse Cars For Rent"
            spanTitle="in Australia"
            className="max-w-[650px] text-center"
          />
          <Para
            title=" Find Your Ideal Vehicle for Exploring Australia’s Beautiful
            Landscapes"
            classNmae="text-center"
          />
        </div>
        <div className="block lg:hidden">
          <ContactForm className="mt-10" />
        </div>
      </div>
    </div>
  );
}

export default Header;
