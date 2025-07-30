"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { usePathname } from "next/navigation";
import { notificationsSwitch } from "../helper/ProfileHelper";
import api from "@/utils/axiosInstance"; // ✅ your axios instance
import { useSession } from "next-auth/react"; // ✅ if using NextAuth

function ProfilePic() {
  const pathname = usePathname();
  const { data: session } = useSession(); // ✅ fetch token if needed

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fullName, setFullName] = useState("John Deo");
  const [role, setRole] = useState("Car Dealer");
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //local preview
      const localUrl = URL.createObjectURL(file);
      setImageUrl(localUrl);
    }
    //upload to backend
    try {
      const formData = new FormData();
      if (file) {
        formData.append("profilePic", file);
      }

      const res = await api.patch("/auth/profile/picture", formData, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedUrl = res.data?.data?.profilePic; // adjust based on your backend response
      if (updatedUrl) {
        setProfilePic(updatedUrl); // update for persistence
      }
    } catch (err) {
      console.error("Failed to upload profile picture ❌", err);
      alert("Something went wrong while uploading the picture");
    }
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        });
        const data = res.data.data;
        const fullName = `${data.firstName || ""} ${
          data.lastName || ""
        }`.trim();
        setFullName(fullName || "John Deo");
        setRole(data.role || "Car Dealer");
        setProfilePic(data.profilePic || null);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    if (session?.user?.token) {
      fetchProfile();
    }
  }, [session]);

  return (
    <div className="profile-pic fixed flex max-h-[calc(100vh-165px)] min-h-[calc(100vh-165px)] max-w-[381px] flex-col overflow-hidden rounded-[20px] border border-[#d9d9d9] bg-[#F9F9F9] pt-10 text-center max-xl:hidden">
      <div
        className={`sticky top-0 z-[99] bg-[#f9f9f9] ${
          pathname === "/partner/dashboard/notification"
            ? "max-[1500px]:px-14 min-[1500px]:px-20"
            : "max-[1440px]:px-14 min-[1440px]:px-20"
        } `}
      >
        <div>
          <div
            className={`h-[150px] w-[150px] overflow-hidden rounded-full ${
              pathname === "/partner/dashboard/notification"
                ? "min-[1500px]:h-[216px] min-[1500px]:w-[216px]"
                : "min-[1440px]:h-[216px] min-[1440px]:w-[216px]"
            }`}
          >
            {!!profilePic && (
              <Image
                className="mb-[26px] h-full max-h-[216px] w-full max-w-[216px] object-cover"
                src={profilePic}
                alt="profile-pic"
                width={216}
                height={216}
              />
            )}
          </div>
          <Label className="mt-4 cursor-pointer text-center text-base font-medium text-[#F9B701] max-[1440px]:ml-5 min-[1440px]:ml-[52px]">
            Update Picture
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </Label>

          {/* Dynamic name and role */}
          <h3 className="mt-2 mb-1 text-2xl font-semibold text-[#0A1C2A]">
            {fullName}
          </h3>
          <p className="text-black/70">{role}</p>
        </div>
      </div>

      {/* Notification switches */}
      {pathname.includes("/dashboard/notification") && (
        <div className="mt-1 flex h-full flex-col overflow-hidden">
          <div className="sticky top-0 z-10 bg-[#f9f9f9]">
            <h3 className="text-gray w-full border-b border-black/70 p-4 text-start text-xl font-medium">
              Notifications
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto px-3.5 pb-10">
            <div className="mt-[30px] flex flex-col gap-5">
              {notificationsSwitch.map((item, index) => (
                <label key={index} className="w-full cursor-pointer">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-gray text-base font-medium">
                      {item.title}
                    </p>
                    <Switch className="cursor-pointer" />
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePic;
