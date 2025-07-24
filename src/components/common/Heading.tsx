import { FC } from "react";

interface HeadingProps {
  title: string;
  className?: string;
  spanTitle?: string;
  spanClass?: string;
  title2?: string;
}

const Heading: FC<HeadingProps> = ({
  title,
  title2,
  className,
  spanTitle,
  spanClass,
}) => {
  return (
    <h1
      className={`text-3xl leading-[110%] font-semibold text-white min-[1350px]:text-6xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[64px] ${className}`}
    >
      {title} <span className={`${spanClass} text-primary`}>{spanTitle}</span>
      <span className="ml-3">{title2}</span>
    </h1>
  );
};

export default Heading;
