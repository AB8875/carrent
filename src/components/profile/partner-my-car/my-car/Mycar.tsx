"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import axios from "axios";

import Card from "./Card";
import { LeftArrowIcon } from "@/components/helper/user/Icon";
import { log } from "console";

function Mycar() {
  const [myCarsDashBoard, setMyCarsDashBoard] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Total pages based on fetched data
  const totalPages = Math.ceil(myCarsDashBoard.length / itemsPerPage);

  // Fetch cars from API with token
  useEffect(() => {
    const fetchMyCars = async () => {
      try {
        const session = await getSession();
        // const token = session?.user?.accessToken;
        const token = session?.user?.token;

        if (!token) {
          console.error("❌ No token found");
          return;
        }
        console.log("Session token", token);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/api/car/my-cars`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API response", response.data);

        setMyCarsDashBoard(response.data?.data || []);
      } catch (error) {
        console.error("🚫 Error fetching my cars:", error);
      }
    };

    fetchMyCars();
  }, []);

  // Pagination logic
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCars = myCarsDashBoard.slice(startIndex, endIndex);

  return (
    <div className="lg:bg-light-white mb-2.5 h-full w-full overflow-hidden border-[#d9d9d9] sm:mr-4 lg:mr-[30px] lg:rounded-[20px] lg:border">
      <div className="sticky top-0 z-[99] flex items-center justify-between gap-5 rounded-md px-5 max-lg:mx-3 lg:bg-[#f9f9f9]">
        <h1 className="text-gray py-[30px] text-lg font-semibold sm:text-xl lg:text-2xl">
          My Cars
        </h1>
        <Link
          href={"/partner/dashboard/my-car/add-car"}
          className="text-primary bg-gray rounded-md px-4 py-2 text-sm font-semibold sm:text-base md:px-5 md:text-lg lg:px-6 lg:py-3 lg:text-xl"
        >
          Add Car
        </Link>
      </div>

      <div className="max-h-[calc(100vh-160px)] min-h-[calc(100vh-160px)] overflow-y-auto px-5 pb-40">
        <div className="flex flex-col gap-10">
          {paginatedCars.length > 0 ? (
            paginatedCars.map((item, index) => {
              // Convert features object to array (if needed)
              const transformedFeatures = Object.entries(
                item.features || {}
              ).flatMap(([category, features]) =>
                Array.isArray(features)
                  ? features.map((feature: string) => `${category}: ${feature}`)
                  : []
              );

              const modifiedItem = {
                ...item,
                features: transformedFeatures, // Overwrite with array format
              };

              return <Card key={item._id} details={modifiedItem} />;
            })
          ) : (
            <p className="text-center text-gray-500">No cars listed yet.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2 pb-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border-gray flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
            >
              <LeftArrowIcon className="h-[26px] w-[10px]" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`h-[26px] w-[26px] rounded-full text-[17px] text-white ${
                  currentPage === i + 1 ? "bg-gray" : "bg-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border-gray flex h-[26px] w-[26px] items-center justify-center rounded-full border disabled:opacity-50"
            >
              <LeftArrowIcon className="h-[26px] w-[10px] -rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mycar;
