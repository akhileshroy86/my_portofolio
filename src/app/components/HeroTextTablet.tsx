"use client";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { ContainerTextFlip } from "./ContainerTextFlip";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroTextTablet() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-start justify-center gap-y-5 text-left"
    >
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        I AM <br />
        DEVARASHETTY AKHILESH
      </h1>

      <div className="text-white text-xl">Crafting</div>

      <ContainerTextFlip className="text-3xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-300 text-transparent bg-clip-text" />

      <div className="text-white text-xl">Web Experiences</div>

      <HoverBorderGradient
        onClick={() => router.push("/aboutMe")}
        duration={1.2}
        clockwise
        containerClassName="shadow-[0_0_30px_rgba(50,150,255,0.25)] border-transparent bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-black mt-5"
        className="text-base font-semibold px-6 py-3 text-white hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        Explore My Skills
      </HoverBorderGradient>
    </motion.div>
  );
}
