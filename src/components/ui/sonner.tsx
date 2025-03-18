"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          background: "#6D54B5",
          color: "#fff",
          borderColor: "#6D54B5",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
