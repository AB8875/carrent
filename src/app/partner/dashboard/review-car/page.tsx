// import Image from "next/image";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ReviewMyCars from "@/components/pages/partner/profile/ReviewMyCars";
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
