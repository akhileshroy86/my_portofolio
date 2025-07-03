'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaGoogle } from 'react-icons/fa';

export default function AboutMe() {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express','REST APIs', 'Cloud', 'Next.js'];
  const expertise = ['AI', 'ML', 'Web3', 'Blockchain', 'Data Science', 'DevOps', 'Cloud Computing', 'Big Data'];

  const logos = [
    { name: 'React', src: 'reactjs.png' },
    { name: 'Node', src: 'nodejs-original.svg' },
    { name: 'MongoDB', src: 'git-original.svg' },
    { name: 'TailwindCSS', src: 'tailwindcss-original.svg' },
    { name: 'Express', src: 'express-original.svg' },
    {name:'Vite', src: 'Vitejs.png'},
  ];
   const aiLogos = [
    { name: 'Tensorflow', src: 'Tensorflow.svg' },
    { name: 'PyTorch', src: 'pytorch-original.svg' },
    { name: 'Pandas', src: 'pandas-original.svg' },
    { name: 'Numpy', src: 'numpy-original.svg' },
    { name: 'Python', src: 'python-original.svg' },
  ];

  return (
    <section className="min-h-screen mt-20 md:mt-32 mb-10 px-6">
      <h2 className="text-4xl font-bold text-white mb-10">About Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* CARD 1: About Me */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-6 rounded-2xl shadow-xl overflow-hidden group min-h-[18rem] bg-cover bg-center"
          style={{ backgroundImage: `url('coding.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl z-0" />
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-bold">Devarashetty Akhilesh</h3>
            <p className="text-md mt-1 text-white/80">Advanced AI-Integrated MERN Stack Developer</p>
            <p className="text-sm mt-4 text-white/70">
              I build scalable, elegant web solutions that solve real-world tech problems. Blending intelligence and code with a luxurious user experience.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Skills - Tags + Images */}
       {/* CARD 2: Skills - Draggable Tags + Logos in Crazy Layout */}
<motion.div
  whileHover={{ scale: 1.01 }}
  className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] border border-white/10 text-white min-h-[18rem] overflow-hidden"
>
  <h3 className="text-xl font-bold mb-4 z-10 relative">WEB DEVELOPMENT</h3>

  {/* Container for wild layout */}
  <div className="relative w-full h-[250px]">
    {/* Text Tags */}
    {skills.map((skill, idx) => {
      const positions = [
        { top: '10%', left: '5%', rotate: '-20deg' }, // javascript
        { top: '50%', left: '15%', rotate: '50deg' },  // React
        { top: '30%', left: '55%', rotate: '50deg' }, // Nodejs
        { top: '70%', left: '30%' }, // MongoDB
        { top: '20%', left: '70%' }, // TailwindCSS
        { top: '50%', left: '75%' }, // Express
        { top: '80%', left: '50%' }, // REST APIs
        { top: '40%', left: '25%' }, // Cloud
        { top: '0%', left: '80%' }, // Nextjs
      ];

      return (
        <motion.div
          key={idx}
          drag
          dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
          whileTap={{ scale: 0.95 }}
          className="absolute px-5 py-2 bg-white/20 text-white text-lg rounded-full cursor-grab active:cursor-grabbing border border-white/30 font-semibold backdrop-blur-sm"
          style={{
            top: positions[idx]?.top,
            left: positions[idx]?.left,
            rotate: positions[idx]?.rotate || '0deg',
          }}
        >
          {skill}
        </motion.div>
      );
    })}

    {/* Logos */}
    {logos.map((logo, index) => {
      const positions = [
        { top: '5%', left: '45%' }, // React
        { top: '80%', left: '10%' }, // Node 
        { top: '55%', left: '55%' }, //Git
        { top: '10%', left: '25%' }, // TailwindCSS
        { top: '75%', left: '80%' }, // Express
        { top: '0%', left: '0%' }, // Vite
      ];
      return (
        <motion.img
          key={index}
          drag
          dragConstraints={{ left: -70, right: 70, top: -70, bottom: 70 }}
          whileTap={{ scale: 0.95 }}
          src={logo.src}
          alt={logo.name}
          title={logo.name}
          className="absolute w-12 h-12 object-contain rounded-xl bg-white/30 border border-white/30 cursor-grab active:cursor-grabbing backdrop-blur"
          style={{
            top: positions[index]?.top,
            left: positions[index]?.left,
          }}
        />
      );
    })}
  </div>
</motion.div>

        {/* CARD 3: Expertise */}
       <motion.div
  whileHover={{ scale: 1.01 }}
  className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] border border-white/10 text-white min-h-[18rem] overflow-hidden"
>
  <h3 className="text-xl font-bold mb-4 z-10 relative">AI & ML</h3>

  {/* Container for wild layout */}
  <div className="relative w-full h-[250px]">
    {/* Text Tags */}
    {expertise.map((expertise, idx) => {
      const positions = [
        { top: '10%', left: '5%', rotate: '-10deg' },
        { top: '50%', left: '15%' },
        { top: '30%', left: '55%' },
        { top: '70%', left: '40%' },
        { top: '20%', left: '70%' },
        { top: '60%', left: '75%' },
        { top: '80%', left: '50%' },
        { top: '40%', left: '25%' },
        { top: '0%', left: '80%' },
      ];

      return (
        <motion.div
          key={idx}
          drag
          dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
          whileTap={{ scale: 0.95 }}
          className="absolute px-5 py-2 bg-white/20 text-white text-lg rounded-full cursor-grab active:cursor-grabbing border border-white/30 font-semibold backdrop-blur-sm"
          style={{
            top: positions[idx]?.top,
            left: positions[idx]?.left,
          }}
        >
          {expertise}
        </motion.div>
      );
    })}

    {/* Logos */}
    {aiLogos.map((aiLogo, index) => {
      const positions = [
        { top: '5%', left: '45%' },
        { top: '80%', left: '10%' },
        { top: '60%', left: '55%' },
        { top: '25%', left: '25%' },
        { top: '75%', left: '70%' },
      ];
      return (
        <motion.img
          key={index}
          drag
          dragConstraints={{ left: -70, right: 70, top: -70, bottom: 70 }}
          whileTap={{ scale: 0.95 }}
          src={aiLogo.src}
          alt={aiLogo.name}
          title={aiLogo.name}
          className="absolute w-12 h-12 object-contain rounded-xl bg-white/30 border border-white/30 cursor-grab active:cursor-grabbing backdrop-blur"
          style={{
            top: positions[index]?.top,
            left: positions[index]?.left,
          }}
        />
      );
    })}
  </div>
</motion.div>
        {/* CARD 4: Social Links */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] border border-white/10 text-white"
        >
          <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
          <div className="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/akhilesh-roy-730721331" target="_blank" className="flex items-center gap-3 hover:text-xl">
              <FaLinkedin className="text-blue-400" /> LinkedIn
            </a>
            <a href="https://wa.me/918639980990" target="_blank" className="flex items-center gap-3 hover:text-xl">
              <FaWhatsapp className="text-green-400" /> WhatsApp
            </a>
            <a href="mailto:devarashettyakhileshroy@gmail.com" className="flex items-center gap-3 hover:text-xl" target="_blank">
              <FaGoogle className="text-red-400" /> Gmail
            </a>
            <a href="https://www.fiverr.com/akhilesh86" target="_blank" className="flex items-center gap-3 hover:text-xl">
             <svg fill="#0fe682" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" width="3.6479999999999997"></g><g id="SVGRepo_iconCarrier"> <title>fiverr</title> <path d="M2.139 20.299h2.002v-4.446h1.904v4.446h1.988v-6.091h-3.893v-0.377c-0-0.003-0-0.006-0-0.010 0-0.368 0.298-0.666 0.666-0.666 0.032 0 0.064 0.002 0.095 0.007l-0.004-0h1.147v-1.645h-1.48c-0.068-0.008-0.148-0.012-0.228-0.012-1.215 0-2.2 0.985-2.2 2.2 0 0.002 0 0.004 0 0.005v-0 0.5h-1.133v1.645h1.135v4.445zM10.387 20.299h1.769l2.208-6.091h-2.024l-1.075 3.545-1.097-3.545h-2.016l2.233 6.091zM18.074 16.549c-0.034-0.566-0.501-1.013-1.073-1.013-0.013 0-0.027 0-0.040 0.001l0.002-0c-0.030-0.003-0.065-0.005-0.101-0.005-0.565 0-1.024 0.453-1.034 1.016v0.001zM20.026 17.73h-4.198c0.048 0.604 0.55 1.076 1.163 1.076 0.033 0 0.066-0.001 0.099-0.004l-0.004 0c0.039 0.005 0.083 0.008 0.128 0.008 0.41 0 0.761-0.252 0.907-0.61l0.002-0.007 1.781 0.5c-0.474 1.017-1.488 1.709-2.663 1.709-0.055 0-0.109-0.002-0.163-0.004l0.008 0c-0.035 0.001-0.077 0.002-0.118 0.002-1.694 0-3.068-1.373-3.068-3.068 0-0.027 0-0.054 0.001-0.081l-0 0.004c-0.003-0.050-0.005-0.108-0.005-0.166 0-1.638 1.328-2.966 2.966-2.966 0.035 0 0.070 0.001 0.105 0.002l-0.005-0c0.060-0.004 0.13-0.007 0.2-0.007 1.596 0 2.89 1.294 2.89 2.89 0 0.044-0.001 0.088-0.003 0.132l0-0.006c0 0.28-0.012 0.462-0.025 0.596zM28.506 15.854h-1.062c-0.682 0-1.050 0.512-1.050 1.365v3.082h-2.012v-4.446h-0.855c-0.684 0-1.050 0.512-1.050 1.365v3.082h-2.012v-6.091h2.012v0.925c0.199-0.547 0.714-0.931 1.32-0.931 0.047 0 0.094 0.002 0.139 0.007l-0.006-0h2.464v0.925c0.198-0.547 0.714-0.931 1.319-0.931 0.047 0 0.093 0.002 0.139 0.007l-0.006-0h0.659zM29.751 20.484c0 0 0.001 0 0.001 0 0.687 0 1.243-0.557 1.243-1.243s-0.557-1.243-1.243-1.243c-0.687 0-1.243 0.557-1.243 1.243 0 0.228 0.062 0.443 0.169 0.627l-0.003-0.006c0.219 0.375 0.618 0.622 1.076 0.623h0z"></path> </g></svg>
              <span className="text-white">Fiverr</span>
              
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
