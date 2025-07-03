import { ContainerTextFlip } from "./ContainerTextFlip";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroText() {
  const router = useRouter(); 
  return (
    <div className="z-10 mt-10 md:mt-5 text-center md:text-left rounded-r-3xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-col hidden md:flex"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-[#00f0ff] via-blue-400 to-indigo-500 text-transparent bg-clip-text">
          I AM<br />
          DEVARASHETTY AKHILESH
        </h1>
      
        <div className="mt-4 text-xl md:text-2xl text-white/90 flex flex-col items-center">
           <div className="-mb-4" >Crafting</div>
          <ContainerTextFlip
            className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300"
          /> 
          <div>Web Experiences</div> <br />
      <HoverBorderGradient
        onClick={() => router.push("/aboutMe")}
        duration={1.5}
        clockwise
        containerClassName="shadow-[0_0_30px_rgba(50,150,255,0.3)] border-transparent bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-black"
       className="text-lg font-semibold tracking-wide px-8 py-3 text-white hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"

      >
        Explore My Skills
      </HoverBorderGradient>
        </div>
      </motion.div>
    </div>
    
  );
}
