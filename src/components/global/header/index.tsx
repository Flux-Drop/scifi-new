"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5 items-center ">
      <Link href="/" className="text-white font-bold capitalize text-xl">
        {/* WIP: Add logo */}
        {/* <Image src="icons/logo.svg" alt="logo" width={40} height={40} /> */}
        Scifi
      </Link>
      <div className="flex items-center text-white gap-1 ">
        <button className="bg-transparent flex items-center gap-1 text-base md:text-lg p-0">
          <Menu />
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
