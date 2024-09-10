import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#141414] to-[#333333] h-auto text-white flex flex-col md:flex-row justify-between items-center p-4 md:h-[100px]">
      <h1 className="font-bold text-2xl mb-4 md:mb-0 ml-0 md:ml-4 text-center md:text-left">
        LO<span className="text-yellow-500">GO</span>
      </h1>
      <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
        © 2024 All Rights Reserved by Maciej Brzozowski
      </p>
      <div className="flex space-x-4 justify-center md:justify-end w-full md:w-auto mr-0 md:mr-4">
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <FaTwitter className="text-2xl md:text-xl" />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl md:text-xl" />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <FaGithub className="text-2xl md:text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
