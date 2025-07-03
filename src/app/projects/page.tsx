'use client';
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard'; // Make sure path is correct
import { Carousel } from '../components/Coursal'; // Make sure path is correct

const slides = [
  {
    title: 'ANB Homepage',
    button: 'Explore Homepage',
    src: '/anb/anb-home.png', // You can use public folder images directly like this
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
            description="I had made a website for ANB-IT Solutions. That solves the problem of managing IT services and solutions for businesses. The website provides information about their services, team, and contact details."
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
