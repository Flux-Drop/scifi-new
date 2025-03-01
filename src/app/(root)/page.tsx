import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center min-h-[50vh]">
      <div className="flex flex-col items-start space-y-2">
        {/* title */}

        <div className="flex flex-col gap-2">
          <h1 className="text-white text-7xl font-bold">
            Super <span className="outlined-text italic"> High-Speed</span>
          </h1>
          <h1 className=" text-7xl font-bold text-white">
            Internet Experience.
          </h1>
        </div>
        {/* desc */}
        <div className="text-white  text-xl">
          We help you to connect with reliable internet. Where others can{"'"}
          t!
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <ShinyButton className="bg-white rounded-full font-semibold text-black">
            Get Started
          </ShinyButton>
          <ShinyButton className="bg-gradient-to-r from-indigo-700 to-purple-600 rounded-full font-semibold">
            <span className="text-white">View Plans</span>
          </ShinyButton>
        </div>
      </div>

      <Image
        className="absolute right-10 bottom-0"
        src="/images/vr-guy.png"
        width={900}
        height={900}
        alt="Hero Illustration"
      />
    </div>
  );
}
