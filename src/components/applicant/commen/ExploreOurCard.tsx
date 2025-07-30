"use client";
import React from "react";

import Para from "@/components/common/Para";
import SubPara from "@/components/common/SubPara";
import Link from "next/link";
import { RightArrowIcon } from "@/components/helper/user/Icon";

interface IPROPS {
  className?: string;
  cardHeading: string;
  cardPara: string;
  link: string;
  pClass?: string;
}

const ExploreOurCard: React.FC<IPROPS> = ({
  className,
  cardHeading,
  cardPara,
  link,
  pClass,
}) => {
  return (
    <article
      style={{ backgroundImage: `url(${className})` }}
      className={`group group relative inline-flex h-full min-h-[284px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-no-repeat p-3 before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-[linear-gradient(360deg,rgba(0,0,0,1)_0%,rgba(87,199,133,0)_100%)] before:transition-all before:duration-500 before:ease-in-out hover:before:h-full lg:min-h-auto xl:p-6`}
      // bg-[url(${className})]
    >
      <div className="relative z-10 transition-all duration-500 group-hover:translate-y-[-5px]">
        <SubPara
          title={cardHeading || ""}
          className="!text-light-white font-semibold"
        />
        <Para
          title={cardPara || ""}
          classNmae={`opacity-70 !font-normal mt-2.5 !text-sm max-w-[321px] ${pClass}`}
        />
        <div className="pointer-events-none mt-5 max-h-0 overflow-hidden transition-all duration-700 group-hover:pointer-events-auto group-hover:max-h-20">
          <Link
            href={link}
            className="text-primary flex items-center gap-2.5 pb-1 text-base leading-[144%] font-medium"
          >
            <span>View destinations</span>
            <RightArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ExploreOurCard;
