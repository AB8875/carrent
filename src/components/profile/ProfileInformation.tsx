"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ProfileSetting from "./ProfileSetting";
import PasswordSettings from "./PasswordSettings";
import AccountSettings from "./AccountSettings";
import AddAccounModal from "./AddAccounModal";
import api from "@/utils/axiosInstance";
import TabLayout from "../common/TabLayout";
import { passwordSettings, profileSettingData } from "../helper/ProfileHelper";

interface FormValues {
  [key: string]: string;
}

function ProfileInformation() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>(() => {
    const initialValues: FormValues = {
      bio: "Hi, I’m John Walley, and I’ve been passionate about cars...",
    };

    profileSettingData.forEach((item) => {
      if (item.id) {
        initialValues[item.id] = item.defaultValue || "";
      }
    });

    passwordSettings.forEach((item) => {
      if (item.id) {
        initialValues[item.id] = item.defaultValue || "";
      }
    });

    return initialValues;
  });
  const { data: session } = useSession();

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const closeModal = () => setIsModalOpen(false);
  const handleEditSaveClick = async () => {
    if (!isEditable) {
      // If not editable yet, switch to edit mode only
      setIsEditable(true);
      return;
    }

    // Otherwise, handle saving
    try {
      await api.put("/auth/profile", {
        firstName: formValues["firstName"],
        lastName: formValues["lastName"],
        email: formValues["email"],
        address: formValues["address"],
        phoneNumber: formValues["phNumber"],
        location: formValues["location"],
        bio: formValues["bio"],
      });

      if (
        formValues.oldPassword &&
        formValues.newPassword &&
        formValues.confirmPassword === formValues.newPassword
      ) {
        await api.patch("/auth/profile/password", {
          currentPassword: formValues.oldPassword,
          newPassword: formValues.newPassword,
          confirmNewPassword: formValues.confirmPassword,
        });
      }

      alert("Profile updated successfully ✅");
      setIsEditable(false); // Disable edit mode after saving
      setIsChangingPassword(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Something went wrong while saving profile ❌");
    }

    setFormValues((prev) => ({
      ...prev,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const [userData, setUserdata] = useState({});

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        });
        console.log("🔐 Session token:", session?.user?.token);

        setUserdata(res?.data?.data);
        setFormValues((prev) => ({
          ...prev,
          email: res?.data?.data?.email,
          firstName: res?.data?.data?.firstName,
          lastName: res?.data?.data?.lastName,
          bio: res?.data?.data?.bio,
          address: res?.data?.data?.address,
          phNumber: res?.data?.data?.phoneNumber,
          location: res?.data?.data?.location,
        }));
        console.log("🔐 Session token:", session?.user?.token);
      } catch (error) {
        alert("Something went wrong while fetching profile data ❌");
      }
    }

    if (session?.user?.token) {
      getProfile();
    }
  }, [session]);

  return (
    <div className="relative mb-2.5 flex h-full w-full flex-col overflow-hidden rounded-[20px] sm:mr-4 lg:mr-[30px] lg:border lg:border-[#d9d9d9] lg:bg-[#f9f9f9]">
      {/* Header */}
      <div className="sticky top-0 flex shrink-0 items-center justify-between gap-5 px-5 pt-5 pb-4 lg:px-[30px] lg:pt-[30px] lg:pb-6">
        <h2 className="text-gray text-xl font-semibold lg:text-2xl">
          Profile Information
        </h2>

        {activeTab === "account" ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-primary hover:bg-primary hover:text-gray text:lg cursor-pointer rounded-sm bg-[#0B1D29] px-5 py-2.5 font-medium duration-200 lg:px-[26px] lg:py-3.5 lg:text-xl"
          >
            Add Account
          </button>
        ) : (
          (activeTab === "profile" || activeTab === "password") && (
            <button
              onClick={handleEditSaveClick}
              className="text-primary hover:bg-primary hover:text-gray textlg cursor-pointer rounded-sm bg-[#0B1D29] px-5 py-2.5 font-medium duration-200 lg:px-[26px] lg:py-3.5 lg:text-xl"
            >
              {isEditable ? "Save" : "Edit"}
            </button>
          )
        )}
      </div>

      {/* Tabs */}
      <div className="flex grow flex-col overflow-hidden">
        <TabLayout
          tabClass="flex flex-col w-full h-full"
          defaultValue="profile"
          tablistClass="shrink-0 flex w-full gap-1 lg:gap-3 xl:gap-5 overflow-x-auto max-sm:whitespace-nowrap max-lg:scrollbar-hide max-sm:px-2 scrollbar-hide -mb-2 z-[9]"
          tabsTriggerClass="flex-shrink-0 data-[state=active]:before:bg-primary mb-1.5 data-[state=active]:after:bg-primary relative  cursor-pointer border-b-[3px] mx-1 border-transparent px-5 xl:px-[34px] pb-[14px] data-[state=active]:border-yellow-400 data-[state=active]:before:absolute data-[state=active]:before:right-0 data-[state=active]:before:-bottom-2 data-[state=active]:before:rounded-full data-[state=active]:before:p-2 data-[state=active]:after:absolute data-[state=active]:after:-bottom-2 data-[state=active]:after:left-0 data-[state=active]:after:rounded-full data-[state=active]:after:p-2 "
          tabtrigger={[
            { name: "Profile Settings", value: "profile" },
            { name: "Password Settings", value: "password" },
            { name: "Account Settings", value: "account" },
          ]}
          tabsContent={[
            {
              value: "profile",
              Content: (
                <ProfileSetting
                  isEditable={isEditable}
                  formValues={formValues}
                  setFormValues={setFormValues}
                />
              ),
            },
            {
              value: "password",
              Content: (
                <PasswordSettings
                  isEditable={isEditable}
                  isChangingPassword={isChangingPassword}
                  setIsChangingPassword={setIsChangingPassword}
                  formValues={formValues}
                  setFormValues={setFormValues}
                />
              ),
            },
            {
              value: "account",
              Content: <AccountSettings />,
            },
          ]}
          contentClass="overflow-y-auto grow px-4 pb-10"
          onTabChange={setActiveTab}
        />
      </div>

      {/* Modal */}
      {isModalOpen && <AddAccounModal closeModal={closeModal} />}
    </div>
  );
}

export default ProfileInformation;
