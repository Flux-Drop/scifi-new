import { Button } from "@/components/ui/button";
import React from "react";

const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="hidden lg:flex bg-gradient-to-r from-indigo-700 to-purple-600 text-white shadow-none text-base rounded-3xl px-6 py-2 focus:outline-none cursor-pointer font-semibold">
      {children}
    </Button>
  );
};

export default GradientButton;
