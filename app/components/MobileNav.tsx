import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavItemProps {
  isScroll: boolean;
}

// Tablica obiektów dla linków nawigacyjnych
const navItemData = [
  { label: "ME", href: "#me" },
  { label: "PROJECT", href: "#projects" },
  { label: "AWARDS", href: "#awards" },
  { label: "WHY ME?", href: "#whyme" },
  { label: "CONTACT", href: "#contact" },
];

const MobileNav: React.FC<NavItemProps> = ({ isScroll }) => {
  return (
    <div
      className={`${
        isScroll ? "text-gray-900" : "text-gray-200"
      } font-semibold text-lg sm:text-xl tracking-tight flex p-4`}
    >
      <Sheet>
        <SheetTrigger
          className={`text-lg sm:text-xl ${
            isScroll ? "text-gray-900" : "text-white"
          } p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors`}
        >
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent className="bg-gray-50 p-6">
          <div className="flex flex-col space-y-4">
            {navItemData.map((item) => (
              <Link
                key={item.label}
                className={`${
                  isScroll ? "hover:text-gray-500" : "hover:text-gray-800"
                } text-lg sm:text-xl hover:underline decoration-yellow-500 duration-500 transition-colors`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
