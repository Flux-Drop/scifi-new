import { NavLink } from "@/types/types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Sign In",
    path: "/sign-in",
    className: "font-semibold border-t w-full border-slate-400",
  },
];
