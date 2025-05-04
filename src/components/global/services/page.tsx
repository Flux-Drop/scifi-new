"use client";

import { servicesCards } from "@/lib/constants";
// import ServiceCard from "./service-card/page";
import Text from "@/components/ui/text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import "./styles.css";

import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceCardProps {
  title: string;
  copy: string;
  index: number;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card");
      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });
      return () => [
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()),
      ];
    },
    { scope: container }
  );

  return (
    <div className="app" ref={container}>
      <section className="flex flex-col text-slate-200 gap-4 justify-center items-start lg:items-center ">
        <Text>Our Services</Text>
        <p className="text-lg text-start lg:text-center text-slate-200">
          Offering best services to our customers with the latest technology.
        </p>
      </section>

      <section className="cards flex flex-col gap-[20px] py-6 lg:py-12">
  {servicesCards.map((card, index) => (
    <ServiceCard key={index} {...card} index={index} />
  ))}
</section>
    </div>
  );
};



interface ServiceCardProps {
  title: string;
  copy: string;
  index: number;
}

const ServiceCard = ({ title, copy, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (

    <div className={`group w-full sticky top-20 h-full`}>
      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 p-8 bg-black border border-gray-800 rounded-xl hover:shadow-md  transition-all duration-300 h-full overflow-hidden shadow-[inset_0px_18px_45px_-25px_#7F7F90]">
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1fc096]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Left: Text Content */}
        <div className="relative z-10 flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {copy}
          </p>

          <button className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-brand transition-colors duration-300 mt-4">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Video */}
        <motion.div className="relative w-full lg:w-[400px] h-[240px] rounded-xl overflow-hidden" style={{ scale }}>
          <video
            src={`/assets/videos/${index + 1}.mp4`}
            className="w-full h-full object-cover rounded-xl"
            muted
            autoPlay
            loop
            playsInline
          />
        </motion.div>

        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1fc096] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

export default Services;