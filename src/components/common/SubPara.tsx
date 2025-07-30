import { FC } from "react";

interface SubParaProps {
  title: string;
  className?: string;
}

const SubPara: FC<SubParaProps> = ({ title, className }) => {
  return (
    <p
      className={`text-sm leading-[144%] font-normal sm:text-base md:text-lg lg:text-xl ${className}`}
    >
      {title}
    </p>
  );
};

export default SubPara;
