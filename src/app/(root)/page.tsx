import { Button } from "@/components/ui/button";
import {
  ArrowRightCircle,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  MoveRightIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-between items-center h-[50vh] ">
      <div className="w-1/2">
        <h1 className="font-regular text-white text-6xl ">
          Super High-Speed Internet Experience.
        </h1>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="flex gap-2 flex-col">
          <div className="h-0.5 bg-gradient-to-r from-white to-[#941EF1] w-full" />
          <p className="text-white text-2xl">
            We help you to connect with reliable <br /> internet. <br />
            Where others can{"'"}t!
          </p>
        </div>
        <Button
          className="rounded-full bg-gradient-to-b from-[#941EF1] to-[#904EF6] font-semibold cursor-pointer "
          size={"lg"}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
