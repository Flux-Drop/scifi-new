"use client"; // Required for client-side interactivity in App Router

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Banner } from "@prisma/client";
import Text from "@/components/ui/text";
import { ShinyButton } from "@/components/magicui/shiny-button";

const Carousel = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Animation variants for sliding effect
  const variants = {
    enter: (direction: any) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          custom={direction}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay darkening the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

          {/* Centered text and CTA */}
          <div className="relative z-10 text-white text-center flex justify-center items-center flex-col gap-4">
            <Text>{slides[currentIndex].title}</Text>
            <p className="text-lg text-start lg:text-center ">
              {slides[currentIndex].description}
            </p>
            <div className="flex gap-2">
              <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold bg-cover">
                <span className="text-black capitalize">Get Started</span>
              </ShinyButton>
              <ShinyButton className="bg-black rounded-full font-semibold border">
                <span className="text-white capitalize">View Plans</span>
              </ShinyButton>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hover:opacity-75 transition-opacity"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hover:opacity-75 transition-opacity"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
