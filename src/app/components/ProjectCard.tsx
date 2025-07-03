import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import Image from "next/image";

// 👇👇 Add this
export interface ProjectCardProps {
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  onExploreClick: () => void;
}

export default function ProjectCard({
  description,
  image,
  onExploreClick,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-700 dark:text-white"
        >
          ANB IT SOLUTIONS
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <CardItem
          translateZ="100"
          rotateX={15}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="project thumbnail"
            width={600}
            height={300}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-8">
          {/* Optional buttons */}
          {/* 
          <a href={githubLink} className="text-xs text-white underline">
            GitHub ↗
          </a>
          */}
          <button
            type="button"
            onClick={onExploreClick}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Explore →
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
}
