import { FC } from "react";

interface LabelProps {
  htmlfor?: string;
  title: string;
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlfor, title, className }) => {
  return (
    <label
      htmlFor={htmlfor}
      className={`text-2xl leading-[144%] font-semibold ${className}`}
    >
      {title}
    </label>
  );
};

export default Label;
