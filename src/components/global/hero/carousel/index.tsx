"use client";

import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  console.log("slides are:, ", slides)

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
              className="flex-[0_0_100%] relative w-full h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <div className="relative z-20 px-6 md:px-12 py-20 max-w-2xl text-white top-[20%]">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">{slide.title}</h1>
                <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                <Link href={slide.ctaUrl}>
                <Button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-5 rounded-full hover:scale-105 transition font-bold cursor-pointer">
                  {slide.ctaText}
                </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-white/80 text-black rounded-full px-5 py-3 flex items-center gap-2 text-sm backdrop-blur-md shadow-lg">
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
}