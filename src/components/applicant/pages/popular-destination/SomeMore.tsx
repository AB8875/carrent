import React from "react";
import ExploreOur from "../home/ExploreOur";
import { someMoreDestinationData } from "@/components/helper/user/Helper";

function SomeMore() {
  return (
    <div className="pb-[60px] lg:pb-24 xl:pb-[155px]">
      {someMoreDestinationData.map((item, index) => (
        <ExploreOur
          key={index}
          title="Some More Destinations"
          maps={item.subData}
        />
      ))}
    </div>
  );
}

export default SomeMore;
