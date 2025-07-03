'use client';

import { FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] p-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-md w-full backdrop-blur-lg bg-white/5 border border-yellow-400/20 rounded-3xl p-8 shadow-[0_0_30px_#FFD70044] animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center tracking-wide">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-sm mb-6 text-center">
          I&apos;d love to collaborate or hear your thoughts. Let&apos;s connect&#33;
        </p>

        <div className="space-y-4 text-sm font-medium">
          <Link
            href="https://www.linkedin.com/in/akhilesh-roy-730721331"
            target="_blank"
            className="flex items-center gap-3 bg-black/30 hover:bg-yellow-500/10 border border-yellow-400/20 rounded-xl px-4 py-3 transition-all hover:scale-105"
          >
            <FaLinkedin className="text-blue-400 text-xl" />
            <span className="text-white">LinkedIn</span>
          </Link>

          <Link
            href="https://wa.me/918639980990"
            target="_blank"
            className="flex items-center gap-3 bg-black/30 hover:bg-green-500/10 border border-yellow-400/20 rounded-xl px-4 py-3 transition-all hover:scale-105"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="text-white">WhatsApp</span>
          </Link>

          <Link
            href="mailto:devarashettyakhileshroy@gmail.com"
            className="flex items-center gap-3 bg-black/30 hover:bg-red-500/10 border border-yellow-400/20 rounded-xl px-4 py-3 transition-all hover:scale-105"
          >
           <svg width="20px" height="20px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
            <span className="text-white">Gmail</span>
          </Link>

          <Link
            href="https://www.fiverr.com/akhilesh86"
            target="_blank"
            className="flex items-center gap-3 bg-black/30 hover:bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-3 transition-all hover:scale-105"
          >
         <svg fill="#0fe682" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" width="3.6479999999999997"></g><g id="SVGRepo_iconCarrier"> <title>fiverr</title> <path d="M2.139 20.299h2.002v-4.446h1.904v4.446h1.988v-6.091h-3.893v-0.377c-0-0.003-0-0.006-0-0.010 0-0.368 0.298-0.666 0.666-0.666 0.032 0 0.064 0.002 0.095 0.007l-0.004-0h1.147v-1.645h-1.48c-0.068-0.008-0.148-0.012-0.228-0.012-1.215 0-2.2 0.985-2.2 2.2 0 0.002 0 0.004 0 0.005v-0 0.5h-1.133v1.645h1.135v4.445zM10.387 20.299h1.769l2.208-6.091h-2.024l-1.075 3.545-1.097-3.545h-2.016l2.233 6.091zM18.074 16.549c-0.034-0.566-0.501-1.013-1.073-1.013-0.013 0-0.027 0-0.040 0.001l0.002-0c-0.030-0.003-0.065-0.005-0.101-0.005-0.565 0-1.024 0.453-1.034 1.016v0.001zM20.026 17.73h-4.198c0.048 0.604 0.55 1.076 1.163 1.076 0.033 0 0.066-0.001 0.099-0.004l-0.004 0c0.039 0.005 0.083 0.008 0.128 0.008 0.41 0 0.761-0.252 0.907-0.61l0.002-0.007 1.781 0.5c-0.474 1.017-1.488 1.709-2.663 1.709-0.055 0-0.109-0.002-0.163-0.004l0.008 0c-0.035 0.001-0.077 0.002-0.118 0.002-1.694 0-3.068-1.373-3.068-3.068 0-0.027 0-0.054 0.001-0.081l-0 0.004c-0.003-0.050-0.005-0.108-0.005-0.166 0-1.638 1.328-2.966 2.966-2.966 0.035 0 0.070 0.001 0.105 0.002l-0.005-0c0.060-0.004 0.13-0.007 0.2-0.007 1.596 0 2.89 1.294 2.89 2.89 0 0.044-0.001 0.088-0.003 0.132l0-0.006c0 0.28-0.012 0.462-0.025 0.596zM28.506 15.854h-1.062c-0.682 0-1.050 0.512-1.050 1.365v3.082h-2.012v-4.446h-0.855c-0.684 0-1.050 0.512-1.050 1.365v3.082h-2.012v-6.091h2.012v0.925c0.199-0.547 0.714-0.931 1.32-0.931 0.047 0 0.094 0.002 0.139 0.007l-0.006-0h2.464v0.925c0.198-0.547 0.714-0.931 1.319-0.931 0.047 0 0.093 0.002 0.139 0.007l-0.006-0h0.659zM29.751 20.484c0 0 0.001 0 0.001 0 0.687 0 1.243-0.557 1.243-1.243s-0.557-1.243-1.243-1.243c-0.687 0-1.243 0.557-1.243 1.243 0 0.228 0.062 0.443 0.169 0.627l-0.003-0.006c0.219 0.375 0.618 0.622 1.076 0.623h0z"></path> </g></svg>
              <span className="text-white">Fiverr</span>
          </Link>
        </div>

        <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-3xl animate-ping" />
      </motion.div>
    </div>
  );
}
