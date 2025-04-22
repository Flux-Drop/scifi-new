"use client";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // adjust path as needed
import { ShinyButton } from "@/components/magicui/shiny-button";

const slides = [
  {
    title: "Find Out Our Best Plan (Only for you)",
    description:
      "Discover our latest plan which includes all the benefits you are looking for.",
    image: "/assets/home-broadband.png",
  },
  {
    title: "Seamless Connectivity, Always",
    description:
      "Experience blazing-fast speeds and unbeatable reliability with every plan.",
    image: "/assets/auth-illustration.jpg",
  },
];

const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative">
    <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] relative w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
            <div className="relative z-20 px-6 md:px-12 py-20 max-w-2xl text-white top-[20%]">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
              <Button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-5 rounded-full hover:scale-105 transition font-bold cursor-pointer">
                Check Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-6 right-6 z-20">
    <div className="bg-white/80 text-black rounded-full px-5 py-3 flex items-center gap-2 text-sm backdrop-blur-md  shadow-lg">
      <button onClick={scrollPrev}>
        <ChevronLeft size={20} />
      </button>
      <span className="font-semibold">
        {selectedIndex + 1}/{slides.length}
      </span>
      <button onClick={scrollNext}>
        <ChevronRight size={20} />
      </button>
    </div>
  </div>
  </div>
  );
};

export default BannerCarousel;