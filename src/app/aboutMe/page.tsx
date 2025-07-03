'use client';

import { BackgroundGradientAnimation } from "../components/BackgroundGradientAnimation";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Image from "next/image";
import '@/app/globals.css';
import { useRef } from "react";
export default function AboutMe() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };
  const constraintsRef = useRef(null);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(108, 0, 162)"
      gradientBackgroundEnd="rgb(0, 17, 82)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="200, 50, 50"
      fifthColor="180, 180, 50"
      pointerColor="140, 100, 255"
      size="80%"
      blendingValue="hard-light"
      interactive={true}
      className="w-full min-h-screen relative"
      containerClassName="overflow-y-auto"
    >
      <section className="flex flex-col items-center justify-start text-center px-4 pt-10 pb-20 text-white mt-28">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {[
            {
              id: 1,
              type: "image",
              title: "Hi, I'm Akhilesh",
              text: "A passionate web developer with a knack for building intelligent, responsive applications that empower startups and small businesses.",
              image: "/coding.jpg",
            },
            { id: 2, type: "cards", text: "CODE IS CRAFT" },
            {
              id: 3,
              title: "Experience",
              text: "Freelanced with startups to build responsive UIs, real-time apps, and AI-powered features from scratch.",
              image: "/skillbg.jpg",
            },
            {
              id: 4,
              title: "Vision",
              text: "To empower startups and small businesses with future-ready, intelligent web solutions that scale.",
            },
            {
              id: 5,
              title: "Hobbies",
              text: "Reading tech books, exploring AI use-cases, contributing to open source, and mentoring juniors.",
            },
            {
              id: 6,
              title: "Let’s Work Together",
              text: "Looking to collaborate on a next-gen project? Let’s build something remarkable together.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.id}
              className="rounded-xl p-5 sm:p-6 shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 ease-in-out min-h-[230px] bg-gradient-to-tr from-[#1e293b] to-[#0f172a] flex flex-col justify-end relative"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={
                item.type === "image"
                  ? {
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {item.type === "cards" ? (
                <>
                  <span className="absolute inset-0 flex justify-center items-center pointer-events-none select-none text-xl sm:text-3xl font-extrabold text-gray-300/30 tracking-widest uppercase z-0">
                    {item.text}
                  </span>

                
                <div ref={constraintsRef}>
                    <Card
  className="absolute left-5 bottom-5 hover:bg-gray-600 active:bg-gray-700"
  Text="SaaS"
/>

<Card
  className="absolute left-1/2 bottom-12 rotate-90 hover:bg-gray-600 active:bg-gray-700"
  Text="MERN-STACK"
/>

<Card
  className="absolute left-1/3 bottom-13 rotate-[120deg] hover:bg-gray-600 active:bg-gray-700"
  Text="Version Control"
/>

<Card
  className="absolute -right-8 bottom-15 rotate-[115deg] hover:bg-gray-600 active:bg-gray-700"
  Text="Responsive Design"
/>

<Card
  image="/reactjs.png"
  className="absolute top-10 left-10"
/>

<Card
  image="/nodejs.png"
  className="absolute bottom-20 left-20"
/>

<Card
  image="/githublogo.png"
  className="absolute top-5 right-10"
/>

<Card
  image="/nextjs.jpg"
  className="absolute top-15 right-30 rotate-[48deg]"
/>

<Card
  className="absolute left-5 bottom-13 rotate-[33deg] hover:bg-gray-600 active:bg-gray-700"
  Text="AI Integration"
/>
                </div>

                </>
              ) : (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 z-10">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/80 leading-snug z-10">{item.text}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
}
