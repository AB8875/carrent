import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DocumentDetailsVerification from "@/components/profile/documents-vefification/DocumentDetailsVerification";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <DocumentDetailsVerification />
      </DashboardLayout>
    </>
  );
}

export default page;
