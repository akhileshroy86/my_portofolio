// src/app/projects/page.tsx

"use client";
import React, { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard"; // ✅ Adjust path if needed
import { Carousel } from "@/app/components/Coursal";

const slides = [
  {
    title: "ANB Homepage",
    src: "/anb/anb-home.png",
    type: "image" as const,
  },
  {
    title: "ANB Services",
    src: "/anb/ourservices-1.png",
    type: "image" as const,
  },
  {
    title: "Demo",
    src: "/anb/anb-demo.mp4",
    type: "video" as const,
  },
];

export default function Projects() {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleExploreClick = () => {
    setShowCarousel(true);
  };

  return (
    <section className="min-h-screen mt-20 md:mt-32 mb-10 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      {!showCarousel ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            description="I developed a website for ANB-IT Solutions to help streamline their business IT service offerings."
            image="/anb/anb-home.png"
            liveLink="#"
            githubLink="#"
            onExploreClick={handleExploreClick}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <Carousel slides={slides} />
          <button
            onClick={() => setShowCarousel(false)}
            className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            ← Back to Projects
          </button>
        </div>
      )}
    </section>
  );
}
