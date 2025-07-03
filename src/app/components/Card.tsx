'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Card({
  image,
  Text,
  className,
}: {
  image?: string;
  Text?: string;
  className?: string;
}) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // will inherit from parent unless updated dynamically
      dragElastic={0.2} // smoother feel (0 to 1) – try 0.2–0.5
      dragMomentum={false} // stops fly-away after release
      whileTap={{ cursor: "grabbing" }}
      className={`
        cursor-grab
        rounded-xl
        ${className || ""}
      `}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {image && (
        <Image
          src={image}
          alt="card image"
          width={48}
          height={48}
          className="rounded-md"
          draggable={true}
        />
      )}
      {Text && <span className="px-4 py-2 rounded-xl shadow 
        bg-gray-700 text-white font-semibold 
        flex items-center justify-center gap-2" >{Text}</span>}
    </motion.div>
  );
}
