"use client";
import React from "react";
import FeedbackCards from "./FeedbackCards";
import { FaArrowRight } from "react-icons/fa";
import ArrowDown from "./ArrowDown";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const FeedbackSection = () => {
  return (
    <div
      id="whyme"
      className="w-full min-h-screen p-4 pt-20 md:px-20 mt-10 flex flex-col justify-between"
    >
      <motion.div
        className="flex items-center justify-center mb-10"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight flex items-center">
          <FaArrowRight className="w-8 h-8 md:w-10 md:h-10 mr-4 text-yellow-500" />
          What My Clients Say?
        </h1>
      </motion.div>
      <div className="flex-grow">
        <FeedbackCards />
      </div>
      <div className="flex justify-center mb-4">
        <ArrowDown path="#contact" />
      </div>
    </div>
  );
};
