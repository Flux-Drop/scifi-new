import { navLinks } from "@/lib/constants";
import { NavLink } from "@/types/types";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center">
        {navLinks.map((item: NavLink, index: React.Key | null | undefined) => {
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
        })}
      </div>
      <div className="flex items-center">
        <Link href="/login" className="text-white capitalize text-lg">
          <LogInIcon />
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
