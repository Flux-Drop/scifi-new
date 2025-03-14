import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-sm md:max-w-7xl mx-auto antialiased px-4 md:px-8 lg:px-12 py-20">
      {children}
    </div>
  );
};

export default Wrapper;
