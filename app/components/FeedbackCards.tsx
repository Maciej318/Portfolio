import Image from "next/image";
import React from "react";

import { FaXTwitter } from "react-icons/fa6";

const FEEDBACKDATA = [
  {
    imgurl: "/user1.jpg",
    name: "Camil Roof",
    opinion: "Watching a talented web developer in action is like seeing an artist at work. Clean code, smooth user experience, and every detail on point. The future of the web looks bright! 🌐💻",
    title: "The March 2014",
  },
  {
    imgurl: "/user2.jpg",
    name: "Camil Roof",
    opinion: "Watching a talented web developer in action is like seeing an artist at work. Clean code, smooth user experience, and every detail on point. The future of the web looks bright! 🌐💻",
    title: "The March 2014",
  },
  {
    imgurl: "/user3.jpg",
    name: "Camil Roof",
    opinion: "Watching a talented web developer in action is like seeing an artist at work. Clean code, smooth user experience, and every detail on point. The future of the web looks bright! 🌐💻",
    title: "The March 2014",
  },
];

const FeedbackCards = () => {
    return (
      <div className="flex flex-wrap w-full justify-center mt-10 tracking-tighter space-y-8 md:space-y-0 md:space-x-8">
        {FEEDBACKDATA.map((feed, index) => (
          <div
            className="flex flex-col items-center drop-shadow-lg hover:scale-105 transition-all text-center p-4 w-full md:w-1/3 lg:w-1/4 bg-gray-200 rounded-lg shadow-md"
            key={index}
          >
            <div className="flex items-center space-x-2 mb-4 w-full justify-between">
            <Image
              src={feed.imgurl}
              height={50}
              width={50}
              alt={feed.name}
              className="rounded-full object-cover"
            />
              <FaXTwitter className="w-6 h-6 text-gray-600"/>
            </div>
            <p className="text-lg text-left w-full text-gray-600 mb-2">{feed.opinion}</p>
            <div className="text-left w-full">
              <h1 className="text-lg font-bold">{feed.name}</h1>
              <p className="text-gray-600">{feed.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeedbackCards;
