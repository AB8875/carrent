import { FunctionComponent } from "react";

interface MainHeadingProps {
  classNmae?: string;
  title: string;
}

const MainHeading: FunctionComponent<MainHeadingProps> = ({
  classNmae,
  title,
}) => {
  return (
    <h1
      className={`text-2xl text-white lg:text-3xl xl:text-4xl 2xl:text-5xl ${classNmae}`}
    >
      {title || "MainHeading"}
    </h1>
  );
};

export default MainHeading;
