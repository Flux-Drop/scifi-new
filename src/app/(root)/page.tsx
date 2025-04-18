import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/global/hero";
import About from "@/components/global/about";
import Services from "@/components/global/services/page";
import HoverCards from "@/components/global/hover-cards";
import Testimonails from "@/components/global/testimonials";
import Wrapper from "@/components/global/wrapper";
import Banner from "@/components/ui/banner";
import Contact from "@/components/global/contact";
import HeroBanner from "@/components/global/hero-banner";
import FAQSection from "@/components/global/faq-section";

export default function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      <Hero />
      <Wrapper>
        <About />
        <Services />
        {/* <Banner /> */}
        <HoverCards />
        <Testimonails />
        <FAQSection />
        <Contact />
      </Wrapper>
    </>
  );
}
