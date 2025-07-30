import React from "react";
import Para from "./Para";

function HeroPickOnCard() {
  return (
    <article className="w-full">
      <div className="!text-secondary border-gray h-full w-full rounded border px-2.5 py-[2.5px] sm:py-2.5 lg:px-[15px] lg:py-[15px]">
        <Para title={"Pickup On"} classNmae="!text-base !text-secondary" />
        <div className="min-[1080px]:flex-nowrp flex flex-wrap justify-between font-semibold lg:mt-[5px]">
          <div className="flex">
            <input type="date" placeholder="12/12/12" />
          </div>
          <input type="time" />
        </div>
      </div>
    </article>
  );
}

export default HeroPickOnCard;
