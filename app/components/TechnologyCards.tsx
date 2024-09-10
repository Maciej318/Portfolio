import React from "react";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPhp, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const TECHDATA = [
  {
    img: <SiNextdotjs />,
    name: "Next.js",
    level: "Expert",
  },
  {
    img: <IoLogoJavascript />,
    name: "JavaScript",
    level: "Expert",
  },
  {
    img: <SiTypescript />,
    name: "TypeScript",
    level: "Expert",
  },
  {
    img: <RiTailwindCssFill />,
    name: "Tailwind CSS",
    level: "Proficient",
  },
  {
    img: <SiPhp />,
    name: "PHP",
    level: "Proficient",
  },
  {
    img: <FaBootstrap />,
    name: "Bootstrap",
    level: "Expert",
  },
];

const TechnologyCards = () => {
  return (
    <motion.div
      className="w-full p-4 pt-20 md:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      {TECHDATA.map((tech, index) => (
        <div
          key={index}
          className="w-full h-[200px] flex flex-col items-center p-4 sm:p-5 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-3">
            {tech.img}
          </div>
          <div className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">
            {tech.name}
          </div>
          <div
            className={`text-sm ${
              tech.level === "Expert" ? "text-green-400" : "text-orange-400"
            }`}
          >
            {tech.level}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TechnologyCards;
