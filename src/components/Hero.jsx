import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowRight, FaCode } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import fotoku from '../assets/images/fotoku.jpg';

const titles = ["Fullstack Developer", "UI/UX Enthusiast", "Tech Explorer"];

const Hero = () => {
  // --- PHYSICS SETUP ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 perspective-1000"
    >
      
      {/* --- BACKGROUND: ELECTRIC BLUE THEME --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Blob Biru Tua Kiri */}
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
         {/* Blob Cyan Kanan */}
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
         {/* Noise Texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* === LEFT: TEXT CONTENT === */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
           
           {/* Badge Status (Cyan/Teal) */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6"
           >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-bold text-cyan-200 tracking-wide">AVAILABLE FOR WORK</span>
           </motion.div>

           <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
             Building <br/>
             {/* Gradasi Biru ke Cyan (Lebih Cowok) */}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 animate-gradient-x">
               Digital Future.
             </span>
           </h1>

           <div className="h-8 mb-8 relative overflow-hidden flex justify-center lg:justify-start">
             <AnimatePresence mode='wait'>
               <motion.p 
                 key={index}
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -20, opacity: 0 }}
                 transition={{ duration: 0.3 }}
                 className="text-xl text-gray-300 font-medium"
               >
                 I am a <span className="text-white font-bold border-b-2 border-cyan-500">{titles[index]}</span>
               </motion.p>
             </AnimatePresence>
           </div>

           <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Tombol Gradient Biru */}
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform flex items-center gap-2">
                 View Projects <FaArrowRight />
              </button>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                 <FaGithub /> GitHub
              </button>
           </div>
        </div>


        {/* === RIGHT: HD 3D CARD (Blue Accent) === */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[550px] perspective-1000">
           
           <motion.div
             style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             className="relative w-[320px] h-[480px] bg-[#0a0a0a] rounded-[30px] border border-white/10 shadow-2xl shadow-black/60 group"
           >
              {/* Glare Effect */}
              <motion.div 
                 style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15), transparent 80%)` }}
                 className="absolute inset-0 rounded-[30px] pointer-events-none z-50 mix-blend-overlay opacity-100"
              />

              <div style={{ transform: "translateZ(30px)" }} className="absolute inset-0 flex flex-col items-center p-6">
                 
                 <div className="w-full h-[60%] relative rounded-2xl overflow-hidden mb-6 shadow-lg border border-white/5">
                    <img src={fotoku} alt="Profile" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4">
                       <h2 className="text-2xl font-black text-white drop-shadow-md">FERDI.</h2>
                       <p className="text-xs text-cyan-400 font-mono tracking-widest">FULLSTACK DEV</p>
                    </div>
                 </div>

                 <div className="w-full grid grid-cols-4 gap-3">
                    <TechIcon icon={<SiReact/>} color="text-[#61DAFB]" label="React" />
                    <TechIcon icon={<SiNextdotjs/>} color="text-white" label="Next" />
                    <TechIcon icon={<SiTailwindcss/>} color="text-[#06B6D4]" label="Tailwind" />
                    <TechIcon icon={<SiNodedotjs/>} color="text-[#339933]" label="Node" />
                 </div>

                 <div className="mt-auto w-full pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-black flex items-center justify-center text-xs text-white">TS</div>
                       <div className="w-8 h-8 rounded-full bg-cyan-600 border-2 border-black flex items-center justify-center text-xs text-white">JS</div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] text-gray-500 uppercase font-bold">Projects</p>
                       <p className="text-lg font-bold text-white">20+</p>
                    </div>
                 </div>
              </div>

              {/* Floating Badges (Blue Accent) */}
              <motion.div 
                 style={{ transform: "translateZ(70px)" }}
                 className="absolute -left-6 top-10 bg-[#111] border border-cyan-500/30 p-3 rounded-2xl shadow-xl flex gap-3 items-center"
                 animate={{ y: [-5, 5, -5] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                 <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400"><FaCode /></div>
                 <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Code</p>
                    <p className="text-xs font-bold text-white">Clean</p>
                 </div>
              </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
};

const TechIcon = ({ icon, color, label }) => (
  <div className="group/icon flex flex-col items-center gap-1 cursor-pointer">
    <div className={`p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors ${color} text-xl`}>
      {icon}
    </div>
  </div>
);

export default Hero;