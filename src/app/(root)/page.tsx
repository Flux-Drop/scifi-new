import About from "@/components/global/about";
import BannerCarousel from "@/components/global/banner-carousel";
import Contact from "@/components/global/contact";
import FAQSection from "@/components/global/faq-section";
import HoverCards from "@/components/global/hover-cards";
import Services from "@/components/global/services/page";
import Testimonails from "@/components/global/testimonials";
import Wrapper from "@/components/global/wrapper";

export default function Home() {
  return (
    <div className="mx-auto w-full px-5 xs:px-10 md:px-12">
      <BannerCarousel />
      <Wrapper>
        <About />
        <Services />
        {/* <Banner /> */}
        <HoverCards />
        <Testimonails />
        <FAQSection />
        <Contact />
      </Wrapper>
    </div>
  );
}
