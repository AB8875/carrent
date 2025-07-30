import React from "react";
import Para from "@/components/common/Para";
interface IPROPS {
  cardTitle?: string;
  datetype?: string;
  timeType?: string;
}

const PickDropCardData: React.FC<IPROPS> = ({
  cardTitle,
  datetype,
  timeType,
}) => {
  return (
    <div className="!text-secondary border-gray w-full rounded border px-2.5 py-[2.5px] sm:py-2.5 lg:w-[33%] lg:px-[15px] lg:py-[15px]">
      <Para title={cardTitle || ""} classNmae="!text-base !text-secondary" />
      <div className="flex justify-between font-semibold lg:mt-[5px]">
        <div className="flex">
          <input type={datetype} />
        </div>
        <input type={timeType} />
      </div>
    </div>
  );
};

export default PickDropCardData;
