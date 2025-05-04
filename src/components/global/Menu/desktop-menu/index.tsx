"use client";
import { navLinks } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const DesktopMenu = () => {
  const pathname = usePathname();
  const filteredLinks = useMemo(
    () => navLinks.filter((link) => link.name !== "Login"),
    []
  );
  return (
    <div className="flex items-center gap-6 ">
      <div className="flex items-center">
        {filteredLinks.map((item) => (
          <motion.span
            key={item.path} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3"
          >
            <a
              href={item.path}
              className={`text-lg font-semibold`}
              aria-current={pathname === item.path ? "page" : undefined}
              // prefetch={true}
            >
              {item.name}
            </a>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
