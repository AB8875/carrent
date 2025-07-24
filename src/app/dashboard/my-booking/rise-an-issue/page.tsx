import DashboardLayout from "@/components/dashboard/DashboardLayout";
import RiseAnIssue from "@/components/profile/Booking/rise-an-issue/RiseAnIssue";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <RiseAnIssue />
      </DashboardLayout>
    </>
  );
}

export default page;
