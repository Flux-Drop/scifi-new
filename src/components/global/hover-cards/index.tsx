import Text from "@/components/ui/text";
import {
  BotIcon,
  Check,
  Clapperboard,
  GitBranchPlus,
  Globe2Icon,
  HandHeart,
  Handshake,
  Headset,
  HeartHandshake,
  Phone,
  Rocket,
  Tv,
  Wallet,
} from "lucide-react";
import React from "react";

const AboutCards = () => {
  const whyUsCards = [
    {
      title: "Reliable Internet for Homes & Business",
      description:
        "Scify Fibernet offers high-speed internet connectivity, allowing you to browse, stream, download, and upload content quickly and efficiently.",
      icon: <HeartHandshake stroke="white" size={28} />,
    },
    {
      title: "Affordability",
      description:
        "Scify has vision that every household should be connected all the time. Scify Fibernet offers affordable plans, making it accessible to a wide range of customers",
      icon: <Wallet stroke="white" size={28} />,
    },
    {
      title: "Hassle free Customer Support",
      description:
        "At Scify, we prioritize our customers above all else. We handle every query and complaint with utmost seriousness and ensure prompt resolution.",
      icon: <Headset stroke="white" size={28} />,
    },
    {
      title: "Entertainment",
      description:
        "Scify Fibernet offers various entertainment options, such as streaming services and smart TV features, to enhance your entertainment experience.",
      icon: <Clapperboard stroke="white" size={28} />,
    },
    {
      title: "Innovation",
      description:
        "Scify Fibernet is constantly innovating and upgrading its services to provide you with the latest technology and features.",
      icon: <Rocket stroke="white" size={28} />,
    },
    {
      title: "Value-added Services",
      description:
        "Scify Fibernet offers various value-added services, such as free hardware and software checks, to enhance your overall experience.",
      icon: <HandHeart stroke="white" size={28} />,
    },
  ];
  return (
    <section className="w-full mt-24 lg:mt-0">
      <div className="flex flex-col text-slate-200 gap-4 justify-center items-start lg:items-center px-5 xs:px-10 md:px-16">
        <Text>Why Scify ?</Text>

        <p className="text-lg text-start lg:text-center text-white w-full">
          Personalize experiences with tailored recommendations based on user
          behavior.
        </p>
      </div>
      {/* Grid */}
      <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-screen md:grid-cols-3 mt-10">
        {whyUsCards.map((card, index) => (
          <div
          className="relative group"
          key={card.title}
        >
          {/* Hover Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 rounded-2xl blur-xl" />
        
          {/* Card Container */}
          <div className="relative p-8 bg-white/[0.03] border border-white/[0.1] rounded-2xl backdrop-blur-sm group-hover:border-purple-500/20 transition-all duration-500 h-full">
            
            {/* Icon Wrapper */}
            <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl w-min opacity-90">
              {card.icon}
            </div>
        
            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {card.title}
            </h3>
        
            {/* Description */}
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              {card.description}
            </p>
          {/* <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" /> */}
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
