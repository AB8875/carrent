import { FC } from "react";

interface SubHeadingProps {
  title: string;
  className?: string;
  spanTitle?: string;
  spanClass?: string;
}

const SubHeading: FC<SubHeadingProps> = ({
  title,
  className,
  spanTitle,
  spanClass,
}) => {
  return (
    <h3
      className={`text-gray border-b-primary w-fit border-b-[2px] text-2xl leading-[115%] font-semibold sm:text-3xl md:text-4xl xl:text-5xl dark:text-white ${className}`}
    >
      {title}
      <span className={`text-primary ${spanClass}`}>{spanTitle}</span>
    </h3>
  );
};

export default SubHeading;
