"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const MeSection = () => {
  return (
    <div id="me" className="flex flex-col md:flex-row w-full h-100vh min-h-[94vh] p-4 bg-[#141414] pt-20 mt-16">
      <div className="w-full md:w-1/2 text-white tracking-tighter md:ml-10 mt-10 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold pb-2">Hello, I&apos;m</h2>
        <h1 className="text-5xl md:text-7xl font-bold pb-2">
          <TypeAnimation
            sequence={["Andre Morgan", 2000, " ", 1000]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold pb-8 md:pb-10">
          Visual System Designer
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-5">
          <button className="bg-yellow-500 px-5 py-2 text-lg rounded-xl transition-all hover:bg-yellow-600">
            Contact
          </button>
          <button className="underline px-2 py-2 text-lg hover:text-gray-500 transition-all">
            Download CV
          </button>
        </div>
        <p className="text-gray-300 text-sm md:text-base">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here, content
          here, making it look like readable English. Lorem Ipsum is simply
          dummy text of the printing.
        </p>
        <div className="flex mt-10 md:mt-20 gap-3">
          <Link href='/'>
            <FaXTwitter className="w-6 h-6 hover:text-gray-500 transition-all" />
          </Link>
          <Link href='/'>
            <FaYoutube className="w-6 h-6 hover:text-gray-500 transition-all" />
          </Link>
          <Link href='/'>
            <FaFacebookSquare className="w-6 h-6 hover:text-gray-500 transition-all" />
          </Link>
          <Link href='/'>
            <FaGithub className="w-6 h-6 hover:text-gray-500 transition-all" />
          </Link>
        </div>
      </div>
      <div className="relative w-full mt-10 md:mt-0 md:w-auto flex justify-center md:block pt-10 md:pt-14 md:ml-20">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[750px] h-[600px] rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 opacity-30 blur-2xl"/>
        </div>
        <Image
          src="/portfolio-image.jpg"
          width={400}
          height={400}
          alt="profile image"
          className="relative"
        />
      </div>
    </div>
  );
};

export default MeSection;
