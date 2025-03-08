import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex items-center gap-2 ">
        <DropdownMenuTrigger
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
          aria-label="Open Menu"
        >
          <Menu size={20} />
          <span className="sr-only">Toggle navigation menu</span>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {navLinks.map((item) => (
          <DropdownMenuItem asChild key={item.path} className="rounded-none">
            <Link
              href={item.path}
              className={cn("w-full px-4 py-2 hover:bg-muted", item.className)}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
