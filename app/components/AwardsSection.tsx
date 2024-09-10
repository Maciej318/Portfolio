"use client";
import React from "react";
import AwardsCards from "./AwardsCards";
import ArrowDown from "./ArrowDown";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const AwardsSection = () => {
  return (
    <div
      id="awards"
      className="w-full min-h-screen p-4 pt-20 md:px-20 mt-10 flex flex-col"
    >
      <motion.div
        className="flex items-center justify-center mb-10"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight flex text-center items-center">
          <FaArrowRight className="w-8 h-8 md:w-10 md:h-10 mr-4 text-yellow-500" />
          Honorable Recognitions & Awards
        </h1>
      </motion.div>
      <div className="flex-grow">
        <AwardsCards />
      </div>
      <div className="flex justify-center mt-10 mb-4">
        <ArrowDown path="#whyme" />
      </div>
    </div>
  );
};

export default AwardsSection;
