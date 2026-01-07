import React from 'react';
import { motion } from 'framer-motion';
// import {GitHubCalendar} from 'react-github-calendar'; 
import { Tooltip } from 'react-tooltip';
import fotoku from '../assets/images/fotoku.jpg';

import { FaDownload, FaEnvelope, FaCode, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiMysql, SiDocker } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#050505] py-6 px-6 overflow-hidden flex items-center">
      
      {/* --- BACKGROUND MATCHING HERO --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">Who Am I?</span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me.</span>
          </h2>
        </motion.div>


        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          
          {/* KOLOM KIRI: FOTO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]">
               <img src={fotoku} alt="Ferdi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-light text-gray-300">Hello, I'm</p>
                  <p className="text-2xl font-bold">Ferdi.</p>
               </div>
            </div>
          </motion.div>


          {/* KOLOM KANAN: TEKS */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Creating <span className="text-cyan-400">Impactful</span> Digital Experiences.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Saya adalah Fullstack Developer yang menggabungkan logika teknis yang kuat dengan estetika modern. Fokus saya adalah membangun sistem yang handal, cepat, dan mudah digunakan.
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div 
              className="grid grid-cols-3 gap-4 border-y border-white/10 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
               <StatItem number="3+" label="Years Exp" color="from-blue-400 to-blue-600" />
               <StatItem number="20+" label="Projects" color="from-cyan-400 to-teal-400" />
               <StatItem number="100%" label="Satisfaction" color="from-indigo-400 to-purple-500" />
            </motion.div>

            {/* TECH STACK */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
               <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <FaCode className="text-blue-500"/> Tech Stack
               </h5>
               <div className="flex flex-wrap gap-6 text-3xl">
                  <SiReact title="React" className="text-[#61DAFB] hover:scale-110 transition-transform cursor-pointer"/>
                  <SiNextdotjs title="NextJS" className="text-white hover:scale-110 transition-transform cursor-pointer"/>
                  <SiTypescript title="TypeScript" className="text-[#3178C6] hover:scale-110 transition-transform cursor-pointer"/>
                  <SiTailwindcss title="Tailwind" className="text-[#06B6D4] hover:scale-110 transition-transform cursor-pointer"/>
                  <span className="w-[1px] h-8 bg-white/20 mx-2"></span> 
                  <SiNodedotjs title="NodeJS" className="text-[#339933] hover:scale-110 transition-transform cursor-pointer"/>
                  <SiLaravel title="Laravel" className="text-[#FF2D20] hover:scale-110 transition-transform cursor-pointer"/>
                  <SiMysql title="MySQL" className="text-[#4479A1] hover:scale-110 transition-transform cursor-pointer"/>
                  <SiDocker title="Docker" className="text-[#2496ED] hover:scale-110 transition-transform cursor-pointer"/>
               </div>
            </motion.div>

            {/* BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
               <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-2">
                 <FaDownload /> Download CV
               </button>
               <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                 <FaEnvelope /> Contact Me
               </button>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

// Helper Component
const StatItem = ({ number, label, color }) => (
  <div className="text-center md:text-left">
    <span className={`block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color} mb-1`}>
      {number}
    </span>
    <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">{label}</span>
  </div>
);

export default About;