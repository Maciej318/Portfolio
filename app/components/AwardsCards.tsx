"use client";
import React from "react";
import { CiTrophy } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const AWARDSDATA = [
  {
    title: "Innovation Excellence Award",
    shortDsc: "Recognized for outstanding innovation",
    date: "January 2015",
  },
  {
    title: "Best Web Application Award",
    shortDsc: "Top-rated web application development",
    date: "March 2016",
  },
  {
    title: "User Experience Design Award",
    shortDsc: "Awarded for exceptional UX design",
    date: "June 2017",
  },
  {
    title: "Top Developer Award",
    shortDsc: "Acknowledged as a leading developer",
    date: "September 2018",
  },
  {
    title: "Tech Leader of the Year",
    shortDsc: "Honored for leadership in technology",
    date: "December 2019",
  },
  {
    title: "Best Mobile App Design",
    shortDsc: "Recognized for outstanding mobile app design",
    date: "April 2020",
  },
];

const AwardsCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-10">
      {AWARDSDATA.map((award, index) => (
        <motion.div
          className="flex flex-col items-center bg-white text-gray-800 rounded-lg p-4 shadow-lg transition-all hover:scale-105 hover:shadow-2xl max-w-sm"
          key={index}
          variants={fadeIn("up", 0.2*index)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-6">
            <CiTrophy className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
            {award.title}
          </h3>
          <p className="text-center text-gray-600 mb-4 leading-relaxed">
            {award.shortDsc}
          </p>
          <p className="text-sm text-gray-500 italic">{award.date}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AwardsCards;
