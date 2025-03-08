import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex items-center gap-2 ">
        <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none">
          <Menu size={20} />
          Menu
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent>
        {navLinks.map((item, index) => {
          return (
            <DropdownMenuItem asChild key={index} className="rounded-none">
              <Link href={item.path} className={`${item.className} `}>
                {item.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
