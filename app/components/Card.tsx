import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    url: string;
    title: string;
    description: string;
    tech: string;
    img: string;
}

const Card = ({ url, title, description, tech, img }: CardProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 drop-shadow-xl rounded-lg overflow-hidden">
      <div className="w-full sm:w-1/2">
        <Image
          src={img}
          width={750}
          height={750}
          alt="projects image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <Link href={url} className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold">
            VISIT LIVE SITE
          </Link>
          <h1 className="text-2xl font-semibold mt-4 mb-2">{title}</h1>
          <p className="text-gray-700 mb-4 line-clamp-3">
            {description}
          </p>
        </div>
        <p className="text-yellow-500 text-sm">{tech}</p>
      </div>
    </div>
  );
};

export default Card;
