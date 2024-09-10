"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const ArrowDown = ({ path }: { path: string }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Link
        href={path}
        className="w-full flex flex-col items-center justify-center space-y-4"
      >
        <div className="w-[200px] md:w-[900px] h-1 rounded-lg bg-yellow-500" />
        <IoIosArrowDown className="text-yellow-500 text-5xl" />
      </Link>
    </motion.div>
  );
};

export default ArrowDown;
