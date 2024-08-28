import Link from "next/link";
import React from "react";

interface NavItemProps {
  isScroll: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ isScroll }) => {
  return (
    <div
      className={`${
        isScroll ? "text-gray-900" : "text-gray-200"
      } font-semibold text-xl tracking-tighter flex p-4`}
    >
      <Link
        className={`mr-5 ${
          isScroll ? "hover:text-gray-500" : "hover:text-white"
        } hover:underline decoration-yellow-500 duration-500`}
        href="#me"
      >
        ME
      </Link>
      <Link
        className={`mr-5 ${
          isScroll ? "hover:text-gray-500" : "hover:text-white"
        } hover:underline decoration-yellow-500 duration-500`}
        href="#project"
      >
        PROJECT
      </Link>
      <Link
        className={`mr-5 ${
          isScroll ? "hover:text-gray-500" : "hover:text-white"
        } hover:underline decoration-yellow-500 duration-500`}
        href="#awards"
      >
        AWARDS
      </Link>
      <Link
        className={`mr-5 ${
          isScroll ? "hover:text-gray-500" : "hover:text-white"
        } hover:underline decoration-yellow-500 duration-500`}
        href="#whyme"
      >
        WHY ME?
      </Link>
      <Link
        className={`mr-5 ${
          isScroll ? "hover:text-gray-500" : "hover:text-white"
        } hover:underline decoration-yellow-500 duration-500`}
        href="#contact"
      >
        CONTACT
      </Link>
    </div>
  );
};

export default NavItem;
