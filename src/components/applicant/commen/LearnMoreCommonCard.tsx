import Heading from "@/components/common/Heading";
import Link from "next/link";
import React from "react";
interface IPROPS {
  icon: React.ReactNode;
  title: string;
  path: string;
  className?: string;
}

const LearnMoreCommonCard: React.FC<IPROPS> = ({
  icon,
  title,
  className,
  path,
}) => {
  return (
    <>
      <Link
        href={path}
        className={`border-gray dark:border-light-white dark:hover:shadow-light-white flex flex-col items-center justify-between rounded-[20px] border px-2 py-[52px] transition-all duration-500 hover:shadow-[7px_7px_4px_0px_rgba(10,28,42,0.70)] ${className}`}
      >
        {icon}
        <Heading
          title={title}
          className="!text-gray dark:!text-light-white mt-3 text-center !text-[22px] lg:!text-2xl xl:mt-[25px]"
        />
      </Link>
    </>
  );
};

export default LearnMoreCommonCard;
