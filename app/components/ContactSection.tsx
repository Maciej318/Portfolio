'use client'
import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const ContactSection = () => {
  return (
    <motion.div
      id="contact"
      className="w-full min-h-[100vh] p-6 md:p-12 lg:p-20 bg-white text-gray-800"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight flex items-center">
          <FaArrowRight className="w-8 h-8 md:w-10 md:h-10 mr-4 text-yellow-500" />
          Contact Me
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 h-[100px]">
            <div className="flex-shrink-0 p-4 bg-yellow-500 rounded-full">
              <CiPhone className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-base">555-321-321</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 h-[100px]">
            <div className="flex-shrink-0 p-4 bg-yellow-500 rounded-full">
              <CiMail className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-base">adamrosel@mail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 h-[100px]">
            <div className="flex-shrink-0 p-4 bg-yellow-500 rounded-full">
              <CiLocationOn className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-base">
                Warne Park Street Pine, FL 33157, New York
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-[600px]">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="flex flex-col space-y-4 h-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
