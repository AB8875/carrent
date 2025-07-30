import CountUp from "./CountUp";
import Heading from "../Heading";
import AboutDesc from "./AboutDesc";

function Hero() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-101px)] items-center justify-center bg-[url('/assets/png/about-us-hero-bg.png')] bg-cover bg-center py-24">
        <Heading title="About" spanTitle="That sit" />
      </div>

      <div className="-mt-14 sm:-mt-18 md:-mt-20 lg:mt-[-92px]">
        <AboutDesc
          title1={<CountUp end={50} />}
          para1="Car Brands"
          title2={<CountUp end={10} />}
          para2="Partners"
          title3={<CountUp end={4.0} duration={1000} decimal={true} />}
          para3="Average Rating"
          title4={<CountUp end={60} />}
          para4="Car Listing"
        />
      </div>
    </>
  );
}

export default Hero;
