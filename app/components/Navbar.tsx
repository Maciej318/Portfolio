"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

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
      className={`fixed flex h-16 justify-between items-center w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-xl h-20" : "bg-[#141414] shadow-none"
      }`}
    >
      <div className="flex-grow p-4">
        <motion.h1
          className={`font-bold text-2xl transition-colors duration-500 ${
            isScrolled ? "text-gray-900" : "text-white"
          } tracking-tight`}
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          LO<span className="text-yellow-500">GO</span>
        </motion.h1>
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
