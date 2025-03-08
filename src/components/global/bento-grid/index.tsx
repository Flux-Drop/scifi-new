import { ShinyButton } from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BentoGrid = () => {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-0 grid gap-2 sm:mt-0 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-3xl bg-gradient-to-b from-#E6DDFE to-#E6DDFE opacity-5 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-[inset_0px_18px_45px_-25px_#7F7F90]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-white max-lg:text-center">
                  Home Broadband
                </p>
                <p className="mt-2 max-w-lg text-accent  max-lg:text-center">
                  Experience the internet like never before with Scify home
                  broadband connection. Our WiFi plans offer speeds of up to 1
                  Gbps, making it the perfect choice for seamless streaming,
                  gaming, and browsing from the comfort of your home.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-800 bg-gray-900 shadow-2xl">
                  <Image
                    className="size-full object-cover object-top"
                    src="/assets/home-broadband.png"
                    alt="Home Broadband"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-3xl bg-gradient-to-b from-#E6DDFE to-#E6DDFE opacity-5 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] shadow-[inset_0px_18px_45px_-25px_#7F7F90]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-semibold tracking-tight text-white max-lg:text-center">
                  IPTV/OTT
                </p>
                <p className="mt-2 max-w-lg text-accent  max-lg:text-center">
                  Transform your TV viewing experience with Scify's IPTV and OTT
                  services.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <Image
                  className="size-full object-cover object-top"
                  src="/assets/iptv.png"
                  alt="Business Broadband"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* bg-gradient-to-b from-#001817 to-#000505 */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 ">
            <div className="absolute inset-px rounded-3xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]  bg-gradient-to-r from-[#001816] via-[#010608] to-[#020202]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-semibold tracking-tight text-white max-lg:text-center">
                  Corporate Broadband
                </p>
                <p className="mt-2 max-w-lg text-accent  max-lg:text-center">
                  Experience the internet at ultra fast speed with Scify
                  corporate boradband connection. Wifi plan gives upto 1 GBPS
                  making it the perfect choice for office internet connection.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 ">
                <Image
                  className="size-full object-cover object-top"
                  src="/assets/business-broadband.jpg"
                  alt="Home Broadband"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gradient-to-r from-[#001816] via-[#010608] to-[#020202] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] shadow-[inset_0px_18px_45px_-25px_#7F7F90]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 flex flex-col gap-4">
                <p className="mt-2 text-xl font-semibold tracking-tight text-white max-lg:text-center">
                  Learn More
                </p>
                <p className="mt-2 max-w-lg text-accent  max-lg:text-center">
                  Get to know more about our services and how we can help you
                  with your internet needs.
                </p>
                <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold w-1/2 bg-no-repeat bg-cover">
                  <span className="text-black capitalize">Explore</span>
                </ShinyButton>
              </div>
              <div className="h-full w-full">
                <video
                  src="/assets/services.mp4"
                  className="w-full h-full brightness-75 p-4 rounded-3xl object-cover"
                  muted
                  autoPlay={true}
                  loop
                  playsInline
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
