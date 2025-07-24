import React from "react";
interface IPROPS {
  title: string;
  className?: string;
  onClick?: () => void;
}

const YellowBorderCommonBtn: React.FC<IPROPS> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-primary text-primary hover:bg-gray flex items-center justify-center rounded border text-sm font-semibold transition-all duration-700 sm:px-[25px] sm:py-[13px] sm:text-base md:text-lg lg:text-xl ${className} cursor-pointer px-4 py-2 text-center whitespace-nowrap`}
    >
      {title}
    </button>
  );
};

export default YellowBorderCommonBtn;
