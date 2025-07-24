import React, { FC } from "react";
interface HeroProops {
  title?: string;
}
const Hero: FC<HeroProops> = ({ title }) => {
  return <div> {title || "my name "}</div>;
};

export default Hero;
