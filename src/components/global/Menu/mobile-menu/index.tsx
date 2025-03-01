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

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <Link
            href="/login"
            className="text-white font-bold capitalize text-lg"
          >
            <LogInIcon size={20} />
          </Link>
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
