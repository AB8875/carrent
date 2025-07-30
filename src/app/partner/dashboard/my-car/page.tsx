// import MyCar from "@/components/common/profile/MyCar";
import DashboardLayout from "@/components/dashbord/DashboardLayout";
import Mycar from "@/components/profile/partner-my-car/my-car/Mycar";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <Mycar />
      </DashboardLayout>
    </>
  );
}

export default page;
