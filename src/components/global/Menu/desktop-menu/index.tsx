import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { NavLink } from "@/types/types";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6 ">
      <div className="flex items-center">
        {navLinks.map((item: NavLink, index: React.Key | null | undefined) => {
          return (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3"
            >
              <Link
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-purple-400 font-semibold"
                    : "text-white"
                } capitalize font-medium text-lg`}
              >
                {item.name}
              </Link>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenu;
