import DashboardLayout from "@/components/dashbord/DashboardLayout";
import ReviewMyCars from "@/components/partner/pages/profile/ReviewMyCars";
// import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <DashboardLayout>
        <div className="relative">
          <ReviewMyCars />
        </div>
      </DashboardLayout>
    </>
  );
}

export default page;
