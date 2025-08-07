"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CarFeaturesTab from "@/components/profile/partner-my-car/add-car-form/CarFeaturesTab";
import Form from "@/components/profile/partner-my-car/add-car-form/Form";
import UploadCars from "@/components/profile/partner-my-car/add-car-form/UploadCars";
import axiosInstance from "@/utils/axiosInstance";

interface CarFormData {
  carNumber?: string;
  brand?: string;
  year?: number;
  carModel?: string;
  carVariants?: string[];
  registrationState?: string;
  odometerReading?: string;
  rentPrice?: string;
  exteriorColorCar?: string;
  interiorColorCar?: string;
  stockId?: string;
  engine?: string;
  horsepower?: string;
  driveType?: string;
  bodyType?: string;
  seats?: number;
  transmission?: string;
  photos?: string[];
  features?: {
    comfort?: string[];
    entertainment?: string[];
    safety?: string[];
    seating?: string[];
  };
  isAvailable?: boolean;
  userId?: string;
}

function AddCarPage() {
  const [formData, setFormData] = useState<CarFormData>({});
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  interface FeatureTypes {
    comfort?: string[];
    entertainment?: string[];
    safety?: string[];
    seating?: string[];
  }

  const [features, setFeatures] = useState<FeatureTypes>({});

  const [carId, setCarId] = useState<string | null>(null);

  const { data: session } = useSession();
  const token = session?.user?.token;
  const userId = session?.user?.id;

  // Store token in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  // Car ID will be updated after car is created
  useEffect(() => {
    const storedId = localStorage.getItem("carId");
    if (storedId) setCarId(storedId);
  }, []);

  const handleSubmit = async () => {
    try {
      if (!userId) {
        alert("User not authenticated.");
        return;
      }

      if (uploadedPhotos.length < 1) {
        alert("Please upload at least one car photo.");
        return;
      }

      const payload: CarFormData = {
        ...formData,
        userId,
        features,
        photos: uploadedPhotos,
      };

      const res = await axiosInstance.post("/api/car/add-car", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

        const createdCarId = res.data?.data?._id;
      if (res.data.success && createdCarId) {
        setCarId(createdCarId);
        localStorage.setItem("carId", createdCarId);
        alert("✅ Car added successfully.");
      } else {
        alert("⚠️ Submission failed.");
      }
    } catch (error) {
      console.error("❌ Error submitting car:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-5 pb-10 max-lg:px-5">
        <Form formData={formData} setFormData={setFormData} />
        <CarFeaturesTab features={features} setFeatures={setFeatures} />
        <UploadCars
          uploadedPhotos={uploadedPhotos}
          setUploadedPhotos={setUploadedPhotos}
          carId={carId || ""}
        />
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
