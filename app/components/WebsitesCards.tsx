import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  url: string;
  title: string;
  description: string;
  tech: string;
}

const PROJECTS: Project[] = [
  {
    url: "/",
    title: "Website application",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, contenthere, making it look like readable English. Lorem Ipsum is simply dummy text of the printing.",
    tech: "React JS | Next JS | Tailwindcss",
  },
  {
    url: "/",
    title: "Website application",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, contenthere, making it look like readable English. Lorem Ipsum is simply dummy text of the printing.",
    tech: "React JS | Next JS | Tailwindcss",
  },
  {
    url: "/",
    title: "Website application",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, contenthere, making it look like readable English. Lorem Ipsum is simply dummy text of the printing.",
    tech: "React JS | Next JS | Tailwindcss",
  },
  // Add more projects if needed
];

const WebsitesCards = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex space-x-4 py-4 md:py-8">
        {PROJECTS.map((project, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full md:w-80">
            <div className="p-4">
              <Card
                url={project.url}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 md:left-4" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-4" />
    </Carousel>
  );
};

export default WebsitesCards;
