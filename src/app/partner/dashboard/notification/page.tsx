import DashboardLayout from "@/components/dashboard/DashboardLayout";
import NotificationTab from "@/components/profile/NotificationTab";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <NotificationTab />
      </DashboardLayout>
    </>
  );
}

export default page;
