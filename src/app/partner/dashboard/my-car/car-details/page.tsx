import DashboardLayout from "@/components/dashbord/DashboardLayout";
import CarDetails from "@/components/profile/partner-my-car/CarDetails";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <CarDetails />
      </DashboardLayout>
    </>
  );
}

export default page;
