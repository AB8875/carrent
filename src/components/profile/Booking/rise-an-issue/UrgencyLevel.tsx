"use client";
import { urgencyLevelOption } from "@/components/common/helper/ProfileHelper";
import {
  CheckedIcon,
  UncheckedIcon,
} from "@/components/common/icon/ProfileIcon";
import React, { useState } from "react";

function UrgencyLevel() {
  const [selectedUrgencyLevel, setSelectedUrgencyLevel] = useState("");

  return (
    <>
      <div>
        <h3 className="text-gray mb-3.5 text-base font-semibold sm:text-lg md:text-xl">
          Urgency Level :
        </h3>
        <p className="text-gray text-sm sm:text-base">
          Allow the customer to indicate how urgent the issue is. This can help
          prioritize cases for customer support.
        </p>
        <div className="mt-[30px] space-y-3.5">
          {urgencyLevelOption.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedUrgencyLevel(item.option)}
              className="flex cursor-pointer items-center gap-3.5"
            >
              {selectedUrgencyLevel === item.option ? (
                <CheckedIcon />
              ) : (
                <UncheckedIcon />
              )}
              <p className="text-gray text-xs font-semibold sm:text-sm md:text-base">
                <span>{item.option}</span>
                <span className="font-normal">{item.example}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UrgencyLevel;
