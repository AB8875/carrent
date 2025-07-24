"use client";
import React, { useState } from "react";
import ImageUploadBox from "./ImageUploadBox";

function UploadImage() {
  const [showUploadSection, setShowUploadSection] = useState(false);

  const handleShowUpload = () => {
    setShowUploadSection(true);
  };

  return (
    <div className="mt-10 mb-[60px]">
      {!showUploadSection && (
        <div className="flex justify-end">
          <button
            onClick={handleShowUpload}
            className="bg-gray text-primary border-gray hover:text-gray cursor-pointer rounded-md border px-6 py-3.5 text-xl font-semibold duration-200 hover:bg-transparent"
          >
            Upload Photos
          </button>
        </div>
      )}

      {/*  image upload section */}
      {showUploadSection && (
        <div>
          <p className="text-gray/70 mb-3.5 text-sm">
            Upload images of any damage
          </p>
          <div className="flex flex-wrap justify-around gap-5">
            <ImageUploadBox label="" />
            <ImageUploadBox label="" />
            <ImageUploadBox label="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadImage;
