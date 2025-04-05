import { NavLink, Testimonial } from "@/types/types";

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

export const testimonials: Testimonial[] = [
  {
    quote:
      "Scify has been a lifesaver for me during wfh. Working from home became so much easier with their fast and reliable internet. I can attend online meetings, collaborate with my team, and complete tasks without any issues. The free checks of my home electronics have also been a huge help. Scify has made working from home a smooth experience, and I'm grateful for their services.",
    name: "Priya Singh",
    designation: "CEO at TechSolutions",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Choosing Scify was a good decision. Their plans are cheap, and the internet is always fast. The customer service is helpful. When I had a problem, they fixed it quickly. I tell everyone to use Scify for internet and safety.",
    name: "Ranjan Mishra",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Scify stands out because of their excellent customer service. Unlike other providers I've tried, Scify's team is always there to help and resolves any issues quickly. Their internet is fast and reliable, and the security features, like the wifi camera, are top-notch. Scify not only offers great services but also cares about their customers, making them the best choice for internet and security.",
    name: "Sumant",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const FIELD_TYPES = {
  firstName: "text",
  lastName: "text",
  email: "email",
  password: "password",
};
export const FIELD_PLACEHOLDERS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
};

export const adminSidebarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/upload.svg",
    route: "/admin/banner",
    text: "Banner",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/plans",
    text: "All Plans",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/products",
    text: "All Products",
  },
];
