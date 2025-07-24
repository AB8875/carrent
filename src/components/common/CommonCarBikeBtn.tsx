"use client";
import React, { useState } from "react";
import Link from "next/link";

interface IPROPS {
  className?: string;
  data: {
    link: string;
    btnTitle: string;
  }[];
}

const CommonCarBikeBtn: React.FC<IPROPS> = ({ className, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`max-w-[656px] min-w-[656px] rounded-[20px] bg-[url(/assets/png/heroSkueImg.png)] ps-10 pt-5 pb-[54px] ${className}`}
    >
      <div className="flex gap-[35px]">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => setActiveIndex(index)}
            className={`border-gray rounded-[4px] border px-[25px] py-[13px] text-xl font-semibold transition-all duration-500 ease-linear hover:shadow-[5px_4px_4px_0px_rgba(10,28,42,0.50)] ${
              activeIndex === index
                ? "bg-gray text-primary shadow-[5px_4px_4px_0px_rgba(10,28,42,0.50)]"
                : "text-gray hover:bg-gray hover:text-primary"
            }`}
          >
            {item.btnTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommonCarBikeBtn;
