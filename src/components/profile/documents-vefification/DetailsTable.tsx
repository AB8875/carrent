import { documentVerificationData } from "@/components/helper/user/Helper";
import React from "react";

function DetailsTable() {
  return (
    <div className="scroll-w-none mt-5 overflow-scroll lg:mt-[20px]">
      {documentVerificationData.map((item, index) => (
        <table
          key={index}
          className="w-full min-w-[300px] border-separate border-spacing-0 overflow-hidden rounded-md border text-left text-sm lg:rounded-[21px]"
        >
          <thead className="border border-gray-700">
            <tr>
              {item.thData.map((items, indexs) => (
                <th
                  key={indexs}
                  className={`border-r border-b border-gray-700 px-1.5 py-3 md:px-2 lg:ps-5 lg:pt-5 lg:pb-6 ${
                    indexs === 0 ? "w-[20%]" : ""
                  } ${indexs === 1 ? "w-[25%]" : ""}`}
                >
                  {items.item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border border-gray-700">
            {item.tBodyRow.map((itm, idx) => (
              <tr key={idx}>
                {itm.td.map((itemss, indexss) => (
                  <td
                    key={indexss}
                    className="border-r border-gray-700 px-1.5 py-3 md:px-2 lg:ps-5 lg:pt-3 lg:pb-[25px]"
                  >
                    {itemss.item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default DetailsTable;
