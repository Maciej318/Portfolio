"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed flex h-16 justify-between items-center w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-[#141414]"
      }`}
    >
      <div className="flex-grow p-4">
        <h1
          className={`font-bold text-2xl ${
            isScrolled ? "text-gray-900" : "text-white"
          } tracking-tight`}
        >
          LO<span className="text-yellow-500">GO</span>
        </h1>
      </div>
      <div className="flex-none p-4">
        {isMobile ? (
          <MobileNav isScroll={isScrolled} />
        ) : (
          <NavItem isScroll={isScrolled} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
