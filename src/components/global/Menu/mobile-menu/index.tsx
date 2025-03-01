import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center">
          <Button className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white shadow-none text-base rounded-3xl px-7 py-3 focus:outline-none cursor-pointer font-semibold">
            Login
          </Button>
        </div>
        <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none">
          <Menu size={20} />
          Menu
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent>
        {navLinks.map((item, index) => {
          return (
            <DropdownMenuItem asChild key={index}>
              <Link href={item.path}>{item.name}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
