import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MyPayment from "@/components/profile/payment/MyPayment";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <MyPayment />
      </DashboardLayout>
    </>
  );
}

export default page;
