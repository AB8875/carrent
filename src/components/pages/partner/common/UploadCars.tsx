"use client";
import BlackBtn from "@/components/common/BlackBtn";

import SubHeading from "@/components/common/SubHeading";
import { uploadImgData } from "@/components/helper/partner/Helper";
import { PhotoIcon2 } from "@/components/helper/partner/Icon";
import Image from "next/image";
import React, { useState } from "react";

function UploadCars() {
  const [mainImages, setMainImages] = useState<string[]>([]);
  const handleMainImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagesArray: string[] = [];
      for (let i = 0; i < files.length && i < 5; i++) {
        const imageUrl = URL.createObjectURL(files[i]);
        imagesArray.push(imageUrl);
      }
      setMainImages((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  const [smallImages, setSmallImages] = useState<(string | null)[]>(
    Array(uploadImgData.length).fill(null)
  );

  const handleSmallImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...smallImages];
      updatedImages[index] = imageUrl;
      setSmallImages(updatedImages);
    }
  };

  return (
    <div className="mx-auto mb-[60px] max-w-[1720px] px-4 sm:px-6 md:mb-24 md:px-8 lg:px-10 xl:mb-[155px] xl:px-12">
      <SubHeading
        className="mx-auto mb-10 md:mb-14 lg:mb-[60px]"
        title="Upload Photos & Videos"
      />

      <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-5 sm:gap-4 md:mt-7 md:gap-5 lg:gap-7">
        {uploadImgData.map((item, index) => (
          <div
            className={`flex h-[70px] items-center justify-center overflow-hidden rounded-md bg-sky-600 text-center sm:h-[170px] md:h-[210px] md:rounded-[20px] lg:h-[250px] xl:h-[280px] 2xl:h-[340px] ${
              index === 0
                ? "col-span-4 !h-[127px] min-[1530px]:!h-[520px] sm:!h-[300px] md:!h-[360px] lg:!h-[400px]"
                : ""
            }`}
            key={index}
          >
            <div className="inputWrapper relative mx-auto cursor-pointer justify-center">
              <input
                className="fileInput absolute top-0 right-0 z-100 h-full w-full cursor-pointer opacity-0"
                type="file"
                name="file"
                onChange={(e) => handleSmallImageUpload(e, index)}
              />
              {smallImages[index] ? (
                <div className="h-full w-full">
                  <Image
                    src={smallImages[index] as string}
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

      <div className="inputWrapper relative mx-auto mt-2 cursor-pointer justify-center overflow-hidden md:mt-5 lg:mt-7">
        <div className="rounded bg-sky-600 md:rounded-[20px]">
          <div className="mx-auto flex h-auto flex-col justify-center text-center sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[450px] 2xl:h-[520px]">
            <input
              className="fileInput right -0 absolute top-0 z-100 h-full w-full cursor-pointer opacity-0"
              type="file"
              name="file2"
              multiple
              onChange={handleMainImagesUpload}
            />
            <div className="flex flex-wrap justify-center gap-3">
              {mainImages.length > 0 ? (
                mainImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={1620}
                    height={518}
                    alt={`Uploaded ${index + 1}`}
                    className="h-16 w-16 rounded-md object-cover sm:h-24 sm:w-32 md:h-32"
                  />
                ))
              ) : (
                <>
                  <div className="flex flex-col justify-center gap-6 p-5 text-center">
                    <span className="mx-auto">
                      <PhotoIcon2 />
                    </span>
                    <h2 className="text-gray text-3 text-base leading-[144%] font-normal sm:mt-5 sm:text-xl md:mt-8 md:text-3xl lg:mt-10 lg:text-[36px]">
                      Drag and Drop here
                    </h2>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <BlackBtn
          title="Save"
          className="mt-10 !px-16 sm:!w-fit md:mt-14 lg:mt-[60px]"
        />
        <BlackBtn title="Submit" className="l !px-16 sm:!w-fit" />
      </div>
    </div>
  );
}

export default UploadCars;
