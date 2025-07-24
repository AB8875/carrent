import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MyActivityTabs from "@/components/profile/my-activity/MyActivityTabs";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <MyActivityTabs />
      </DashboardLayout>
    </>
  );
}

export default page;
