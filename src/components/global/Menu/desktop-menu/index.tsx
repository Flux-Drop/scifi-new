import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { NavLink } from "@/types/types";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const DesktopMenu = () => {
  const pathname = usePathname();
  const filteredLinks = useMemo(
    () => navLinks.filter((link) => link.name !== "Sign In"),
    []
  );
  return (
    <div className="flex items-center gap-6 ">
      <div className="flex items-center">
        {filteredLinks.map((item) => (
          <motion.span
            key={item.path} // Use path as unique key
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3"
          >
            <Link
              href={item.path}
              className={`text-lg font-semibold`}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
