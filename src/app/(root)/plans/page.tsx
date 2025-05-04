"use client";

import PlanCard from "@/components/global/plan-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Plans = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(1);
  const plans = [1, 3, 6, 9, 12];

  const planData = {
    scifySilver: {
      name: "Scify Silver",
      speed: "40 MBPS plus Unlimited Data",
      prices: {
        1: 589,
        3: 1766,
        6: 3533,
        9: 5299,
        12: 7066,
      },
      ott: [
        "Shemaroo",
        "Hungama",
        "Fancode",
        "I-tap",
        "Distro TV",
        "om tv",
        "Hub-hopper",
        "AaoNxt",
        "PlayBoxTV",
      ],
      otherBenefits: [
        "Get installation free with 3 months+ plans purchase.",
        "Free installation + 45-day extension with 12-month plan.",
      ],
    },
    scifyGold: {
      name: "Scify Gold",
      speed: "50 MBPS plus Unlimited Data",
      prices: {
        1: 766,
        3: 2297,
        6: 4595,
        9: 6892,
        12: 9190,
      },
      ott: [
        "Discovery +",
        "Alt balaji",
        "Shemaroo",
        "Hungama",
        "Fancode",
        "I-tap",
        "Distro TV",
        "om tv",
        "Hub-hopper",
        "AaoNxt",
        "PlayBoxTV",
      ],
      otherBenefits: [
        "Get installation free with 3 months+ plans purchase.",
        "Free installation + 45-day extension with 12-month plan.",
      ],
    },
    scifyDiamond: {
      name: "Scify Diamond",
      speed: "100 MBPS plus Unlimited Data",
      prices: {
        1: 1002,
        3: 3005,
        6: 6011,
        9: 9016,
        12: 12022,
      },
      ott: [
        "SonyLiv",
        "Zee5",
        "Alt balaji",
        "Shemaroo",
        "Hungama",
        "Fancode",
        "I-tap",
        "Distro TV",
        "om tv",
        "Hub-hopper",
        "AaoNxt",
        "PlayBoxTV",
      ],
      otherBenefits: [
        "Get installation free with 3 months+ plans purchase.",
        "Free installation + 45-day extension with 12-month plan.",
      ],
    },
    scifyPlatinum: {
      name: "Scify Platinum",
      speed: "200 MBPS plus Unlimited Data",
      prices: {
        1: 1474,
        3: 4421,
        6: 8843,
        9: 13264,
        12: 17686,
      },
      ott: [
        "Hotstar",
        "SonyLiv",
        "Zee5",
        "Discovery +",
        "Shemaroo",
        "Alt balaji",
        "Hungama",
        "Fancode",
        "I-tap",
        "Distro TV",
        "om tv",
        "Hub-hopper",
        "AaoNxt",
        "PlayBoxTV",
      ],
      otherBenefits: [
        "Get installation free with 3 months+ plans purchase.",
        "Free installation + 45-day extension with 12-month plan.",
      ],
    },
  };

  return (
    <div className="text-white flex flex-col gap-8 items-start py-10 mx-auto w-full px-5 xs:px-10 md:px-24 relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
<Image src={'/gradients/illustration.svg'} alt='' className='absolute left-0 -top-80 -z-10' height={500} width={1000} />
</div>
<div className="fixed inset-0 -z-10 overflow-hidden">
<Image src={'/gradients/illustration.svg'} alt='' className='absolute right-0 bottom-0 -z-10' height={500} width={1000} />
</div>
<div className="fixed inset-0 -z-10 overflow-hidden">
<Image src={'/gradients/illustration.svg'} alt='' className='absolute right-0 -top-80 -z-10' height={500} width={1000} />
</div>


      <div className="text-start w-1/2">
        <h1  className="text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-start lg:text-start font-bold">
          Managing your fleet has never been easier.
        </h1> 
        <p className="text-xl mt-4">
          Pricing that grows with your fleet. No hidden fees, no surprises—just value.
        </p>
      </div>

      <div className="flex gap-2 items-center my-4">
        <p className="text-xl">Billing: </p>
        <div className="p-1 bg-white/5 backdrop-blur-lg border border-white/20 rounded-full flex relative">
          {plans.map((item) => (
            <Button
              key={item}
              onClick={() => setSelectedMonths(item)}
              className="relative px-6 py-2 z-10 bg-transparent text-white hover:text-white hover:bg-transparent cursor-pointer"
            >
              {selectedMonths === item && (
                <motion.div
                  layoutId="activePlan"
                  className="absolute inset-0 bg-gradient-to-r from-[#904EF6] to-[#3F80F6] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-20">
                {item} {item === 1 ? "Month" : "Months"}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-7xl">
        {Object.values(planData).map((plan) => (
          <PlanCard plan={plan} selectedMonths={selectedMonths} key={plan.name}/>
        ))}
      </div>
    </div>
  );
};

export default Plans;