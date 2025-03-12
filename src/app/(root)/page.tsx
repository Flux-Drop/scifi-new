import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/global/hero";
import About from "@/components/global/about";
import Services from "@/components/global/services/page";
import HoverCards from "@/components/global/hover-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HoverCards />
    </>
  );
}
