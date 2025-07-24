"use client";
import { riseAnIssueIssueCategry } from "@/components/common/helper/ProfileHelper";
import {
  CheckedIcon,
  UncheckedIcon,
} from "@/components/common/icon/ProfileIcon";
import React, { useState } from "react";

function IssueCategory() {
  const [selectedIssueOption, setSelectedIssueOption] = useState("");

  return (
    <>
      <div>
        <p className="mb-6 text-base font-semibold sm:text-lg md:text-xl">
          Issue Category
        </p>
        <div className="space-y-3.5">
          {riseAnIssueIssueCategry.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIssueOption(item.option)}
              className="flex cursor-pointer items-center gap-3.5"
            >
              {selectedIssueOption === item.option ? (
                <CheckedIcon />
              ) : (
                <UncheckedIcon />
              )}
              <p className="text-gray text-xs font-semibold md:text-sm lg:text-base">
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

export default IssueCategory;
