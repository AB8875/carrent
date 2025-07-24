"use client";

import { ImageIcon } from "@/components/helper/user/Icon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface DocumentAddCardProps {
  label: string;
  className?: string;
  perentClass?: string;
  onFilesSelect?: (files: { url: string; type: string }[]) => void;
}

const DocumentAddCard: React.FC<DocumentAddCardProps> = ({
  label,
  className,
  perentClass,
  onFilesSelect,
}) => {
  const pathName = usePathname();
  const [files, setFiles] = useState<{ url: string; type: string }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const readers = selectedFiles.map((file) => {
      return new Promise<{ url: string; type: string }>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ url: reader.result as string, type: file.type });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((results) => {
      setFiles(results);
      onFilesSelect?.(results);
    });
  };

  return (
    <div className={`${className} `}>
      <label
        htmlFor={label}
        className={`border-gray dark:!border-light-white relative flex h-[150px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[16px] border-[1.076px] md:h-[200px] lg:h-[231px] lg:rounded-[21px] ${perentClass}`}
      >
        {files.length === 0 ? (
          <div className="flex flex-col items-center">
            <ImageIcon className="max-h-[60px] max-w-[60px] lg:max-h-[109px] lg:max-w-[80px]" />
            <span className="text-gray dark:!text-light-white px-2.5 text-center text-[17px] font-semibold">
              {label}
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-2 overflow-auto p-2">
            {files.map((file, idx) =>
              file.type.includes("image") ? (
                <div key={idx}>
                  <Image
                    src={file.url}
                    width={260}
                    height={100}
                    alt={`document-${idx}`}
                    className="rounded-md object-contain"
                  />
                  <div
                    className={`bg-primary absolute top-3 right-4 h-[30px] w-[30px] rounded-full lg:h-[50px] lg:w-[50px] ${
                      pathName === "/partner/dashboard/my-achivement"
                        ? "hidden"
                        : ""
                    }`}
                  ></div>
                </div>
              ) : (
                <iframe
                  key={idx}
                  src={file.url}
                  width="260"
                  height="200"
                  title={`PDF-${idx}`}
                  className="rounded-md border"
                />
              )
            )}
          </div>
        )}
      </label>

      <input
        id={label}
        type="file"
        accept="image/*,.pdf"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default DocumentAddCard;
