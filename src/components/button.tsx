import React from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "outline-none text-white text-xs rounded-md transition-colors",
  variants: {
    active: {
      true: "bg-[#ff683b]",
      false: "bg-[#3b4883] hover:bg-[#ddd] hover:text-[#202124]",
    },
    size: {
      sm: "h-6 w-6",
      md: "px-2 py-1.5",
      lg: "h-10 w-10",
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
  size?: "sm" | "md" | "lg";
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
