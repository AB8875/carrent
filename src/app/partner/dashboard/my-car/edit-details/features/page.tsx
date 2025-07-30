import DashboardLayout from "@/components/dashbord/DashboardLayout";
import EditDetails from "@/components/profile/my-car/edit-details/EditDetails";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <EditDetails />
      </DashboardLayout>
    </>
  );
}

export default page;
