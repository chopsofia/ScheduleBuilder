import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

type PaperProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
  paperClassName?: string;
  title?: string;
  titleClassName?: string;
};

const Paper: FunctionComponent<PaperProps> = ({
  children,
  childrenClassName,
  paperClassName,
}) => {
  return (
    <div
      className={`flex flex-col shadow-md bg-blue-100 shadow-blue-400 rounded-lg w-full px-8 py-6 gap-4 ${paperClassName}`}
    >
      <div
        className={`flex flex-col justify-start w-full gap-4 ${childrenClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Paper;
