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
    name: "Login",
    path: "/sign-in",
    className: "font-semibold border-t w-full border-slate-400",
  },
];

export const servicesCards = [
  {
    title: "Internet for Business",
    copy: "Stay ahead in the digital world with our reliable business internet services, designed to meet the demands of modern businesses for uninterrupted connectivity and efficiency.",
  },

  {
    title: "Entertainment plans with OTT/IPTV",
    copy: "Enjoy a wide range of entertainment options with our bundled plans featuring popular OTT and IPTV services like Netflix, Disney+ Hotstar, Zee5, and more, all accessible at your fingertips.",
  },
  {
    title: "Home Security & Automation",
    copy: "Ensure the safety of your home with our comprehensive security solutions, including smart home automation features that provide convenience and peace of mind.",
  },

  {
    title: "High Speed Fiber Internet",
    copy: "Experience blazing-fast internet with our fiber-optic broadband, ensuring seamless connectivity for all your online needs.",
  },
];
