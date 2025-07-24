import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MyBookingStatusTable from "@/components/profile/Booking/MyBookingStatusTable";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <MyBookingStatusTable />
      </DashboardLayout>
    </>
  );
}

export default page;
