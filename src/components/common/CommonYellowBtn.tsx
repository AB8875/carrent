import Link from "next/link";
import React from "react";
interface IPROPS {
  link: string;
  title: string;
  className?: string;
}

const CommonYellowBtn: React.FC<IPROPS> = ({ link, title, className }) => {
  return (
    <Link
      href={link}
      className={`bg-primary text-gray cursore-pointer flex cursor-pointer items-center justify-center rounded px-[25px] py-[13px] text-sm font-semibold duration-500 sm:text-base md:text-lg lg:text-xl ${className} hover:shadow-[4px_4px_4px_0px_rgba(10,28,42,0.70)]`}
    >
      {title}
    </Link>
  );
};

export default CommonYellowBtn;
