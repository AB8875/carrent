import React from "react";
import Para from "./Para";

function HeroDropOnCard() {
  return (
    <article className="w-full">
      <div className="!text-secondary border-gray sm:py-2. h-full w-full rounded border px-2.5 py-[2.5px] lg:px-[15px] lg:py-[15px]">
        <Para title={"Drop Off"} classNmae="!text-base !text-secondary" />
        <div className="min-[1080px]:flex-nowrp flex flex-wrap justify-between font-semibold lg:mt-[5px]">
          <div className="flex">
            <input type="date" />
          </div>
          <input type="time" />
        </div>
      </div>
    </article>
  );
}

export default HeroDropOnCard;
