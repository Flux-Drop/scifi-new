import { ShinyButton } from "@/components/magicui/shiny-button";
import Text from "@/components/ui/text";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-start h-[50vh] lg:h-[80vh] w-screen bg-[url('/assets/wave.png')] bg-cover bg-center relative mb-0 lg:mb-[20vh]">
  
      <div className="flex flex-col text-slate-200 gap-4 justify-center items-start lg:items-center px-5 xs:px-10 md:px-16">
        <Text>
          Super High Speed <br /> Internet Experience
        </Text>
        <p className="text-lg text-start lg:text-center ">
          We help you to connect with reliable internet. Where others can’t!
        </p>
        <div className="flex gap-2">
          <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold bg-cover">
            <span className="text-black capitalize">Get Started</span>
          </ShinyButton>
          <ShinyButton className="bg-black rounded-full font-semibold border">
            <span className="text-white capitalize">View Plans</span>
          </ShinyButton>
        </div>
        <Image
          src="/assets/phones.png"
          width={800}
          height={800}
          alt=""
          className="hidden lg:block lg:-mt-10"
        />
      </div>
      <div className="h-40 w-40 rounded-full blur-2xl bg-black absolute -left-10 -top-10 hidden lg:block" />
    </div>
  );
};

export default Hero;
