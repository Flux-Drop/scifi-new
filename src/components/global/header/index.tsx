"use client";
import { useUi } from "@/contexts/UiContext";
import { LogInIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navLinks } from "@/lib/constants";
import { NavLink } from "@/types/types";

const Header = () => {
  const pathname = usePathname();
  const { isMobile, isTablet, isDesktop, breakpoint } = useUi();
  return (
    <header className="my-10 flex justify-between gap-5 items-center ">
      <Link href="/" className="text-white font-bold capitalize text-xl">
        {/* WIP: Add logo */}
        {/* <Image src="icons/logo.svg" alt="logo" width={40} height={40} /> */}
        Scifi
      </Link>
      <div className="flex items-center text-white gap-1 ">
        {isMobile || isTablet ? (
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <Link
                href="/login"
                className="text-white font-bold capitalize text-lg"
              >
                <LogInIcon size={20} />
              </Link>
            </div>
            <button className="bg-transparent flex items-center gap-1 text-base md:text-lg p-0">
              <Menu size={20} />
              <span>Menu</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              {navLinks.map(
                (item: NavLink, index: React.Key | null | undefined) => {
                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className={`ml-6 ${
                        pathname === item.path
                          ? "text-purple-400 font-semibold"
                          : "text-white"
                      }  capitalize font-medium text-lg`}
                    >
                      {item.name}
                    </Link>
                  );
                }
              )}
            </div>
            <div className="flex items-center">
              <Link href="/login" className="text-white capitalize text-lg">
                <LogInIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
