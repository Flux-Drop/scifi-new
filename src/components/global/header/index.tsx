"use client";
import { useUi } from "@/contexts/UiContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopMenu from "../Menu/desktop-menu";
import MobileMenu from "../Menu/mobile-menu";

const Header = () => {
  const { isMobile, isTablet } = useUi();
  return (
    <header className="my-10 flex justify-between gap-5 items-center ">
      <Link href="/" className="text-white font-bold capitalize text-xl">
        {/* WIP: Add logo */}
        {/* <Image src="icons/logo.svg" alt="logo" width={40} height={40} /> */}
        Scifi
      </Link>
      <div className="flex items-center text-white gap-1 ">
        {isMobile || isTablet ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
};

export default Header;
