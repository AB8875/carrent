import DashboardLayout from "@/components/dashbord/DashboardLayout";
import CarDetailsToFeatures from "@/components/profile/my-car/CarDetailsToFeatures";
import CarImg from "@/components/profile/my-car/CarImg";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <div className="max-lg:px-5">
          <CarImg />
          <CarDetailsToFeatures />
        </div>
      </DashboardLayout>
    </>
  );
}

export default page;
