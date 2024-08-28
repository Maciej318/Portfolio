import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    url: string;
    title: string;
    description: string;
    tech: string;
}

const Card = ({ url, title, description, tech }: CardProps) => {
  return (
    <div className="flex w-full h-full mt-20 bg-gray-100 drop-shadow-xl items-center">
      <div className="w-1/2 hidden sm:block">
        <Image
          src="/project-image.jpg"
          width={750}
          height={750}
          alt="projects image"
        />
      </div>
      <div className="mx-10 w-full sm:w-1/2 p-2">
        <Link href={url} className="text-yellow-500 hover:text-yellow-600">
          VISIT LIVE SITE
        </Link>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="mb-20 line-clamp-3">
          {description}
        </p>
        <p className="text-yellow-500 items-end">{tech}</p>
      </div>
    </div>
  );
};

export default Card;
