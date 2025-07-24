import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CustomerCare from "@/components/profile/Booking/customer-care/CustomerCare";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <CustomerCare />
      </DashboardLayout>
    </>
  );
}

export default page;
