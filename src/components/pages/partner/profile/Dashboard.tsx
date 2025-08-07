import Heading from "@/components/common/Heading";
import React from "react";
import MagerMentCard from "../common/MagerMentCard";

function Dashboard() {
  return (
    <div className="bg-light-white h-full rounded-[21px] border-[1.056px] border-[#D9D9D9] px-[30px] py-12">
      <Heading title="Dashboard" className="!text-gray !text-[25px]" />
      <div>
        <MagerMentCard />
      </div>
    </div>
  );
}

export default Dashboard;
