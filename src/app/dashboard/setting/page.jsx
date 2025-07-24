import ProfileInformation from "@/components/profile/ProfileInformation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <ProfileInformation />
      </DashboardLayout>
    </>
  );
}

export default page;
