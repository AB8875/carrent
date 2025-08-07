import { DollarIcon } from "@/components/helper/user/Icon";
import React from "react";

function MagerMentCard() {
  return (
    <div className="flex gap-[15px] bg-white p-[15px]">
      <div className="bg-light-white h-max rounded-full p-[9px]">
        <DollarIcon />
      </div>
      <div>
        <h3>Total Revenue</h3>
        <span>$800</span>
      </div>
    </div>
  );
}

export default MagerMentCard;
