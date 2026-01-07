import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Bonjour", "Hola", "Welcome", "Ferdi."];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 140); // Kecepatan ganti kata
    return () => clearTimeout(timeout);
  }, [index]);

  // Varian Animasi Slide Up (Tirai)
  const slideUp = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
    }
  };

  // Varian Animasi Opacity untuk Kata
  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 0.1, delay: 0.2 } },
  };

  return (
    <motion.div 
      variants={slideUp} 
      initial="initial" 
      exit="exit" 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Noise Halus */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      {/* Teks Tengah */}
      {dimension.width > 0 && (
        <>
          <motion.p 
            variants={opacity} 
            initial="initial" 
            animate="enter" 
            className="flex text-4xl md:text-6xl font-black items-center z-10 tracking-tighter"
          >
            <span className="block w-3 h-3 bg-cyan-500 rounded-full mr-3"></span>
            {words[index]}
          </motion.p>
          
          {/* Garis Progress/Dekorasi di bawah */}
          <div className="absolute bottom-10 left-10 text-xs font-mono text-gray-500">
             LOADING RESOURCES... {Math.round(((index + 1) / words.length) * 100)}%
          </div>
        </>
      )}
      
      {/* SVG Curve Effect (Lengkungan saat naik ke atas) */}
      <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
        <motion.path 
           variants={curve} 
           initial="initial" 
           exit="exit" 
           fill="#050505"
        ></motion.path>
      </svg>
    </motion.div>
  );
};

// Efek Lengkungan (Curve) saat slide up agar lebih organik
const curve = {
    initial: { d: "M0 0 L100% 0 L100% 100% L0 100% Z", transition: { duration: 0 } },
    exit: { 
        d: "M0 0 L100% 0 L100% 100% Q50% 60% 0 100% Z", 
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
    }
}

export default Preloader;