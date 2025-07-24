import Link from "next/link";
import React from "react";
interface IPROPS {
  path: string;
  title: string;
  className?: string;
}
const LinkBlackBtn: React.FC<IPROPS> = ({ path, title, className }) => {
  return (
    <Link
      href={path}
      className={`bg-gray text-primary w-full cursor-pointer rounded px-4 py-2 text-center text-xs leading-[144%] font-semibold whitespace-nowrap transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl ${className}`}
    >
      {title}
    </Link>
  );
};

export default LinkBlackBtn;
