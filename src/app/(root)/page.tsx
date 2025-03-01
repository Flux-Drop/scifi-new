import GradientButton from "@/components/global/buttons/GradientButton";
import { ShinyButton } from "@/components/magicui/shiny-button";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center min-h-[50vh]">
      <div className="flex flex-col items-start space-y-2">
        {/* title */}
        <div className="flex flex-col">
          <h1 className="text-white text-6xl font-bold">Super High-Speed</h1>
          <h1 className="text-white text-6xl font-bold">
            Internet Experience.
          </h1>
        </div>
        {/* desc */}
        <div className="flex gap-8 flex-col">
          <div className="text-white  text-lg">
            We help you to connect with reliable internet. Where others can’t!
          </div>
          {/* Buttons */}
          <div className="flex gap-4">
            <ShinyButton className="bg-white rounded-full font-semibold text-black">
              Get Started
            </ShinyButton>
            <ShinyButton className="bg-gradient-to-r from-indigo-700 to-purple-600 rounded-full font-semibold">
              <span className="text-white">View Plans</span>
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
