import React from "react";
interface IPROPS {
  className?: string;

  title: string;
}

const BlackBorderBtn: React.FC<IPROPS> = ({ className, title }) => {
  return (
    <button
      className={`border-gray text-gray hover:bg-primary cursor-pointer rounded border text-sm font-semibold transition-all duration-700 sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl ${className} w-full px-4 py-2 text-center whitespace-nowrap`}
    >
      {title}
    </button>
  );
};

export default BlackBorderBtn;
