import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
interface IPPROPS {
  value: string;
  accordionTrigger?: string;
  accordionContent?: string;
  className?: string;
}

const CommonAccordian: React.FC<IPPROPS> = ({
  value,
  accordionContent,
  accordionTrigger,
  className,
}) => {
  return (
    <div className={`${className} !w-full`}>
      <AccordionItem
        value={value}
        className="data-[state=open]:border-primary !bg-light w-full rounded-[7px] border-[transperent] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 data-[state=open]:border md:rounded-[20px]"
      >
        <AccordionTrigger className="text-gray cursor-pointer p-0 px-2.5 py-[13px] text-sm leading-[130%] font-semibold sm:px-4 sm:py-4 md:px-6 md:py-6 md:text-base lg:px-8 lg:py-8 xl:!py-10 xl:ps-[30px] xl:pe-10">
          {accordionTrigger}
        </AccordionTrigger>
        <AccordionContent className="px-2.5 text-xs !text-gray-700 opacity-[0.88] sm:px-4 md:px-6 md:text-base lg:px-8 xl:ps-[30px] xl:pe-10">
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default CommonAccordian;
