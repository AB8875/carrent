import AboutMission from "@/components/common/about/AboutMission";
import AboutVision from "@/components/common/about/AboutVision";
import Hero from "@/components/common/about/Hero";
import OurCore from "@/components/common/OurCore";

import {
  BlubIcon,
  BulbTwoIcon,
  CarIcon,
  CarTwoIcon,
  StarIcon,
  TickBorderIcon,
} from "@/components/helper/partner/Icon";
import About from "@/components/pages/partner/common/About";

import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <About />
      <AboutMission
        missionData={[
          {
            mapClassName:
              "bg-white justify-start 2xl:max-w-[783px] 2xl:pl-24 pt-6 sm:pt-auto",
            svg: <CarIcon />,
            heading: "Empowering Choice",
            para: "We offer thousands of listings, from top global brands to local favorites, so you can find the perfect car that fits your needs, and budget.",
          },
          {
            mapClassName: "bg-primary xl:pl-[120px] dark:bg-primary",
            svg: <BlubIcon />,
            heading: "Trust & Transparency",
            para: "We believe in clear, honest communication. Our platform is designed to give you all the details you need to make an informed decision.",
          },
          {
            mapClassName: "bg-white justify-start 2xl:max-w-[783px] 2xl:pl-24",
            svg: <StarIcon />,
            heading: "Building a Community",
            para: "We’re about creating a trusted community of buyers, sellers, and car enthusiasts who value knowledge, honesty, and reliability.",
          },
        ]}
      />
      <AboutVision
        missionData={[
          {
            mapClassName:
              "bg-white justify-start 2xl:max-w-[783px] 2xl:pr-24 pt-6 sm:pt-auto min-[1440px]:ml-[110px]",
            svg: <CarTwoIcon />,
            heading: "Innovating the Car Buying Experience",
            para: "We envision a future where finding, buying, and selling cars is as simple and enjoyable as any other online shopping experience.",
          },
          {
            mapClassName:
              "bg-primary pr-auto min-[1440px]:!pr-[130px] dark:bg-primary",
            svg: <BulbTwoIcon />,
            heading: "Fostering Sustainable Choices",
            para: "As the automotive industry evolves, we’re committed to supporting the growth of electric vehicles and eco-friendly options",
          },
          {
            mapClassName:
              "bg-white justify-start 2xl:max-w-[783px] 2xl:pr-24 min-[1440px]:ml-[110px]",
            svg: <TickBorderIcon />,
            heading: "Creating a strong community",
            para: "We believe that car buying and selling are more than just transactions — they’re part of a broader journey.",
          },
        ]}
      />
      <div className="min-[1150px]:!mt-0 lg:-mt-40 xl:mb-30">
        <OurCore />
      </div>
    </div>
  );
}

export default page;
