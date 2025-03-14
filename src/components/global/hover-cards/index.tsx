import Text from "@/components/ui/text";
import {
  BotIcon,
  Check,
  GitBranchPlus,
  Globe2Icon,
  Handshake,
  Phone,
  Tv,
} from "lucide-react";
import React from "react";

const AboutCards = () => {
  const whyUsCards = [
    {
      title: "Reliable Internet for Homes & Business",
      description:
        "Scify Fibernet offers high-speed internet connectivity, allowing you to browse, stream, download, and upload content quickly and efficiently.",
      icon: <Globe2Icon fill="white" size={50} />,
    },
    {
      title: "Affordability",
      description:
        "Scify has vision that every household should be connected all the time. Scify Fibernet offers affordable plans, making it accessible to a wide range of customers",
      icon: <Handshake fill="white" size={50} />,
    },
    {
      title: "Hassle free Customer Support",
      description:
        "At Scify, we prioritize our customers above all else. We handle every query and complaint with utmost seriousness and ensure prompt resolution.",
      icon: <Phone fill="white" size={50} />,
    },
    {
      title: "Entertainment",
      description:
        "Scify Fibernet offers various entertainment options, such as streaming services and smart TV features, to enhance your entertainment experience.",
      icon: <Tv fill="white" size={50} />,
    },
    {
      title: "Innovation",
      description:
        "Scify Fibernet is constantly innovating and upgrading its services to provide you with the latest technology and features.",
      icon: <GitBranchPlus fill="white" size={50} />,
    },
    {
      title: "Value-added Services",
      description:
        "Scify Fibernet offers various value-added services, such as free hardware and software checks, to enhance your overall experience.",
      icon: <Check fill="white" size={50} />,
    },
  ];
  return (
    <section className="px-5 xs:px-10 md:px-16 space-y-6 bg-[#030307] py-8 md:py-12 lg:py-20">
      <div className="flex flex-col text-slate-200 gap-4 justify-center items-start lg:items-center px-5 xs:px-10 md:px-16">
        <Text>Features</Text>

        <p className="text-lg text-start lg:text-center text-white w-full lg:w-1/2">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>
      {/* Grid */}
      <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-screen md:grid-cols-3 ">
        {whyUsCards.map((card, index) => (
          <div
            className="relative overflow-hidden rounded-lg border bg-gray-200 select-none hover:shadow hover:shadow-teal-200 p-2"
            key={card.title}
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {card.icon}
              <div className="space-y-2">
                <h3 className="font-bold">{card.title}</h3>
                <p className="text-sm ">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
