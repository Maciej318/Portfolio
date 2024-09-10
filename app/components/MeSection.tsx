"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Button from "./Button";

const MeSection = () => {
  return (
    <div
      id="me"
      className="flex flex-col md:flex-row w-full min-h-screen p-4 bg-[#141414] pt-20"
    >
      
      <div className="w-full md:w-1/2 text-white md:ml-10 mt-10 md:mt-20 flex flex-col justify-center">
        <motion.h2
          className="text-3xl md:text-7xl font-semibold pb-2"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Hello, I&apos;m
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold pb-4 leading-tight"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TypeAnimation
            sequence={["Andre Morgan", 2000, " ", 1000]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl font-semibold pb-6"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Visual System Designer
        </motion.h2>

        
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Button>Contact</Button>
          <Button>Download CV</Button>
        </motion.div>

     
        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, making it look like readable English. Lorem
          Ipsum is simply dummy text of the printing industry.
        </motion.p>

        <motion.div
          className="flex mt-8 gap-4"
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link href="/" aria-label="Twitter">
            <FaTwitter className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
          </Link>
          <Link href="/" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
          </Link>
          <Link href="/" aria-label="Facebook">
            <FaFacebookSquare className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
          </Link>
          <Link href="/" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
          </Link>
        </motion.div>
      </div>

     
      <div className="relative w-full mt-10 md:mt-0 md:w-1/2 flex justify-center items-center">
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 opacity-40 blur-3xl" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/portfolio-image.jpg"
            width={400}
            height={400}
            alt="profile image"
            className="relative z-10 shadow-xl border-4 border-yellow-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MeSection;
