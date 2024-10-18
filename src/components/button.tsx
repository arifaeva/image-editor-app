import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button = ({ className, children, ...rest }: Props) => {
  const baseStyles =
    "px-3 py-1.5 outline-none bg-sky-400 text-white text-sm rounded-md";

  const buttonClassNames = twMerge(baseStyles, className);

  return (
    <button {...rest} className={buttonClassNames}>
      {children}
    </button>
  );
};
