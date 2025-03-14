import Text from "@/components/ui/text";
import React from "react";
import BentoGrid from "../bento-grid";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2 justify-center items-start lg:items-center ">
        <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 text-black text-xs me-2 px-2.5 py-0.5 rounded-full font-bold">
          Scify
        </span>
        <Text>About Us</Text>
        <p className="text-lg text-start lg:text-center text-slate-200">
          Your internet, simplified and secured.
        </p>
      </div>
      <BentoGrid />
    </div>
  );
};

export default About;
