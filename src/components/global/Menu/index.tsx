"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      console.log("Setting up GSAP animations...");
      gsap.set(".menu-link-item-holder", { y: 75 });

      timeline.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 0.75,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    console.log("Menu State Changed:", isMenuOpen);
    if (isMenuOpen) {
      console.log("Playing Timeline...");
      timeline.current?.play();
    } else {
      console.log("Reversing Timeline...");
      timeline.current?.reverse();
    }
  }, [isMenuOpen]);

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Scifi</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="text-white cursor-pointer">Menu</p>
        </div>
      </div>
      <div className="fixed top-0 left-0 width-[100vw] p-[2em] flex justify-between items-center z-1">
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-close" onClick={toggleMenu}>
              <p className="text-black cursor-pointer">Close</p>
            </div>
          </div>
          <div className="menu-close-icon" onClick={toggleMenu}>
            <p>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => {
                return (
                  <div className="menu-link-item" key={index}>
                    <div className="menu-link-item-holder">
                      <Link href={link.path} className="menu-link">
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="#">X &#8599;</a>
                <a href="#">Instagram &#8599;</a>
                <a href="#">LinkedIn &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>divyanshverma18may@gmail.com</p>
                <p>+91-9716134913</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">View Showreel</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
