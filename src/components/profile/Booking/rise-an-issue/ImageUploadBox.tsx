"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface ImageUploadBoxProps {
  label?: string;
}

const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({ label }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <p className="text-gray/70 mb-3.5 text-sm">{label}</p>}
      <div
        onClick={handleBoxClick}
        className="border-gray flex h-[232px] min-h-[232px] w-[280px] max-w-[295px] cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border bg-gray-50 object-cover min-[375px]:w-[295px]"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Uploaded preview"
            className="h-full w-full object-contain"
            width={295}
            height={232}
          />
        ) : (
          <div>
            <Image
              src={"/assets/png/upload-img-icon.png"}
              alt="img"
              width={107}
              height={107}
            />
            <span className="text-gray mt-2 text-base font-semibold">
              Upload Image
            </span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploadBox;
