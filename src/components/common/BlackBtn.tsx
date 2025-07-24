import React from "react";
interface IPPROPS {
  title: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: () => void;
}

const BlackBtn: React.FC<IPPROPS> = ({
  title,
  type = "submit",
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray text-primary w-full cursor-pointer rounded border border-transparent px-3 py-1 text-sm leading-[144%] font-semibold transition-all duration-700 ease-in-out hover:shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-4 sm:text-base md:text-lg lg:px-[25px] lg:py-[13px] lg:text-xl ${className}`}
    >
      {title}
    </button>
  );
};

export default BlackBtn;
