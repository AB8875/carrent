import { FunctionComponent } from "react";

interface ParaProps {
  classNmae?: string;
  title: string;
}

const Para: FunctionComponent<ParaProps> = ({ classNmae, title }) => {
  return (
    <p className={`text-xs text-white sm:text-sm md:text-base ${classNmae}`}>
      {title}
    </p>
  );
};

export default Para;
