import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        className,
        "relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-start lg:text-center font-bold"
      )}
    >
      {children}
    </h1>
  );
};

export default Text;
