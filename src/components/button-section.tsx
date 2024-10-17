import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 uppercase py-2 tracking-widest outline-none bg-blue-600 text-white rounded">
      {children}
    </button>
  );
};
