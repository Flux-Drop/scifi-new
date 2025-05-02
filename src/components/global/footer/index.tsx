"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  XIcon,
  Instagram,
  Youtube,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/magicui/shiny-button";

const socialIcons = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Instagram },
  { href: "#", icon: Youtube },
];

const broadbandLinks = [
  { label: "Broadband Plans in Ranchi", href: "/plans/ranchi" },
  { label: "Broadband Plans in Begusarai", href: "/plans/begusarai" },
];

const quickLinksLeft = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Scify Fibernet", href: "/scify-fibernet" },
  { label: "New Connection", href: "/new-connection" },
  { label: "About Scify", href: "/about-scify" },
  { label: "Blogs", href: "/blogs" },
];

const quickLinksRight = [
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Support", href: "/support" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs Page", href: "/blogs-page" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", icon: XIcon },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "Youtube", icon: Youtube },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url(/images/footer.jpg)] bg-cover bg-bottom" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl mb-8 md:mb-0 space-y-4">
            <span className="inline-block font-semibold px-6 py-3 bg-[#1eae8b]/10 rounded-full text-lg">
              <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                More Connectivity
              </p>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Home For Greater Internet Connectivity
            </h2>
          </div>

          <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold bg-cover">
            <span className="text-black capitalize mr-2">Start Connection Today</span>
            <ArrowRight className="inline-block transition-transform group-hover:translate-x-1" />
          </ShinyButton>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Subscribe to stay updated</h3>
            <div className="flex items-center bg-white/30 rounded-full p-1 pr-2">
              <Mail className="text-gray-400 ml-3 mr-2" size={18} />
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder:text-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button size="icon" className="rounded-full bg-white text-black hover:bg-gray-200 h-8 w-8">
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="flex space-x-3">
              {socialIcons.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className=" bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Broadband Plans */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Broadband Plans</h3>
            <ul className="space-y-3">
              {broadbandLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-300 hover:text-white transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
              {/* <li className="text-gray-500 text-sm italic">
                We should be able to add more later
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[quickLinksLeft, quickLinksRight].map((links, i) => (
                <ul className="space-y-3" key={i}>
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-gray-300 hover:text-white transition-colors font-medium">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Social Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Social Media Links</h3>
            <ul className="space-y-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white flex items-center transition-colors font-medium"
                  >
                    <Icon className="mr-2" size={16} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-2 text-white">
              <div className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Scify Fibernet Headquarters
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={16} />
                Customer Support: 1800-XXX-XXXX
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={16} />
                info@scifyfibernet.com
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-500 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Scify Fibernet — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}