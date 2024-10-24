import React from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "outline-none text-white text-sm rounded-md transition-colors",
  variants: {
    active: {
      true: "bg-blue-500",
      false: "bg-sky-400 hover:bg-blue-500",
    },
    size: {
      sm: "h-6 w-6",
      md: "px-2 py-1.5",
    },
  },
  defaultVariants: {
    size: "md",
    active: false,
  },
});

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  active?: boolean;
  size?: "sm" | "md";
}

export const Button = ({
  className,
  onClick,
  active = false,
  children,
  size = "md",
  ...rest
}: Props) => {
  const buttonClassNames = twMerge(
    buttonStyle({
      active: active ? true : false,
      size,
    }),
    className
  );

  return (
    <button {...rest} className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};
