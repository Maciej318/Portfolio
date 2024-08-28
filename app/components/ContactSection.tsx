import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactSection = () => {
  return (
    <div id="contact" className="w-full h-auto p-4 pt-20 md:px-20 mt-10 mb-20">
      <h1 className="text-2xl md:text-3xl tracking-tighter mb-4 md:mb-20">
        Contact Me!
      </h1>
      <div className="w-full flex flex-col items-center space-y-7">
        <div className="rounded-full bg-gray-200 p-2">
          <CiPhone className="w-10 h-10" />
        </div>
        <h1 className="text-xl">555-321-321</h1>
        <div className="rounded-full bg-gray-200 p-2">
          <CiMail className="w-10 h-10" />
        </div>
        <h1 className="text-xl">adamrosel@mail.com</h1>
        <div className="rounded-full bg-gray-200 p-2">
          <CiLocationOn className="w-10 h-10" />
        </div>
        <h1 className="text-xl">Warne Park Street Pine, FL 33157, New York</h1>
      </div>
    </div>
  );
};

export default ContactSection;
