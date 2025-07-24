import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ExtraCharge from "@/components/profile/Booking/extra-charge/ExtraCharge";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <ExtraCharge />
      </DashboardLayout>
    </>
  );
}

export default page;
