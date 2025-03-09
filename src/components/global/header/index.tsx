"use client";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { useUi } from "@/contexts/UiContext";
import Link from "next/link";
import DesktopMenu from "../Menu/desktop-menu";
import MobileMenu from "../Menu/mobile-menu";
import { signIn } from "@/server/users";

const Header = () => {
  const { isMobile, isTablet } = useUi();
  return (
    <header className="my-10 flex justify-between gap-5 items-center px-5 xs:px-10 md:px-16">
      <Link href="/" className="text-[#9A9AA7] font-bold capitalize text-xl">
        {/* WIP: Add logo */}
        {/* <Image src="icons/logo.svg" alt="logo" width={40} height={40} /> */}
        Scifi
      </Link>
      <div className="flex items-center text-[#9A9AA7] gap-1 ">
        {isMobile || isTablet ? <MobileMenu /> : <DesktopMenu />}
      </div>
      <Link href="/sign-in" className="hidden lg:block">
        <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold">
          <span className="text-black capitalize" onClick={signIn}>
            Login
          </span>
        </ShinyButton>
      </Link>
    </header>
  );
};

export default Header;
