import Para from "@/components/common/Para";
import SubHeading from "@/components/common/SubHeading";
import React from "react";

function Map() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 text-center sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <SubHeading title="Find Us On Google Maps" className="mx-auto mb-4" />
      <Para
        classNmae="!text-gray dark:!text-white max-w-[950px] mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        title="Come visit us at [Address]! Whether you're picking up your list or need assistance, we’re here to help. The map below will guide you right to our door, and we can’t wait to meet you."
      />
    </div>
  );
}

export default Map;
