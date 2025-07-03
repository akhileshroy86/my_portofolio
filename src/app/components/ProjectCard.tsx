"use client";

import { useState } from "react";
import { Carousel } from "./Coursal";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import Image from "next/image";;

const slides = [
  {
    title: "Home Page",
    src: "./anb/anb-home.png",
    type: "image" as const
  },
  {
    title: "Footer",
    src: "./anb/anb-footer.png",
    type: "image" as const
  },
  {
    title: "Our Services",
    src: "./anb/ourservices-1.png",
    type: "image" as const
  },
  {
    title: "Demo video",
    src: "./anb/anb-demo-showcase.mp4",
    type: "video" as const
  }
];

export default function ProjectCard() {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="min-h-screen p-8 text-white flex flex-col items-center justify-center -mt-20">
      {!showCarousel ? (
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
             I developed a website for ANB-IT Solutions, which provides IT services and solutions for businesses. The site includes information about their services, team, and contact details.
            </CardItem>

            <CardItem
              translateZ="100"
              rotateX={15}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/anb/anb-home.png"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="project thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              {/* <CardItem
                translateZ={20}
                translateX={-40}
                as="a"
                href="https://github.com/yourusername"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-medium dark:text-white border border-white/20 hover:underline"
              >
                GitHub ↗
              </CardItem> */}
              <button
                type="button"
                onClick={() => setShowCarousel(true)}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="span"
                >
                  Explore
                </CardItem>
              </button>
            </div>
          </CardBody>
        </CardContainer>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <Carousel slides={slides} />
          <button
            onClick={() => setShowCarousel(false)}
            className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            ← Back to Project
          </button>
        </div>
      )}
    </div>
  );
}
