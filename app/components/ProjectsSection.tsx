"use client";
import React from "react";
import WebsitesCards from "./WebsitesCards";
import { FaArrowRight } from "react-icons/fa";
import ArrowDown from "./ArrowDown";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const ProjectsSection = () => {
  return (
    <div
      id="project"
      className="w-full min-h-[100vh] p-6 pt-20 md:px-20 mt-10 flex flex-col justify-between"
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
          Making Ideas Come to Life!
        </h1>
      </motion.div>
      <motion.div
        className="flex-grow"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <WebsitesCards />
      </motion.div>
      <div className="mt-10">
        <ArrowDown path="#tech" />
      </div>
    </div>
  );
};

export default ProjectsSection;
