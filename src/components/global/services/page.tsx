"use client";

import { servicesCards } from "@/lib/constants";
import React from "react";
// import ServiceCard from "./service-card/page";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";
import Text from "@/components/ui/text";
import GradientButton from "../buttons/GradientButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <section className="flex flex-col text-slate-200 gap-4 justify-center items-start lg:items-center px-5 xs:px-10 md:px-16">
        <Text>Our Services</Text>
        <p className="text-lg text-start lg:text-center text-slate-200">
          Offering best services to our customers with the latest technology.
        </p>
      </section>
      <section className="intro"></section>
      <section className="cards">
        {servicesCards.map((card, index) => (
          <ServiceCard key={index} {...card} index={index} />
        ))}
      </section>
      <section className="outro"></section>
    </div>
  );
};

export default Services;

const ServiceCard = ({ title, copy, index }: ServiceCardProps) => {
  return (
    <div
      className="card px-5 xs:px-10 md:px-16 rounded-3xl"
      id={`card-${index + 1}`}
    >
      <div
        className={`card-inner shadow-[inset_0px_18px_45px_-25px_#7F7F90] rounded-2xl ${
          index % 2 === 0
            ? "bg-gradient-to-b from-[#010101] via-[#010101] to-[#020202]"
            : "bg-gradient-to-b from-[#010101] via-[#010101] to-[#020202]"
        }`}
      >
        <div className="flex-[3] flex flex-col gap-2 justify-between">
          <div className="flex-col gap-2">
            <h1 className="text-5xl text-slate-200 font-semibold">{title}</h1>
            <p className="text-lg text-start text-slate-200">{copy}</p>
            <button className="flex bg-transparent text-white items-center gap-1 mt-10">
              <span className="underline underline-offset-6 text-2xl">
                Learn More
              </span>{" "}
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="card-img">
          <video
            src={`/assets/videos/${index + 1}.mp4`}
            className="w-full h-full brightness-75 p-4 rounded-3xl object-cover"
            muted
            autoPlay={true}
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};
