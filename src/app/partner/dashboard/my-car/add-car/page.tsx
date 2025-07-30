"use client";
import DashboardLayout from "@/components/dashbord/DashboardLayout";
import CarFeaturesTab from "@/components/profile/partner-my-car/add-car-form/CarFeaturesTab";
import Form from "@/components/profile/partner-my-car/add-car-form/Form";
// UploadCars is removed
import React, { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

function AddCarPage() {
  const [formData, setFormData] = useState({});
  const [features, setFeatures] = useState<string[]>([]);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) return alert("User not logged in");

      const payload = {
        ...formData,
        features,
        userId,
      };

      const res = await axiosInstance.post("/api/car/add-car", payload);
      if (res.data.success) {
        alert("Car added successfully");
        router.push("/partner/dashboard/my-car");
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-5 pb-10 max-lg:px-5">
        <Form formData={formData} setFormData={setFormData} />
        <CarFeaturesTab features={features} setFeatures={setFeatures} />

        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-gray text-primary w-fit cursor-pointer rounded border border-transparent px-3 py-1 text-sm leading-[144%] font-semibold transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-4 sm:text-base md:text-lg lg:px-[25px] lg:py-[13px] lg:text-xl"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AddCarPage;
