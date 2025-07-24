import { FC } from "react";

interface SubHeading2Props {
  title: string;
  className?: string;
  spanTitle?: string;
  spanClass?: string;
}

const SubHeading2: FC<SubHeading2Props> = ({ title, className }) => {
  return (
    <h3
      className={`text-gray text-xl leading-[115%] font-semibold sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[36px] dark:text-white ${className}`}
    >
      {title}
    </h3>
  );
};

export default SubHeading2;
