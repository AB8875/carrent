import React from "react";

function Paragraph() {
  return (
    <div className="mx-auto flex h-full max-w-[1720px] flex-col justify-between px-4 pt-10 pb-[60px] sm:px-6 md:px-8 md:pt-[60px] lg:px-10 lg:pt-[80px] lg:pb-24 xl:px-12 xl:pb-[155px]">
      <p className="text-gray dark:!text-light-white max-w-[1500px] text-center text-sm leading-[144%] md:text-base lg:text-xl xl:text-2xl">
        At <span className="text-primary">Carent</span> , we want to make sure
        your car rental experience is as smooth and enjoyable as possible, and
        we have consulted with our car rental experts to provide the answers to
        some of the most common questions about renting cars in Australia. If
        you’re new to hiring a car in Australia, or have any general questions
        about car rental, please see our informative articles below.
      </p>
    </div>
  );
}

export default Paragraph;
