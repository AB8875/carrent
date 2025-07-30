import React from "react";
import Para from "./Para";

function HeroPickFromCard() {
  return (
    <article className="border-gray max-w- w-full rounded border px-2.5 py-[2.5px] sm:py-2.5">
      <Para title="Pickup From" classNmae="!text-gray !text-base" />
      <input
        type="text"
        placeholder="Enter Location................"
        className="placeholder:!text-gray mt-[5px] w-full font-semibold !outline-[0px]"
      />
    </article>
  );
}

export default HeroPickFromCard;
