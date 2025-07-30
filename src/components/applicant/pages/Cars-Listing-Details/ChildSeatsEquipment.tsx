import BlackBtn from "@/components/common/BlackBtn";

import SubHeading from "@/components/common/SubHeading";
import SubPara from "@/components/common/SubPara";
import { childSeatsEquipmentData } from "@/components/helper/user/Helper";
import React from "react";

function ChildSeatsEquipment() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 pb-[60px] sm:px-6 md:block md:px-8 lg:px-10 lg:pb-24 xl:pb-[144px]">
      <SubHeading
        title="Child Seats and Equipment for a Comfortable Ride :"
        className="!xl:text-[40px] !text-[30px]"
      />
      <SubPara
        title="We understand that traveling with children requires extra care and safety. To make your journey as comfortable and safe as possible, we offer a range of child seats and equipment that can be added to your car rental."
        className="mt-[15px] !text-xl md:mt-6 lg:mt-8 xl:mt-12"
      />
      <div className="mt-10">
        <SubHeading
          title="Available Child Seats & Equipment:"
          className="!border-none !text-xl lg:!text-[28px]"
        />
      </div>
      <ul className="list-decimal ps-4 md:ps-6 lg:mt-[30px] lg:ps-8 xl:ps-10">
        {childSeatsEquipmentData.map((item, index) => (
          <li key={index} className="mt-[30px] xl:mt-[30px]">
            <SubHeading
              title={item.listHeading}
              className="!border-none !text-base !font-medium lg:!text-xl"
            />
            <ul className="mt-2.5 flex list-disc flex-col gap-2.5 ps-4 md:ps-8 lg:mt-[15px] lg:gap-[22px] lg:ps-8 xl:ps-[50px]">
              {item.list.map((items, indexs) => (
                <li
                  key={indexs}
                  className="dark:!text-light-white text-sm leading-[144%] text-gray-700 lg:text-base"
                >
                  {items.listItem}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <BlackBtn title="Book Now" className="mt-10 md:w-max" />
    </div>
  );
}

export default ChildSeatsEquipment;
