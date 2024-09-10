import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

interface NavItemProps {
  isScroll: boolean;
}

const navItemData = [
  { label: "ME", href: "#me" },
  { label: "PROJECT", href: "#project" },
  { label: "TECH", href: "#tech" },
  { label: "AWARDS", href: "#awards" },
  { label: "WHY ME?", href: "#whyme" },
  { label: "CONTACT", href: "#contact" },
];

const NavItem: React.FC<NavItemProps> = ({ isScroll }) => {
  return (
    <div
      className={`${
        isScroll ? "text-gray-900" : "text-gray-200"
      } font-semibold text-lg tracking-tighter flex space-x-6 p-4`}
    >
      {navItemData.map((item, index) => (
        <motion.p
          variants={fadeIn("right", 0.2 * index)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          key={item.label}
          className="relative group" 
        >
          <Link
            className={`relative ${
              isScroll ? "hover:text-gray-500" : "hover:text-white"
            } duration-500 transition-all ease-in-out`} 
            href={item.href}
          >
            {item.label}
            <span
              className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"
            ></span>
          </Link>
        </motion.p>
      ))}
    </div>
  );
};

export default NavItem;
