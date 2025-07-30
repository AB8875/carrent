import DashboardLayout from "@/components/dashbord/DashboardLayout";
import ProfileInformation from "@/components/profile/ProfileInformation";
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
