"use client";

import SubHeading from "@/components/common/SubHeading";
import { uploadImgData } from "@/components/helper/partner/Helper";
import { PhotoIcon2 } from "@/components/helper/partner/Icon";
import Image from "next/image";
import React, { useState } from "react";
import { file } from "zod";
interface UploadCarsProps {
  uploadedPhotos: string[];
  setUploadedPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  carId: string;
}

function UploadCars({
  uploadedPhotos,
  setUploadedPhotos,
  carId: carIdentifier,
}: UploadCarsProps) {
  const [mainImages, setMainImages] = useState<File[]>([]);
  const [mainImagePreviews, setMainImagePreviews] = useState<string[]>([]);

  const [smallImages, setSmallImages] = useState<(File | null)[]>(
    Array(uploadImgData.length).fill(null)
  );
  const [smallImagePreviews, setSmallImagePreviews] = useState<
    (string | null)[]
  >(Array(uploadImgData.length).fill(null));

  const handleMainImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles: File[] = [];
    const previews: string[] = [];

    for (let i = 0; i < files.length && i < 5; i++) {
      selectedFiles.push(files[i]);
      previews.push(URL.createObjectURL(files[i]));
    }

    setMainImages((prev) => [...prev, ...selectedFiles]);
    setMainImagePreviews((prev) => [...prev, ...previews]);
  };

  const handleSmallImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const updatedFiles = [...smallImages];
    const updatedPreviews = [...smallImagePreviews];

    updatedFiles[index] = file;
    updatedPreviews[index] = URL.createObjectURL(file);

    setSmallImages(updatedFiles);
    setSmallImagePreviews(updatedPreviews);
  };

  const handleSubmit = async () => {
    console.log("uploading img");
    const formData = new FormData();

    mainImages.forEach((file) => {
      formData.append("photos", file);
    });

    smallImages.forEach((file) => {
      if (file) formData.append("photos", file);
    });

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/car/upload-images`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Image upload failed");

      const data = await res.json();
      setUploadedPhotos(data.data);
    } catch (error) {
      console.error("Error uploading images", error);
    }
  };

  const isUploadValid = true;
  // mainImages.length + smallImages.filter((img) => img !== null).length >= 5;

  return (
    <div className="mx-auto mt-[60px] max-w-[1720px] md:mb-24 xl:mb-[155px]">
      <SubHeading
        className="mx-auto mb-10 md:mb-14 lg:mb-[60px]"
        title="Upload Photos & Videos"
      />
      {/* Small Images Grid */}
      <div className="mt-3 grid grid-cols-2 justify-center gap-2 sm:mt-5 sm:gap-4 md:mt-7 md:gap-5 lg:gap-7 xl:grid-cols-4">
        {uploadImgData.map((item, index) => (
          <div
            className={`-z-[] mx-auto flex h-[150px] w-full max-w-[385px] items-center justify-center rounded-md bg-sky-600 text-center sm:h-[210px] md:rounded-[20px] lg:h-[250px] xl:h-[280px] 2xl:h-[340px] ${
              index === 0 ? "col-span-2 max-w-full xl:col-span-4" : ""
            }`}
            key={index}
          >
            <div className="inputWrapper relative mx-auto cursor-pointer justify-center overflow-hidden">
              <input
                className="fileInput absolute top-0 right-0 z-[9] h-full w-full cursor-pointer opacity-0"
                type="file"
                accept="image/*"
                onChange={(e) => handleSmallImageUpload(e, index)}
              />
              {smallImagePreviews[index] ? (
                <div className="h-full w-full">
                  <Image
                    src={smallImagePreviews[index] as string}
                    alt="Uploaded"
                    width={385}
                    height={340}
                    className="mx-auto h-full max-h-[340px] object-cover"
                  />
                </div>
              ) : (
                <span className="flex justify-center">{item.icon}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Main Image Upload Area */}
      <div className="inputWrapper -z-[] relative mx-auto mt-2 cursor-pointer justify-center overflow-hidden sm:mt-4 md:mt-5 lg:mt-7">
        <div className="rounded bg-sky-600 md:rounded-[10px] lg:rounded-[20px]">
          <div className="mx-auto flex h-[150px] flex-col justify-center text-center sm:h-[200px] md:h-[360px] lg:h-[400px] xl:h-[450px] 2xl:h-[520px]">
            <input
              className="fileInput absolute top-0 right-0 z-[9] h-full w-full cursor-pointer opacity-0"
              type="file"
              accept="image/*"
              multiple
              onChange={handleMainImagesUpload}
            />
            <div className="flex flex-wrap justify-center gap-3">
              {mainImagePreviews.length > 0 ? (
                mainImagePreviews.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={1620}
                    height={518}
                    alt={`Main ${index + 1}`}
                    className="h-16 w-16 rounded-md object-cover sm:h-24 sm:w-32 md:h-32"
                  />
                ))
              ) : (
                <div className="flex flex-col justify-center text-center">
                  <span className="mx-auto">
                    <PhotoIcon2 />
                  </span>
                  <h2 className="text-gray text-3 text-base leading-[144%] font-normal sm:mt-5 sm:text-xl md:mt-8 md:text-3xl lg:mt-10 lg:text-[36px]">
                    Drag and Drop here
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}

      <div
        className={`mt-10 flex items-center gap-5 md:gap-[30px] ${
          !isUploadValid ? "" : ""
        }`}
      >
        <button
          className="text-primary bg-gray rounded-md px-4 py-2 text-sm font-semibold sm:px-5 sm:text-base md:px-6 md:py-3 md:text-xl"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="text-gray hover:bg-gray border-gray hover:text-primary rounded-md border px-4 py-2 text-sm font-semibold duration-200 sm:px-5 sm:text-base md:px-6 md:py-3 md:text-xl"
          type="button"
          onClick={() => {
            setMainImages([]);
            setMainImagePreviews([]);
            setSmallImages(Array(uploadImgData.length).fill(null));
            setSmallImagePreviews(Array(uploadImgData.length).fill(null));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UploadCars;
