import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Text from "@/components/ui/text";
import { testimonials } from "@/lib/constants";
import React from "react";

const Testimonails = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-8 lg:mt-16">
      <div className="flex flex-col gap-2 justify-center items-start lg:items-center px-5 xs:px-10 md:px-16">
        {/* <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 text-black text-xs me-2 px-2.5 py-0.5 rounded-full font-bold">
          Scify
        </span> */}
        <Text>What Our Clients Say </Text>
        <p className="text-lg text-start lg:text-center text-slate-200">
          Our best clients are the ones who have worked with us before. Here&apos;s
          what they have to say about us.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonails;
