import Link from "next/link";
import React from "react";
interface IPROPS {
  link: string;
  title: string;
  className?: string;
}

const CommonTransperentBtn: React.FC<IPROPS> = ({ link, title, className }) => {
  return (
    <>
      <Link
        href={link}
        className={`border-primary text-primary hover:bg-gray flex items-center justify-center rounded border text-sm font-semibold transition-all duration-700 sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl ${className} px-4 py-2 text-center whitespace-nowrap`}
      >
        {title}
      </Link>
    </>
  );
};

export default CommonTransperentBtn;
