import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/global/hero";
import About from "@/components/global/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
