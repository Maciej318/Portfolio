"use client";
import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const FEEDBACKDATA = [
  {
    imgurl: "/user1.jpg",
    name: "Camil Roof",
    opinion: "Fantastic job! Everything runs smoothly and looks great. 👏",
    title: "March 2014",
  },
  {
    imgurl: "/user2.jpg",
    name: "Alex Doe",
    opinion: "Outstanding design and performance. Keep it up! 🚀",
    title: "April 2015",
  },
  {
    imgurl: "/user3.jpg",
    name: "Jordan Smith",
    opinion: "Impressive work! Super user-friendly and innovative. 🌟",
    title: "May 2016",
  },
  {
    imgurl: "/user1.jpg",
    name: "Camil Roof",
    opinion: "Great attention to detail and clean code. 👌",
    title: "March 2014",
  },
  {
    imgurl: "/user2.jpg",
    name: "Alex Doe",
    opinion: "Amazing functionality and design! Very impressive. ✨",
    title: "April 2015",
  },
  {
    imgurl: "/user3.jpg",
    name: "Jordan Smith",
    opinion: "Excellent developer, truly professional work! 🔧",
    title: "May 2016",
  },
];

const FeedbackCards = () => {
  return (
    <div className="flex flex-wrap w-full justify-center mt-10 gap-6 p-4">
      {FEEDBACKDATA.map((feed, index) => (
        <motion.div
          className="relative flex flex-col p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs"
          key={index}
          variants={fadeIn("up", 0.2 * index)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <FaTwitter className="absolute top-6 right-4 text-blue-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer text-3xl" />
          <Image
            src={feed.imgurl}
            height={50}
            width={50}
            alt={feed.name}
            className="absolute top-4 left-4 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="flex flex-col items-start mt-16">
            <p className="text-base text-gray-700 mb-4 px-2">{feed.opinion}</p>
            <div className="text-left ml-2">
              <h1 className="text-lg font-semibold text-gray-900">
                {feed.name}
              </h1>
              <p className="text-sm text-gray-500">{feed.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeedbackCards;
